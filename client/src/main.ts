/**
 * Router. Hash-based so the site works as static files on any host without
 * server rewrites — `#/infinite-software`, `#/` for the letter.
 *
 * In-page anchors (`#part-2`, `#s17`) are left to the browser; only paths
 * beginning `#/` are treated as routes.
 */

import { chapters } from './chapters';
import { findPiece, HOME, THESIS } from './content';
import { footer, masthead, renderAll, renderPiece } from './page';
import type { Deck } from './content/types';
import './style.css';

const app = document.getElementById('app') as HTMLDivElement;

/** `#/infinite-software/3` → { slug: 'infinite-software', chapter: 3 } */
function parseHash(): { slug: string; chapter?: number } {
  const h = location.hash;
  if (!h.startsWith('#/')) return { slug: '' };
  const parts = h.slice(2).replace(/\/$/, '').split('/');
  const last = parts[parts.length - 1];
  if (parts.length > 1 && /^\d+$/.test(last)) {
    return { slug: parts.slice(0, -1).join('/'), chapter: Number(last) };
  }
  return { slug: parts.join('/') };
}

function route(scrollToTop = true) {
  const { slug, chapter } = parseHash();

  // The tracker keeps its own page (the user's file, served verbatim) but is
  // shown inside the site chrome: masthead above, the instrument below.
  if (slug === 'tracker') {
    const frame = document.createElement('iframe');
    frame.className = 'trackerframe';
    frame.src = 'tracker.html';
    frame.title = 'Machine Oracle tracker';
    // Same-origin: size the frame to its content so the page scrolls as one.
    frame.addEventListener('load', () => {
      const doc = frame.contentDocument;
      if (!doc) return;
      const fit = () => {
        frame.style.height = `${Math.max(doc.documentElement.scrollHeight, 600)}px`;
      };
      fit();
      new ResizeObserver(fit).observe(doc.documentElement);
    });
    app.replaceChildren(masthead('tracker'), frame, footer());
    document.title = 'Tracker — Machine Oracle';
    if (scrollToTop) scrollTo({ top: 0, behavior: 'auto' });
    return;
  }

  // The full thesis on one page, mainly for reading straight through or
  // printing to PDF.
  if (slug === 'all') {
    const sheet = document.createElement('div');
    sheet.className = 'sheet';
    sheet.append(renderAll(THESIS as Deck));
    app.replaceChildren(masthead(THESIS.slug), sheet, footer());
    document.title = 'Infinite Software — full text — Machine Oracle';
    if (scrollToTop) scrollTo({ top: 0, behavior: 'auto' });
    return;
  }

  // The thesis's front matter now lives on the home page, so a bare thesis slug
  // has nothing of its own to show — send it home rather than render a stub.
  if (slug === THESIS.slug && !chapter) {
    location.replace('#/');
    return;
  }

  const piece = findPiece(slug) ?? HOME;
  // All content sits on the raised sheet; masthead and footer stay on the desk.
  const sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.append(renderPiece(piece, chapter));
  app.replaceChildren(masthead(piece.slug, chapter), sheet, footer());

  const chapterTitle = chapter ? chapters(THESIS)[chapter - 1]?.title : undefined;
  document.title = [chapterTitle ?? (piece.slug ? piece.title : ''), 'Machine Oracle'].filter(Boolean).join(' — ');

  if (scrollToTop) scrollTo({ top: 0, behavior: 'auto' });

  // When the compact nav scrolls horizontally (phones), keep the current page's
  // link in view.
  document
    .querySelector('.masthead--compact .nav a[aria-current="page"]')
    ?.scrollIntoView({ inline: 'center', block: 'nearest' });
}

addEventListener('hashchange', () => {
  // A bare in-page anchor should not re-render the page underneath it.
  if (location.hash.startsWith('#/') || location.hash === '') {
    route();
  }
});

route(false);

// A deep link that includes an in-page anchor lands after render.
if (location.hash && !location.hash.startsWith('#/')) {
  document.getElementById(location.hash.slice(1))?.scrollIntoView();
}
