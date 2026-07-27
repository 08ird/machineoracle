/**
 * Page composition. Every route produces the same shape — masthead, one centred
 * column of content, footer — so desktop and mobile differ only in column width.
 */

import type { Slide } from './data/slides';
import { INDEXED, PIECES } from './content';
import type { Article, Block, Deck, Piece } from './content/types';
import { el, renderExhibit, WIDE } from './render';

const SITE = 'Machine Oracle';
const TAGLINE = 'Notes on the infrastructure of infinite software';

const href = (slug: string) => (slug ? `#/${slug}` : '#/');

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
    case 'p': {
      const p = el('p', b.lead ? 'lead' : undefined, b.text);
      return p;
    }
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
      const fig = el('figure', `exhibit${WIDE.has(b.body.kind) ? ' exhibit--wide' : ''}`);
      fig.style.margin = '1.5em 0';
      if (b.caption) fig.append(el('figcaption', 'exhibit__cap', b.caption));
      fig.append(renderExhibit(b.body));
      if (b.source) fig.append(el('p', 'sec__source', b.source));
      return fig;
    }
  }
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
  main.append(pieceHead(p));
  const prose = el('div', 'prose');
  for (const b of p.blocks) prose.append(renderBlock(b));
  main.append(prose);
  return main;
}

// ── Deck rendered as a document ─────────────────────────────────────────────

/**
 * Contents box — the reference site's "In this piece".
 *
 * Derived from the deck's own section-divider slides rather than a hard-coded
 * list, so any presentation added later gets a correct table of contents for
 * free.
 */
function tocFor(p: Deck): HTMLElement | null {
  const parts = p.slides.filter((s) => s.body.kind === 'section');
  if (!parts.length) return null;

  const box = el('nav', 'toc');
  box.setAttribute('aria-label', 'In this piece');
  box.append(el('div', 'toc__head', 'In this piece:'));
  const ol = el('ol');
  for (const s of parts) {
    if (s.body.kind !== 'section') continue;
    const li = el('li');
    const a = el('a', undefined, s.body.label);
    a.href = `#${partId(s.body.num)}`;
    li.append(a);
    ol.append(li);
  }
  box.append(ol);
  return box;
}

const partId = (num: string) => `part-${num.replace(/^0+/, '')}`;

function renderSection(s: Slide): HTMLElement | null {
  // The cover is replaced by the page head.
  if (s.body.kind === 'cover') return null;

  // Section dividers become part headings.
  if (s.body.kind === 'section') {
    const div = el('section', 'part');
    div.id = partId(s.body.num);
    div.append(
      el('div', 'part__n', `Part ${s.body.num}`),
      el('h2', undefined, s.body.label),
      el('div', 'part__sub', s.body.sub)
    );
    return div;
  }

  const sec = el('section', 'sec');
  sec.id = `s${s.id}`;
  if (s.kicker) sec.append(el('div', 'sec__label', s.kicker));
  if (s.title) sec.append(el('h2', undefined, s.title));

  const fig = el('div', `exhibit${WIDE.has(s.body.kind) ? ' exhibit--wide' : ''}`);
  fig.append(renderExhibit(s.body));
  sec.append(fig);

  if (s.takeaway) sec.append(el('p', 'sec__take', s.takeaway.text));
  if (s.footnote) sec.append(el('p', 'sec__source', s.footnote));
  return sec;
}

function renderDeck(p: Deck): HTMLElement {
  const main = el('main', 'wrap');
  main.append(pieceHead(p));

  if (p.intro) {
    const prose = el('div', 'prose');
    for (const b of p.intro) prose.append(renderBlock(b));
    main.append(prose);
  }
  const toc = tocFor(p);
  if (toc) main.append(toc);

  for (const s of p.slides) {
    const node = renderSection(s);
    if (node) main.append(node);
  }
  return main;
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

export function renderPiece(p: Piece): HTMLElement {
  if (p.slug === '') return renderHome(p as Article);
  const main = p.kind === 'deck' ? renderDeck(p) : renderArticle(p);

  // Offer the next piece, then a way home.
  const i = PIECES.indexOf(p);
  const next = PIECES.slice(i + 1).find((x) => !x.hidden);
  const pager = el('div', 'pager');
  if (next) {
    pager.append(el('span', 'pager__label', 'Next'));
    const a = el('a', undefined, next.title);
    a.href = href(next.slug);
    pager.append(a);
  } else {
    pager.append(el('span', 'pager__label', 'Back'));
    const a = el('a', undefined, 'Introduction');
    a.href = '#/';
    pager.append(a);
  }
  main.append(pager);
  return main;
}
