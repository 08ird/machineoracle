/**
 * About — who is writing, what this site is, and how to read it.
 * DRAFT drawn from the Skycatcher Manifesto; the voice and any contact or firm
 * details are for the author to confirm before publication.
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
        'Machine Oracle is the public ledger for our machine-labor thesis. It exists because the deck version of an argument cannot be held to account: here, every forecast is dated, keyed to third-party filings, and graded quarterly on the tracker — hits and misses alike. Sky1, our internal research system, does the tracking; the grades it produces are our own assessments and not independent research.',
    },
    {
      kind: 'p',
      text:
        'How to read the site: the front page carries the argument in miniature; the six parts carry it in full, and each stands on its own. The figures are compiled from public filings and platform disclosures, restated approximately where baskets change, with the caveats stated where they bite. Where we are estimating rather than measuring, the text says so.',
    },
    {
      kind: 'p',
      text:
        'Skycatcher and its principals hold positions in the securities and ecosystems discussed here, and venture positions in private companies referenced in these materials. Nothing on this site is an offer of securities or investment advice; see the disclosures at the end of Part VI.',
    },
  ],
};
