/** Part 03 — A Royalty on Machine Labor. Expanded narrative with dated sources. */

import type { Block } from './types';

export const part3: Record<number, Block[]> = {
  39: [
    {
      kind: 'p',
      lead: true,
      text:
        'State the key assumption plainly: we believe the backend stack — the software infrastructure agents run on — is the best place to capture the growth of Parts 01 and 02, and the specific instrument is a royalty on machine labor. This part defends that assumption with filings, and it starts with an invoice. The single most underappreciated fact in this market is that machine labor already has a price sheet: seven vendors have shipped a machine billable unit between 2023 and 2026 — all dated, all public, all checkable against their own pricing pages.',
    },
    {
      kind: 'p',
      text:
        'Intercom priced the outcome first — 99 cents per resolved support ticket, in 2023, when the industry was still debating whether chatbots worked. Cognition priced the agent’s time. Salesforce is the most instructive: it launched Agentforce at $2 per conversation in October 2024, discovered within months what the market would actually bear, and re-priced to ten cents per action — a 95% cut that is not weakness but price discovery, the exact process by which every new commodity finds its unit. Cloudflare priced machine reading itself. And in April 2026, ServiceNow — a seat company if there ever was one — rebuilt its entire catalog into AI-native tiers that run on consumption pools, with large agentic actions drawing 150 “assists” against 25 for small ones, and overage billed on top.',
    },
    {
      kind: 'p',
      text:
        'Four flavors emerge — outcomes, actions, sessions, metered compute — and the variety matters less than the fact of it. The unit of account for machine work is being standardized in public, vendor by vendor, the way the kilowatt-hour was standardized a century ago. When an industry invents a unit of account, the market has arrived; nobody prices a thing that isn’t selling.',
    },
  ],

  40: [
    {
      kind: 'p',
      text:
        'Revenue is events times price times capture. The wave guarantees the first term — roughly 190x by 2029. Prices fall 30 to 40% a year, which we model rather than resist. Capture is the fight, and our elasticity research puts it at 0.5 to 0.7: for every doubling of usage, revenue grows 50 to 70%.',
    },
    {
      kind: 'p',
      text:
        'Measured attach in the filings today reads 0.2 to 0.3, well below the 20-to-40-per-thousand-tokens we described. That is a lag, not a leak, and the mechanics say why. Committed contracts burn first, so surge usage draws down prepaid credits and appears in commitment one to three quarters before it appears in revenue. Pilots meter lightly while production meters everything — and the pilot phase is exactly where the enterprise world still stands: MIT’s widely-cited 2025 study found roughly 95% of enterprise generative-AI pilots had produced no measurable P&L impact. Read as a verdict on AI, that number ended a hype cycle; read as a description of where workloads sit on the graduation curve, it is a schedule of future metering. Where usage caps already bind, more than 75% of buyers keep paying at list.',
    },
    {
      kind: 'p',
      text:
        'Underwriting a royalty on machine labor is underwriting capture. That is what this part prices, meter by meter.',
    },
  ],

  // Site-original exhibit: the royalty, from the agent's side.
  16: [
    {
      kind: 'p',
      text:
        'Before the taxonomy, watch it happen. Give one agent one job — close the books, fix the build, reconcile the ledger — and follow what it touches. It plans in tokens. It acts in runs and compute-seconds. It reads and writes state. It is logged, traced, and identity-checked the entire time. And it hands the finished work back to the systems people already use. Every one of those touches lands on someone’s meter, and none of them is optional — an agent that cannot execute, remember, or answer for itself cannot be trusted with the job at all.',
    },
    {
      kind: 'p',
      text:
        'That is the royalty on machine labor, seen from the inside: not a fee anyone decided to charge, but the sum of what working software must rent to work. The rest of this part maps who collects it.',
    },
  ],

  41: [
    {
      kind: 'p',
      text:
        'Hardware computes, models reason, infrastructure remembers, runtimes coordinate, applications deliver. Five layers — and they do not collect the royalty equally.',
    },
    {
      kind: 'p',
      text:
        'The first thing to notice is how unevenly the public market is distributed across them. Sixty-seven public companies make up the investable universe of this part, and the exhibit counts them layer by layer: forty-two sit at the top, where agents deliver outcomes; nineteen meter the work; six keep the state; and the bottom two layers offer almost nothing to buy — the models have no public pure play, and compute sits outside the universe entirely. The pyramid is widest where prices deflate fastest, and thinnest where the royalty is collected.',
    },
    {
      kind: 'p',
      text:
        'Layer 0 is capital-heavy and already priced: the market needs no help noticing Nvidia. Layer 1 — the models — creates the most value and keeps the least: it is competitive, deflating by design (the 50x price collapse of Part 02 is its business model). Layer 4 is where agents deliver outcomes — and where prices deflate, because anything an agent can rebuild in an afternoon cannot hold a price. The key layers are the two in the middle: the ones that meter work as it happens and accumulate state as it compounds. Everything an agent does passes through both.',
    },
  ],

  42: [
    {
      kind: 'p',
      text: 'Everything that follows rests on one distinction.',
    },
    {
      kind: 'p',
      text:
        'The backend is what agents run on. Strip any agent task to its skeleton and three activities remain, none optional: it must execute (runs, steps, compute-seconds), it must remember (reads, writes, queries, storage), and it must answer for itself (logs, identities, audit trails). That last one is not a technical nicety. When Air Canada’s chatbot invented a refund policy in 2024, a tribunal ruled the airline owned its software’s promises — the company was answerable for what its agent said. When a coding agent at Replit deleted a production database during a code freeze in 2025, the postmortem questions were exactly the backend’s product list: what did it do, what state did it touch, and what does the audit trail say? Twenty-five public companies sell those three activities.',
    },
    {
      kind: 'p',
      text:
        'The worksite is where agents do the work: forty-two companies whose rails get paid per action, whose records convert or compress, and whose seats are the other side of the trade. The royalty is collected in the backend. Winners on the worksite are tracked, but the cohort is not picked there — a distinction that matters because the worksite is where the deflation happens, and the backend is where the work gets billed.',
    },
  ],

  43: [
    {
      kind: 'p',
      text:
        'The universe is fixed in advance: 67 public cloud-software companies, screened by what they sell rather than what they are called. The median name trades at about 4.1x forward revenue and grows about 20%. Only about eleven of the 67 are usage-billed — a first hint of how rare the meter model still is inside “cloud software”.',
    },
    {
      kind: 'p',
      text:
        'Split on the backend–worksite cut, that is 25 public backend names and 42 public worksite names. The next exhibit publishes all 67, so the classification can be checked rather than taken on faith.',
    },
  ],

  45: [
    {
      kind: 'p',
      text:
        'Here it is, name by name: six state meters, nineteen work meters, forty-two worksite names, with the two action rails marked. Any reader can re-run the classification, disagree with a bucket, and tell us so. The roster is the audit trail for the rest of this part.',
    },
  ],

  46: [
    {
      kind: 'p',
      text:
        'A reader who follows this space will notice the most interesting meters are missing from the public universe. They are being built in private, growing at a pace the public names cannot match — and the milestones are specific. Cursor set the record for the fastest software company to $100 million of annual recurring revenue, then ran past half a billion within two years of launch. Lovable took the same $100 million mark in about eight months — the fastest ramp Europe has produced. Replit grew revenue roughly tenfold in under a year as agent-built apps arrived. On the state side, Databricks crossed a $100 billion private valuation on a revenue run-rate near $4 billion — a usage-billed data platform larger than most of the public universe it is not yet part of.',
    },
    {
      kind: 'p',
      text:
        'For this research program they matter twice. They are evidence — private usage-billed infrastructure compounding at triple digits is the wave landing exactly where the thesis says it lands. And they are the pipeline: every name on the exhibit is a future universe entrant, on IPO and one 10-K. The frontier labs are private too — for now, the public market is offered the meters or nothing.',
    },
  ],

  // Site-original exhibit: where the backend grows next.
  95: [
    {
      kind: 'p',
      text:
        'The private list above is also a map of where the backend grows next, because agents are creating categories that did not exist three years ago. Three stand out. Agents need memory — durable state that outlives a session — which is pulling vector and embedding stores from add-on to core infrastructure. A billion agents need identity: credentials, permissions, spending limits, and an attributable owner for every action, a volume that scales with actions rather than headcount. And the third is the one we find most exciting: realtime backends.',
    },
    {
      kind: 'p',
      text:
        'For seventy years the database answered questions when asked. A realtime backend inverts that: application logic runs inside the database, and every change streams instantly to every connected human and agent. The pattern only recently became practical — it demands an in-memory engine fast enough to run the application itself — and it fits the agent era precisely, because a team of agents working one problem needs exactly what a realtime backend provides: one live, shared, consistent view of the world.',
    },
  ],

  // Site-original exhibit: the SpacetimeDB performance case study.
  96: [
    {
      kind: 'p',
      text:
        'The clearest way to make the performance case is to count what disappears. A conventional realtime application runs five systems: an application server for logic, a database for state, a cache to hide the database’s latency, a message broker to move updates, and hand-written code to keep every client’s view consistent. Each user action crosses that pipeline over three or four network hops before anyone sees the result — and every hop is a place to be slow or wrong.',
    },
    {
      kind: 'p',
      text:
        'SpacetimeDB collapses the pipeline into one system. The application uploads its logic into the database itself; state and logic share memory, so a transaction commits without crossing a network; and every committed change streams to each subscribed client automatically. We know the pattern first-hand — Sky1, our own research stack, runs on it — and the public stress test is stronger still: BitCraft Online, a massively multiplayer game whose players inhabit one persistent world, ships with no game servers at all. The entire backend is one module inside the database.',
    },
    {
      kind: 'p',
      text:
        'It belongs in this part because of the meter. A realtime backend charges for exactly what the backend always charges for — executing, remembering, answering — but it hosts more of the workload than any prior database category, because the application itself moved inside. It is still private; the exhibit above marks where it would enter the universe.',
    },
  ],

  47: [
    {
      kind: 'p',
      text:
        'The backend sells into two markets today. State is a $161 billion market growing 18% a year on Gartner’s database forecast — the game there is winning share of something already enormous, and the agent era adds a tailwind. Work is a smaller $25–30 billion market growing 12 to 14% — the metered core of observability and security monitoring.',
    },
    {
      kind: 'p',
      text:
        'And a third market is forming inside work: agent runtime, roughly $1–2 billion today and growing over 100% a year, which our event forecasts put above $10 billion by 2029. And behind both sits roughly $240 billion of annual security budget, almost none of it usage-billed yet — a conversion prize that grows with every agent an enterprise deploys, because the thing security budgets exist to watch is about to multiply a hundredfold.',
    },
  ],

  48: [
    {
      kind: 'p',
      text:
        'Conventional market sizing measures the old market. Machine labor ultimately prices against something far larger: the roughly $35 trillion the world pays every year for knowledge work. The reason is the difference between tools and labor: a tool is worth a fraction of the worker who uses it; work is worth the wage it replaces.',
    },
    {
      kind: 'p',
      text:
        'The arithmetic is simple: the share of task-value the world delegates, times ten to twenty cents billed per human-dollar of work delivered. Our 2029 wave case corresponds to roughly 1% delegated — $35–70 billion a year, a third of today’s enterprise-software market added on top of it. The exhibit shows what the same arithmetic does as delegation compounds through the 2030s. At 5%, machine-labor billings match or double the entire old market, every year. At 15%, they are several old markets a year. At 25% — a quarter of knowledge work delegated — machine-labor billings run five to nine times the market software occupies today. The old market is a line item inside the new one, and delegation share, not software budgets, sets the ceiling on the royalty.',
    },
  ],

  51: [
    {
      kind: 'p',
      text:
        'Scatter all 67 names on growth against multiple and the universe separates into two populations. The grey mass — the worksite apps — clusters below 25% growth and below 8x forward revenue. The backend layers sit apart: the blue and dark dots of work and state hold the high-growth, high-multiple territory almost alone. L2 and L3 are not a better version of the same business as L4; the market already prices them as a different category.',
    },
    {
      kind: 'p',
      text:
        'The names are withheld deliberately: the point of the exhibit is the shape, not the tickers. A market that pays this much for the backend and this little for everything else has already decided what it values. It just hasn’t connected that preference to the agent wave that feeds it.',
    },
  ],

  53: [
    {
      kind: 'p',
      text:
        'The two backend layers run different business models, and conflating them is the most common analytical error we see in this space. State is the ledger: it meters reads, writes, queries, storage — the memory of machine labor. Its moat is data gravity, the oldest force in enterprise software: moving a production database is painful enough that companies carry them across decades and acquisitions. Its revenue arrives slowly and leaves almost never. Work is the toll road: it bills runs, steps, traces, and scans as they happen, which makes it first to feel the wave — and its moat is the audit mandate. You cannot self-audit; the watcher must be independent of the watched. One day in July 2024, when a single bad update from the watching layer grounded airlines and hospitals worldwide, the world learned how deep that layer sits in everything — infrastructure that critical does not get ripped out; it gets renewed.',
    },
    {
      kind: 'p',
      text:
        'Both layers share one more moat, and it is the deepest: correctness. AI today is approximately correct — 99% looks done and is not — which is why the disposable layer above deflates while the exact layer below endures; a ledger or an audit trail at 99% is not a product. They also fail differently, and one failure mode is already visible. Open, portable state formats would break the ledger case — and the open-table-format movement is not hypothetical; the ledger vendors themselves have been pushed to embrace it, which chips the lock-in even as it defends the workload. Model vendors absorbing the runtime would break the toll-road case. Independent falsifiers, one royalty — and both are wired to public metrics on the tripwire list in Part 04.',
    },
  ],

  55: [
    {
      kind: 'p',
      text:
        'Retention is where a usage business tells the truth about itself, because it is the one line that cannot be marketed: it is simply what last year’s customers paid this year. The full window since 2022 shows the shape. All three layers compressed through the optimization cycle of 2022–24 — and then they split. State and work turned up, climbing back to 117 and 115; apps settled at 101 and stayed there — customers renewing the chairs and nothing else.',
    },
    {
      kind: 'p',
      text:
        'The reason is structural rather than commercial. A seat is bought once and renewed annually, so a seat vendor’s growth requires selling something new to someone. A meter is billed every time an agent acts — from a customer who has already signed, with no salesperson involved in the increment. When a customer’s agents work harder, the meter’s revenue rises by itself. This is what a royalty looks like before anyone calls it one, and the climb since early 2024 is the agent era arriving in the one metric that cannot lie.',
    },
  ],

  56: [
    {
      kind: 'p',
      text:
        'The next three exhibits measure one wave three ways, in the order the accounting reports it. First, commitment: deferred revenue is money customers have signed for but not yet consumed, which makes it the earliest public trace of demand — it moves one to three quarters before the income statement does. The state layer’s deferred growth dipped, turned, and re-accelerated to the low twenties; work holds mid-teens; apps drift along at twelve to fifteen, the profile of renewals without expansion.',
    },
  ],

  57: [
    {
      kind: 'p',
      text:
        'If you want the purest read on agent usage available from outside a company, it is overage: usage billed above committed floors, at list price. Nobody budgets for overage; it is what happens when workloads outrun the contract that was negotiated for them. State meters went from 14% to 24% of revenue over six quarters; work meters from 9% to 16%.',
    },
    {
      kind: 'p',
      text:
        'Apps are at zero, and structurally must be — you cannot bill above a floor that doesn’t exist. Floors rising while the overage above them widens is what demand outrunning planning looks like.',
    },
  ],

  58: [
    {
      kind: 'p',
      text:
        'Revenue is the last of the three photographs, because recognized revenue is where the wave arrives after the contracts are signed and the meters have run. The meter layers are accelerating into the twenties while apps fade toward the mid-teens — a quiet three-to-seven-point spread that compounds violently over a decade. Anyone waiting for the income statement to confirm the thesis will be the last to see it; the two exhibits above showed the same wave a year earlier.',
    },
  ],

  59: [
    {
      kind: 'p',
      text:
        'The stock market has already voted — at the layer level, with no selection involved and no judgement about individual names. Since the ChatGPT line on the chart, equal-weighted: state +177%, work +175%, apps +55%. A three-to-one spread in under four years, produced by nothing more than which layer of the stack a company sits in.',
    },
    {
      kind: 'p',
      text:
        'The full period adds a caveat: from January 2022 — which includes the 2022 selloff — work is +46%, state +28%, and apps −9%, still underwater after four and a half years. The deeper a layer fell, the harder it rebounded. The market pays the layers that meter machine labor, not the seats it replaces — it has just never said so out loud.',
    },
  ],

  61: [
    {
      kind: 'p',
      text:
        'Here is the anomaly this entire piece is built around. Four and a half years of multiples show all three layers falling in 2022 and then grinding sideways-to-down — through the biggest software demand shock ever recorded. The returns of the previous exhibit were earned by earnings growth dragging flat multiples along, not by the market paying more per point of growth.',
    },
    {
      kind: 'p',
      text:
        'Nothing is priced for agents; consensus forward numbers carry zero of them. The state layer is the cleanest illustration: growth turned up from 13% to 20% while the multiple did not move, leaving it at roughly 0.26x its growth rate — half the cohort’s ~0.5x. The work layer got cheaper while growing steadily, its audit mandate still priced as a maintenance product rather than a meter. A market that has repriced every AI narrative from chips to power utilities has, so far, declined to reprice the layer that bills the work.',
    },
  ],

  62: [
    {
      kind: 'p',
      text:
        'Zoom into the state layer and the anomaly sharpens into a single picture: two lines that are supposed to move together, moving apart. The growth line climbs steadily through the period; the multiple rides a small 2024 hill and comes down the other side, ending below where it started. Every point of growth the layer added was answered with a flat-to-lower price on that growth.',
    },
  ],

  63: [
    {
      kind: 'p',
      text:
        'The work layer tells the mirror-image story: growth that never wavered — a steady band in the low twenties for three years — against a multiple that peaked above 12x and has been marked down ever since. This is the layer with the audit mandate, the 26% cash margins, and the strategic acquirers circling, priced as if its best quarters are behind it. One of the two lines in this picture is wrong about the future; the filings keep siding with the growth line.',
    },
  ],

  64: [
    {
      kind: 'p',
      text:
        'And the businesses are not merely growing; they are converting. Work turns 26% of revenue into free cash flow, apps 22%, and state has climbed from roughly breakeven in 2022 to 21% — including six points in the last year alone, the operating leverage of usage models arriving as they scale past their fixed costs.',
    },
    {
      kind: 'p',
      text:
        'Taken together, the last four exhibits show commitments re-accelerating, overage widening, revenue turning up, and margins expanding. Growth and margins improving at the same time is the rarest combination in software. What the market has paid for it so far is the next question — the share prices first, then the valuation.',
    },
  ],

  65: [
    {
      kind: 'p',
      text:
        'One more market check, from the buyers with the most information: strategic acquirers keep paying for meters, and the table shows the pattern in one read. Every acquired name sits on the backend — work meters mostly, two state meters — and the price paid tracks how fast the meter was growing into the deal: GitHub at ~40% growth commanded ~28x; Informatica at ~5% went for under 5x; the pending CyberArk offer, at ~30% growth, is priced near 22x. The average across the set is roughly 12x revenue — about double where the public layers trade today.',
    },
    {
      kind: 'p',
      text:
        'That sets a floor of sorts under the public names — made by buyers who have done the diligence the public market has not. The same corporate-development teams whose companies’ consensus estimates carry zero agents keep paying meter multiples for meter assets. The analysts’ models and the acquirers’ models disagree; only one of them writes checks.',
    },
  ],

  66: [
    {
      kind: 'p',
      text:
        'Seven rounds, each scored from an exhibit in this part, and the card reads state 4, work 3 — close on purpose, because the layers are good at different things. The resolution is not a winner but two clocks. The toll road bills the next three years: usage revenue recognizes as agents act, at 26% cash margins, with acquirers circling. The ledger compounds the decade: gravity accumulates with every write, and never rewinds.',
    },
    {
      kind: 'p',
      text:
        'Each clock carries its own falsifier, written down in advance — open state formats for the decade case, runtime absorption for the three-year case — and Part 04 wires both to public metrics. Different moats, different risks, independent failure modes: one royalty.',
    },
  ],

  68: [
    {
      kind: 'p',
      text:
        'The royalty, measured: retention of ~117 against ~101, overage share climbing from 14% to 24%, and the meter layers at 5–7x forward revenue with real cash margins — multiples that assume the fade while the filings print the turn. Part 01 named the era; Part 02 modeled the demand and measured the wave; this part located who bills it and showed the receipts.',
    },
    {
      kind: 'p',
      text:
        'What remains is what a research program owes its readers: name the instrument precisely, state what it is worth under explicit assumptions, put dates on the predictions, and stand in public to be graded. That is Part 04 — where this piece stops describing a wave and starts keeping score of one.',
    },
  ],

  // Site-original exhibit: the vendor equation.
  130: [
    {
      kind: 'p',
      text:
        'The model of Part 02 ends in backend units. Revenue needs four more terms. Does the workload touch this category — maybe only 70% of it gets instrumented. Does this vendor capture it — maybe a quarter of the relevant workloads. Is it billable — sampling may pass only a third of incremental telemetry to the invoice. And what happens to price per unit, when volume discounts and cheaper hardware push it down. For each name: incremental revenue = incremental backend units × attach × share × pass-through × realized price.',
    },
    {
      kind: 'p',
      text:
        'The last two terms keep the model honest. A vendor can watch machine workload explode while revenue merely grows. The next three sections apply the equation to the three meters — each with a different bottleneck.',
    },
  ],

  // Site-original exhibit: MongoDB model.
  131: [
    {
      kind: 'p',
      text:
        'MongoDB’s machine-demand equation: agent workflows × stateful share × database operations per workflow × efficiency, plus a storage term — persistent bytes × retention. Concurrency matters on top: Atlas bills dedicated clusters on provisioned compute, memory, and storage, so many agents working at once can force larger tiers even when transaction counts look modest.',
    },
    {
      kind: 'p',
      text:
        'The biggest 2031 question for MongoDB is not how many database calls agents make. It is whether persistent agent state — memory, checkpoints, task history, artifacts — becomes a major new class of operational application data. If it does, the database becomes the memory of the machine workforce, and that is a structurally larger thesis than incremental transactions.',
    },
  ],

  // Site-original exhibit: Snowflake model.
  132: [
    {
      kind: 'p',
      text:
        'A human analyst answers a question in about three Snowflake queries. An agent answering the same question queries, inspects the result, reformulates, queries again, validates, cross-checks another table, retries, and investigates the anomaly it just found — twenty-five queries. Roughly an 8x gross multiplier per workflow, before efficiency.',
    },
    {
      kind: 'p',
      text:
        'Snowflake increasingly exposes both sides of this: warehouses, storage, and services bill platform credits, while Cortex agent features bill AI credits — and agent workflows generate additive costs across the services they invoke. The ratio we track is queries — better, credits — per agent-hour. The offset to watch is semantic caching, so the honest series is net queries: gross × (1 − cache rate).',
    },
  ],

  // Site-original exhibit: Datadog model.
  133: [
    {
      kind: 'p',
      text:
        'Datadog has the largest action multiplier of the three — every step of the agent waterfall emits spans and log bytes, and Cloudflare’s agent traces show what that waterfall looks like: invocations, subagents, model calls, tool calls, database operations. But raw telemetry is not revenue. Sampling and retention sit between ingest and invoice, so ten times the spans might be three times the billable consumption.',
    },
    {
      kind: 'p',
      text:
        'That makes pass-through the Datadog question: does agent complexity force enterprises to buy more observability even while they sample more aggressively? We track it as spans and log gigabytes per agent-hour, times sampling rate, times billable retention — and we treat strong workload growth with weak pass-through as a real bear case, not a rounding error.',
    },
  ],

  // Site-original exhibit: five sensitivities.
  134: [
    {
      kind: 'p',
      text:
        'A bull, base, and bear model does not need fifty assumptions. It needs five. Penetration is the obvious one. Work expansion is the underappreciated one. The action multiplier is where the backend gets its leverage. Efficiency is the offset that can quietly destroy a naive thesis. Pass-through converts workload into dollars — or fails to.',
    },
    {
      kind: 'p',
      text:
        'Everything else in the framework is detail around those five. When we update the model each quarter, these are the rows that move the answer.',
    },
  ],
};
