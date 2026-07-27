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
import { INDEXED, PIECES } from './content';
import type { Article, Block, Chapter, Deck, Piece } from './content/types';
import { el, renderExhibit } from './render';

const SITE = 'Machine Oracle';
const TAGLINE = 'Notes on the infrastructure of infinite software';

const href = (slug: string) => (slug ? `#/${slug}` : '#/');
const chapHref = (slug: string, n: number) => `#/${slug}/${n}`;

/** 1-indexed so WORDS[1] === 'one'. */
const WORDS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

// ── Chrome ──────────────────────────────────────────────────────────────────

export function masthead(activeSlug: string): HTMLElement {
  const head = el('header', 'masthead');
  const wrap = el('div', 'wrap');

  const title = el('a', 'masthead__title', SITE);
  title.href = '#/';
  wrap.append(title, el('div', 'masthead__sub', TAGLINE));

  const nav = el('nav', 'nav');
  nav.setAttribute('aria-label', 'Contents');
  for (const p of PIECES) {
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

  const { body, back } = splitBackMatter(c);
  let figNo = 0;
  for (const s of body) {
    const node = sectionNode(p, s, ++figNo);
    if (node) main.append(node);
  }
  for (const s of back) {
    const node = sectionNode(p, s, null);
    if (node) main.append(node);
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

function renderHome(letter: Article): HTMLElement {
  const main = renderArticle(letter);

  const index = el('section', 'index');
  index.append(el('div', 'label', 'The series'));
  const list = el('ul', 'index__list');
  for (const p of INDEXED) {
    const li = el('li', 'index__item');
    const meta = [p.kind === 'deck' ? 'Presentation' : 'Essay', p.date].filter(Boolean).join(' · ');
    li.append(el('div', 'index__meta', meta));
    const a = el('a', undefined, p.title);
    a.href = href(p.slug);
    li.append(a);
    if (p.blurb) li.append(el('p', 'index__blurb', p.blurb));
    list.append(li);
  }
  index.append(list);
  main.append(index);
  return main;
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
