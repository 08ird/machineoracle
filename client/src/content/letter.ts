/**
 * The home-page hook — the short scene-setting essay above the table of
 * contents, in the reference site's structure: a handful of unheaded
 * paragraphs that end on a transition line into the chapters.
 *
 * DRAFT in Skycatcher voice; the claims are the deck's own.
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
      text: 'You can see the future first in the usage logs.',
    },
    {
      kind: 'p',
      text:
        'In May 1995, Bill Gates sent an internal memo calling the internet a tidal wave that changes the rules. He could not have named Google, the smartphone, or SaaS, and he did not need to — the claim was about magnitude, and it was correct. Thirty-one years later the wave is running again, and this time it is denominated in tokens. Every prior computing wave sold tools that made people more productive. This one sells the labor itself, and the addressable market is not the software budget. It is the labor budget.',
    },
    {
      kind: 'p',
      text:
        'When machines write software, the cost of producing it collapses toward zero and the quantity of it explodes. But software that exists has to run somewhere. It has to store state, prove identity, get delivered, get observed, and get billed. Production is becoming free; operation never will be. So the money moves — off the thing being made, onto the meters the made thing runs through. Those meters are owned by a small number of public companies that already disclose their usage every ninety days.',
    },
    {
      kind: 'p',
      text:
        'Everyone is now talking about AI agents, but the street has never modeled them — every sell-side estimate for the companies in this document is a fade. Meanwhile the filings have already turned: retention is compounding again, contracted backlog is growing at twice the rate of revenue, and machine labor has acquired its own invoice line at seven vendors. By the internet clock it is 1996 — after the memo, before the mania. Early enough to matter, late enough to have receipts.',
    },
    {
      kind: 'p',
      text:
        'Our claims are falsifiable and dated: roughly 27x token demand by 2029, the share of tokens doing work rising from fifteen percent to sixty or more, and the resulting infrastructure events growing faster than the tokens that cause them. Each carries a kill condition written in advance, keyed to public filings, and graded quarterly on this site.',
    },
    {
      kind: 'p',
      text: 'Here is what we see.',
    },
  ],
};
