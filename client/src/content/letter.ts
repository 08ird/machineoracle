/**
 * The home-page hook — the prologue from content/00-how-to-read-this.md:
 * the memo, the internet clock, the method. Ends on the transition into the
 * table of contents.
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
    { kind: 'h2', text: 'How to read this: straight lines, graded in public' },
    {
      kind: 'p',
      text:
        'Before any of the arguments, the method behind every number here. We measure the slopes: every forecast extrapolates a measured trend — token volumes, price curves, attach rates, filings — never a narrative. We pre-register the calls: predictions carry deadlines, kill conditions are written before they are needed, and grading criteria are fixed at publication. And we separate the bases: measured, estimated, and modeled figures are labeled as such on every exhibit, and the fade case is always shown next to the wave.',
    },
    {
      kind: 'p',
      text:
        'As Leopold Aschenbrenner put it, the forecast “just requires believing in straight lines on a graph.” We hold ourselves to the disciplined version: measured lines, dated predictions, public grades. Trend extrapolation, with consequences — every claim in this piece is checkable, and most carry a date.',
    },
    { kind: 'p', text: 'Here is what we see.' },
  ],
};
