/**
 * Splits a deck into chapters at its section dividers.
 *
 * Derived rather than declared: any deck added later gets chapter pages for free
 * as soon as its slides include section dividers. Slides that appear before the
 * first divider (cover, executive summary, agenda) belong to the front matter,
 * and slides after the last chapter's content (the closing quote, disclosures)
 * become back matter.
 */

import type { Slide } from './data/slides';
import type { Chapter, Deck } from './content/types';

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

/** Slides before the first section divider. */
export function frontMatter(deck: Deck): Slide[] {
  const first = deck.slides.findIndex((s) => s.body.kind === 'section');
  return deck.slides.slice(0, first === -1 ? deck.slides.length : first).filter((s) => s.body.kind !== 'cover');
}

export function chapters(deck: Deck): Chapter[] {
  const out: Chapter[] = [];
  for (const s of deck.slides) {
    if (s.body.kind === 'section') {
      const n = out.length + 1;
      out.push({
        n,
        numeral: NUMERALS[n - 1] ?? String(n),
        title: s.body.label,
        sub: s.body.sub,
        epigraph: deck.epigraphs?.[n],
        slides: [],
      });
    } else if (out.length) {
      out[out.length - 1].slides.push(s);
    }
  }
  return out;
}

/**
 * The closing quote and disclosures sit after the last part but do not belong to
 * it. Anything whose body is a quote or prose block at the tail is back matter.
 */
export function splitBackMatter(chapter: Chapter): { body: Slide[]; back: Slide[] } {
  const body: Slide[] = [];
  const back: Slide[] = [];
  let inBack = false;
  for (const s of chapter.slides) {
    // Once we hit the closing quote, everything after is back matter.
    if (s.body.kind === 'quote' || s.body.kind === 'prose') inBack = true;
    (inBack ? back : body).push(s);
  }
  return { body, back };
}
