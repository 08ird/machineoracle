/**
 * App shell: builds the deck, then wires navigation.
 *
 * One scroll container with CSS scroll-snap is the single source of truth for
 * "where am I" — so a phone swipe, a trackpad scroll, an arrow key, and a deep
 * link all move the same state and stay in sync. An IntersectionObserver reads
 * the position back out rather than us tracking it manually.
 */

import { PARTS, SLIDES, TOTAL, partOf } from './data/slides';
import { renderOverview, renderSlide } from './render';
import './style.css';

const deck = document.getElementById('deck') as HTMLDivElement;
const progress = document.getElementById('progress') as HTMLDivElement;
const partLabel = document.getElementById('part-label') as HTMLSpanElement;
const counter = document.getElementById('counter') as HTMLSpanElement;
const overview = document.getElementById('overview') as HTMLDivElement;
const notes = document.getElementById('notes') as HTMLDivElement;
const notesBody = document.getElementById('notes-body') as HTMLDivElement;
const help = document.getElementById('help') as HTMLDivElement;
const rail = document.getElementById('rail') as HTMLDivElement;
const nudge = document.getElementById('nudge') as HTMLDivElement;
const btnOverview = document.getElementById('btn-overview') as HTMLButtonElement;
const btnNotes = document.getElementById('btn-notes') as HTMLButtonElement;
const btnHelp = document.getElementById('btn-help') as HTMLButtonElement;
const btnPrev = document.getElementById('btn-prev') as HTMLButtonElement;
const btnNext = document.getElementById('btn-next') as HTMLButtonElement;

let current = 1;

// ── Build ───────────────────────────────────────────────────────────────────

for (const s of SLIDES) deck.append(renderSlide(s));
overview.append(renderOverview(SLIDES, (id) => { setOverview(false); goTo(id); }));

for (const p of PARTS) {
  const dot = document.createElement('button');
  dot.className = 'rail__dot';
  dot.innerHTML = `<span>${p.title}</span>`;
  dot.title = `Part 0${p.n} — ${p.title}`;
  dot.dataset.part = String(p.n);
  dot.addEventListener('click', () => goTo(p.start));
  rail.append(dot);
}

// ── Navigation ──────────────────────────────────────────────────────────────

function goTo(id: number, smooth = true) {
  const target = Math.min(Math.max(id, 1), TOTAL);
  const node = document.getElementById(`s${target}`);
  if (!node) return;
  node.scrollIntoView({ behavior: smooth && !prefersReduced() ? 'smooth' : 'auto', block: 'start' });
}

const prefersReduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function setCurrent(id: number) {
  if (id === current) return;
  current = id;
  counter.textContent = `${String(id).padStart(2, '0')} / ${TOTAL}`;
  progress.style.width = `${(id / TOTAL) * 100}%`;

  const part = partOf(id);
  const meta = PARTS.find((p) => p.n === part);
  partLabel.textContent = meta ? `Part 0${meta.n} — ${meta.title}` : '';

  for (const dot of rail.children) {
    (dot as HTMLElement).setAttribute('aria-current', String(dot.getAttribute('data-part') === String(part)));
  }
  for (const t of overview.querySelectorAll('.thumb')) {
    t.setAttribute('aria-current', String(t.getAttribute('data-id') === String(id)));
  }

  btnPrev.disabled = id === 1;
  btnNext.disabled = id === TOTAL;

  const notesText = SLIDES.find((s) => s.id === id)?.notes;
  notesBody.textContent = notesText ?? '';
  notesBody.className = notesText ? '' : 'notes__empty';
  if (!notesText) notesBody.textContent = 'No speaker notes for this slide.';

  // Keep the URL shareable without adding history entries per slide.
  history.replaceState(null, '', id === 1 ? location.pathname : `#${id}`);
}

// The slide occupying the most viewport wins — robust to snap overshoot.
const io = new IntersectionObserver(
  (entries) => {
    let best: { id: number; ratio: number } | null = null;
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const id = Number((e.target as HTMLElement).dataset.id);
      if (!best || e.intersectionRatio > best.ratio) best = { id, ratio: e.intersectionRatio };
    }
    if (best) setCurrent(best.id);
  },
  { root: deck, threshold: [0.25, 0.5, 0.75] }
);
for (const s of deck.children) io.observe(s);

// ── Panels ──────────────────────────────────────────────────────────────────

function setOverview(open: boolean) {
  overview.dataset.open = String(open);
  btnOverview.setAttribute('aria-pressed', String(open));
  if (open) (overview.querySelector('.thumb[aria-current="true"]') as HTMLElement | null)?.focus();
}
function setNotes(open: boolean) {
  notes.dataset.open = String(open);
  btnNotes.setAttribute('aria-pressed', String(open));
}
function setHelp(open: boolean) {
  help.dataset.open = String(open);
}

btnOverview.addEventListener('click', () => setOverview(overview.dataset.open !== 'true'));
btnNotes.addEventListener('click', () => setNotes(notes.dataset.open !== 'true'));
btnHelp.addEventListener('click', () => setHelp(help.dataset.open !== 'true'));
help.addEventListener('click', () => setHelp(false));
btnPrev.addEventListener('click', () => goTo(current - 1));
btnNext.addEventListener('click', () => goTo(current + 1));

// ── Keyboard ────────────────────────────────────────────────────────────────

addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const openPanel = overview.dataset.open === 'true';

  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
    case 'PageDown':
    case ' ':
      e.preventDefault();
      goTo(current + 1);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'PageUp':
      e.preventDefault();
      goTo(current - 1);
      break;
    case 'Home':
      e.preventDefault();
      goTo(1);
      break;
    case 'End':
      e.preventDefault();
      goTo(TOTAL);
      break;
    case 'o':
    case 'O':
      setOverview(!openPanel);
      break;
    case 'n':
    case 'N':
      setNotes(notes.dataset.open !== 'true');
      break;
    case '?':
      setHelp(help.dataset.open !== 'true');
      break;
    case 'Escape':
      if (openPanel) setOverview(false);
      else if (help.dataset.open === 'true') setHelp(false);
      else if (notes.dataset.open === 'true') setNotes(false);
      else setOverview(true);
      break;
    default:
      // Number keys jump to a part (1–5).
      if (/^[1-5]$/.test(e.key)) {
        const p = PARTS.find((x) => String(x.n) === e.key);
        if (p) goTo(p.start);
      }
  }
});

// ── First paint ─────────────────────────────────────────────────────────────

// URLs are `#12` while the elements are `#s12`, so the browser can't resolve
// them natively — translate on every hash change (deep links, back/forward,
// and the brand link all land here).
addEventListener('hashchange', () => {
  const id = Number(location.hash.replace('#', ''));
  if (id >= 1 && id <= TOTAL && id !== current) goTo(id);
});

const fromHash = Number(location.hash.replace('#', ''));
if (fromHash >= 1 && fromHash <= TOTAL) {
  goTo(fromHash, false);
  setCurrent(fromHash);
} else {
  setCurrent(1);
  // setCurrent short-circuits on an unchanged id, so prime the chrome directly.
  counter.textContent = `01 / ${TOTAL}`;
  progress.style.width = `${(1 / TOTAL) * 100}%`;
  btnPrev.disabled = true;
}

// Hide the swipe hint after the reader has moved once.
let hinted = false;
deck.addEventListener(
  'scroll',
  () => {
    if (hinted) return;
    hinted = true;
    nudge.dataset.hide = 'true';
  },
  { passive: true, once: true }
);
setTimeout(() => (nudge.dataset.hide = 'true'), 6000);
