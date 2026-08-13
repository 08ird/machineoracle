/**
 * About — who is writing, what this site is, and how to read it.
 * DRAFT; firm details and any contact information are for the author to
 * confirm before publication.
 */

import type { Article } from './types';

export const about: Article = {
  slug: 'about',
  kind: 'article',
  navLabel: 'About',
  title: 'About',
  subtitle: 'Who is writing, and what this site is for.',
  blocks: [
    {
      kind: 'p',
      lead: true,
      text:
        'Skycatcher is a boutique investment firm founded in 2015 — entrepreneurial investors rather than institutional ones. We live at the frontier of the Internet, invest in the things we use firsthand, and hunt the “Magic Window”: the gap between what entrepreneurs are building and what institutions are pricing. Our past theses in video games, the Indian subcontinent, and onchain finance each followed that pattern; this site holds the current one.',
    },
    {
      kind: 'p',
      text:
        'Machine Oracle is the public ledger for our machine-labor research. It exists because the deck version of an argument cannot be held to account: here, every forecast is dated, keyed to third-party filings, and graded quarterly — hits and misses alike, published with the same prominence. Sky1, our internal research system, does the tracking; the grades it produces are our own assessments and not independent research.',
    },
    { kind: 'h2', text: 'The terms this work coins' },
    {
      kind: 'list',
      items: [
        'Machine labor — work performed by AI agents: planned, executed, and verified by software, billed by the unit rather than the seat.',
        'Machine billable unit — a price on work an AI agent performs (outcomes, actions, sessions, metered compute). Not on human seats.',
        'A royalty on machine labor — the per-unit toll the backend collects on every unit of machine labor, because every agent action must execute, remember, and answer for itself.',
        'The machine labor cohort — a mechanical research screen: backend companies whose revenue is majority-recognized from measured consumption. Three names today; re-graded quarterly in public.',
      ],
    },
    { kind: 'h2', text: 'How to read the site' },
    {
      kind: 'p',
      text:
        'The front page carries the argument in miniature; the four parts carry it in full, and each stands on its own. The tracker is the live companion — the indices, the tape, the ladder, and the ledger, re-marked as filings land. Figures are compiled from company filings, platform disclosures, and market data as of August 11, 2026, and every exhibit labels whether its numbers are measured, estimated, or modeled.',
    },
    {
      kind: 'p',
      text:
        'These materials are research commentary for informational and educational purposes only — not an offer, solicitation, recommendation, or investment advice. Scenario outputs are not forecasts. The machine labor cohort is a mechanical research screen, not an index fund, portfolio, or recommendation. Skycatcher and its clients may hold positions in companies referenced; see the full disclosures at the end of Part 04.',
    },
  ],
};
