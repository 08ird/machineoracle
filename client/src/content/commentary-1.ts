/**
 * Part 01 — Infinite Software. Prose keyed by exhibit id.
 *
 * Expanded narrative: each section argues the point with dated, checkable
 * examples rather than captioning the exhibit. Sources are named inline, per
 * the method section's promise.
 */

import type { Block } from './types';

export const part1: Record<number, Block[]> = {
  // Front matter: the internet clock, bridging the Gates quote into Part 01.
  3: [
    {
      kind: 'p',
      text:
        'The memo timestamps the last wave; the clock below sets both waves side by side. Every entry on the internet track already happened, in that order — the naming, the rails, the mania, the fortunes. The token track is three years old and holding the same sequence: ChatGPT was its Netscape moment, and 2026 sits where 1996 sat — the rails being built and billed while the street still debates whether any of it is durable.',
    },
    {
      kind: 'p',
      text:
        'The discipline for everything that follows is simple: measured slopes, dated calls, public grades — nothing in this part asks for belief, only for checking. First, the era.',
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
        'That single difference drives everything in this piece. It changes what the market is (a labor budget, not a software budget), what the unit of sale is (a task, not a seat), and — the subject of Part 03 — where the money settles when the tasks become too numerous to count by hand.',
    },
  ],

  // Site-original exhibit: the phrase "infinite software", drawn.
  5: [
    {
      kind: 'p',
      text:
        'Before the argument, the picture. For seventy years, software was a product: a few million applications, each expensive enough to demand a team, a budget, and a roadmap, each built for the average of many users and sold to all of them. That is the left panel — a short shelf of heavy objects, and it is the entire software industry as every market map has ever drawn it.',
    },
    {
      kind: 'p',
      text:
        'The right panel is the era this part describes. When production is nearly free, software takes the shape of the problems people actually have — small, specific, personal, and numberless. A dashboard for one meeting. A tool for one week. An integration for one customer. None of it appears in an app store, none of it justifies a roadmap, and none of it needs to: it is summoned, used, and discarded like a document. What every piece keeps in common is invisible at this scale, and it is the subject of this entire series — each one runs, stores, authenticates, and logs on infrastructure it rents by the unit.',
    },
  ],

  9: [
    {
      kind: 'p',
      text:
        'Software has always been rationed, and the ration was people. There are roughly 30 million professional developers on earth — about four in every thousand humans — billing $100 or more an hour, sitting behind backlogs that stretch a year and a half. Under that constraint, every piece of software had to justify a team, a budget, and a roadmap before a single line was written. The result is the software landscape we take for granted: a few million polished applications serving use cases common enough to amortize their cost, and an unmeasured ocean of work that never justified an engineer — the dashboard nobody built, the integration nobody got to, the tool one person needed for one week.',
    },
    {
      kind: 'p',
      text:
        'That ration just ended. Agents write, test, and ship software on demand at roughly 4,000x less cost per unit of work, and for the first time in the industry’s history, producing software is decoupled from human hours. The culture noticed before the market did: “vibe coding” — describing what you want and letting the model build it — went from a joke to a job description in about a year. The new state is software as a summonable good: abundant, personal, disposable; built for one user, one task, one afternoon; thrown away without regret when the need changes.',
    },
    {
      kind: 'p',
      text:
        'Infinite software isn’t more apps in the store. It’s software becoming as abundant as documents — nobody asks whether a spreadsheet “justifies its roadmap” — and every piece of it runs on rented, metered rails. Hold that last clause; it is where this piece is headed.',
    },
  ],

  10: [
    {
      kind: 'p',
      text:
        'Trace the cost of a unit of software work across production regimes and the story of the industry falls out of it. Artisan engineering in the 1990s and 2000s ran near $200 a unit. Offshore and outsourcing took it to about $60 — a decade of globalization for a 3x. Open source and reuse took it to $20: don’t write it, import it. Copilots took it to $5, with the model suggesting and the human still steering every line.',
    },
    {
      kind: 'p',
      text:
        'Agent-produced software in 2026 takes it to five cents. Each prior step took roughly a decade to arrive; the last one arrived all at once, riding the collapse in inference prices that Part 02 measures directly. And unlike offshoring, which moved the same human hours somewhere cheaper, this step removed the human hours from the unit entirely — which is why it is a regime change rather than another point on the curve.',
    },
    {
      kind: 'p',
      text:
        'A useful sanity check on magnitude: when a cost falls 3x, you renegotiate contracts. When it falls 4,000x, the question changes from “what does it cost to build?” to “why would we not build it?” — and the binding constraint moves somewhere else. Where it moves is the subject of this part’s last section.',
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
        'This is no longer a demo-stage claim. METR, an independent evaluation group, has been measuring the length of software tasks frontier systems can complete autonomously since 2019: the task horizon doubled roughly every seven months for six years, accelerated to about every four months across 2024–25, and by early 2026 the leading model completes tasks that would take a skilled engineer most of a working day. The trendline matters more than the level — the loop keeps getting longer, and every doubling moves work from the copilot column to the agent column.',
    },
    {
      kind: 'p',
      text:
        'Three consequences follow, and they multiply. The human bottleneck is removed, so attention-hours no longer cap output. Work parallelizes, because agents launch agents — ten to a hundred workstreams from one instruction. And the duty cycle changes: forty human attention-hours become 168 machine-hours a week. One analyst helping you becomes a thousand analysts working around the clock. One qualifier: reliability and supervision still bind, failures are real, and Part 03 will meet a famous one. The direction, though, is not in dispute — and the direction is what the meters bill.',
    },
  ],

  12: [
    {
      kind: 'p',
      text:
        'The proof is public and dated, and most of it comes from the platforms’ own disclosures. GitHub now carries 180 million developers, having added 36 million in a single year — its fastest cohort ever, better than one new developer every second. Developers pushed nearly a billion commits in 2025, up 25% in a year, with a record hundred million in August alone. Roughly 80% of new developers use Copilot within their first week — the tool is no longer an add-on but the default way in. In early 2026, GitHub measured a majority — 51% — of committed code as AI-written, and Google reports roughly 75% of its new code is AI-generated and engineer-approved.',
    },
    {
      kind: 'p',
      text:
        'The application layer confirms it from the other direction: 630 million repositories growing by 230 new projects a minute, 20 million developers on Copilot, and 8 million users on Lovable building applications from plain English — people who would never have called themselves developers at all.',
    },
    {
      kind: 'p',
      text:
        'Makers up roughly 2x and the machine-written share up roughly 5x in three years: infinite software is a measured trend, not a metaphor. Every number in the exhibit has a named source and a date, because this piece’s method requires it — and because the next section extrapolates it.',
    },
  ],

  13: [
    {
      kind: 'p',
      text:
        'From 1990 to 2022, software creation was a profession with a syntax wall around it — 30 million people who could speak to machines on behalf of everyone else. The copilot era lowered the wall: 180 million on GitHub, many of them occasional, assisted, half-professional. The natural-language era removes the wall entirely. When describing software is making software, the addressable population of makers is everyone with a job problem and a sentence to describe it.',
    },
    {
      kind: 'p',
      text:
        'That is a maker population of a billion or more, and history says newly-literate populations do not consume politely. When writing stopped being a scribal profession, the result was not slightly more documents; it was bureaucracy, journalism, science, and the novel — categories of output that did not exist when writing was rationed. We will not pretend to know what the software equivalents are. We only note that every one of a billion new makers summons software that must run, store, authenticate, and log somewhere — which is to say, every one of them is a customer of the meters, whether they ever learn what a meter is.',
    },
    {
      kind: 'p',
      text: 'When everyone can make software, the money moves to what all software must rent.',
    },
  ],

  14: [
    {
      kind: 'p',
      text:
        'It is worth walking through a single day, because the abstraction hides where the money lands. Nothing in the sequence below requires a capability that does not exist in 2026 — teams inside Sky1, our own research stack, run this loop weekly, and the 100,000-event figure comes from counting our own traces.',
    },
    {
      kind: 'p',
      text:
        'Notice what survives the afternoon and what doesn’t. The application was summoned, used, and discarded — its replacement cost is an afternoon, so it holds no value. What accumulated was everything underneath it: the state in the operational database, the audit trail of every action the agent took, the identity and access records that said who was allowed to do what. The disposable layer generated the durable layer’s revenue on the way through.',
    },
  ],

  15: [
    {
      kind: 'p',
      text:
        'When production costs collapse, value doesn’t disappear — it moves. What deflates to zero is everything the agent can regenerate on demand: code, tests, documentation, integration glue, one-off tools, and ultimately the custom applications themselves, contested by an infinite knife-fight of entrants whose product can be re-summoned by any customer in an afternoon. What stays metered forever is what no agent can regenerate: the doing of the work, the keeping of its state, and the accounting for what was done. Those three activities — executing, remembering, answering — are billed per unit of use, and they scale with the population of software rather than the price of writing it. Part 03 gives them a name: the backend.',
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
        'Hold on to the shape of that stack, because the layers do not benefit equally. The bottom is capital-heavy and already priced; the top is where the knife-fight of this part plays out. The two in the middle — the layer that meters the work and the layer that keeps the state — sell the three things no agent can regenerate, and they are where this series will argue the money settles.',
    },
    {
      kind: 'p',
      text:
        'Infinite software is the era. Part 02 counts the wave it unleashes — first in tokens, the unit everyone watches, and then in the infrastructure events that actually get billed, the unit almost nobody does. Part 03 follows those events into the stack, layer by layer, and to the two that collect on all of it.',
    },
  ],
};
