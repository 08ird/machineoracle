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

function slugFromHash(): string {
  const h = location.hash;
  if (!h.startsWith('#/')) return '';
  return h.slice(2).replace(/\/$/, '');
}

function route(scrollToTop = true) {
  const slug = slugFromHash();
  const piece = findPiece(slug) ?? HOME;

  app.replaceChildren(masthead(piece.slug), renderPiece(piece), footer());
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
