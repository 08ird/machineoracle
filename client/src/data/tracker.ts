/**
 * Tracker data — the aggregate the site grades each quarter.
 *
 * Three tracked meters, held anonymously here as m1/m2/m3 (constituent
 * identities are maintained privately; the page shows only the aggregate).
 * Rows are reporting cycles aligned by quarter-end month (two constituents
 * end one month after the third; standard comps treatment), labeled by the
 * calendar quarter the majority's fiscal quarter ends in.
 *
 * revenue: total revenue, $M · ndr: net revenue retention, % (as disclosed;
 * one constituent discloses qualitatively — midpoints used) · rpo: remaining
 * performance obligations, $B.
 *
 * TO REGRADE QUARTERLY: append one row per constituent from the new filings,
 * extend LABELS and OVERAGE_SHARE, refresh FORECAST, bump AS_OF.
 */

import type { Body } from './slides';

export const AS_OF = 'July 2026 · through the May–June 2026 prints';

/** Row labels: 8 reported quarters, then the two forecast quarters. */
const LABELS = ["Q3'24", "Q4'24", "Q1'25", "Q2'25", "Q3'25", "Q4'25", "Q1'26", "Q2'26"];
const FORECAST_LABELS = ["Q3'26e", "Q4'26e"];

interface Series {
  revenue: number[]; // $M
  ndr: number[]; // %
  rpo: number[]; // $B
}

// Values from company filings and press releases; earlier quarters as
// reported, most recent row per the May–June 2026 releases. Approximate where
// a constituent discloses a range.
const m1: Series = {
  revenue: [869, 942, 987, 1042, 1140, 1235, 1300, 1390],
  ndr: [127, 127, 126, 124, 125, 125, 126, 126],
  rpo: [5.2, 5.7, 6.9, 6.7, 6.9, 7.4, 8.6, 9.21],
};
const m2: Series = {
  revenue: [645, 690, 738, 762, 827, 885, 940, 1006],
  ndr: [114, 115, 116, 117, 118, 119, 120, 121.5],
  rpo: [1.79, 1.83, 2.27, 2.3, 2.4, 2.55, 3.05, 3.48],
};
const m3: Series = {
  revenue: [478, 529, 548, 549, 591, 628, 660, 688],
  ndr: [119, 119, 118, 119, 119, 120, 120, 121],
  rpo: [0.72, 0.75, 0.83, 0.8, 0.95, 1.1, 1.35, 1.5],
};

const CONSTITUENTS = [m1, m2, m3];
const N = LABELS.length;

/**
 * Overage share of aggregate revenue — Skycatcher conversion model, NOT a
 * disclosed figure (built from on-demand revenue, consumption-vs-capacity
 * timing, and credit disclosures).
 */
const OVERAGE_SHARE = [0.13, 0.14, 0.15, 0.16, 0.17, 0.19, 0.21, 0.23];

/** Wave-case forecast for the two quarters ahead (dashed on the charts). */
const FORECAST = {
  ndr: [124.2, 125.0],
  rpo: [15.1, 16.6],
  overageShare: [0.25, 0.27],
};

// ── Aggregation ─────────────────────────────────────────────────────────────

const totalRevenue = LABELS.map((_, i) => CONSTITUENTS.reduce((s, c) => s + c.revenue[i], 0));

/** NDR: revenue-weighted average, one decimal. */
const aggNdr = LABELS.map((_, i) => {
  const w = CONSTITUENTS.reduce((s, c) => s + c.ndr[i] * c.revenue[i], 0);
  return Math.round((w / totalRevenue[i]) * 10) / 10;
});

/** RPO: a dollar aggregate, so it sums (weighting would be meaningless). */
const aggRpo = LABELS.map((_, i) =>
  Math.round(CONSTITUENTS.reduce((s, c) => s + c.rpo[i], 0) * 100) / 100
);

/** Overage: modeled share applied to aggregate revenue, $B. */
const aggOverage = LABELS.map((_, i) => Math.round(OVERAGE_SHARE[i] * totalRevenue[i]) / 1000);

const yoy = (arr: number[], i: number) =>
  i >= 4 ? Math.round(((arr[i] / arr[i - 4]) as number) * 100 - 100) : null;

export const RPO_YOY_LATEST = yoy(aggRpo, N - 1); // grades the >45% threshold
export const NDR_LATEST = aggNdr[N - 1];
export const REV_YOY_LATEST = yoy(totalRevenue, N - 1);

// ── Chart bodies ────────────────────────────────────────────────────────────

const X = [...LABELS, ...FORECAST_LABELS];
const pad = <T,>(a: (T | null)[]): (T | null)[] => [...a, null, null];
/** Forecast series bridges from the last actual point so the dash connects. */
const bridge = (actual: number[], fc: number[]) => [
  ...Array(N - 1).fill(null),
  actual[N - 1],
  ...fc,
];

export const NDR_BODY: Body = {
  kind: 'line',
  axis: 'Aggregate net revenue retention, % · revenue-weighted · dashed = wave-case forecast',
  x: X,
  series: [
    {
      name: 'NDR',
      values: pad(aggNdr),
      display: pad(aggNdr.map((v, i) => (i === 0 || i === N - 1 ? v.toFixed(1) + '%' : null))),
    },
    {
      name: 'forecast',
      values: bridge(aggNdr, FORECAST.ndr),
      display: [...Array(N).fill(null), ...FORECAST.ndr.map((v) => v.toFixed(1) + '%')],
      dashed: true,
      tone: 'muted',
    },
  ],
};

export const RPO_BODY: Body = {
  kind: 'line',
  axis: 'Aggregate remaining performance obligations, $B · summed · dashed = wave-case forecast',
  x: X,
  series: [
    {
      name: 'RPO',
      values: pad(aggRpo),
      display: pad(
        aggRpo.map((v, i) => (i === 0 || i === N - 1 ? '$' + v.toFixed(1) + 'B' : null))
      ),
    },
    {
      name: 'forecast',
      values: bridge(aggRpo, FORECAST.rpo),
      display: [...Array(N).fill(null), ...FORECAST.rpo.map((v) => '$' + v.toFixed(1) + 'B')],
      dashed: true,
      tone: 'muted',
    },
  ],
  marks: [{ at: N - 1, text: `+${RPO_YOY_LATEST}% y/y — threshold: >45%`, below: true }],
};

export const OVERAGE_BODY: Body = {
  kind: 'line',
  axis: 'Estimated overage, $B / quarter · Skycatcher model, not disclosed · dashed = forecast',
  x: X,
  series: [
    {
      name: 'overage',
      values: pad(aggOverage),
      display: pad(
        aggOverage.map((v, i) => (i === 0 || i === N - 1 ? '$' + v.toFixed(2) + 'B' : null))
      ),
    },
    {
      name: 'forecast',
      values: bridge(aggOverage, [
        Math.round(FORECAST.overageShare[0] * totalRevenue[N - 1] * 1.03) / 1000,
        Math.round(FORECAST.overageShare[1] * totalRevenue[N - 1] * 1.07) / 1000,
      ]),
      display: [...Array(N + 1).fill(null), null],
      dashed: true,
      tone: 'muted',
    },
  ],
  marks: [
    { at: 0, text: `${Math.round(OVERAGE_SHARE[0] * 100)}% of revenue` },
    { at: N - 1, text: `${Math.round(OVERAGE_SHARE[N - 1] * 100)}% of revenue` },
  ],
};
