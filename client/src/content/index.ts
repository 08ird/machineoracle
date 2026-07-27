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
import { part1 } from './commentary-1';
import { part2 } from './commentary-2';
import { part3 } from './commentary-3';
import { part4 } from './commentary-4';
import { back, front, part5 } from './commentary-5';
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
  commentary: { ...front, ...part1, ...part2, ...part3, ...part4, ...part5, ...back },
  epigraphs: {
    1: { text: 'The Internet is a tidal wave. It changes the rules.', cite: 'Bill Gates · May 1995' },
    2: {
      text: 'Efficiency in the use of an input expands, rather than reduces, its consumption.',
      cite: 'W. S. Jevons · 1865',
    },
    3: { text: 'Nobody prices a thing that isn’t selling.', cite: 'Skycatcher' },
    4: { text: 'Own the meters; collect the royalty.', cite: 'Skycatcher' },
    5: { text: 'Courageous action: to do what no one has done, and prove it in the real world.', cite: 'Leonardo da Vinci' },
  },
};

export const PIECES: Piece[] = [letter, infiniteSoftware];

export const HOME = letter;

/** The thesis whose chapters form the site's spine. */
export const THESIS = infiniteSoftware;

export function findPiece(slug: string): Piece | undefined {
  return PIECES.find((p) => p.slug === slug);
}

/** Pieces that appear in the home-page index (everything but the letter itself). */
export const INDEXED = PIECES.filter((p) => p.slug !== '');
