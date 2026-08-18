/**
 * The home-page hook — the memo, the internet clock, and the decade ahead:
 * the big ideas Part 04 exists to be remembered for. Ends on the transition
 * into the table of contents.
 */

import type { Article } from './types';

export const letter: Article = {
  slug: '',
  kind: 'article',
  hidden: true,
  navLabel: 'Introduction',
  title: 'Introduction',
  blocks: [
    {
      kind: 'p',
      lead: true,
      text:
        'In 1995, the internet changed software distribution. In 2026, AI agents are changing software production — creating a tidal wave of demand for the infrastructure that runs, stores, secures, observes, and meters all software.',
    },
    {
      kind: 'p',
      text:
        'Someone named the last wave while it was still deniable. In May 1995, with the street debating whether the whole thing was a fad, Bill Gates sent Microsoft an internal memo:',
    },
    {
      kind: 'wavequote',
      quote: ['The Internet is a tidal wave.', 'It changes the rules.'],
      attrib: 'Bill Gates, internal Microsoft memo · May 26, 1995',
      sub: 'Thirty-one years later, the wave is running again — denominated in tokens.',
    },
    {
      kind: 'p',
      text:
        'The memo marked the moment an incumbent recognized a paradigm shift. It was right about the magnitude even where the details were fuzzy, and it timestamps the start of a roughly thirty-year value-creation wave.',
    },
    { kind: 'h2', text: 'By the internet clock, it is 1996' },
    {
      kind: 'p',
      text:
        'Set the two waves on the same clock. The internet: 1995, the memo names the discontinuity; 1996–98, the rails get built and paid while the street debates “fad”; 1999–2000, the mania — 65–100x multiples, then 60–85% compression; 2001 onward, the rails’ owners collect the era’s fortunes.',
    },
    {
      kind: 'p',
      text:
        'The token wave: November 2022, ChatGPT — the Netscape moment, from roughly zero; 2026, the debate, with multiples still at fade levels. You are here. Then 2027–28, agent GAAP disclosures make agent demand visible in filings; and 2029 onward, the meters collect the era’s royalty — with every call in this piece graded.',
    },
    { kind: 'h2', text: 'The decade ahead: the machine economy' },
    {
      kind: 'p',
      text:
        'Here is what we believe the next decade is — the final part of this series exists to be remembered for it. The internet was built for billions of humans using software. We are now adding billions of software workers — persistent and transient agents that consume databases, APIs, compute, and observability on their own, at machine speed, around the clock. Software production has left human hands; software consumption is leaving them too. That is the era this series names the machine economy.',
    },
    {
      kind: 'p',
      text:
        'Inside it sits the idea we most want to be remembered for: machine labor — work performed by AI agents and billed by the unit, not the seat. It is not a metaphor; it is already on invoices. Its arrival moves the denominator from software budgets to labor budgets, reshapes the firm around revenue per employee rather than headcount, and settles the era’s economics on the small set of companies that meter what every agent must do — execute, remember, and answer for itself. Every industrial era eventually sorted this way: the engines commoditized; the rails and ledgers endured.',
    },
    {
      kind: 'p',
      text:
        'Those are the big ideas to hold as you read — the era, the labor, the royalty on it. The four parts build them in order, and Part 04 turns them into an instrument: definitions coined, predictions dated, a cohort re-scored quarterly, every call graded in public. This site exists to timestamp that call — that machine labor is the tidal wave of the coming decade — before the consensus arrives, and to keep score afterward, either way.',
    },
    { kind: 'p', text: 'Here is what we see.' },
  ],
};
