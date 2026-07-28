/**
 * The tracker — live aggregates plus the quarterly grading the deck's
 * disclosures promise: "assumptions and kill triggers are maintained at
 * machineoracle.ai and graded quarterly."
 *
 * Charts read from data/tracker.ts; regrading a quarter means appending a row
 * there and updating the grades below.
 */

import { AS_OF, NDR_BODY, NDR_LATEST, OVERAGE_BODY, REV_YOY_LATEST, RPO_BODY, RPO_YOY_LATEST } from '../data/tracker';
import type { Article } from './types';

export const tracker: Article = {
  slug: 'tracker',
  kind: 'article',
  navLabel: 'Tracker',
  title: 'The tracker',
  subtitle: 'The aggregate the thesis rides on, updated each print — and every forecast graded against it.',
  date: AS_OF,
  blurb: 'Live aggregate retention, backlog, and overage across the tracked meters, with the wave-case forecast and the kill conditions graded quarterly.',
  blocks: [
    {
      kind: 'p',
      lead: true,
      text:
        `The three series below are the thesis reduced to what can be measured from filings. Retention says the royalty is compounding; backlog says the demand is already contracted; overage says agents are outrunning the budgets set for them. Aggregate revenue across the tracked meters grew ${REV_YOY_LATEST}% year over year at the latest print; the dashed extensions are our wave-case forecast out to 2030, written in July 2026 — before any of the prints it predicts. Each quarter, one dashed point becomes a solid one, or it doesn't.`,
    },
    {
      kind: 'note',
      text:
        'Constituents are individual holdings in the tracked aggregate, shown anonymized. Retention is a revenue-weighted average of disclosed rates (midpoints where a company discloses a range); backlog is summed RPO as filed; both compiled from public filings. Overage is a Skycatcher model, not a disclosed figure. Reporting cycles are aligned by quarter-end month. Approximate; re-verify against the Sky1 export before external use.',
    },

    { kind: 'h2', text: 'Net revenue retention' },
    {
      kind: 'exhibit',
      body: NDR_BODY,
      source:
        `Latest: ${NDR_LATEST}%. The grading test is direction — the wave case needs retention rising print over print; the fade needs it flat or rolling over.`,
    },

    { kind: 'h2', text: 'Contracted backlog (RPO)' },
    {
      kind: 'exhibit',
      body: RPO_BODY,
      source:
        `Latest: +${RPO_YOY_LATEST}% year over year against +${REV_YOY_LATEST}% revenue — backlog compounding faster than revenue is the signature of committed usage running ahead of recognition.`,
    },

    { kind: 'h2', text: 'Overage (modeled)' },
    {
      kind: 'exhibit',
      body: OVERAGE_BODY,
      source:
        'Skycatcher estimate from on-demand revenue, consumption-vs-capacity timing, and credit disclosures. The purest agent signal we can construct, and the softest number on this page — treated accordingly in the grading.',
    },

    { kind: 'h2', text: 'The forecasts' },
    {
      kind: 'exhibit',
      body: {
        kind: 'table',
        head: ['Forecast', 'Threshold', 'Window', 'Grade'],
        rows: [
          ['The prints confirm the turn', 'Retention rising · backlog growth > 45%', 'Aug–Nov 2026', 'Pending'],
          [
            'The seat recession goes visible',
            'A major vendor reports shrinking seats with growing revenue · “agent GAAP” disclosures arrive',
            '2027',
            'Pending',
          ],
          [
            'Machine-work units go mainstream',
            'Billable events pass 5Q/yr · overage > 30% of aggregate meter revenue',
            '2028',
            'Pending',
          ],
          [
            'The wave lands in full',
            'Tokens cross 2 quintillion/yr · the meters bill ~$44B',
            '2029',
            'Pending',
          ],
        ],
      },
      source: 'Thresholds per Part V. Graded against company filings and platform disclosures via Sky1.',
    },

    { kind: 'h2', text: 'The assumptions underneath' },
    {
      kind: 'exhibit',
      body: {
        kind: 'table',
        head: ['Assumption', 'Level today', 'Level required', 'Grade'],
        rows: [
          ['Token growth', '100Q/yr (2026)', '~2,700Q/yr by 2029 (×3/yr)', 'On track — baseline'],
          ['Doing-share of tokens', '~15%', '≥ 60% by 2029', 'On track — baseline'],
          ['Event attach', '0.2–0.3 measured', '20–40 per 1K agentic tokens as workloads graduate', 'Lagging by design — see Part IV'],
          ['Usage→revenue elasticity', '0.5–0.7 measured', 'Holds as mix shifts to premium tiers', 'On track — baseline'],
        ],
      },
    },

    { kind: 'h2', text: 'Kill conditions' },
    {
      kind: 'exhibit',
      body: {
        kind: 'table',
        head: ['Trigger', 'What it would mean', 'Status'],
        rows: [
          ['Token prices refuse to fall for 2 consecutive quarters', 'The buildout is breaking — assumption 1 fails', 'Not triggered'],
          ['A full 10x price tier down buys only ~10x demand', 'Elasticity collapsed to the street’s floor', 'Not triggered'],
          ['API-vs-consumer token split stalls for a year', 'The mix shift from asking to doing has stopped', 'Not triggered'],
          ['Overage share reverses', 'The budget governor binds for years, not quarters', 'Not triggered'],
        ],
      },
      source:
        'Each trigger maps to a pre-written weight action executed inside the quarter. Multiple discipline runs the other way too: growth-adjusted > 1.2x = sell into the parabola.',
    },

    {
      kind: 'note',
      text:
        'Grades are Skycatcher’s own assessments of public data and are not independent research. Forward-looking statements; see Disclosures at the end of Part V.',
    },
  ],
};
