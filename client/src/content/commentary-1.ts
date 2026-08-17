/**
 * Part 01 — Infinite Software. Prose keyed by exhibit id.
 *
 * Expanded narrative: each section argues the point with dated, checkable
 * examples rather than captioning the exhibit. Sources are named inline, per
 * the method section's promise.
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
        'Mainframes, PCs, networking, the web, mobile, cloud. Each wave was larger than the one before, and each followed the same commercial logic: sell a better tool, and the human holding it produces more. A spreadsheet did not do the analyst’s work; it made the analyst faster. That was true of every wave for sixty years, and it quietly set the ceiling on every software market ever sized — the tool could only be worth some fraction of the person using it.',
    },
    {
      kind: 'p',
      text:
        'The AI wave, running from 2022, is different in kind. For the first time, the product is not a tool that a person operates but the work itself, performed end to end. In 2011 Marc Andreessen wrote that software was eating the world; the fifteen years since were that essay coming true. What began in 2022 is stranger: software started writing itself — and the thing being eaten now is not industries’ distribution, but the labor inside them.',
    },
    {
      kind: 'p',
      text:
        'That single difference changes what the market is — a labor budget, not a software budget — and what the unit of sale is: a task, not a seat. Everything else in this piece follows from it.',
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
        'Software has always been rationed, and the ration was people. Those 30 million professionals bill $100 or more an hour and sit behind backlogs that stretch a year and a half, so every piece of software had to pay for itself before a single line was written. The result is the landscape we take for granted: the few million polished applications of the last figure, and an unmeasured ocean of work that never justified an engineer — the dashboard nobody built, the integration nobody got to, the tool one person needed for one week.',
    },
    {
      kind: 'p',
      text:
        'That ration just ended. Agents produce software on demand, decoupled from human hours for the first time in the industry’s history. The culture noticed before the market did: “vibe coding” — describing what you want and letting the model build it — went from a joke to a job description in about a year. The new state is software as a summonable good: personal, disposable, built for one user and one afternoon, thrown away without regret when the need changes.',
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
        'Agent-produced software in 2026 takes it to five cents. Each prior step took roughly a decade to arrive; the last one arrived all at once, riding the collapse in inference prices that Part 02 measures directly. And unlike offshoring, which moved the same human hours somewhere cheaper, this step removed the human hours from the unit entirely — which is why it is a regime change rather than another point on the curve.',
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
        'Three consequences follow, and they multiply. The human bottleneck is removed, so attention-hours no longer cap output. Work parallelizes, because agents launch agents — ten to a hundred workstreams from one instruction. And the duty cycle changes: forty human attention-hours become 168 machine-hours a week. One analyst helping you becomes a thousand analysts working around the clock.',
    },
  ],

  // Site-original exhibit: the METR task-horizon chart.
  97: [
    {
      kind: 'p',
      text:
        'This is no longer a demo-stage claim. METR, an independent evaluation group, has been measuring the length of software tasks frontier systems can complete autonomously since 2019: the task horizon doubled roughly every seven months for six years, accelerated to about every four months across 2024–25, and by early 2026 the leading model completes tasks that would take a skilled engineer most of a working day. The trendline matters more than the level — the loop keeps getting longer, and every doubling moves work from the copilot column to the agent column.',
    },
  ],

  12: [
    {
      kind: 'p',
      text:
        'The proof is public and dated, and most of it comes from the platforms’ own disclosures. GitHub now carries 180 million developers, having added 36 million in a single year — its fastest cohort ever. Developers pushed nearly a billion commits in 2025, up 25% in a year, with a record hundred million in August alone. In early 2026, GitHub measured a majority — 51% — of committed code as AI-written, and Google reports roughly 75% of its new code is AI-generated and engineer-approved.',
    },
    {
      kind: 'p',
      text:
        'The application layer confirms it from the other direction: 630 million repositories growing by 230 new projects a minute, and 8 million users on Lovable building applications from plain English — people who would never have called themselves developers at all.',
    },
    {
      kind: 'p',
      text:
        'Software makers is up roughly 2x and the machine-written share up roughly 5x in three years.',
    },
  ],

  13: [
    {
      kind: 'p',
      text:
        'From 1990 to 2022, software creation was a profession with a syntax wall around it — a small caste who could speak to machines on behalf of everyone else. The natural-language era removes the wall entirely. When describing software is making software, the addressable population of makers is everyone with a job problem and a sentence to describe it. We believe our 1b estimate is conservative.',
    },
    {
      kind: 'p',
      text:
        'x',
    },
  ],

  15: [
    {
      kind: 'p',
      text:
        'When production costs collapse, value doesn’t disappear — it moves. What deflates to zero is everything the agent can regenerate on demand: code, tests, documentation, integration glue, one-off tools, and ultimately the custom applications themselves. What stays metered forever is what no agent can regenerate: the doing of the work, the keeping of its state, and the accounting for what was done. Those three activities — executing, remembering, answering — are billed per unit of use, and they scale with the population of software rather than the price of writing it. Part 03 gives them a name: the backend.',
    },
    {
      kind: 'p',
      text:
        'The economic framing is Jevons, 1865: make an input more efficient and its consumption expands rather than shrinks. He was writing about coal and steam engines; the same held for electricity, for transistors, for bandwidth. When DeepSeek’s cheap models briefly convinced the market in January 2025 that efficient AI meant less infrastructure, Microsoft’s CEO answered publicly with exactly this citation — “Jevons paradox strikes again” — and the two years since have been on his side. An economist will fairly note that full backfire requires demand elasticity above one and is historically rare. That is precisely the point: we are not assuming the rare case. Part 02 measures it.',
    },
  ],

  17: [
    {
      kind: 'p',
      text:
        'Three numbers close the part. Production got ~4,000x cheaper, so making software stopped being the scarce thing. The machine work-week is 168 hours against our forty, so labor stopped being the scarce thing. What remains scarce — what became more scarce, precisely because everything above it multiplied — is the stack of rails that all of it runs on: five layers, with compute at the bottom, intelligence above it, then the state it keeps, the work it runs, and the outcomes it delivers.',
    },
    {
      kind: 'p',
      text:
        'Hold on to the shape of that stack, because the layers do not benefit equally. The bottom is capital-heavy and already priced; the top is where the deflation of this part plays out. The two in the middle — the layer that meters the work and the layer that keeps the state — sell the three things no agent can regenerate, and they are where this series will argue the money settles.',
    },
    {
      kind: 'p',
      text:
        'Infinite software is the era. Part 02 counts the wave it unleashes — first in tokens, the unit everyone watches, and then in the infrastructure events that actually get billed, the unit almost nobody does. Part 03 follows those events into the stack, layer by layer, and to the two that collect on all of it.',
    },
  ],
};
