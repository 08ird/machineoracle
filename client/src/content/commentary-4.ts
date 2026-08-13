/**
 * Part 04 — Machine Oracle. Includes the definitions section, the conclusion,
 * and the coda, which have no exhibit of their own and are rendered as written
 * sections by the deck's `conclusion` sequence.
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
        'Applied to the 25-name backend, the rule admits three companies: Snowflake, MongoDB, and Datadog. It could have been applied in 2022 from public pricing pages alone. That is the point — the thesis is stated as an instrument anyone can replicate, not a portfolio only we can explain.',
    },
  ],

  71: [
    {
      kind: 'p',
      text:
        'Every constituent is shown its work, and so is everyone who stays out. Just as important as who is in: Fastly is structurally usage-billed but discloses no percentage, which puts it below the confidence bar and onto the converter watchlist. Cloudflare’s 10-K says revenue is primarily subscription. Elastic’s cloud share sits at 46 to 48%, below majority. Twilio and Bandwidth pass the billing test but sit on the worksite, not the backend.',
    },
    {
      kind: 'p',
      text: 'The rule survives contact with the filings; backend names that fail it stay out, however much we like the story.',
    },
  ],

  73: [
    {
      kind: 'p',
      text:
        'Three names are across the majority-consumption line. Nine are converting toward it, each with a measurable distance to the threshold. Thirteen are subscription today — and every per-agent or per-action SKU any of them ships is an upgrade event on this board.',
    },
  ],

  74: [
    {
      kind: 'p',
      text:
        'The wave arrives in the order the accounting requires: contracts first, meters next, revenue last. Cohort deferred revenue accelerated from +19% to +32% year over year in five quarters. Overage went from 11% to 19% of revenue, with dollars more than doubling to about $0.59B a quarter. Recognized revenue growth followed, 25% to 32%.',
    },
    {
      kind: 'p',
      text:
        'And the rule alone beats the layers: +218% since ChatGPT against +177% for state, +175% for work, and +55% for apps. One mechanical filter — usage-billed or not — separates +218% from +55%. The honest cut is that the cohort also absorbed the deepest 2022 derate, at −60%, and from January 2022 it is +18%, behind both layers on the full period. The tape pays consumption over seats, mechanically, on both sides of the derate.',
    },
  ],

  81: [
    {
      kind: 'p',
      text:
        'The natural objection to a 33%-growth cohort is that growth decays. We think it accelerates from here, and the mechanisms are individually measurable in filings rather than a matter of conviction.',
    },
  ],

  76: [
    {
      kind: 'p',
      text:
        'Before any scenario, the discipline: we do not set price targets, and the cohort’s multiple has always tracked its growth rate rather than sentiment. Growth-adjusted, the multiple has sat near 0.4–0.5x through a 42x peak, a 10x trough, and today’s 16.5x.',
    },
    { kind: 'p', text: 'That is why we frame value in growth ranges, not point multiples.' },
  ],

  77: [
    {
      kind: 'p',
      text:
        'From about $11.3B of LTM revenue, here is 2029 framed as three-and-a-half-year CAGR ranges. The fade is consensus — growth exits the decade in the high teens and agents never become a revenue line; that is what today’s price carries. Partial conversion has event volumes arriving on the street-floor token path while capture leaks. The wave is the ~4,000Q case run through four haircuts: falling unit prices, discounted commitments, measured capture, and compute-heavier margin.',
    },
  ],

  78: [
    {
      kind: 'p',
      text:
        'Revenue is the easier half. The cash bridge is what turns a good revenue outcome into a re-rating, and usage revenue drops through at software economics.',
    },
  ],

  79: [
    {
      kind: 'p',
      text:
        'One more piece of market structure decides how much any of this is worth: across the 67-name universe, the multiple is a step-function rather than a slope.',
    },
    {
      kind: 'p',
      text:
        'Past roughly 30% growth, the tape triples what it pays. Which band a name occupies is the only multiple question that matters — and the three growth worlds map directly onto those bands.',
    },
  ],

  80: [
    {
      kind: 'p',
      text:
        'A fair question at this point is how much of this depends on AI capability continuing to improve. Less than you would expect: the meters work across the timeline distribution.',
    },
  ],

  82: [
    {
      kind: 'p',
      text:
        'This is a research program, so the calls are dated, falsifiable, and graded in public — with misses published as prominently as hits.',
    },
  ],

  83: [
    {
      kind: 'p',
      text:
        'And five bolder ones, on a longer clock. Direction is the claim; timing is the error bar.',
    },
  ],

  84: [
    {
      kind: 'p',
      text:
        'Six tripwires, written before they are needed. Each is measurable in public data, and each is mapped to an action.',
    },
    {
      kind: 'p',
      text:
        'The strongest case against us, stated at full strength: attach is an engineering artifact; vendors cannibalize themselves; Jevons proves the wave but not the royalty; the historical precedents cut against vendor margins; the hyperscalers bundle it away with first-party services; and the endgame nationalizes off public rails. Against each we hold a measured counter — overage at list accelerating, more than 75% still paying at enforced limits, premium mix gaining share, our own production telemetry in Sky1, a decade of compounding through first-party bundles, and enterprise workloads staying on rented rails in every prior mobilization. The thesis doesn’t need protection from this argument; it needs to be worth beating it.',
    },
  ],

  86: [
    {
      kind: 'p',
      text:
        'A screen with three names invites the question of what happens when the wave arrives. The answer is that the cohort is designed to grow, from three directions at once — and the rule itself never moves.',
    },
  ],

  87: [
    {
      kind: 'p',
      text:
        'Where does this settle? Our view of the 2030s, layer by layer — and it is a claim about which parts of the stack accumulate rather than which vendors win.',
    },
  ],

  88: [
    {
      kind: 'p',
      text:
        'The firm changes shape too. Revenue decouples from headcount, and the consequences run all the way to the income statement.',
    },
  ],

  90: [
    {
      kind: 'p',
      text:
        'What we publish, every quarter — so the program can be checked rather than believed.',
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
        'Consensus prices the fade; the growth worlds above it are the debate, and the ledger will grade every claim. Every statement in this piece is dated, sourced, or falsifiable — and the grading continues quarterly.',
    },
  ],
};
