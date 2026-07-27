/**
 * The registry. Everything the site can show is listed here, in order.
 *
 * Adding a piece:
 *   1. Write a file exporting a `Piece` (an Article of blocks, or a Deck of slides).
 *   2. Import it below and add it to PIECES.
 *
 * The nav, the home-page index, and routing all read from this array, so there
 * is no second place to update.
 */

import { SLIDES } from '../data/slides';
import { letter } from './letter';
import type { Piece } from './types';

const infiniteSoftware: Piece = {
  slug: 'infinite-software',
  kind: 'deck',
  navLabel: 'Infinite Software',
  title: 'Infinite Software',
  kicker: 'The thesis',
  subtitle: 'Machine labor makes software unlimited. The rails it runs on are not.',
  date: 'July 16, 2026',
  blurb:
    'The full argument in five parts: the era, the token tidal wave, the receipts already in the filings, the portfolio that owns the meters, and how we grade ourselves.',
  intro: [
    {
      kind: 'p',
      lead: true,
      text:
        'In 1995 the internet changed how software was distributed. In 2026 AI agents are changing how software is produced — creating a tidal wave of demand for the infrastructure that runs, stores, secures, observes, and meters all software.',
    },
    {
      kind: 'note',
      text:
        'Presented July 16, 2026. Figures are Skycatcher estimates compiled from public filings and platform disclosures; see the disclosures at the end.',
    },
  ],
  slides: SLIDES,
};

export const PIECES: Piece[] = [letter, infiniteSoftware];

export const HOME = letter;

export function findPiece(slug: string): Piece | undefined {
  return PIECES.find((p) => p.slug === slug);
}

/** Pieces that appear in the home-page index (everything but the letter itself). */
export const INDEXED = PIECES.filter((p) => p.slug !== '');
