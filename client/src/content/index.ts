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
import { conclusion } from './conclusion';
import { letter } from './letter';
import { scoreboard } from './scoreboard';
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
  conclusion,
  chapterBlurbs: {
    1: 'Every prior computing wave sold tools; this one sells labor, and the market is the labor budget. The cost of a unit of software work just fell ~4,000x in a single step. Production deflates to zero while operation is metered forever — so the money moves to the rails. The last time production costs collapsed, the rails returned 6–13x before the mania began.',
    2: 'Tokens grew ~2,000x in four years, and every 10x price drop bought 15–20x more demand — a measured slope of 1.6 that held through two corrections and one full-scale panic. The heaviest users barely exist yet: 2.5% of a billion weekly users run agents, and an always-on agent is worth 500–2,500x the tokens of a chat user. Our call is ~2,700Q tokens by 2029 — 27x, underwriting a deceleration by half — with billable infrastructure events growing ~130x as the wave lands on the meters.',
    3: 'Not a futurist document. Seven vendors shipped a billable unit of machine work between 2023 and 2026, all dated, all public. Aggregate retention has risen six straight quarters to 120%; contracted backlog compounds at +50% against +23% revenue; overage has gone from 14% to 24% of revenue. And the market pays on disclosure day, not ship day — Snowflake fell 50% while the proof compounded, then repriced +36% overnight when the CFO named it.',
    4: 'The portfolio that follows: layers 2–5 of the stack — the runtime, memory, build, and audit meters — admitted by a checklist written before we owned a share. The growth has never been offered cheaper: 7.5x EV/revenue, 21x forward earnings, 0.4x growth-adjusted, $14B of net cash. Four honest haircuts still leave $44B of 2029 revenue against the street’s $23B, and the measured attach rate is a lag, not a leak.',
    5: 'The belief chain — tokens to agentic events to meter revenue — crosses two falsifiable bridges. The street is not bearish on agents; it has never modeled them: same 2026 starting point, opposite shapes. History pays 35–53x for re-accelerated growth and we underwrite 40x. Eight of nine priced paths beat today; our case is ~5x over four years.',
    6: 'The three bets, restated — and the strongest case against us: token efficiency, vertical integration, concentration. The dated scoreboard and kill conditions, each mapped to a pre-written weight action. And the timing math: twelve prints between here and 2029, an average disclosure re-pricing of ~27%, and why waiting for proof means paying retail for it.',
  },
};

export const PIECES: Piece[] = [letter, infiniteSoftware, scoreboard];

export const HOME = letter;

/** The thesis whose chapters form the site's spine. */
export const THESIS = infiniteSoftware;

export function findPiece(slug: string): Piece | undefined {
  return PIECES.find((p) => p.slug === slug);
}

/** Pieces that appear in the home-page index (everything but the letter itself). */
export const INDEXED = PIECES.filter((p) => p.slug !== '');
