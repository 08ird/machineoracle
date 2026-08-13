/**
 * The registry. Everything the site can show is listed here, in order.
 *
 * Adding a piece:
 *   1. Write a file exporting a `Piece` (an Article of blocks, or a Deck of slides).
 *   2. Import it below and add it to PIECES.
 *
 * The nav, the home-page contents, and routing all read from this array, so
 * there is no second place to update.
 */

import { SLIDES } from '../data/slides';
import { about } from './about';
import { part1 } from './commentary-1';
import { part2 } from './commentary-2';
import { part3 } from './commentary-3';
import { part4 } from './commentary-4';
import { conclusion } from './conclusion';
import { letter } from './letter';
import type { Piece } from './types';

const infiniteSoftware: Piece = {
  slug: 'infinite-software',
  kind: 'deck',
  navLabel: 'Infinite Software',
  title: 'Infinite Software',
  kicker: 'Skycatcher research',
  subtitle:
    'Machine labor is being billed today. Its billings compound with the token wave — and the companies that collect the royalty are priced as if neither were true.',
  date: 'August 11, 2026',
  blurb: 'The full argument in four parts: the era, the wave, the royalty, and the mispricing.',
  slides: SLIDES,
  commentary: { ...part1, ...part2, ...part3, ...part4 },
  epigraphs: {
    1: { text: 'The Internet is a tidal wave. It changes the rules.', cite: 'Bill Gates · May 1995' },
    2: {
      text: 'Efficiency in the use of an input expands, rather than reduces, its consumption.',
      cite: 'W. S. Jevons · 1865',
    },
    3: { text: 'Nobody prices a thing that isn’t selling.', cite: 'Skycatcher' },
    4: { text: 'Courageous action: to do what no one has done, and prove it in the real world.', cite: 'Leonardo da Vinci' },
  },
  conclusion,
  chapterBlurbs: {
    1: 'Software has always been rationed by developer scarcity — ~30M developers, $100+ an hour, 18-month backlogs. Agents ended the ration: the cost of a unit of software work fell ~4,000x in a single step, and 51% of committed code is now AI-written. Software becomes summonable, and the maker population goes from 30M to a billion. Making software deflates toward zero; running it stays metered forever. Last time production costs collapsed, the rails returned 6–13x before the mania began.',
    2: 'Tokens grew ~2,000x in four years, and every 10x price drop bought 15–20x more demand — a measured slope of 1.2–1.3, through two corrections and one full-scale panic. Bandwidth, storage, and mobile data all ran the same curve. The heaviest users barely exist yet: 2.5% of a billion weekly users run agents, at 500–2,500x the intensity of chat. Our call is ~4,000Q tokens by 2029 — 40x, and still a deceleration by half — with billable infrastructure events amplifying ~190x as the wave lands on the rails.',
    3: 'Seven vendors have shipped a billable unit of machine work, all dated, all public. The five-layer stack splits into a 25-name backend — what agents run on — and a 42-name worksite. The evidence sits in the filings: meter retention ~117 against ~101 for seats, overage from 14% to 24% of revenue, deferred revenue accelerating, and the tape already paying state +177% and work +175% against apps at +55% since ChatGPT. Yet no layer has re-rated: consensus forward numbers carry zero agents.',
    4: 'One rule — majority of revenue recognized from measured consumption — admits three backend companies: Snowflake, MongoDB, Datadog. ~$250B of enterprise value, ~33% blended growth, ~16x forward revenue, +218% since ChatGPT with no selection. Three growth worlds from ~$11.3B of revenue, eight dated predictions, five calls for the 2030s, and six tripwires written before they are needed. The whole program is graded quarterly, in public.',
  },
};

export const PIECES: Piece[] = [letter, infiniteSoftware, about];

export const HOME = letter;

/** The thesis whose chapters form the site's spine. */
export const THESIS = infiniteSoftware;

export function findPiece(slug: string): Piece | undefined {
  return PIECES.find((p) => p.slug === slug);
}

/** Pieces that appear in the home-page contents (everything but the letter). */
export const INDEXED = PIECES.filter((p) => p.slug !== '');
