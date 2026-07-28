/**
 * Part VI — Conclusion.
 *
 * Assembled from the deck's closing slides (the three bets, kill conditions,
 * timing, closing statement) plus written sections that had no slide: the
 * strongest counter-arguments and the ask. The token-efficiency risk is a
 * DRAFT position taken on the author's behalf — flagged for their review.
 */

import type { Conclusion } from './types';

export const conclusion: Conclusion = {
  title: 'Conclusion',
  sub: 'the three bets, what would break them, and what to do about it',
  epigraph: {
    text: 'Machine labor is a tidal wave. It changes the rules.',
    cite: 'Skycatcher · July 2026 · thirty-one years after the memo',
  },
  sequence: [
    // The whole argument, restated.
    { slide: 45 },

    // What we are most likely to be wrong about — beyond the four triggers.
    {
      heading: 'The strongest case against us',
      blocks: [
        {
          kind: 'p',
          text:
            'The kill conditions in Part V are the tripwires we can grade quarterly. But the strongest argument against this thesis does not trip any of them, so it deserves its own section.',
        },
        {
          kind: 'p',
          text:
            'It is token efficiency. Our chain assumes tokens proxy agent work — bridge one. If models improve enough that the same delegated task takes a tenth of the tokens, work decouples from consumption: agents could take over the economy while token demand, and the events attached to it, grow far more slowly than we forecast. Falling prices we have modelled; falling tokens per task we have not.',
        },
        {
          kind: 'p',
          text:
            'Our answer is Jevons again, one level down — every efficiency gain in software history has been spent on doing more rather than consuming less, and the observed intensity band already reflects three years of relentless model improvement. But we hold this answer with less confidence than the rest of the document, and we watch tokens-per-task in our own stack as a leading indicator the filings cannot give us.',
        },
        {
          kind: 'p',
          text:
            'Second, self-hosting. The sharpest version comes from engineers: if agents make building software free, they also make operating it cheap — an agent can run your Postgres, rotate your certificates, and triage your pagers, so why rent a meter at all? We concede the premise for some layers, and we deliberately hold the commodity-exposed ones lightly. What cannot be self-hosted away is the part of the bill that is really insurance: identity, audit, and compliance sell a third party to blame, and no enterprise counsel accepts its own agent as the counterparty of record. Self-hosted stacks still run on metered compute and delivery, and every agent an enterprise deploys enlarges the surface that has to be observed and governed by someone whose name is on a contract. The watch item is attach pricing in the observability layer — the first place self-hosting would show up.',
        },
        {
          kind: 'p',
          text:
            'Third, the buildout itself. If power and compute supply cannot carry 27x token demand, the wave caps at the floor no matter what elasticity says. Two answers. The floor is priced in our grid — at 21x today’s multiple the floor case still returns +69%, and eight of nine paths beat today. And a supply-capped wave concentrates pricing power in whoever meters scarce capacity efficiently, which is not a bad description of the companies we own.',
        },
        {
          kind: 'p',
          text:
            'Last, the ones we can only size, not solve. Vertical integration: the hyperscalers could bundle identity, observability, and build into the compute bill, turning the layer we own into a feature — against this we hold the meters with the deepest enterprise moats and watch attach pricing, not just attach volume. And concentration: five names is not a diversified thesis, it is a conviction basket, and we size it as the manifesto sizes everything — deep conviction, pre-written exits, and no pretence that the two are a substitute for each other.',
        },
      ],
    },

    // How you will know — the dated tracker.
    { slide: 44 },
    { slide: 46 },

    // The cost of waiting.
    { slide: 47 },

    // The ask.
    {
      heading: 'What to do with this',
      blocks: [
        {
          kind: 'p',
          text:
            'We have tried to write a document that can be acted on, not admired. If you take the argument, the action follows from the timing math: the re-pricing happens at disclosure, disclosure happens at the prints, and there are twelve prints between here and 2029.',
        },
        {
          kind: 'p',
          text:
            'Capital positioned before the August–November 2026 prints owns the first and largest of the gaps. Capital that waits for the filings to confirm will buy the same businesses roughly 27% higher, on the average of the seven re-pricings we have already watched. Waiting for proof is not prudence in this setup; it is paying retail for it.',
        },
        {
          kind: 'p',
          text:
            'And if we are wrong, the triggers above say so in public filings, on dates we do not control, with pre-written weight actions attached. That is the deal we are offering: a falsifiable thesis, graded quarterly, at machineoracle.ai.',
        },
      ],
    },

    // Close on the echo of the memo: prose into the quote, prose out of it.
    {
      blocks: [
        {
          kind: 'p',
          text:
            'Five public companies sit at the tollbooths of machine labor. With roughly $120 billion of combined market value against $15.9 billion of revenue, they meter the infrastructure every agent must use — every query, transaction, write, test, and log. Thirty-one years ago, an internal memo named the last wave while the street still called it a fad. This document is ours:',
        },
        {
          kind: 'wavequote',
          quote: ['Machine labor is a tidal wave.', 'It changes the rules.'],
          attrib: 'Skycatcher · July 2026',
        },
        {
          kind: 'p',
          text:
            'Every scenario in our sensitivity analysis produces upside; the central case points to roughly 5x over four years, and the analogous rails of the internet era returned 5 to 13x from exactly this stage — while the argument was still being had. It is 1996 by the internet clock. The meters are already running. What remains is discipline: the tracker is live, the kill conditions are armed, and the next print is weeks away.',
        },
      ],
    },
    { slide: 50 },
  ],
  // Slide 49's own layout is superseded by the written finale above.
  claim: [49],
};
