/**
 * Track record — adapted from the Skycatcher Manifesto ("Manifesto of an
 * Entrepreneurial Investor"). Same three case studies, condensed for the web;
 * figures and dates as stated there. DRAFT for the author's review.
 */

import type { Article } from './types';

export const trackRecord: Article = {
  slug: 'track-record',
  kind: 'article',
  navLabel: 'Track record',
  title: 'Why trust us on this',
  subtitle: 'Three times we saw what institutions were not pricing, and what happened next.',
  date: 'Adapted from the Skycatcher Manifesto',
  blurb:
    'The entrepreneurial-investor record behind this thesis: video games, the Indian subcontinent, and onchain finance.',
  blocks: [
    {
      kind: 'p',
      lead: true,
      text:
        'In 2015 we dared to build a boutique investment manager with a couple hundred thousand dollars in capital and no formal background in Internet investing. We were small, we were flexible, and we were focused on how we executed over how we were perceived. Our institutional disadvantages proved to be entrepreneurial advantages.',
    },
    {
      kind: 'p',
      text:
        'In practical terms, entrepreneurial investing boils down to finding the “Magic Window” — where the gap is largest between what entrepreneurs are creating and what institutions are seeing. When that gap starts to close and incremental institutional capital enters, investors are usually rewarded twice: accelerating earnings growth and structurally higher multiples. The thesis on this site is our claim that machine labor is the widest Magic Window we have ever measured. Here is what happened the last three times we made that kind of claim.',
    },

    { kind: 'h2', text: 'Video games' },
    {
      kind: 'p',
      text:
        'Prior to 2021 the institutional world largely dismissed video games — niche, cyclical, not real software. We formed our thesis at the Fund’s inception in 2015 and scaled into it in 2018 after a deep dive across roughly 150 public game companies. Our edge came from direct experience as gamers: institutions were ignoring the “forever franchises,” games with ten to fifteen years of history that had become the digital spaces where a generation hangs out.',
    },
    {
      kind: 'p',
      text:
        'The defining position came in 2019: Krafton, whose PUBG created the battle-royale genre and was the biggest game in the world while the market deeply mispriced its China royalties. We invested at an effective valuation near 3x earnings and made it our largest position at over 30% of the Fund. In 2021 Krafton went public at a $22 billion valuation — the largest IPO in gaming history — and we held all the way to it. The Fund returned +160% over the battle-royale thesis period.',
    },
    {
      kind: 'p',
      text:
        'From 2023 our focus moved to the most undervalued distribution channel in games: consoles as generational platforms, with PlayStation and Switch evolving into app stores collecting a 30% tax on increasingly digital sales. That period returned +60% as the market began repricing Sony and Nintendo from hardware to vertically integrated software.',
    },

    { kind: 'h2', text: 'The Indian subcontinent' },
    {
      kind: 'p',
      text:
        'Institutions view the region top-down and allocate, when they do, to financials and industrials in the public markets. Our edge was bottom-up: frequent visits to Bangladesh and India, meeting entrepreneurs, seeing enormous Internet whitespace where local champions could build defensible moats against playbooks we already knew from China.',
    },
    {
      kind: 'p',
      text:
        'We led the seed round in Pathao in 2016 — among the first investment firms in Bangladesh venture — and realized a material exit at the Series B in 2018. The insight led us to Rapido in India, where we led the Series A after every brand-name VC rejected it on fear of the incumbents. The incumbents ignored motorbike ridesharing, as we predicted. Rapido is now the second-most-used mobility platform in India at roughly three million orders a day, most recently valued above $1 billion, and remains our largest venture winner.',
    },

    { kind: 'h2', text: 'Onchain finance' },
    {
      kind: 'p',
      text:
        'We first bought Bitcoin in 2014 and held through every major drawdown since — one of our highest-returning investments. In 2022 we formalized the effort with the Skycatcher Onchain Fund, launched deliberately into a bear market with asset prices down 80% from their peaks, at exactly the moment the first tokens with equity-like value accrual appeared. We are almost three years into that thesis and have returned the Onchain Fund’s capital multiple times over.',
    },

    { kind: 'h2', text: 'The pattern' },
    {
      kind: 'p',
      text:
        'Three different asset classes, one repeated shape: see the change firsthand before institutions price it, write the thesis down, size it with conviction, and hold through the drawdowns that shake out everyone underwriting someone else’s view. That is the process now applied to machine labor — with the added discipline, this time, of dated forecasts and pre-written kill conditions published where you can grade them.',
    },
    {
      kind: 'note',
      text:
        'Fund return references (+160% battle-royale period, +60% console period) are overall fund returns for the thesis periods shown, per Skycatcher records, unaudited, and presented to illustrate investment process only. Venture positions are unrealized and involve a high risk of loss. Past performance is not indicative of future results. See Disclosures.',
    },
  ],
};
