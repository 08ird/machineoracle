/**
 * Part I — Infinite Software. Commentary keyed by slide id.
 *
 * Voice per the Skycatcher Manifesto: first-person plural, the institutional
 * view stated then answered, dated and named specifics, coined terms in quotes,
 * unhedged declaratives.
 */

import type { Block } from './types';

export const part1: Record<number, Block[]> = {
  7: [
    {
      kind: 'p',
      lead: true,
      text:
        'The institutional investor sizes artificial intelligence against the software budget. It is the natural comparison, because every technology wave of the last sixty years sold software or the hardware to run it, and each one was underwritten that way. We think the comparison is the single largest analytical error in the market today.',
    },
    {
      kind: 'p',
      text:
        'Mainframes, the personal computer, networking, the web, mobile, cloud — every one of them sold a tool that made a person more productive, and every one of them minted the infrastructure names of its era. IBM and DEC. Microsoft and Intel. Cisco. Google and Amazon. Apple. AWS.',
    },
    {
      kind: 'p',
      text:
        'This wave does not sell a tool. It sells the labor itself. That is a categorical difference, not a matter of degree, and it changes the denominator: the addressable market is not what companies spend on software, it is what they spend on work. The infrastructure names of this era are being minted right now, and they are being priced as though the old denominator still applies.',
    },
  ],

  8: [
    {
      kind: 'p',
      text:
        'The cost of producing software has fallen for thirty years, and until recently it fell politely — one step roughly every decade, each step large enough to reorganise the industry and small enough to absorb. Artisan engineering ran near $200 a unit of work. Offshoring took it to $60. Open source and reuse took it to $20. Copilots took it to $5.',
    },
    {
      kind: 'p',
      text:
        'Agent production took it to five cents, and it did so in a single step. That is roughly 4,000x, arriving inside one product cycle rather than one decade.',
    },
    {
      kind: 'p',
      text:
        'We would ask you to hold on that number rather than move past it, because the magnitude is the whole argument. When any input becomes four thousand times cheaper, no one buys the same quantity of it more cheaply. They buy vastly more of it, and they buy it for uses that were previously unthinkable. Every forecast that treats this as a margin story has already missed the point.',
    },
  ],

  9: [
    {
      kind: 'p',
      text:
        'The price collapse is the symptom. The regime change underneath it is the cause, and it is simpler than the discourse suggests. A copilot keeps a person inside every loop: you prompt, it answers, you check, you prompt again. An agent takes an objective and runs — planning, acting, verifying, looping until the work is finished. The human stops being the operator and becomes the manager.',
    },
    {
      kind: 'p',
      text:
        'Three consequences follow, and they multiply rather than add. The human bottleneck disappears, so attention-hours no longer cap output. Work parallelises, because agents launch agents — ten to a hundred simultaneous workstreams from one instruction. And the duty cycle changes: forty attention-hours a week becomes one hundred and sixty-eight machine-hours.',
    },
    {
      kind: 'p',
      text:
        'One analyst helping you becomes a thousand analysts working around the clock. We do not claim this substitution is clean today; reliability and supervision remain real constraints, and anyone who has run agents at scale knows it. We claim the direction is not in question.',
    },
  ],

  10: [
    {
      kind: 'p',
      text:
        'Now follow the money through the collapse, because this is where we part company with consensus most sharply.',
    },
    {
      kind: 'p',
      text:
        'Everything on the left-hand side of the ledger deflates toward zero: code, tests, documentation, integration glue, one-off tools, and eventually the applications themselves. That side becomes an infinite knife-fight of entrants, each of them able to produce what used to take a funded team, none of them able to hold a price. It is the worst place in the value chain to own an asset.',
    },
    {
      kind: 'p',
      text:
        'Everything on the right-hand side is metered forever. Compute cycles and runtime. State, memory, and context. Delivery and network. Identity, audit, and the billing rails themselves. None of it is free, none of it deflates to nothing, and all of it scales with the population of software rather than the price of writing it.',
    },
    {
      kind: 'p',
      text:
        'The economic law here is not new. Jevons described it in 1865: make an input more efficient and its consumption expands rather than shrinks. Nadella invoked exactly this in January 2025. The instruction the slide leaves us with is one line, and it is the thesis of this entire piece — own the right-hand column.',
    },
  ],

  11: [
    {
      kind: 'p',
      text:
        'We have a precedent for this, and it is close enough to be uncomfortable. The last time the cost of production collapsed, the rails were paid first and they were paid enormously — before the mania, while the argument was still being had in public.',
    },
    {
      kind: 'p',
      text:
        'In the four years following the tidal wave memo, from May 1995 to May 1999, the NASDAQ roughly tripled. Intel returned about 6x. Microsoft about 7x. Cisco — which sold nothing to consumers and everything to the people building the network — returned about 13x.',
    },
    {
      kind: 'p',
      text:
        'Every one of those returns was earned before 1999 began. The crowd spent those years debating whether the internet was a fad. The rails simply compounded. Past performance is not a forecast, and we are not offering these numbers as one. We are pointing out that the shape of the opportunity in front of us has been observed before, and that the observation was available to anyone willing to underwrite the infrastructure while the narrative was still contested.',
    },
  ],
};
