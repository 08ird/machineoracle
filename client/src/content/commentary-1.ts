/**
 * Part 01 — The Machine Economy. Prose keyed by exhibit id.
 *
 * The part's jobs, in order: name the shift (human intent → machine
 * execution), walk its six defining features, ground it in evidence, then
 * hand the reader the seven variables, the master equation, and the four
 * phases — the setup for Part 02 (the model), Part 03 (the money), and
 * Part 04 (the instrument).
 */

import type { Block } from './types';

export const part1: Record<number, Block[]> = {
  // The shift: three chains.
  100: [
    {
      kind: 'p',
      lead: true,
      text:
        'For thirty years, software infrastructure was gated by human attention. A person opened an app, clicked a button, ran a query, wrote code, checked a dashboard. Humans were the rate limiter. AI agents remove that constraint — and that is the shift this series is about: from the internet of human intent to the internet of machine execution.',
    },
    {
      kind: 'p',
      text:
        'The chain is what changes. The cloud era ran humans → software → infrastructure. The agent era runs humans → agents → tools and APIs → infrastructure. The stage after that starts without a person at all: events → agents → other agents → infrastructure. We would not call this the AI era. We would call it the machine economy — the age of machine-generated demand.',
    },
  ],

  // The decoupling.
  101: [
    {
      kind: 'p',
      text:
        'Backend systems have always grown with people: employees, developers, customers, users, and the transactions those users started. Agents sever that relationship. A company with 10,000 employees no longer has 10,000 workers touching its data infrastructure — it can have 10,000 employees, 50,000 persistent agents, hundreds of thousands of transient subagents, and millions of autonomous workflows a day.',
    },
    {
      kind: 'p',
      text:
        'That is the decoupling the exhibit draws: backend activity rising against a flat human population. We call the governing ratio machine intensity — machine-generated actions over human-generated actions. Twenty years ago that ratio was set by fixed applications. Agents make it dynamic: software can decide it needs another query, another check, another worker. Demand for infrastructure now grows with the intelligence of the system itself.',
    },
  ],

  // Work expansion.
  102: [
    {
      kind: 'p',
      text:
        'Agents do not just replace work. They cause vastly more work to be performed. An equity analyst covers 30 companies deeply because covering 3,000 is not economical. Make analysis 100x cheaper and the equilibrium is not the same 30 companies with fewer analysts — it is every company, analyzed every day, under hundreds of scenarios.',
    },
    {
      kind: 'p',
      text:
        'This is Jevons — make an input more efficient and its consumption expands — applied to the work itself, not just the price. It held for coal, electricity, transistors, and bandwidth; when DeepSeek’s cheap models briefly convinced the market in January 2025 that efficient AI meant less infrastructure, Microsoft’s CEO answered with exactly this citation. The cost of intelligence falls; the quantity of intelligence consumed explodes; and every unit of it pulls backend resources behind it.',
    },
  ],

  // Passive → active.
  103: [
    {
      kind: 'p',
      text:
        'Traditional software waits. Salesforce waits for someone to update the CRM. Snowflake waits for a query. MongoDB waits for an application request. Datadog waits for software to generate telemetry. Agents do not wait: they monitor, investigate, reconcile, research, test, optimize, report, and act — continuously. Software moves from request → response to a standing loop: observe, reason, act, again.',
    },
    {
      kind: 'p',
      text:
        'That makes duty cycle — active time over available time — one of the biggest swing factors of the next five years. Today most agents look like: prompt, 45 seconds of work, stop. The consequential world is: provision an agent, and it operates for six months. A backend serving 1% duty-cycle agents and one serving 80% duty-cycle agents are different markets. The frontier already shows where this goes: by June 2026, OpenAI’s 99th-percentile Codex users were generating 60+ hours of agent turns per day through parallel agents — machine-hours decoupling from human-hours.',
    },
  ],

  // Fan-out.
  104: [
    {
      kind: 'p',
      text:
        'Follow one task through the machine. A human interaction is short: click, API call, database, response. An agent pursuing a goal reasons, retrieves context, queries the database, calls the model, calls an API, spawns a subagent that retrieves and queries again, validates, retries, writes state, and emits telemetry — before it reports done. One high-level unit of work becomes dozens of low-level machine actions.',
    },
    {
      kind: 'p',
      text:
        'We call the ratio agent fan-out: backend actions per agent task. It is the core variable for the backend thesis, because it breaks the link between adoption and consumption — agent adoption can be modest while backend consumption grows enormously, if fan-out is high.',
    },
  ],

  // State.
  105: [
    {
      kind: 'p',
      text:
        'The early AI era was inference: prompt goes in, tokens come out, nothing persists. Useful agents are different — they need to remember. Identity and permissions. Context and preferences. Checkpoints, task history, artifacts, tool state, transaction history. The architecture moves from model + prompt to model + state + tools + identity + memory.',
    },
    {
      kind: 'p',
      text:
        'The variable is state intensity: persistent state per unit of agent work. If agents stay mostly ephemeral, databases get some incremental transactions. If agents become persistent digital workers, databases become their memory and operating state. Those are two different theses, and the second is much larger.',
    },
  ],

  // Machine-to-machine.
  106: [
    {
      kind: 'p',
      text:
        '“AI usage” will stop meaning humans talking to models. The consequential transitions are agent → API, agent → database, agent → agent, agent → payment. Machines become a new class of economic actor — not legally or morally, but operationally. They consume resources. They authenticate. They transact. They generate data. They hold permissions. They fail. They need security.',
    },
    {
      kind: 'p',
      text:
        'Every item on that list is something someone must meter — which implies a large new infrastructure layer dedicated to machine identity, machine governance, machine observability, and machine state. Part 03 maps who sells those things today.',
    },
  ],

  // Evidence: the production unlock (kept exhibit).
  3: [
    {
      kind: 'p',
      text:
        'Why is this arriving now? Because making software collapsed in price. Two numbers: the cost of a unit of software work fell roughly 4,000x, as agents began writing, testing, and shipping it end to end; and the population able to make software expanded roughly 33x, from 30 million professionals to anyone who can describe what they want. We call the result infinite software — software as abundant as documents.',
    },
    {
      kind: 'p',
      text:
        'Abundant software is the fuel of the machine economy. Every summoned tool, every disposable app, every agent-built workflow lands on the same rented, metered rails — and each one adds machine consumers of infrastructure, not human ones.',
    },
  ],

  // Evidence: METR (kept exhibit).
  97: [
    {
      kind: 'p',
      text:
        'The capability trend is measured, not asserted. METR, an independent evaluation group, has tracked since 2019 how long a software task a frontier model can finish on its own. The horizon doubled roughly every seven months for six years, then accelerated to about every four months across 2024–25. By early 2026, the leading model completes tasks that would take a skilled engineer most of a working day. Every doubling lengthens the loop — which raises duty cycle and fan-out at the same time. One honest caveat, from METR itself: the tasks are well-specified software work, estimates beyond 16-hour tasks are not yet reliable, and real work is messier.',
    },
  ],

  // Evidence: platform proof (kept exhibit).
  12: [
    {
      kind: 'p',
      text:
        'The behavioral evidence is public and dated. GitHub carries 180 million developers, having added 36 million in a single year. In early 2026, GitHub measured a majority — 51% — of committed code as AI-written, and Google reports roughly 75% of its new code is AI-generated and engineer-approved.',
    },
    {
      kind: 'p',
      text:
        'The startup end is further along: in Y Combinator’s Winter 2025 batch, a quarter of the companies had codebases roughly 95% AI-written, and 8 million people on Lovable build applications from plain English. The old way is fading at the same pace — Stack Overflow questions are down roughly three quarters from their 2022 peak, because a stuck developer now asks the model.',
    },
    {
      kind: 'p',
      text: 'Machine share of software production is up roughly 5x in three years — the people didn’t leave; the bottleneck did.',
    },
  ],

  // The seven variables.
  107: [
    {
      kind: 'p',
      text:
        'If you want the whole thesis on one page, these seven variables are it. Penetration spreads the technology. Work expansion creates new activity. Fan-out multiplies backend actions. Duty cycle turns tools into workers. State intensity turns databases into memory. Efficiency is the honest counterweight: agents today retry, re-retrieve the same information, over-query, and send huge contexts — all of that will improve, so 20x more actions could be partly offset by 5x better efficiency. Monetization decides what vendors actually get paid.',
    },
    {
      kind: 'p',
      text:
        'Every forecast this series makes and every signal the tracker grades maps to one of these seven letters. When we are wrong, one of these variables is where.',
    },
  ],

  // The master equation.
  108: [
    {
      kind: 'p',
      text:
        'Multiply them and you have the era’s demand: machine demand = human economic activity × penetration × work expansion × fan-out × duty cycle × efficiency. Then the equity translation: vendor value = machine demand × category exposure × vendor share × monetization. That is the entire research framework in two lines. We increasingly prefer an equivalent form: humans × machine-hours per human × backend actions per machine-hour — it counts what machines do, not how many there are.',
    },
    {
      kind: 'p',
      text:
        'The ranges in the exhibit are our scenario priors for 2026 to 2035 — published to be graded, not asserted as fact. Part 02 turns them into a working model with a worked example.',
    },
  ],

  // Four phases.
  109: [
    {
      kind: 'p',
      text:
        'The era arrives in four phases, and the evidence has made us more aggressive than our earlier framing. In 2026–27, agents prove the unit economics. The loop works — Microsoft reports active agents in Microsoft 365 up 15x in a year, and Datadog sees agent frameworks in nearly twice as many organizations — but roughly 5% of AI requests still fail. This phase is for learning the coefficients, not declaring victory. In 2028–29 comes delegation: “own this workflow, escalate exceptions.” One human commands a portfolio of agents, and backend consumption inflects. We make 2029 the primary investment anchor — the infrastructure inflection.',
    },
    {
      kind: 'p',
      text:
        'In 2030–32, agents become persistent — entities with memory that monitor, respond, sleep, and resume — and 2032 becomes the architectural inflection: the year to watch for machine-generated backend actions passing human-generated ones, first in software-intensive businesses. Beyond 2033, chains start without a person at all. Backend impact leads labor-market impact the whole way: consumption moves at mid-teens penetration, years before agents do most of the work.',
    },
  ],

  // Closer.
  110: [
    {
      kind: 'p',
      text:
        'The thesis, then, where it can be graded. An internet built for humans is gaining a second population of workers — machine-speed, continuous, self-spawning, doing work that was never economical before. The question of the decade is not how much AI inference grows; it is how rapidly machine-generated demand becomes a material share of total software activity.',
    },
    {
      kind: 'p',
      text:
        'Three things gate the outcome, and none of them is the number of agents. Reliable autonomy — the gate between assistance and delegation. Machine-hours per human — the cleanest top-down metric of adoption: perhaps half an agent-hour per person per day in 2026, five by 2029, thirty by 2032, at which point parallel machine work is structurally larger than human work time. And backend actions per machine-hour — the bridge that connects all of it to the meters.',
    },
    {
      kind: 'p',
      text:
        'The rest of the series is built to answer them. Part 02 builds the model: from work, to agent workflows, to backend units, to billable units. Part 03 follows the money into the vendors that collect it. Part 04 turns the framework into a public instrument — predictions, signals, and grades, updated quarterly.',
    },
  ],
};
