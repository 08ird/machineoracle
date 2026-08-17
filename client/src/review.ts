/**
 * Local-only review mode. Loaded from main.ts behind import.meta.env.DEV, so
 * none of this ships in the public build.
 *
 * Toggle the pencil button (bottom-right) and every stamped text — paragraphs,
 * headlines, figure captions, footnotes — becomes click-to-edit. A save POSTs
 * the change to the dev server (vite.config.ts), which rewrites the source
 * file; Vite then reloads the page and the scroll position is restored.
 */

interface RevEl extends HTMLElement {
  __rev?: string;
}

const ON_KEY = 'mo-review';
const SCROLL_KEY = 'mo-review-scroll';

let active = localStorage.getItem(ON_KEY) === '1';
let editing: RevEl | null = null;
let snapshot = '';

const css = `
  .rev-toggle { position: fixed; right: 1rem; bottom: 1rem; z-index: 99; font: 600 0.78rem/1 system-ui, sans-serif;
    padding: 0.55rem 0.85rem; border-radius: 999px; border: 1px solid #d2d3d6; background: #fdfdfd; color: #63666d;
    cursor: pointer; box-shadow: 0 2px 10px rgba(23,24,26,.10); }
  .rev-toggle--on { background: #1b5fd0; border-color: #1b5fd0; color: #fdfdfd; }
  .rev-hl { outline: 1px dashed #1b5fd0; outline-offset: 4px; cursor: text; }
  .rev-edit { outline: 2px solid #1b5fd0; outline-offset: 4px; background: #f4f7ff; }
  .rev-toast { position: fixed; left: 50%; bottom: 3.4rem; transform: translateX(-50%); z-index: 99;
    font: 500 0.8rem/1.3 system-ui, sans-serif; padding: 0.55rem 0.9rem; border-radius: 6px;
    background: #17181a; color: #fdfdfd; max-width: 80vw; }
  .rev-toast--err { background: #b8452c; }
`;

function toast(msg: string, err = false): void {
  document.querySelector('.rev-toast')?.remove();
  const t = document.createElement('div');
  t.className = `rev-toast${err ? ' rev-toast--err' : ''}`;
  t.textContent = msg;
  document.body.append(t);
  setTimeout(() => t.remove(), err ? 4000 : 1800);
}

/** Straight quotes → typographic, per the house style. */
function typographic(s: string): string {
  return s
    .replace(/(^|[\s(—])"/g, '$1“')
    .replace(/"/g, '”')
    .replace(/'/g, '’');
}

function findRev(target: EventTarget | null): RevEl | null {
  let n = target instanceof HTMLElement ? target : null;
  while (n) {
    if ((n as RevEl).__rev) return n as RevEl;
    n = n.parentElement;
  }
  return null;
}

function stopEdit(el: RevEl, restore: boolean): void {
  el.removeAttribute('contenteditable');
  el.classList.remove('rev-edit');
  if (restore) el.innerHTML = snapshot;
  editing = null;
}

async function save(el: RevEl): Promise<void> {
  const oldText = el.__rev ?? '';
  const newText = typographic((el.textContent ?? '').replace(/\s+/g, ' ').trim());
  if (!newText || newText === oldText) {
    stopEdit(el, true);
    return;
  }
  try {
    const r = await fetch('/__review/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldText, newText }),
    });
    const { ok, msg } = (await r.json()) as { ok: boolean; msg: string };
    if (!ok) {
      toast(msg, true);
      stopEdit(el, true);
      return;
    }
    // Vite reloads the page when the source file changes; come back to the
    // same spot afterwards.
    sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ hash: location.hash, y: scrollY }));
    el.__rev = newText;
    stopEdit(el, false);
    toast(`Saved to ${msg}`);
  } catch {
    toast('Save failed — is the dev server running?', true);
    stopEdit(el, true);
  }
}

function startEdit(el: RevEl): void {
  if (editing && editing !== el) void save(editing);
  editing = el;
  snapshot = el.innerHTML;
  // Edit the raw source string so markdown links stay intact.
  el.textContent = el.__rev ?? '';
  el.classList.remove('rev-hl');
  el.classList.add('rev-edit');
  try {
    (el as HTMLElement).contentEditable = 'plaintext-only';
  } catch {
    el.contentEditable = 'true';
  }
  el.focus();
}

function init(): void {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);

  const btn = document.createElement('button');
  btn.type = 'button';
  const paint = () => {
    btn.textContent = active ? '✎ Review on' : '✎ Review';
    btn.className = `rev-toggle${active ? ' rev-toggle--on' : ''}`;
  };
  paint();
  btn.addEventListener('click', () => {
    active = !active;
    localStorage.setItem(ON_KEY, active ? '1' : '0');
    if (!active && editing) stopEdit(editing, true);
    document.querySelectorAll('.rev-hl').forEach((n) => n.classList.remove('rev-hl'));
    paint();
    toast(active ? 'Review mode on — click any text to edit. Enter saves, Esc cancels.' : 'Review mode off');
  });
  document.body.append(btn);

  let hover: RevEl | null = null;
  document.addEventListener('mouseover', (e) => {
    if (!active || editing) return;
    const el = findRev(e.target);
    if (el === hover) return;
    hover?.classList.remove('rev-hl');
    hover = el;
    hover?.classList.add('rev-hl');
  });

  document.addEventListener(
    'click',
    (e) => {
      if (!active) return;
      const el = findRev(e.target);
      if (!el || el === editing) return;
      e.preventDefault();
      e.stopPropagation();
      startEdit(el);
    },
    true
  );

  document.addEventListener('keydown', (e) => {
    if (!editing) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      stopEdit(editing, true);
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void save(editing);
    }
  });

  document.addEventListener(
    'blur',
    (e) => {
      if (editing && e.target === editing) void save(editing);
    },
    true
  );

  // Restore position after the reload a save triggers.
  const raw = sessionStorage.getItem(SCROLL_KEY);
  if (raw) {
    sessionStorage.removeItem(SCROLL_KEY);
    try {
      const { hash, y } = JSON.parse(raw) as { hash: string; y: number };
      if (hash === location.hash) setTimeout(() => scrollTo({ top: y, behavior: 'auto' }), 60);
    } catch {
      /* stale entry — ignore */
    }
  }
}

init();

export {};
