/**
 * Part 01 — Infinite Software. Prose keyed by exhibit id.
 *
 * The part does three jobs in order: define the infinite software era, frame
 * how big the change is, then show the impact at scale — the setup for Part 02
 * (how the wave works), Part 03 (where the money hits), and Part 04 (how we
 * track it). Sources are named inline, per the method section's promise.
 */

import type { Block } from './types';

export const part1: Record<number, Block[]> = {
  // Site-original exhibit: the era's arithmetic, up front.
  3: [
    {
      kind: 'p',
      lead: true,
      text:
        'One idea governs this piece: we have entered the era of infinite software. Two factors define it. First, the cost of a unit of software work fell roughly 4,000x, because agents now write, test, and ship it end to end. Second, the population able to make software expanded roughly 33x, from 30 million professionals to the billion-plus knowledge workforce. Software is now an abundant good.',
    },
    {
      kind: 'p',
      text:
        'The implication: when making software becomes free, the place where all of it runs — the backend stack — sees a once-in-a-generation step change in demand. Parts 02 and 03 measure it.',
    },
  ],

  8: [
    {
      kind: 'p',
      lead: true,
      text:
        'Mainframes, PCs, networking, the web, mobile, cloud. Every wave followed the same logic: sell a better tool, and the human holding it produces more. A spreadsheet did not do the analyst’s work; it made the analyst faster. For sixty years, that put a ceiling on every software market — the tool could only be worth a fraction of the person using it.',
    },
    {
      kind: 'p',
      text:
        'The AI wave, running from 2022, is different in kind. For the first time, the product is not a tool a person operates — it is the work itself, performed end to end. In 2011 Marc Andreessen wrote that software was eating the world. What began in 2022 is bigger: software started writing itself, and what is being eaten now is the labor inside industries, not just their distribution.',
    },
    {
      kind: 'p',
      text:
        'That one difference changes what the market is (a labor budget, not a software budget) and what the unit of sale is (a task, not a seat). Everything else in this piece follows from it.',
    },
  ],

  // Site-original exhibit: the phrase "infinite software", drawn.
  5: [
    {
      kind: 'p',
      text:
        'For seventy years, software was a product: a few million applications, each expensive enough to demand a team, a budget, and a roadmap, each built for the average of many users and sold to all of them (the left panel in Figure 3).',
    },
    {
      kind: 'p',
      text:
        'The right panel is the era this part describes. When production is nearly free, software takes the shape of the problems people actually have — small, specific, personal, and numberless.',
    },
  ],

  9: [
    {
      kind: 'p',
      text:
        'Software has always been rationed, and the ration was people. Those 30 million professionals bill $100 or more an hour and sit behind 18-month backlogs, so every piece of software had to pay for itself before a line was written. The result: a few million polished applications, and an unmeasured ocean of work that never justified an engineer — the dashboard nobody built, the integration nobody got to, the tool one person needed for one week.',
    },
    {
      kind: 'p',
      text:
        'That ration just ended. Agents produce software on demand, decoupled from human hours for the first time in the industry’s history. The culture noticed before the market did: “vibe coding” — describing what you want and letting the model build it — went from a joke to a job description in about a year. Software is now a summonable good: personal, disposable, built for one user and one afternoon, thrown away when the need changes.',
    },
  ],

  10: [
    {
      kind: 'p',
      text:
        'Trace the cost of a unit of software work across production regimes. Artisan engineering in the 1990s and 2000s ran near $200 a unit. Offshore and outsourcing took it to about $60. Open source and reuse took it to $20. Copilots took it to $5, with the model suggesting and the human still steering every line.',
    },
    {
      kind: 'p',
      text:
        'Agent-produced software in 2026 takes it to five cents. Each prior step took a decade; this one arrived all at once, riding the collapse in AI prices that Part 02 measures. And unlike offshoring, which moved the same human hours somewhere cheaper, this step removed the human hours entirely. That is why it is a regime change, not another point on the curve.',
    },
    {
      kind: 'p',
      text:
        'A useful sanity check on magnitude: when a cost falls 3x, you renegotiate contracts. When it falls 4,000x, the question changes from “what does it cost to build?” to “why would we not build it?”',
    },
  ],

  11: [
    {
      kind: 'p',
      text:
        'Behind the price collapse is a change in who holds the loop. Copilots keep a human in every iteration: you prompt, it answers, you check, you prompt again — the machine assists, the person produces. Agents invert the relationship. You define the objective; they plan, act, and verify; they call tools, write to databases, run tests; they loop until the work is done. The human stops being the operator and becomes the manager.',
    },
    {
      kind: 'p',
      text:
        'Three consequences follow, and they multiply. The human bottleneck is removed, so human working hours no longer cap output. Work parallelizes, because agents launch agents — ten to a hundred workstreams from one instruction. And the clock changes: forty human working hours become 168 machine-hours a week. One analyst helping you becomes a thousand analysts working around the clock.',
    },
  ],

  // Site-original exhibit: the METR task-horizon chart.
  97: [
    {
      kind: 'p',
      text:
        'This is no longer a demo-stage claim. METR, an independent evaluation group, has measured since 2019 how long a software task a frontier model can finish on its own. The horizon doubled roughly every seven months for six years, then accelerated to about every four months across 2024–25. By early 2026, the leading model completes tasks that would take a skilled engineer most of a working day. The trendline matters more than the level: every doubling moves more work from copilots to agents.',
    },
  ],

  12: [
    {
      kind: 'p',
      text:
        'The proof is public and dated, and most of it comes from the platforms’ own disclosures. GitHub now carries 180 million developers, having added 36 million in a single year. In early 2026, GitHub measured a majority — 51% — of committed code as AI-written, and Google reports roughly 75% of its new code is AI-generated and engineer-approved.',
    },
    {
      kind: 'p',
      text:
        'The startup end is further along: in Y Combinator’s Winter 2025 batch, a quarter of the companies had codebases that were roughly 95% AI-written, and 8 million people on Lovable build applications from plain English — people who would never have called themselves developers at all. The old way is fading at the same pace: Stack Overflow questions are down roughly three quarters from their 2022 peak, because a stuck developer now asks the model.',
    },
    {
      kind: 'p',
      text: 'Software makers are up roughly 2x and the machine-written share is up roughly 5x in three years — the people didn’t leave; the bottleneck did.',
    },
  ],

  13: [
    {
      kind: 'p',
      text:
        'From 1990 to 2022, software creation was a profession with a syntax wall around it — a small group who could speak to machines on behalf of everyone else. The natural-language era removes the wall entirely. When describing software is making software, the addressable population of makers is everyone with a job problem and a sentence to describe it. We believe our 1 billion estimate is conservative.',
    },
    {
      kind: 'p',
      text:
        'Scale is the point. Every one of a billion new makers summons software that must run, store, authenticate, and log somewhere. Each of them becomes a customer of the backend, whether they ever learn what a backend is.',
    },
  ],

  15: [
    {
      kind: 'p',
      text:
        'When production costs collapse, value does not disappear — it moves. Everything an agent can regenerate on demand deflates toward zero: code, tests, documentation, one-off tools, and ultimately the applications themselves. What no agent can regenerate stays metered forever: doing the work, keeping its state, and accounting for what was done. Those three activities are billed per unit of use, and they scale with the population of software, not the price of writing it. Part 03 dives into this opportunity.',
    },
    {
      kind: 'p',
      text:
        'In 1865, Jevons described the pattern: make an input more efficient and consumption expands instead of shrinking. It held for coal, electricity, transistors, and bandwidth. When DeepSeek’s cheap models briefly convinced the market in January 2025 that efficient AI meant less infrastructure, Microsoft’s CEO answered with exactly this citation: “Jevons paradox strikes again.” In Part 02 we measure this.',
    },
  ],

  17: [
    {
      kind: 'p',
      text:
        'We opened with two numbers. There is a third, and it may be the strongest: machine work never stops. Agents work around the clock, at a scale we cannot fully picture today. Part 02 dives into that variable — the agent population, and how token usage is evolving.',
    },
    {
      kind: 'p',
      text:
        'Everything those agents produce has to run somewhere. The more software the era creates, the harder it leans on the layer underneath — the rails all of it rents.',
    },
    {
      kind: 'p',
      text:
        'After that, Part 03 goes to where the money hits: a royalty on machine labor, collected by the backend stack and visible today in the filings of public companies. Part 04 closes with the leading companies in the space, our predictions — some of them ambitious — and the human side of it all.',
    },
  ],
};
