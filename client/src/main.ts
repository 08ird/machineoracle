/**
 * Router. Hash-based so the site works as static files on any host without
 * server rewrites — `#/infinite-software`, `#/` for the letter.
 *
 * In-page anchors (`#part-2`, `#s17`) are left to the browser; only paths
 * beginning `#/` are treated as routes.
 */

import { findPiece, HOME } from './content';
import { footer, masthead, renderPiece } from './page';
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
  const piece = findPiece(slug) ?? HOME;

  app.replaceChildren(masthead(piece.slug), renderPiece(piece, chapter), footer());
  document.title = piece.slug ? `${piece.title} — Machine Oracle` : 'Machine Oracle';

  if (scrollToTop) scrollTo({ top: 0, behavior: 'auto' });
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
