/**
 * The opening letter — the site's front door.
 *
 * DRAFT. Written from the thesis in the Infinite Software deck so the page has
 * real shape to react to; the voice and claims are yours to rewrite. Nothing
 * here is published until the site is.
 */

import type { Article } from './types';

export const letter: Article = {
  slug: '',
  kind: 'article',
  hidden: true,
  navLabel: 'Introduction',
  // The masthead already carries the site name, so the page names itself.
  title: 'Introduction',
  subtitle: 'Why we are writing this down, and what it would take to be wrong.',
  date: 'July 2026',
  blocks: [
    {
      kind: 'p',
      lead: true,
      text:
        'In May 1995, Bill Gates sent an internal memo calling the internet a tidal wave that changes the rules. He could not have named Google, the smartphone, or SaaS. He did not need to. The claim was about magnitude, not detail, and it was correct: almost every trillion dollars of value created since traces back to that wave.',
    },
    {
      kind: 'p',
      text:
        'Thirty-one years later the wave is running again, and this time it is denominated in tokens. The difference is what it sells. Every prior computing wave sold tools that made people more productive — mainframes, PCs, networks, browsers, phones, clouds. This one sells the labor itself. That is why the addressable market is not the software budget. It is the labor budget.',
    },
    {
      kind: 'p',
      text:
        'The consequence is stranger than most forecasts allow. When machines write software, the cost of producing software collapses toward zero — and the quantity of it explodes. Code, tests, glue, one-off tools, whole applications: all of it deflates. But software that exists has to run somewhere. It has to store state, hold context, prove identity, get delivered, get observed, get audited, and get billed. Production is becoming free. Operation never will be.',
    },
    {
      kind: 'p',
      text:
        'So the money moves. It moves off the thing being made and onto the meters the made thing runs through — and those meters are owned by a small number of public companies that already disclose their usage every ninety days.',
    },
    { kind: 'h2', text: 'Why write this down' },
    {
      kind: 'p',
      text:
        'Because the argument is falsifiable and the clock is short. We are making three claims that can be checked against filings rather than vibes: that token demand grows roughly twenty-seven times by 2029; that the share of tokens spent doing work rather than answering questions rises from about fifteen percent to sixty or more; and that the resulting infrastructure events — not the tokens — are what land on someone’s invoice, growing faster than the tokens that caused them.',
    },
    {
      kind: 'p',
      text:
        'Each claim has a kill condition written in advance. If token prices stop falling for two consecutive quarters, the first claim is broken. If a full order-of-magnitude price cut buys only a proportional increase in demand, the elasticity we are underwriting does not exist and we drift to consensus. We would rather publish the triggers than explain them afterwards.',
    },
    {
      kind: 'p',
      text:
        'By the internet clock it is 1996 — after the memo, before the mania. The rails are being built and paid for while the street is still debating whether any of it is a fad. That is an uncomfortable place to write from, because it is too early to be obvious and too late to be clever. It is also the only place where the evidence and the price disagree.',
    },
    { kind: 'h2', text: 'What is here' },
    {
      kind: 'p',
      text:
        'This site collects our work on that disagreement. It begins with the thesis in full. Over time it will hold the quarterly grading of these forecasts, the arguments we lose, and whatever else survives contact with the filings.',
    },
    { kind: 'rule' },
    { kind: 'signoff', lines: ['Skycatcher', 'July 2026'] },
  ],
};
