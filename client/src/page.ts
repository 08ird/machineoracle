/**
 * Page composition.
 *
 * A deck is published as a book: a front page carrying the standfirst and the
 * table of chapters, then one page per part. Inside a chapter the prose carries
 * the argument and each exhibit appears as a numbered figure breaking out of the
 * reading column.
 */

import type { Slide } from './data/slides';
import { chapters, frontMatter, splitBackMatter } from './chapters';
import { INDEXED, PIECES, THESIS } from './content';
import type { Article, Block, Chapter, Deck, Piece } from './content/types';
import { el, renderExhibit } from './render';

const SITE = 'Machine Oracle';
const TAGLINE = 'Notes on the infrastructure of infinite software';

const href = (slug: string) => (slug ? `#/${slug}` : '#/');
const chapHref = (slug: string, n: number) => `#/${slug}/${n}`;

/** 1-indexed so WORDS[1] === 'one'. */
const WORDS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

// ── Chrome ──────────────────────────────────────────────────────────────────

/**
 * The nav lists the introduction and then every chapter of the thesis, so the
 * whole work is reachable from any page — the reference site's pattern.
 */
export function masthead(activeSlug: string, activeChapter?: number): HTMLElement {
  // The home page carries the full masthead; every interior page gets the
  // compact sticky one so switching chapters is one click from anywhere.
  const compact = Boolean(activeSlug) || Boolean(activeChapter);
  const head = el('header', `masthead${compact ? ' masthead--compact' : ''}`);
  const wrap = el('div', 'wrap');

  const title = el('a', 'masthead__title', SITE);
  title.href = '#/';
  wrap.append(title, el('div', 'masthead__sub', TAGLINE));

  const nav = el('nav', 'nav');
  nav.setAttribute('aria-label', 'Contents');

  const intro = el('a', undefined, 'Introduction');
  intro.href = '#/';
  if (!activeSlug && !activeChapter) intro.setAttribute('aria-current', 'page');
  nav.append(intro);

  for (const c of chapters(THESIS)) {
    const a = el('a', undefined, `${c.numeral}. ${c.title}`);
    a.href = chapHref(THESIS.slug, c.n);
    if (activeSlug === THESIS.slug && activeChapter === c.n) a.setAttribute('aria-current', 'page');
    nav.append(a);
  }

  // Any further pieces (future essays) follow the thesis chapters.
  for (const p of PIECES) {
    if (p.slug === '' || p.slug === THESIS.slug) continue;
    const a = el('a', undefined, p.navLabel ?? p.title);
    a.href = href(p.slug);
    if (p.slug === activeSlug) a.setAttribute('aria-current', 'page');
    nav.append(a);
  }

  wrap.append(nav);
  head.append(wrap, el('hr', 'masthead__rule'));
  return head;
}

export function footer(): HTMLElement {
  const f = el('footer', 'foot');
  f.append(el('span', undefined, `© ${new Date().getFullYear()} Skycatcher`));
  f.append(el('span', undefined, 'Confidential — for discussion with qualified investors'));
  return f;
}

// ── Blocks ──────────────────────────────────────────────────────────────────

function renderBlock(b: Block): HTMLElement {
  switch (b.kind) {
    case 'p':
      return el('p', b.lead ? 'lead' : undefined, b.text);
    case 'h2':
      return el('h2', undefined, b.text);
    case 'h3':
      return el('h3', undefined, b.text);
    case 'quote': {
      const q = el('blockquote');
      q.append(document.createTextNode(b.text));
      if (b.cite) q.append(el('cite', undefined, b.cite));
      return q;
    }
    case 'list': {
      const l = el(b.ordered ? 'ol' : 'ul');
      for (const i of b.items) l.append(el('li', undefined, i));
      return l;
    }
    case 'note':
      return el('p', 'note', b.text);
    case 'rule':
      return el('hr');
    case 'signoff': {
      const s = el('div', 'signoff');
      b.lines.forEach((line, i) => {
        s.append(document.createTextNode(line));
        if (i < b.lines.length - 1) s.append(el('br'));
      });
      return s;
    }
    case 'exhibit': {
      const fig = el('figure', 'exhibit');
      if (b.caption) fig.append(el('figcaption', 'exhibit__cap', b.caption));
      fig.append(renderExhibit(b.body));
      if (b.source) fig.append(el('p', 'figure__src', b.source));
      return fig;
    }
  }
}

function prose(blocks: Block[]): HTMLElement {
  const div = el('div', 'prose');
  for (const b of blocks) div.append(renderBlock(b));
  return div;
}

function pieceHead(p: Piece): HTMLElement {
  const head = el('header', 'head');
  if (p.kicker) head.append(el('div', 'head__kicker', p.kicker));
  head.append(el('h1', undefined, p.title));
  if (p.subtitle) head.append(el('div', 'head__sub', p.subtitle));
  if (p.date) head.append(el('div', 'head__date', p.date));
  return head;
}

// ── Article ─────────────────────────────────────────────────────────────────

function renderArticle(p: Article): HTMLElement {
  const main = el('main', 'wrap');
  main.append(pieceHead(p), prose(p.blocks));
  return main;
}

// ── Deck: front page ────────────────────────────────────────────────────────

function renderDeckFront(p: Deck): HTMLElement {
  const main = el('main', 'wrap');
  main.append(pieceHead(p));
  if (p.intro) main.append(prose(p.intro));

  // Front-matter sections (executive summary, agenda) read as prose + figures.
  const chaps = chapters(p);
  for (const s of frontMatter(p)) {
    const sec = sectionNode(p, s, null);
    if (sec) main.append(sec);
  }

  const list = el('nav', 'chapters');
  list.setAttribute('aria-label', 'Chapters');
  for (const c of chaps) {
    const item = el('div', 'chapters__item');
    item.append(el('div', 'chapters__num', c.numeral));
    const a = el('a', undefined, c.title);
    a.href = chapHref(p.slug, c.n);
    item.append(a, el('div', 'chapters__sub', c.sub));
    list.append(item);
  }
  main.append(list);

  const nav = el('div', 'chapnav');
  const next = el('div', 'chapnav__side chapnav__side--next');
  next.append(el('span', 'chapnav__lab', 'Begin'));
  const a = el('a', undefined, `${chaps[0].numeral}. ${chaps[0].title}`);
  a.href = chapHref(p.slug, 1);
  next.append(a);
  nav.append(next);
  main.append(nav);
  return main;
}

// ── Deck: one section (prose + figure) ──────────────────────────────────────

/**
 * Renders one slide as a section of the book. `figNo` numbers the figure within
 * its chapter; pass null to omit numbering (front matter).
 */
function sectionNode(deck: Deck, s: Slide, figNo: number | null): HTMLElement | null {
  if (s.body.kind === 'cover' || s.body.kind === 'section') return null;

  const frag = el('section', 'sec');
  frag.id = `s${s.id}`;
  if (s.title) frag.append(el('h2', undefined, s.title));

  // Prose carries the argument. Without commentary, fall back to the deck's own
  // takeaway line so the page still reads as sentences rather than a bare chart.
  const commentary = deck.commentary?.[s.id];
  if (commentary?.length) frag.append(prose(commentary));
  else if (s.takeaway) frag.append(prose([{ kind: 'p', text: s.takeaway.text }]));

  // Closing quote and disclosures have no exhibit worth boxing.
  if (s.body.kind === 'quote' || s.body.kind === 'prose') {
    const plain = el('div', 'prose');
    plain.append(renderExhibit(s.body));
    frag.append(plain);
    return frag;
  }

  const fig = el('figure', 'figure');
  const inner = el('div', 'figure__inner');
  const cap = el('figcaption', 'figure__cap');
  if (figNo != null) cap.append(el('b', undefined, `Figure ${figNo}. `));
  cap.append(document.createTextNode(s.kicker ?? s.title ?? ''));
  inner.append(cap, renderExhibit(s.body));
  if (s.footnote) inner.append(el('p', 'figure__src', s.footnote));
  fig.append(inner);
  frag.append(fig);
  return frag;
}

// ── Deck: chapter page ──────────────────────────────────────────────────────

function renderChapter(p: Deck, c: Chapter, all: Chapter[]): HTMLElement {
  const frag = el('div');

  const open = el('header', 'opener');
  open.append(
    el('div', 'opener__part', `Part ${WORDS[c.n] ?? c.n}`),
    el('div', 'opener__num', c.numeral),
    el('h1', undefined, c.title),
    el('div', 'opener__sub', c.sub)
  );
  if (c.epigraph) {
    const epi = el('div', 'opener__epi');
    epi.append(document.createTextNode(`“${c.epigraph.text}”`), el('cite', undefined, c.epigraph.cite));
    open.append(epi);
  }
  frag.append(open);

  const main = el('main', 'wrap');
  main.append(el('div', 'chapline', `${p.title} · Part ${c.numeral}`));

  // The conclusion renders from its declared sequence; regular parts from slides.
  const isConclusion = p.conclusion && c.n === all.length;
  if (isConclusion && p.conclusion) {
    let figNo = 0;
    for (const entry of p.conclusion.sequence) {
      if ('slide' in entry) {
        const s = p.slides.find((x) => x.id === entry.slide);
        if (!s) continue;
        const hasExhibit = !['quote', 'prose'].includes(s.body.kind);
        const node = sectionNode(p, s, hasExhibit ? ++figNo : null);
        if (node) main.append(node);
      } else {
        const sec = el('section', 'sec');
        if (entry.heading) sec.append(el('h2', undefined, entry.heading));
        sec.append(prose(entry.blocks));
        main.append(sec);
      }
    }
  } else {
    const { body, back } = splitBackMatter(c);
    let figNo = 0;
    // The deck's front matter (the memo, the 1996 clock, the executive summary)
    // opens Part I, since the home page now carries only the hook and contents.
    if (c.n === 1) {
      for (const s of frontMatter(p)) {
        if (s.body.kind === 'agenda') continue; // superseded by the contents page
        const hasExhibit = !['quote', 'prose'].includes(s.body.kind);
        const node = sectionNode(p, s, hasExhibit ? ++figNo : null);
        if (node) main.append(node);
      }
    }
    for (const s of body) {
      const node = sectionNode(p, s, ++figNo);
      if (node) main.append(node);
    }
    for (const s of back) {
      const node = sectionNode(p, s, null);
      if (node) main.append(node);
    }
  }

  // Previous / next chapter.
  const nav = el('div', 'chapnav');
  const prevC = all[c.n - 2];
  const nextC = all[c.n];
  if (prevC) {
    const side = el('div', 'chapnav__side');
    side.append(el('span', 'chapnav__lab', 'Previous'));
    const a = el('a', undefined, `${prevC.numeral}. ${prevC.title}`);
    a.href = chapHref(p.slug, prevC.n);
    side.append(a);
    nav.append(side);
  } else {
    const side = el('div', 'chapnav__side');
    side.append(el('span', 'chapnav__lab', 'Back'));
    const a = el('a', undefined, 'Contents');
    a.href = href(p.slug);
    side.append(a);
    nav.append(side);
  }
  if (nextC) {
    const side = el('div', 'chapnav__side chapnav__side--next');
    side.append(el('span', 'chapnav__lab', 'Next'));
    const a = el('a', undefined, `${nextC.numeral}. ${nextC.title}`);
    a.href = chapHref(p.slug, nextC.n);
    side.append(a);
    nav.append(side);
  }
  main.append(nav);

  frag.append(main);
  return frag;
}

// ── Home ────────────────────────────────────────────────────────────────────

/**
 * The home page, in the reference site's structure: the thesis title and byline
 * at the top, a short hook essay, then a table of contents where every chapter
 * gets a real abstract. The reader who stops here still leaves with the whole
 * argument in miniature.
 */
function renderHome(letter: Article): HTMLElement {
  const main = el('main', 'wrap');
  const deck = THESIS as Deck;

  // Thesis head.
  const head = el('header', 'head');
  head.append(el('h1', undefined, deck.title));
  if (deck.subtitle) head.append(el('div', 'head__sub', deck.subtitle));
  head.append(el('div', 'head__date', `Skycatcher · ${deck.date ?? ''}`));
  main.append(head);

  // The hook.
  main.append(prose(letter.blocks));

  // Table of contents with abstracts.
  const chaps = chapters(deck);
  const toc = el('section', 'toc2');
  toc.append(el('h2', undefined, 'Table of contents'));
  const note = el('p', 'toc2__note');
  note.append(
    document.createTextNode(
      'Each part is meant to stand on its own, though we would encourage reading the series in order. The full thesis is also available '
    )
  );
  const allLink = el('a', undefined, 'on one page');
  allLink.href = '#/all';
  note.append(allLink, document.createTextNode(', for reading straight through or printing.'));
  toc.append(note);

  const addEntry = (link: string, title: string, blurb?: string, tag?: string) => {
    const entry = el('div', 'toc2__entry');
    const h = el('div', 'toc2__title');
    const a = el('a', undefined, title);
    a.href = link;
    h.append(a);
    if (tag) h.append(el('span', 'toc2__tag', tag));
    entry.append(h);
    if (blurb) entry.append(el('p', 'toc2__blurb', blurb));
    toc.append(entry);
  };

  for (const c of chaps) {
    addEntry(chapHref(deck.slug, c.n), `${c.numeral}. ${c.title}`, deck.chapterBlurbs?.[c.n] ?? c.sub);
  }
  // Other pieces (the scoreboard, future essays) join the same list.
  for (const p of INDEXED) {
    if (p.slug === deck.slug) continue;
    addEntry(href(p.slug), p.navLabel ?? p.title, p.blurb, p.kind === 'deck' ? 'presentation' : undefined);
  }
  main.append(toc);

  return main;
}

/**
 * The whole thesis on one page — the reference site's "full series" affordance,
 * and the way to get a complete PDF from the browser's print dialog.
 */
export function renderAll(p: Deck): HTMLElement {
  const frag = el('div');

  const head = el('header', 'head');
  head.className = 'head wrap';
  head.append(el('h1', undefined, p.title));
  if (p.subtitle) head.append(el('div', 'head__sub', p.subtitle));
  head.append(el('div', 'head__date', `Skycatcher · ${p.date ?? ''} · full text`));
  frag.append(head);

  const all = chapters(p);
  for (const c of all) {
    const chapter = renderChapter(p, c, all);
    // Chapter-to-chapter links are noise when everything is already one page.
    chapter.querySelectorAll('.chapnav').forEach((n) => n.remove());
    frag.append(chapter);
  }
  return frag;
}

// ── Entry ───────────────────────────────────────────────────────────────────

/** `chapter` is the 1-based part number from the URL, if any. */
export function renderPiece(p: Piece, chapter?: number): HTMLElement {
  if (p.slug === '') return renderHome(p as Article);
  if (p.kind === 'article') return renderArticle(p);

  const all = chapters(p);
  if (chapter && all[chapter - 1]) return renderChapter(p, all[chapter - 1], all);
  return renderDeckFront(p);
}
