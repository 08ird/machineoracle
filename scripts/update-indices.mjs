/**
 * Appends today's index marks to client/public/indices.json.
 *
 * Levels are equal-weighted (price / inception mark), inception
 * Aug 11, 2026 = 100 — the tracker chains them off the launch level.
 * Run by .github/workflows/update-indices.yml after the US close;
 * requires FMP_API_KEY in the environment.
 */

import { readFileSync, writeFileSync } from 'node:fs';

const MARK = {
  SNOW: 335.47, MDB: 438.11, DDOG: 248.42, FSLY: 28.89,
  ESTC: 76.59, NTNX: 64.29, AMPL: 12.735, OKTA: 150.2978, GTLB: 42.14,
  FROG: 86.93, TEAM: 153.92, DT: 49.605, CRWD: 221.67, S: 22.41,
  ZS: 178.56, PANW: 383.1925, RBRK: 97.105, TENB: 37.8117, QLYS: 188.555,
  SAIL: 18.855, CLBT: 16.1201, NET: 310.53, AKAM: 117.66, PD: 11.74, NTSK: 15.435,
};
const CT = ['SNOW', 'MDB', 'DDOG'];
const L2T = ['SNOW', 'MDB', 'ESTC', 'NTNX', 'FSLY', 'AMPL'];
const L3T = ['DDOG', 'NET', 'OKTA', 'GTLB', 'FROG', 'TEAM', 'DT', 'CRWD', 'S', 'ZS', 'PANW', 'RBRK', 'TENB', 'QLYS', 'SAIL', 'CLBT', 'AKAM', 'PD', 'NTSK'];

const key = process.env.FMP_API_KEY;
if (!key) {
  console.error('FMP_API_KEY not set');
  process.exit(1);
}

const symbols = Object.keys(MARK).join(',');
const res = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${symbols}?apikey=${key}`);
if (!res.ok) {
  console.error('quote fetch failed:', res.status);
  process.exit(1);
}
const quotes = await res.json();
const px = { ...MARK };
let applied = 0;
for (const q of quotes) {
  if (q.symbol && MARK[q.symbol] && q.price) {
    px[q.symbol] = q.price;
    applied++;
  }
}
if (applied < Object.keys(MARK).length * 0.8) {
  console.error(`only ${applied} quotes returned — refusing to write a partial mark`);
  process.exit(1);
}

const level = (ts) => +((ts.reduce((s, t) => s + px[t] / MARK[t], 0) / ts.length) * 100).toFixed(2);
const today = new Date().toISOString().slice(0, 10);

const path = new URL('../client/public/indices.json', import.meta.url);
const json = JSON.parse(readFileSync(path, 'utf8'));
json.points = (json.points ?? []).filter((p) => p.d !== today);
json.points.push({ d: today, c: level(CT), l2: level(L2T), l3: level(L3T) });
json.updated = today;
writeFileSync(path, JSON.stringify(json, null, 1) + '\n');
console.log('marked', today, json.points[json.points.length - 1]);
