/** Part 01 — Infinite Software. Prose keyed by exhibit id. */

import type { Block } from './types';

export const part1: Record<number, Block[]> = {
  8: [
    {
      kind: 'p',
      lead: true,
      text:
        'Mainframes, PCs, networking, the web, mobile, cloud. Each wave was larger than the one before, and each sold a better tool. The AI wave, running from 2022, is different in kind.',
    },
    { kind: 'p', text: 'That single difference drives everything in this piece.' },
  ],

  9: [
    {
      kind: 'p',
      text:
        'Software has always been rationed by developer scarcity — roughly 30 million professional developers on earth, at $100 or more an hour, behind eighteen-month backlogs. Every app had to justify a team, a budget, and a roadmap, so only mass-market software got built.',
    },
    {
      kind: 'p',
      text:
        'That ration just ended. Agents write, test, and ship software on demand at about 4,000x less cost per unit of work. Producing software is decoupled from human hours for the first time. Software becomes summonable — abundant, personal, disposable; built for one user, one task, one afternoon. The population of software explodes even as its price collapses.',
    },
    {
      kind: 'p',
      text:
        'Infinite software isn’t more apps in the store. It’s software becoming as abundant as documents — and every piece of it runs on rented, metered rails.',
    },
  ],

  10: [
    {
      kind: 'p',
      text:
        'Trace the cost of a unit of software work across production regimes. Artisan engineering in the 1990s and 2000s ran near $200. Offshore and outsourcing took it to about $60. Open source and reuse took it to $20. Copilot-assisted work in 2021–24 took it to $5.',
    },
    {
      kind: 'p',
      text:
        'Agent-produced software in 2026 takes it to five cents. Each prior step took roughly a decade to arrive; the last one arrived all at once.',
    },
  ],

  11: [
    {
      kind: 'p',
      text:
        'Copilots keep a human in every loop: you prompt, it answers, you check, you prompt again. Agents invert the relationship — you define the objective; they plan, act, and verify; they loop until completion. The human becomes the manager.',
    },
    {
      kind: 'p',
      text:
        'Three consequences follow, and they multiply. The human bottleneck is removed, so attention-hours no longer cap output. Work parallelizes, because agents launch agents — ten to a hundred workstreams. And the duty cycle changes: forty human attention-hours become 168 machine-hours a week. One analyst helping you becomes a thousand analysts working around the clock.',
    },
  ],

  12: [
    {
      kind: 'p',
      text:
        'The proof is public and dated. GitHub now carries 180 million developers, having added 36 million in one year — the fastest cohort ever. In early 2026, 51% of committed code is AI-written; Google reports roughly 75% of its new code is AI-generated and engineer-approved. There are 630 million repositories, growing by 230 new projects a minute, with 20 million developers on Copilot and 8 million users on Lovable building apps from plain English.',
    },
    {
      kind: 'p',
      text:
        'Makers up roughly 2x and the machine-written share up roughly 5x in three years: infinite software is a measured trend, not a metaphor.',
    },
  ],

  13: [
    {
      kind: 'p',
      text:
        'From 1990 to 2022, software creation was a profession with a syntax wall around it — 30 million people. The copilot era lowered the wall to 180 million on GitHub. The natural-language era removes it: anyone who can describe software can make it.',
    },
    {
      kind: 'p',
      text:
        'That is a maker population of a billion or more. When everyone can make software, the money moves to what all software must rent.',
    },
  ],

  14: [
    {
      kind: 'p',
      text:
        'It is worth walking through a single day, because the abstraction hides where the money lands. Nothing in the sequence below requires a capability that does not exist in 2026.',
    },
  ],

  15: [
    {
      kind: 'p',
      text:
        'When production costs collapse, value doesn’t disappear — it moves. What deflates to zero: code, tests, documentation, integration glue, one-off tools, and the custom applications themselves, in an infinite knife-fight of entrants. What stays metered forever: compute cycles and runtime, state and memory, delivery and network, identity, audit and billing rails — billed per unit of use, scaling with the software population.',
    },
    {
      kind: 'p',
      text:
        'The economic framing is Jevons, 1865: efficiency in an input expands rather than reduces its consumption. An economist will note that full backfire requires elasticity above one, which is historically rare. That is precisely the point — we have measured it, and Part 02 shows the slope.',
    },
  ],

  16: [
    {
      kind: 'p',
      text:
        'We have a precedent, close enough to be uncomfortable. In the four years after the tidal-wave memo — May 1995 to May 1999, all of it before the mania began — the NASDAQ roughly tripled. Intel returned about 6x, Microsoft about 7x, and Cisco, which sold nothing to consumers and everything to the people building the network, about 13x.',
    },
  ],

  17: [
    {
      kind: 'p',
      text:
        'Infinite software is the era. Part 02 counts the wave it unleashes — in tokens, and then in the infrastructure events that actually get billed.',
    },
  ],
};
