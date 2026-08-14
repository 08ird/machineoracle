/**
 * Part 04 — Machine Oracle. Expanded narrative. The definitions, coda, and
 * other written sections without exhibits live in conclusion.ts.
 */

import type { Block } from './types';

export const part4: Record<number, Block[]> = {
  70: [
    {
      kind: 'p',
      lead: true,
      text:
        'The rule: a company enters the cohort when the majority of its revenue is recognized from measured consumption — billed per unit used, or drawn down against commitments. No picks, no weights, no hindsight. Anyone applying it gets the same names.',
    },
    {
      kind: 'p',
      text:
        'Applied to the 25-name backend, the rule admits three companies: Snowflake, MongoDB, and Datadog. The mechanical framing is the difference between research and salesmanship: a stock pick asks you to trust the picker; a rule asks you to check the filing. The rule could have been applied in 2022 from public pricing pages alone — no foresight required, no story about management vision, no judgement calls that conveniently favor the author. The thesis is stated as an instrument anyone can replicate, because claims that cannot be replicated cannot be graded, and Part 04 exists to be graded.',
    },
    {
      kind: 'p',
      text:
        'What the rule captures, in one line: these are the only three companies in the backend whose income statements are already wired directly to machine work. When agents act, these meters bill. Everything this piece has argued — the era, the wave, the royalty — funnels through that wiring.',
    },
  ],

  71: [
    {
      kind: 'p',
      text:
        'Every constituent is shown its work. Snowflake recognizes roughly 95% of product revenue as credits are consumed, per its own 10-K revenue-recognition note. MongoDB’s Atlas — 73% of revenue — bills on usage. Datadog’s committed contracts draw down against measured units, with on-demand billed on top; its revenue moves with usage inside the quarter.',
    },
    {
      kind: 'p',
      text:
        'Just as important is who stays out, because a screen that admits everyone you like is a portfolio wearing a lab coat. Fastly is structurally usage-billed but discloses no percentage — below the confidence bar, onto the converter watchlist. Cloudflare’s own 10-K says revenue is primarily subscription, whatever the narrative says. Elastic’s cloud share sits at 46 to 48% — close, and not majority. Twilio and Bandwidth pass the billing test but sit on the worksite, not the backend. The rule survives contact with the filings; names that fail it stay out, however much we like the story.',
    },
  ],

  73: [
    {
      kind: 'p',
      text:
        'Three names are across the majority-consumption line. Nine are converting toward it, each with a measurable distance to the threshold. Thirteen are subscription today. The ladder is the cohort’s future, drawn as a board: every per-agent SKU, every consumption pool, every usage-billed tier any of the twenty-five ships is an upgrade event here.',
    },
    {
      kind: 'p',
      text:
        'The conversions are not hypothetical — Part 03 opened with ServiceNow tearing up five seat tiers and rebuilding its whole catalog around consumption pools in a single April. That is what a rung being climbed looks like from the outside. The board is re-scored quarterly, in public, and admissions and exits are logged with reasons.',
    },
  ],

  74: [
    {
      kind: 'p',
      text:
        'The wave arrives in the order the accounting requires: contracts first, meters next, revenue last. The full tape back to 2022 shows the whole round trip: hypergrowth in the eighties decelerating for three straight years, bottoming in early 2025 — and then turning. Cohort deferred revenue accelerated from its +17% trough to +32% year over year — demand being signed. Overage went from 11% to 19% of revenue, with dollars more than doubling to about $0.59 billion a quarter — demand outrunning what was signed. Recognized revenue followed, 25% to 32% — demand finally reaching the income statement. One wave, photographed three times at three depths — and the first re-acceleration this cohort has printed since the derate.',
    },
    {
      kind: 'p',
      text:
        'And the rule alone beats the layers: +218% since ChatGPT against +177% for state, +175% for work, and +55% for apps. One mechanical filter — usage-billed or not — separates +218% from +55%. The other side of the cut: the cohort also absorbed the deepest 2022 derate, at −60%, and from January 2022 it is +18%, behind both layers on the full period. We show that deliberately — consumption is higher-beta in both directions, and the round trip matters more than the flattering half.',
    },
  ],

  81: [
    {
      kind: 'p',
      text:
        'The natural objection to a 33%-growth cohort is that growth decays — every software analyst has watched it happen a hundred times. We think this one accelerates instead, and the mechanisms are individually measurable in filings rather than a matter of conviction: the +32% commitment growth is already signed and sitting on the balance sheet; overage re-rates floors at every renewal; agent workloads stack a second S-curve on a cloud base still growing 20%; and the wave’s transmission is direct — 40x tokens driving ~190x events onto exactly these meters.',
    },
    {
      kind: 'p',
      text:
        'The retention math is the quiet one worth understanding. At the cohort’s ~117 and rising, the installed base alone compounds double digits before a single new customer signs. If agent workloads push net dollar retention past 130, the installed base compounds above 30% by itself. That is not a hypothetical ceiling: Snowflake ran retention near 170 through the last platform shift, when cloud data workloads were the new S-curve. Meters have done this before, on a smaller wave.',
    },
  ],

  76: [
    {
      kind: 'p',
      text:
        'Before any scenario, the discipline: we do not set price targets, and the cohort’s multiple has always tracked its growth rate rather than sentiment. Growth-adjusted, it has sat near 0.4–0.5x through a 42x peak, a 10x trough, and today’s 16.5x — three regimes that felt nothing alike and priced almost identically per point of growth.',
    },
    {
      kind: 'p',
      text:
        'That regularity is why we frame value in growth ranges, not point multiples. Guess the multiple and you are guessing mood; establish the growth band and the market’s own step-function does the rest. So the entire valuation question in this part reduces to one input: which growth world arrives.',
    },
  ],

  77: [
    {
      kind: 'p',
      text:
        'From about $11.3 billion of trailing revenue, here is 2029 framed as three-and-a-half-year CAGR ranges. The fade is consensus: growth exits the decade in the high teens, agents never become a revenue line, and the cohort earns $21–25 billion. Understand what that implies before dismissing it as pessimism — it is a forecast that the 2,000x token expansion, the overage acceleration, and the commitment surge all stall roughly now. That is what today’s price carries.',
    },
    {
      kind: 'p',
      text:
        'Partial conversion is the world where the wave arrives but leaks: event volumes on the street-floor token path, capture below our measured band — $25–33 billion. The wave is the ~4,000Q case run through four deliberate haircuts — falling unit prices, discounted commitments, measured capture, compute-heavier margins — landing near $42 billion. And the selectors that decide between these worlds are written down in advance: commitment above 40%, overage above 25%, net dollar retention above 130. Watch three numbers each quarter and you will know which world you are in years before the sell side re-models it.',
    },
  ],

  78: [
    {
      kind: 'p',
      text:
        'Revenue is the easier half. The cash bridge is what turns a good revenue outcome into a re-rating: today the cohort converts about 25% of ~$11 billion into ~$2.8 billion of free cash flow. The street’s own fade still roughly doubles that by 2029. The wave case reaches ~$42 billion at ~34% margins — about $14 billion of annual free cash flow, a five-fold increase — because usage revenue drops through at software economics: the second million queries cost almost nothing more to serve than the first.',
    },
  ],

  79: [
    {
      kind: 'p',
      text:
        'One more piece of market structure decides how much any of this is worth: across the 67-name universe, the multiple is a step-function, not a slope. Below 10% growth, about 3.1x forward revenue. Ten to twenty, 3.8x. Twenty to thirty, 4.9x. Above thirty — 15.1x.',
    },
    {
      kind: 'p',
      text:
        'Past roughly 30% growth, the tape triples what it pays, because durable 30%+ growth in public software is rare enough that the handful of names exhibiting it get scarcity pricing. Which band a name occupies is the only multiple question that matters — and the three growth worlds map directly onto the bands. The fade parks the cohort in the 4.9x room; the wave holds it in the 15x room with earnings five times higher. Nothing about that arithmetic requires optimism; it requires only deciding which world the filings are describing.',
    },
  ],

  80: [
    {
      kind: 'p',
      text:
        'A fair question at this point is how much of this depends on AI capability continuing to improve. Less than you would expect: the meters work across the timeline distribution. In the slow world — models plateau near current capability — the street’s own fade still grows the cohort about 2.2x in revenue terms, because the floor is an elasticity bet on already-shipped capability, not an AI bet. In our wave, the demand stack alone puts the cohort in the top growth band. In the Aschenbrenner world, effective machine labor outruns even the token counts, and metered rails are among the few public claims on it.',
    },
    {
      kind: 'p',
      text:
        'The edge of the map: the one world the thesis does not cover is machine labor migrating off public rails entirely — sealed labs, national projects, work that never touches a rentable meter. We flag it because a thesis that covers every world is a faith, and this is not that. It sits on the bear-case ledger with the rest.',
    },
  ],

  82: [
    {
      kind: 'p',
      text:
        'This is a research program, so the calls are dated, falsifiable, and graded in public — with misses published as prominently as hits. Eight predictions, each keyed to a disclosure someone else controls: platform token prints, cohort filings, vendor SKU counts, consensus revisions, takeout multiples. Nothing on the list can be quietly reinterpreted after the fact, which is the point. Forecasts that cannot be wrong are marketing.',
    },
  ],

  83: [
    {
      kind: 'p',
      text:
        'And five bolder calls, on a longer clock — direction is the claim, timing is the error bar. Each one carries a number to grade it from. The largest meter today bills about $4.5 billion a year, so the first $100 billion meter is a twenty-fold from here — roughly a decade of wave-case growth. The trillion-dollar call is measured the plain way: the summed annual revenue of the 25 public backend names, roughly $60 billion today, needs about a 17x, and this site re-sums it quarterly. The out-earning call compares that same public backend revenue with what the frontier labs — OpenAI, Anthropic, xAI, Mistral — bill for tokens: roughly three dollars of lab revenue for every dollar the cohort meters today, a ratio we track until it inverts, the way it did for engines and rails. Every prior industrial input followed this path from novelty to line item to sector. The dates will be wrong; the sequence, we think, will not be.',
    },
  ],

  84: [
    {
      kind: 'p',
      text:
        'Six tripwires, written before they are needed. Each is measurable in public data, each is mapped to an action, and together they cover both clocks from Part 03 — the wave premise, the conversion, the retention gap, the capture, the gravity, and the runtime.',
    },
    {
      kind: 'p',
      text:
        'The strongest case against us, stated at full strength: attach is an engineering artifact; vendors cannibalize themselves; Jevons proves the wave but not the royalty; the historical precedents cut against vendor margins; the hyperscalers bundle it away; the endgame nationalizes off public rails. These are serious, and pieces of them have already happened in miniature — Klarna spent 2024 boasting that its assistant did the work of seven hundred agents and spent 2025 walking parts of it back and rehiring for quality, a useful reminder that agent economics arrive unevenly and get re-priced in daylight. Against each objection we hold a measured counter — overage at list accelerating, more than 75% still paying at enforced limits, premium mix gaining share, our own production telemetry in Sky1, a decade of meters compounding through first-party bundles, and enterprise workloads staying on rented rails in every prior mobilization. The thesis doesn’t need protection from this argument; it needs to be worth beating it.',
    },
  ],

  86: [
    {
      kind: 'p',
      text:
        'A screen with three names invites the question of what happens when the wave arrives. The answer is that the cohort is designed to grow, from three directions at once: public converters crossing the 50% line, private meters arriving by IPO, and seat companies whose agent SKUs compound into majority. The precedent for the third path is already a constituent — MongoDB’s Atlas was 26% of revenue in 2019 and is 73% today; the rule watched a subscription company become a meter and admitted it when the filings said so.',
    },
    {
      kind: 'p',
      text:
        'Companies cross the membrane; the rule doesn’t move. That asymmetry is what makes the cohort an instrument for the decade rather than a snapshot of 2026.',
    },
  ],

  87: [
    {
      kind: 'p',
      text:
        'Where does this settle? Our view of the 2030s, layer by layer — and it is a claim about which parts of the stack accumulate rather than which vendors win. Apps fragment as infinite software dissolves the packaged product. Models commoditize toward utility economics — enormous value created, brutal value retention, the fate of every engine from steam to jet. Compute captures cycles, not annuities. Work earns the toll, defended by the one moat that strengthens as agents multiply: the auditor cannot be the vendor it audits, so neutrality itself becomes a priced service. And state compounds — the only layer where time is an ally, because memory is the one asset agents make more valuable with every task they complete.',
    },
    {
      kind: 'p',
      text:
        'The pattern underneath: the layers that rewrite every year compete; the layers that accumulate compound. Every industrial era eventually made this same sorting — engines commoditized, rails and ledgers endured — and there is no visible reason software’s labor era sorts differently.',
    },
  ],

  88: [
    {
      kind: 'p',
      text:
        'The firm changes shape too. Revenue decouples from headcount, and revenue per employee becomes the defining metric of the era — the corporate scoreboard equivalent of what Part 01 did to the cost of software. The signs are already on record: Shopify’s CEO told his company in 2025 that teams must prove a job cannot be done by AI before hiring for it, and the standing joke in venture — the one-person billion-dollar company — has stopped being a joke and started being a milestone someone will hit.',
    },
    {
      kind: 'p',
      text:
        'Follow the consequences down the income statement. Compensation shifts from salaries toward metered compute — labor cost becoming a utility bill that flexes daily, landing on exactly the meters this piece tracks. Firms get smaller and more numerous — Coase in reverse: when coordination is nearly free, the boundary of the firm shrinks, and a thousand ten-person teams attempt what one ten-thousand-person company used to. Management becomes review, intent, and audit. And the durable moats stop being code — anyone can summon code — and become proprietary state and earned trust. Every one of these changes routes through the meters.',
    },
  ],

  90: [
    {
      kind: 'p',
      text:
        'What we publish, every quarter — so the program can be checked rather than believed. The indices mark from inception, August 11, 2026 = 100, live, with no back-fill and no retouching. The tape re-measures commitment, overage, retention, and growth every filing season — the selectors that pick the growth world. The ladder re-scores all twenty-five backend names against the line. The ledger grades the predictions on schedule. All of it runs in the [Machine Oracle tracker](tracker.html), which updates from filings rather than from us.',
    },
    {
      kind: 'p',
      text:
        'This site is the program’s public instrument, and its purpose is to timestamp a call: that machine labor — named, defined, and measured here — is the tidal wave of the coming decade, recorded before the consensus arrives rather than after. If we are right, the record will show it was called early, in public, with the reasoning attached. If we are wrong, the same record will show exactly where. Either outcome is the point.',
    },
  ],

  91: [
    {
      kind: 'p',
      text: 'The argument, assembled.',
    },
    {
      kind: 'p',
      text:
        'An era in which software production left human hands. A wave measured at 2,000x and forecast — as a deceleration — to run 40x more, amplifying to ~190x where it lands. A royalty already visible in retention, commitment, and overage, billed by three companies a mechanical rule selects. And a price: roughly 16x forward revenue, a growth-adjusted multiple identical to the trough of 2022 — for the fastest-growing, most directly wired claims on machine labor in public markets. Consensus prices the fade; the growth worlds above it are the debate; the ledger will grade every claim.',
    },
    {
      kind: 'p',
      text:
        'If the reader takes one idea from this piece, take the definition, not the screen: machine labor — work performed by software, billed by the unit — is real, priced, and compounding, and almost nothing in public markets is modeled for it. Understanding that one idea early is worth more than any list of tickers, because it re-frames a decade of decisions that have not been made yet. The rest of this site exists to test the idea in public, every quarter, until the record settles it.',
    },
  ],
};
