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
 * extend LABELS, drop the first forecast quarter, bump AS_OF.
 */

import type { Body } from './slides';

export const AS_OF = 'July 2026 · through the May–June 2026 prints · forecast to 2030';

/** 8 reported quarters. */
const LABELS = ["Q3'24", "Q4'24", "Q1'25", "Q2'25", "Q3'25", "Q4'25", "Q1'26", "Q2'26"];

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

// ── Wave-case forecast, Q3'26e → Q4'30e ─────────────────────────────────────
//
// Written July 2026, before the prints it predicts. Retention rises toward the
// ~132% agent ceiling and plateaus; backlog growth tapers 45% → 30% a year as
// the base compounds; overage share crosses the 30% threshold (dated 2028 in
// the thesis) and saturates near 39%. Revenue underneath runs the wave case's
// re-acceleration, tapering into 2030. Eighteen quarters, all illustrative.

const F_LABELS = [
  "Q3'26e", "Q4'26e",
  "Q1'27e", "Q2'27e", "Q3'27e", "Q4'27e",
  "Q1'28e", "Q2'28e", "Q3'28e", "Q4'28e",
  "Q1'29e", "Q2'29e", "Q3'29e", "Q4'29e",
  "Q1'30e", "Q2'30e", "Q3'30e", "Q4'30e",
];
const F_NDR = [124.2, 125.0, 125.8, 126.5, 127.2, 127.8, 128.4, 129.0, 129.5, 130.0, 130.4, 130.8, 131.2, 131.5, 131.7, 131.8, 131.9, 132.0];
const F_RPO = [15.1, 16.6, 18.1, 19.7, 21.5, 23.6, 25.6, 27.8, 30.2, 32.8, 35.3, 38.0, 40.9, 44.0, 47.0, 50.2, 53.6, 57.2];
const F_REV = [3285, 3499, 3737, 3991, 4262, 4552, 4848, 5163, 5499, 5856, 6266, 6704, 7173, 7675, 8136, 8624, 9141, 9690];
const F_OV_SHARE = [0.25, 0.27, 0.285, 0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.375, 0.38, 0.385, 0.39, 0.39, 0.39, 0.39];
const F_OVERAGE = F_REV.map((r, i) => Math.round(F_OV_SHARE[i] * r) / 1000);

const FN = F_LABELS.length;
const TOTAL = N + FN;

// ── Aggregation of reported quarters ────────────────────────────────────────

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
  i >= 4 ? Math.round((arr[i] / arr[i - 4]) * 100 - 100) : null;

export const RPO_YOY_LATEST = yoy(aggRpo, N - 1); // grades the >45% threshold
export const NDR_LATEST = aggNdr[N - 1];
export const REV_YOY_LATEST = yoy(totalRevenue, N - 1);

// ── Chart bodies ────────────────────────────────────────────────────────────

// 26 points would collide as tick labels, so ticks are sparse: a few reported
// quarters, then each forecast year-end. Empty strings suppress a tick.
const X = [...LABELS, ...F_LABELS].map((l, i) =>
  [0, 3, 7, 9, 13, 17, 21, 25].includes(i) ? l : ''
);

/** Reported series padded with nulls across the forecast range. */
const pad = <T,>(a: (T | null)[]): (T | null)[] => [...a, ...Array(FN).fill(null)];
/** Forecast series bridges from the last reported point so the dash connects. */
const bridge = (actual: number[], fc: number[]) => [
  ...Array(N - 1).fill(null),
  actual[N - 1],
  ...fc,
];
/** Show a display label only at the given global indices. */
const at = (values: (number | null)[], idxs: number[], fmt: (v: number) => string) =>
  values.map((v, i) => (v != null && idxs.includes(i) ? fmt(v) : null));

const YEAR_ENDS = [N + 1, N + 5, N + 9, N + 13, N + 17]; // Q4'26e … Q4'30e

export const NDR_BODY: Body = {
  kind: 'line',
  axis: 'Aggregate net revenue retention, % · revenue-weighted · dashed = wave case to 2030',
  x: X,
  series: [
    {
      name: 'NDR',
      values: pad(aggNdr),
      display: at(pad(aggNdr), [0, N - 1], (v) => v.toFixed(1) + '%'),
    },
    {
      name: 'wave case',
      values: bridge(aggNdr, F_NDR),
      display: at(bridge(aggNdr, F_NDR), YEAR_ENDS, (v) => v.toFixed(1) + '%'),
      dashed: true,
      tone: 'muted',
    },
  ],
};

export const RPO_BODY: Body = {
  kind: 'line',
  axis: 'Aggregate remaining performance obligations, $B · summed · dashed = wave case to 2030',
  x: X,
  series: [
    {
      name: 'RPO',
      values: pad(aggRpo),
      display: at(pad(aggRpo), [0, N - 1], (v) => '$' + v.toFixed(1) + 'B'),
    },
    {
      name: 'wave case',
      values: bridge(aggRpo, F_RPO),
      display: at(bridge(aggRpo, F_RPO), YEAR_ENDS, (v) => '$' + v.toFixed(0) + 'B'),
      dashed: true,
      tone: 'muted',
    },
  ],
  marks: [{ at: N - 1, text: `+${RPO_YOY_LATEST}% y/y — threshold: >45%`, below: true }],
};

export const OVERAGE_BODY: Body = {
  kind: 'line',
  axis: 'Estimated overage, $B / quarter · Skycatcher model, not disclosed · dashed = wave case to 2030',
  x: X,
  series: [
    {
      name: 'overage',
      values: pad(aggOverage),
      display: at(pad(aggOverage), [0, N - 1], (v) => '$' + v.toFixed(2) + 'B'),
    },
    {
      name: 'wave case',
      values: bridge(aggOverage, F_OVERAGE),
      display: at(bridge(aggOverage, F_OVERAGE), YEAR_ENDS, (v) => '$' + v.toFixed(2) + 'B'),
      dashed: true,
      tone: 'muted',
    },
  ],
  marks: [
    { at: N - 1, text: `${Math.round(OVERAGE_SHARE[N - 1] * 100)}% of revenue`, below: true },
    // Where the modeled share crosses the thesis's 30%-by-2028 threshold.
    { at: N + F_OV_SHARE.findIndex((s) => s >= 0.3), text: 'crosses 30% — the 2028 threshold', lift: 6 },
    { at: TOTAL - 1, text: `${Math.round(F_OV_SHARE[FN - 1] * 100)}% of revenue`, below: true },
  ],
};
