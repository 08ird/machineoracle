/**
 * Exhibit renderers — one per `Body.kind`.
 *
 * These are the data figures that appear inside prose. They are deliberately
 * quiet: hairline rules, one accent colour, no cards or shadows, so a chart
 * reads as part of the document rather than as a dashboard dropped into it.
 * All of them are plain HTML and reflow to a single column on a phone.
 */

import type { Body } from './data/slides';

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  cls?: string,
  text?: string
): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

/**
 * Bars use a log scale when the range spans more than ~2 decades. Every width is
 * scaled by SPAN so the longest bar leaves room for its value label; scaling all
 * bars equally keeps their proportions exact.
 */
const SPAN = 0.82;

function barWidths(values: number[]): number[] {
  const max = Math.max(...values);
  const min = Math.min(...values.filter((v) => v > 0));
  if (Math.log10(max / min) > 2) {
    const lo = Math.log10(min) - 0.4;
    const hi = Math.log10(max);
    return values.map((v) => Math.max(3, ((Math.log10(Math.max(v, min)) - lo) / (hi - lo)) * 100 * SPAN));
  }
  const base = Math.max(0, min - (max - min) * 0.35);
  return values.map((v) => Math.max(3, ((v - base) / (max - base)) * 100 * SPAN));
}

/** Exhibits that benefit from running wider than the text measure. */
export const WIDE: ReadonlySet<Body['kind']> = new Set([
  'table',
  'timeline',
  'waves',
  'columns',
  'flow',
  'panels',
  'roster',
  'ladder',
  'tam',
  'bout',
]);

function svg(tag: string, attrs: Record<string, string> = {}): SVGElement {
  const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
}

function svgText(x: number, y: number, text: string, cls: string, anchor?: string): SVGElement {
  const t = svg('text', { x: String(x), y: String(y), class: cls });
  if (anchor) t.setAttribute('text-anchor', anchor);
  t.textContent = text;
  return t;
}

const renderers: { [K in Body['kind']]: (b: Extract<Body, { kind: K }>) => HTMLElement } = {
  // The cover never appears in document flow — the page head replaces it.
  cover() {
    return el('div');
  },

  quote(b) {
    const w = el('div', 'bigquote');
    const q = el('blockquote');
    b.quote.forEach((line, i) => {
      q.append(document.createTextNode((i === 0 ? '“' : '') + line + (i === b.quote.length - 1 ? '”' : '')));
      if (i < b.quote.length - 1) q.append(el('br'));
    });
    q.append(el('cite', undefined, '— ' + b.attrib));
    w.append(q);
    if (b.sub) w.append(el('p', undefined, b.sub));
    if (b.extra) w.append(el('p', 'note', b.extra));
    // The wave flourish from the introduction's pull quote — the tidal-wave
    // quotes open and close the thesis with the same mark.
    const art = el('img', 'wavecall__art');
    art.src = 'wave.png';
    art.alt = '';
    w.append(art);
    return w;
  },

  // Part dividers are rendered by the page layer, not here.
  section() {
    return el('div');
  },

  agenda(b) {
    const w = el('div', 'agenda');
    for (const it of b.items) {
      const row = el('div', 'agenda__row');
      row.append(el('div', 'agenda__n', it.n), el('div', 'agenda__t', it.title), el('div', 'agenda__d', it.desc));
      w.append(row);
    }
    return w;
  },

  grid3(b) {
    const w = el('div', 'grid3');
    for (const it of b.items) {
      const c = el('div', 'grid3__card');
      c.append(el('div', 'grid3__eyebrow', it.eyebrow), el('h3', undefined, it.title), el('p', undefined, it.desc));
      w.append(c);
    }
    return w;
  },

  stats(b) {
    const w = el('div', 'stats');
    for (const it of b.items) {
      const s = el('div', 'stat');
      s.append(el('div', 'stat__v', it.value), el('div', 'stat__l', it.label));
      if (it.sub) s.append(el('div', 'stat__s', it.sub));
      w.append(s);
    }
    return w;
  },

  bars(b) {
    const w = el('div', 'bars');
    if (b.axis) w.append(el('div', 'bars__axis', b.axis));
    const widths = barWidths(b.items.map((i) => i.value));
    b.items.forEach((it, i) => {
      const row = el('div', `bar${it.tone === 'muted' ? ' bar--muted' : ''}${it.tone === 'warn' ? ' bar--warn' : ''}`);
      const label = el('div', 'bar__label');
      label.append(document.createTextNode(it.label));
      if (it.sub) label.append(el('span', 'bar__sub', it.sub));
      const track = el('div', 'bar__track');
      const fill = el('div', 'bar__fill');
      fill.style.width = widths[i].toFixed(1) + '%';
      track.append(fill, el('div', 'bar__v', it.display));
      row.append(label, track);
      w.append(row);
    });
    return w;
  },

  columns(b) {
    const w = el('div', 'cols');
    for (const c of b.cols) {
      const col = el('div', 'col');
      col.append(el('h3', undefined, c.head));
      if (c.sub) col.append(el('div', 'col__sub', c.sub));
      const ul = el('ul');
      for (const li of c.items) ul.append(el('li', undefined, li));
      col.append(ul);
      if (c.foot) col.append(el('div', 'col__foot', c.foot));
      w.append(col);
    }
    return w;
  },

  steps(b) {
    const w = el('div', 'steps');
    for (const it of b.items) {
      const row = el('div', 'step');
      row.append(el('div', 'step__n', it.n ?? '—'), el('div', 'step__head', it.head));
      if (it.meta) {
        const m = el('div', 'step__meta', it.meta);
        m.dataset.meta = it.meta;
        row.append(m);
      }
      row.append(el('div', 'step__desc', it.desc));
      w.append(row);
    }
    return w;
  },

  flow(b) {
    const w = el('div', 'flow');
    const row = el('div', 'flow__row');
    for (const it of b.items) {
      const n = el('div', 'flow__node');
      n.append(el('h3', undefined, it.head), el('p', undefined, it.desc));
      row.append(n);
    }
    w.append(row);
    if (b.out) {
      const out = el('div', 'flow__out');
      for (const o of b.out) {
        const c = el('div', 'flow__outcard');
        c.append(el('div', 'flow__outv', o.value), el('div', 'flow__outl', o.label));
        out.append(c);
      }
      w.append(out);
    }
    return w;
  },

  table(b) {
    const wrap = el('div', 'tablewrap');
    const t = el('table');
    // Tables of sentences (scoreboard, kill conditions) read left-aligned in the
    // body face; tables of figures stay right-aligned in the display face.
    if (b.rows.some((r) => r.slice(1).some((c) => c.length > 42))) t.classList.add('table--prose');
    const thead = el('thead');
    const hr = el('tr');
    for (const h of b.head) hr.append(el('th', undefined, h));
    thead.append(hr);
    const tbody = el('tbody');
    b.rows.forEach((r, i) => {
      const tr = el('tr');
      if (b.highlight === i) tr.className = 'is-hl';
      r.forEach((cell, j) => tr.append(el(j === 0 ? 'th' : 'td', undefined, cell)));
      tbody.append(tr);
    });
    t.append(thead, tbody);
    wrap.append(t);
    return wrap;
  },

  timeline(b) {
    const w = el('div', 'tl');
    for (const track of b.tracks) {
      const t = el('div', 'tl__track');
      t.append(el('div', 'tl__name', track.name));
      for (const it of track.items) {
        const row = el('div', `tl__item${it.here ? ' tl__item--here' : ''}`);
        row.append(el('div', 'tl__when', it.when), el('div', 'tl__text', it.text));
        if (it.here) row.append(el('div', 'tl__here', 'We are here'));
        t.append(row);
      }
      w.append(t);
    }
    return w;
  },

  waves(b) {
    const w = el('div', 'waves');
    b.items.forEach((it, i) => {
      const c = el('div', `wave${it.last ? ' wave--last' : ''}`);
      c.style.minHeight = `${4 + i * 0.85}rem`;
      c.append(el('div', 'wave__era', it.era), el('div', 'wave__name', it.name));
      for (const co of it.cos) c.append(el('span', 'wave__co', co));
      w.append(c);
    });
    return w;
  },

  split(b) {
    const w = el('div', 'split');
    for (const g of b.groups) {
      const grp = el('div', 'split__group');
      grp.append(el('div', 'split__head', g.head));
      const bar = el('div', 'split__bar');
      for (const p of g.parts) {
        const seg = el('div', 'split__seg');
        seg.style.flex = `${p.pct} 1 0`;
        seg.append(el('div', 'split__pct', p.pct + '%'), el('div', undefined, p.label));
        bar.append(seg);
      }
      grp.append(bar);
      w.append(grp);
    }
    return w;
  },

  prose(b) {
    const w = el('div');
    for (const p of b.paras) {
      const para = el('p', 'note');
      if (p.head) para.append(el('b', undefined, p.head + ' '));
      para.append(document.createTextNode(p.text));
      w.append(para);
    }
    return w;
  },

  line(b) {
    const w = el('div', 'chart');
    if (b.axis) w.append(el('div', 'bars__axis', b.axis));

    // Geometry in a fixed viewBox; the SVG then scales to its container.
    const W = 660;
    const H = 300;
    // Right padding sized to the longest series name so end-of-line labels
    // never spill past the drawing area.
    const longestName = Math.max(0, ...b.series.map((s) => s.name.length));
    const pad = { t: 22, r: Math.min(150, Math.max(70, longestName * 6.2 + 16)), b: 34, l: 46 };
    const flat = b.series.flatMap((s) => s.values).filter((v): v is number => v != null && (!b.log || v > 0));
    const max = Math.max(...flat);
    const min = Math.min(...flat);
    // Narrow-band series (retention rates) zoom to their range; wide ones keep
    // a zero-ish baseline so magnitudes stay honest. Series that cross zero
    // (returns) pad both ends instead.
    const span = max - min;
    const hasNeg = min < 0;
    const zoomed = !b.log && !hasNeg && span / max < 0.2;
    const lo = b.log ? Math.log10(min) - 0.25 : hasNeg ? min - span * 0.12 : zoomed ? min - span * 0.9 : 0;
    const hi = b.log ? Math.log10(max) + 0.12 : hasNeg ? max + span * 0.12 : zoomed ? max + span * 0.5 : max * 1.1;
    const yOf = (v: number) => {
      const t = ((b.log ? Math.log10(v) : v) - lo) / (hi - lo);
      return H - pad.b - t * (H - pad.t - pad.b);
    };
    const xOf = (i: number) =>
      pad.l + (b.x.length === 1 ? 0 : (i / (b.x.length - 1)) * (W - pad.l - pad.r));

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('class', 'chart__svg');
    svg.setAttribute('aria-label', b.series.map((s) => `${s.name}: ${s.values.join(', ')}`).join('. '));

    const ns = (tag: string, attrs: Record<string, string>) => {
      const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
      for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
      return n;
    };

    // Baseline and category ticks.
    svg.append(ns('line', { x1: String(pad.l), y1: String(H - pad.b), x2: String(W - pad.r), y2: String(H - pad.b), class: 'chart__axis' }));
    // Zero gridline for series that cross it.
    if (lo < 0 && hi > 0 && !b.log) {
      svg.append(ns('line', { x1: String(pad.l), y1: yOf(0).toFixed(1), x2: String(W - pad.r), y2: yOf(0).toFixed(1), class: 'chart__grid' }));
      const zt = ns('text', { x: String(pad.l - 6), y: String(yOf(0) + 4), class: 'chart__xlab', 'text-anchor': 'end' });
      zt.textContent = '0%';
      svg.append(zt);
    }
    b.x.forEach((label, i) => {
      if (!label) return; // Empty label = point without a tick.
      const t = ns('text', { x: String(xOf(i)), y: String(H - pad.b + 18), class: 'chart__xlab' });
      t.textContent = label;
      svg.append(t);
    });

    // Dotted vertical event line.
    if (b.vline) {
      const vx = xOf(b.vline.at);
      svg.append(ns('line', { x1: vx.toFixed(1), y1: String(pad.t), x2: vx.toFixed(1), y2: String(H - pad.b), class: 'chart__vline' }));
      const anchor = b.vline.at > b.x.length * 0.6 ? 'end' : 'start';
      const t = ns('text', { x: (vx + (anchor === 'start' ? 6 : -6)).toFixed(1), y: String(pad.t + 8), class: 'chart__mark', 'text-anchor': anchor });
      t.textContent = b.vline.label;
      svg.append(t);
    }

    // Value and name labels are collected first, then placed with collision
    // avoidance — series that end near the same value would otherwise print
    // their labels on top of each other.
    const vlabels: { x: number; y: number; text: string }[] = [];
    const nlabels: { x: number; y: number; text: string; muted: boolean; ink?: boolean }[] = [];

    b.series.forEach((s) => {
      const pts = s.values
        .map((v, i) => (v == null ? null : { x: xOf(i), y: yOf(v), i, v }))
        .filter((p): p is { x: number; y: number; i: number; v: number } => p != null);
      if (!pts.length) return;

      const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
      const cls = `chart__line${s.tone === 'muted' ? ' is-muted' : ''}${s.tone === 'warn' ? ' is-warn' : ''}${
        s.tone === 'ink' ? ' is-ink' : ''
      }${s.dashed ? ' is-dashed' : ''}`;
      svg.append(ns('path', { d, class: cls }));

      for (const p of pts) {
        svg.append(
          ns('circle', {
            cx: String(p.x),
            cy: String(p.y),
            r: '3.2',
            class: `chart__dot${s.tone === 'muted' ? ' is-muted' : ''}${s.tone === 'ink' ? ' is-ink' : ''}`,
          })
        );
        const disp = s.display?.[p.i];
        if (disp) vlabels.push({ x: p.x, y: p.y - 10, text: disp });
      }

      const last = pts[pts.length - 1];
      nlabels.push({ x: last.x + 8, y: last.y + 4, text: s.name, muted: s.tone === 'muted', ink: s.tone === 'ink' });
    });

    // Same-x value labels that would stack: flip later ones below their point.
    for (let i = 0; i < vlabels.length; i++) {
      for (let j = 0; j < i; j++) {
        if (Math.abs(vlabels[i].x - vlabels[j].x) < 10 && Math.abs(vlabels[i].y - vlabels[j].y) < 13) {
          vlabels[i].y += 30; // from y−10 above the point to y+20 below it
        }
      }
    }

    // Series names: nudge apart vertically when their line-ends coincide.
    nlabels.sort((a, b2) => a.y - b2.y);
    for (let i = 1; i < nlabels.length; i++) {
      if (nlabels[i].y - nlabels[i - 1].y < 14) nlabels[i].y = nlabels[i - 1].y + 14;
    }

    // End-point value labels that land on a (possibly nudged) series name:
    // flip them below their point.
    for (const v of vlabels) {
      for (const n of nlabels) {
        const nx1 = n.x;
        const nx2 = n.x + n.text.length * 6.2;
        const vx1 = v.x - v.text.length * 3.1;
        const vx2 = v.x + v.text.length * 3.1;
        if (vx2 > nx1 && vx1 < nx2 && Math.abs(v.y - n.y) < 13) v.y += 30;
      }
    }
    for (const l of vlabels) {
      const t = ns('text', { x: String(l.x), y: String(l.y), class: 'chart__vlab' });
      t.textContent = l.text;
      svg.append(t);
    }
    for (const l of nlabels) {
      const t = ns('text', {
        x: String(l.x),
        y: String(Math.min(l.y, H - pad.b - 4)),
        class: `chart__slab${l.muted ? ' is-muted' : ''}${l.ink ? ' is-ink' : ''}`,
      });
      t.textContent = l.text;
      svg.append(t);
    }

    // Event annotations pinned to the first series' points.
    if (b.marks) {
      const base = b.series[0];
      for (const m of b.marks) {
        const v = base.values[m.at];
        if (v == null) continue;
        const x = xOf(m.at);
        const y = yOf(v);
        const dir = m.below ? 1 : -1;
        const lift = m.lift ?? 0;
        svg.append(ns('line', { x1: String(x), y1: String(y + dir * 7), x2: String(x), y2: String(y + dir * (22 + lift)), class: 'chart__tick' }));
        const t = ns('text', {
          x: String(x),
          y: String(y + dir * (30 + lift)),
          class: 'chart__mark',
          'text-anchor': m.at > b.x.length * 0.72 ? 'end' : m.at < b.x.length * 0.28 ? 'start' : 'middle',
        });
        t.textContent = m.text;
        svg.append(t);
      }
    }

    w.append(svg);
    return w;
  },

  grouped(b) {
    const w = el('div', 'grouped');
    if (b.axis) w.append(el('div', 'bars__axis', b.axis));
    for (const s of b.series) {
      const row = el('div', 'grouped__series');
      row.append(el('div', 'grouped__name', s.name));
      const track = el('div', 'grouped__track');
      const vals = s.values.filter((v): v is number => v != null);
      const max = Math.max(...vals);
      s.values.forEach((v, i) => {
        const cell = el('div', 'grouped__cell');
        const colwrap = el('div', 'grouped__colwrap');
        const col = el('div', `grouped__bar${s.tone === 'muted' ? ' is-muted' : ''}${s.tone === 'ink' ? ' is-ink' : ''}`);
        col.style.height = v == null ? '0' : `${Math.max(4, (v / max) * 100)}%`;
        colwrap.append(col);
        cell.append(el('div', 'grouped__v', s.display[i] ?? ''), colwrap, el('div', 'grouped__x', b.x[i]));
        track.append(cell);
      });
      row.append(track);
      w.append(row);
    }
    return w;
  },

  decompose(b) {
    const w = el('div', 'decomp');
    b.factors.forEach((f, i) => {
      const card = el('div', 'decomp__factor');
      card.append(el('div', 'decomp__v', f.value), el('div', 'decomp__l', f.label));
      if (f.note) card.append(el('div', 'decomp__note', f.note));
      const move = el('div', 'decomp__move');
      move.append(el('span', 'decomp__from', f.from), el('span', 'decomp__arrow', '→'), el('span', 'decomp__to', f.to));
      card.append(move);
      w.append(card);
      if (i < b.factors.length - 1) w.append(el('div', 'decomp__op', '×'));
    });
    w.append(el('div', 'decomp__op', '='));
    const res = el('div', 'decomp__factor decomp__factor--result');
    res.append(el('div', 'decomp__v', b.result.value), el('div', 'decomp__l', b.result.label));
    if (b.result.note) res.append(el('div', 'decomp__note', b.result.note));
    w.append(res);
    return w;
  },

  // ── Deck 13: concentric maker populations ─────────────────────────────────
  rings(b) {
    const w = el('div', 'rings');

    const W = 340;
    const H = 320;
    const cx = W / 2;
    const base = H - 10;
    // Radii on a partial-sqrt scale — true areas would make the inner ring
    // unreadably small at 30M vs 1B+.
    const maxR = (H - 30) / 2;
    const rs = [maxR * 0.3, maxR * 0.62, maxR];
    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'rings__svg', role: 'img' }) as SVGSVGElement;
    s.setAttribute('aria-label', b.rings.map((r) => `${r.value} ${r.label}`).join('; '));
    // Outer→inner so the inner rings paint on top; tangent at the baseline.
    [...b.rings].reverse().forEach((ring, idx) => {
      const i = b.rings.length - 1 - idx;
      const r = rs[i];
      s.append(svg('circle', { cx: String(cx), cy: String(base - r), r: String(r), class: `rings__c rings__c--${i}` }));
      // Value + label sit just inside the top of each ring's exposed band.
      const y = base - 2 * r + (i === 0 ? r * 0.82 : 20);
      s.append(svgText(cx, y, ring.value, `rings__v rings__v--${i}`, 'middle'));
      s.append(svgText(cx, y + 14, ring.label, 'rings__l', 'middle'));
    });
    w.append(s);

    const eras = el('div', 'rings__eras');
    for (const e of b.eras) {
      const row = el('div', 'rings__era');
      row.append(el('div', 'rings__when', e.when));
      const body = el('div');
      const head = el('div', 'rings__name');
      head.append(document.createTextNode(e.name + ' '), el('span', 'rings__count', '— ' + e.count));
      body.append(head, el('div', 'rings__desc', e.desc));
      row.append(body);
      eras.append(row);
    }
    w.append(eras);
    return w;
  },

  // ── Deck 44: the five-layer stack with universe counts ────────────────────
  layerstack(b) {
    const w = el('div', 'lstack');
    w.append(el('div', 'lstack__axis', 'Public companies in the universe'));
    for (const l of b.layers) {
      const row = el('div', `lstack__row lstack__row--${l.tone}`);
      row.append(el('div', 'lstack__n', l.n));
      const mid = el('div', 'lstack__mid');
      mid.append(el('div', 'lstack__name', l.name), el('div', 'lstack__desc', l.desc));
      row.append(mid);
      const side = el('div', 'lstack__side');
      if (l.count) side.append(el('div', 'lstack__count', l.count));
      if (l.badge) side.append(el('div', 'lstack__badge', l.badge));
      row.append(side);
      w.append(row);
    }
    return w;
  },

  // ── Deck 45: the published roster ──────────────────────────────────────────
  roster(b) {
    const w = el('div', 'roster');
    for (const g of b.groups) {
      const grp = el('div', 'roster__group');
      const head = el('div', 'roster__head');
      head.append(el('span', 'roster__title', g.head), el('span', 'roster__count', g.count));
      grp.append(head);
      const chips = el('div', 'roster__chips');
      for (const n of g.names) chips.append(el('span', `roster__chip${n.rail ? ' roster__chip--rail' : ''}`, n.n + (n.rail ? ' †' : '')));
      grp.append(chips);
      w.append(grp);
    }
    if (b.note) w.append(el('div', 'roster__note', b.note));
    return w;
  },

  // ── Deck 42: backend vs. worksite ──────────────────────────────────────────
  panels(b) {
    const w = el('div', 'panels');
    for (const p of b.panels) {
      const panel = el('div', `panel panel--${p.tone}`);
      panel.append(el('div', 'panel__head', p.head), el('div', 'panel__sub', p.sub));
      for (const v of p.verbs) {
        const row = el('div', 'panel__verb');
        row.append(el('div', 'panel__verbname', v.verb), el('div', 'panel__verbdesc', v.desc));
        panel.append(row);
      }
      panel.append(el('div', 'panel__foot', p.foot));
      w.append(panel);
    }
    return w;
  },

  // ── Deck 47: market ponds, area-proportional ───────────────────────────────
  ponds(b) {
    const w = el('div', 'ponds');
    const W = 660;
    const H = 348;
    const base = H - 62;
    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart__svg', role: 'img' }) as SVGSVGElement;
    s.setAttribute(
      'aria-label',
      b.ponds.map((p) => `${p.label}: ${p.value}`).join('; ') + (b.backdrop ? `; ${b.backdrop.label}: ${b.backdrop.value}` : '')
    );

    const maxSize = Math.max(...b.ponds.map((p) => p.size), b.backdrop?.size ?? 0);
    const maxR = (base - 26) / 2;
    const rOf = (size: number) => Math.max(14, Math.sqrt(size / maxSize) * maxR);

    // The backdrop (the security budget) sits behind both ponds.
    if (b.backdrop) {
      const r = rOf(b.backdrop.size);
      const cx = W / 2 + 60;
      s.append(svg('circle', { cx: String(cx), cy: String(base - r), r: String(r), class: 'ponds__back' }));
      s.append(svgText(cx + r * 0.2, base - 2 * r + 16, `${b.backdrop.label} · ${b.backdrop.value}`, 'ponds__backlab', 'middle'));
    }

    // Ponds left→right, the whole group centered: each pond's footprint is
    // its circle (plus dashed ring, where present), with a fixed gap between.
    const gap = 70;
    const halves = b.ponds.map((p) => rOf(p.size) + (p.ring ? 26 : 0));
    const total = halves.reduce((sum, h) => sum + 2 * h, 0) + gap * (b.ponds.length - 1);
    let cursor = (W - total) / 2;
    b.ponds.forEach((p, i) => {
      const r = rOf(p.size);
      const cx = cursor + halves[i];
      cursor += 2 * halves[i] + gap;
      const cy = base - r;
      if (p.ring) {
        const rr = r + 26;
        s.append(svg('circle', { cx: String(cx), cy: String(cy), r: String(rr), class: 'ponds__ring' }));
        s.append(svgText(cx, cy - rr - 8, `${p.ring.label} · ${p.ring.value}`, 'ponds__ringlab', 'middle'));
      }
      s.append(svg('circle', { cx: String(cx), cy: String(cy), r: String(r), class: `ponds__c${p.tone === 'ink' ? ' is-ink' : ''}` }));
      if (r > 70) {
        // Large pond: everything fits inside.
        s.append(svgText(cx, cy - 8, p.value, 'ponds__v ponds__v--in', 'middle'));
        s.append(svgText(cx, cy + 8, p.label, 'ponds__l ponds__l--in', 'middle'));
        if (p.sub) s.append(svgText(cx, cy + 23, p.sub, 'ponds__s ponds__s--in', 'middle'));
      } else {
        // Small pond: value inside, label below — clear of the dashed ring.
        s.append(svgText(cx, cy + 4, p.value, 'ponds__v ponds__v--insm', 'middle'));
        const ly = base + (p.ring ? 40 : 20);
        s.append(svgText(cx, ly, p.label, 'ponds__l', 'middle'));
        if (p.sub) s.append(svgText(cx, ly + 14, p.sub, 'ponds__s', 'middle'));
      }
    });

    w.append(s);
    return w;
  },

  // ── Deck 49: the old TAM and the delegation-share TAM ─────────────────────
  tam(b) {
    const w = el('div', 'tam');

    const old = el('div', 'tam__card tam__card--old');
    old.append(el('div', 'tam__title', b.old.title));
    for (const r of b.old.rows) {
      const row = el('div', 'tam__row');
      row.append(el('span', undefined, r.label), el('span', 'tam__rowv', r.value));
      old.append(row);
    }
    const tot = el('div', 'tam__row tam__row--total');
    tot.append(el('span', undefined, b.old.total.label), el('span', 'tam__rowv', b.old.total.value));
    old.append(tot);
    w.append(old);

    w.append(el('div', 'tam__arrow', '→'));

    const next = el('div', 'tam__card tam__card--new');
    next.append(el('div', 'tam__title', b.next.title), el('div', 'tam__sub', b.next.sub));
    const maxSize = Math.max(...b.next.tiers.map((t) => t.size));
    for (const t of b.next.tiers) {
      const tier = el('div', 'tam__tier');
      const pill = el('div', 'tam__pill');
      // Compressed scale: proportional pills would leave the smallest tier too
      // narrow for its own label.
      pill.style.width = `${52 + (t.size / maxSize) * 48}%`;
      pill.append(el('span', 'tam__share', t.share), el('span', 'tam__pillv', t.value));
      tier.append(pill, el('div', 'tam__note', t.note));
      next.append(tier);
    }
    w.append(next);
    return w;
  },

  // ── Deck 51: growth vs. multiple scatter ──────────────────────────────────
  scatter(b) {
    const w = el('div', 'chart');
    const W = 660;
    const H = 360;
    const pad = { t: 16, r: 18, b: 46, l: 52 };
    const xOf = (v: number) => pad.l + (v / b.xmax) * (W - pad.l - pad.r);
    const yOf = (v: number) => H - pad.b - (v / b.ymax) * (H - pad.t - pad.b);

    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart__svg', role: 'img' }) as SVGSVGElement;
    s.setAttribute('aria-label', `${b.pts.length} companies plotted, ${b.xlab} against ${b.ylab}`);

    // Axes and light gridlines.
    s.append(svg('line', { x1: String(pad.l), y1: String(H - pad.b), x2: String(W - pad.r), y2: String(H - pad.b), class: 'chart__axis' }));
    s.append(svg('line', { x1: String(pad.l), y1: String(pad.t), x2: String(pad.l), y2: String(H - pad.b), class: 'chart__axis' }));
    for (let gx = 10; gx < b.xmax; gx += 10) {
      s.append(svg('line', { x1: String(xOf(gx)), y1: String(pad.t), x2: String(xOf(gx)), y2: String(H - pad.b), class: 'chart__grid' }));
      s.append(svgText(xOf(gx), H - pad.b + 16, `${gx}%`, 'chart__xlab'));
    }
    for (let gy = 10; gy < b.ymax; gy += 10) {
      s.append(svg('line', { x1: String(pad.l), y1: String(yOf(gy)), x2: String(W - pad.r), y2: String(yOf(gy)), class: 'chart__grid' }));
      s.append(svgText(pad.l - 8, yOf(gy) + 4, `${gy}x`, 'chart__xlab', 'end'));
    }
    s.append(svgText(W - pad.r, H - pad.b + 34, b.xlab, 'chart__alab', 'end'));
    s.append(svgText(pad.l + 4, pad.t + 4, b.ylab, 'chart__alab', 'start'));

    for (const p of b.pts) {
      s.append(
        svg('circle', {
          cx: xOf(Math.min(p.x, b.xmax)).toFixed(1),
          cy: yOf(Math.min(p.y, b.ymax)).toFixed(1),
          r: '5',
          class: `scatter__pt is-${p.tone}`,
        })
      );
    }

    if (b.notes) {
      for (const n of b.notes) {
        s.append(svgText(xOf(n.x), yOf(n.y), n.text, 'chart__mark', n.anchor ?? 'start'));
      }
    }
    w.append(s);

    const leg = el('div', 'scatter__legend');
    for (const l of b.legend) {
      const item = el('span', 'scatter__leg');
      item.append(el('span', `scatter__dot is-${l.tone}`), document.createTextNode(l.label));
      leg.append(item);
    }
    w.append(leg);
    return w;
  },

  // ── Deck 73: the admission ladder ──────────────────────────────────────────
  ladder(b) {
    const w = el('div', 'ladder');
    if (b.axis) w.append(el('div', 'bars__axis', b.axis));
    for (const r of b.rows) {
      const row = el('div', `ladder__row${r.status === 'in' ? ' is-in' : ''}`);
      const who = el('div', 'ladder__who');
      who.append(el('span', 'ladder__name', r.name), el('span', 'ladder__layer', r.layer));
      row.append(who);

      const track = el('div', 'ladder__track');
      const fill = el('div', `ladder__fill${r.status === 'in' ? ' is-in' : ''}${r.share == null ? ' is-emerging' : ''}`);
      fill.style.width = `${r.share == null ? 7 : Math.min(r.share, 100)}%`;
      const mark = el('div', 'ladder__mark');
      mark.style.left = `${b.marker.at}%`;
      track.append(fill, mark);
      row.append(track);

      row.append(el('div', 'ladder__share', r.display));
      row.append(el('div', `ladder__status${r.status === 'in' ? ' is-in' : ''}`, r.status === 'in' ? 'IN' : 'CONVERTING'));
      row.append(el('div', 'ladder__note', r.note));
      w.append(row);
    }
    w.append(el('div', 'ladder__markerlab', `the ${b.marker.label} line`));
    if (b.foot) {
      const foot = el('div', 'ladder__foot');
      const head = el('div', 'ladder__foothead');
      head.append(el('span', undefined, b.foot.head), el('span', 'ladder__footcount', b.foot.count));
      foot.append(head);
      foot.append(el('div', 'ladder__footnames', b.foot.names.join(' · ')));
      foot.append(el('div', 'ladder__footnote', b.foot.note));
      w.append(foot);
    }
    return w;
  },

  // ── Deck 71: the admission worksheet ───────────────────────────────────────
  admit(b) {
    const w = el('div', 'admit');
    for (const g of b.groups) {
      const grp = el('div', 'admit__group');
      grp.append(el('div', 'admit__head', g.head));
      for (const r of g.rows) {
        const row = el('div', 'admit__row');
        const top = el('div', 'admit__top');
        top.append(el('span', 'admit__name', r.name), el('span', 'admit__share', r.share));
        if (r.level) top.append(el('span', 'admit__level', r.level));
        row.append(top, el('div', 'admit__basis', r.basis));
        grp.append(row);
      }
      w.append(grp);
    }
    return w;
  },

  // ── Site-original: what infinite software looks like ─────────────────────
  contrast(b) {
    const w = el('div', 'chart');
    const W = 660;
    const H = 320;
    const mid = 318;
    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart__svg', role: 'img' }) as SVGSVGElement;
    s.setAttribute('aria-label', `${b.left.head} against ${b.right.head}`);

    // Left: a handful of monolithic products in a tidy grid.
    s.append(svgText(20, 26, b.left.head, 'contrast__head', 'start'));
    const cols = 2;
    const bw = 118;
    const bh = 52;
    b.left.items.forEach((name, i) => {
      const x = 24 + (i % cols) * (bw + 14);
      const y = 46 + Math.floor(i / cols) * (bh + 14);
      s.append(svg('rect', { x: String(x), y: String(y), width: String(bw), height: String(bh), rx: '5', class: 'contrast__block' }));
      s.append(svgText(x + bw / 2, y + bh / 2 + 4, name, 'contrast__blocklab', 'middle'));
    });
    s.append(svgText(20, H - 18, b.left.caption, 'contrast__cap', 'start'));

    s.append(svg('line', { x1: String(mid), y1: '18', x2: String(mid), y2: String(H - 36), class: 'contrast__rule' }));

    // Right: a dense field of tiny, disposable pieces. Deterministic LCG so
    // the scatter is stable across renders.
    s.append(svgText(mid + 22, 26, b.right.head, 'contrast__head is-accent', 'start'));
    let seed = 41;
    const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
    const n = b.right.count ?? 260;
    for (let i = 0; i < n; i++) {
      const x = mid + 22 + rand() * (W - mid - 44);
      const y = 44 + rand() * (H - 108);
      const size = 2.5 + rand() * 4.5;
      const muted = rand() < 0.3;
      s.append(
        svg('rect', {
          x: x.toFixed(1),
          y: y.toFixed(1),
          width: size.toFixed(1),
          height: size.toFixed(1),
          rx: '1',
          class: `contrast__bit${muted ? ' is-muted' : ''}`,
          opacity: (0.35 + rand() * 0.65).toFixed(2),
        })
      );
    }
    s.append(svgText(mid + 22, H - 18, b.right.caption, 'contrast__cap', 'start'));

    w.append(s);
    return w;
  },

  // ── Deck 34: token demand converts to billable events ─────────────────────
  convert(b) {
    const w = el('div', 'convert');

    const card = (c: { head: string; value: string; sub: string; tag: string }, accent: boolean) => {
      const d = el('div', `convert__card${accent ? ' convert__card--accent' : ''}`);
      d.append(
        el('div', 'convert__head', c.head),
        el('div', 'convert__value', c.value),
        el('div', 'convert__sub', c.sub),
        el('div', 'convert__tag', c.tag)
      );
      return d;
    };

    w.append(card(b.from, false));
    w.append(el('div', 'convert__arrow', '→'));

    const via = el('div', 'convert__via');
    via.append(el('div', 'convert__head', b.via.head));
    for (const r of b.via.rows) {
      const row = el('div', 'convert__row');
      row.append(el('span', 'convert__verb', r.verb), el('span', 'convert__desc', r.desc));
      via.append(row);
    }
    w.append(via);

    w.append(el('div', 'convert__arrow', '→'));
    w.append(card(b.to, true));
    return w;
  },

  // ── Deck 62/63/76: two series on independent axes ─────────────────────────
  dualline(b) {
    const w = el('div', 'chart');
    const W = 660;
    const H = 320;
    const pad = { t: 26, r: 52, b: 34, l: 52 };

    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart__svg', role: 'img' }) as SVGSVGElement;
    s.setAttribute('aria-label', `${b.left.name} (left axis) and ${b.right.name} (right axis)`);

    const xOf = (i: number) => pad.l + (b.x.length === 1 ? 0 : (i / (b.x.length - 1)) * (W - pad.l - pad.r));
    const scaleOf = (values: (number | null)[]) => {
      const vals = values.filter((v): v is number => v != null);
      const max = Math.max(...vals);
      const min = Math.min(...vals);
      const span = max - min || 1;
      const lo = min - span * 0.35;
      const hi = max + span * 0.3;
      return (v: number) => H - pad.b - ((v - lo) / (hi - lo)) * (H - pad.t - pad.b);
    };
    const yL = scaleOf(b.left.values);
    const yR = scaleOf(b.right.values);

    s.append(svg('line', { x1: String(pad.l), y1: String(H - pad.b), x2: String(W - pad.r), y2: String(H - pad.b), class: 'chart__axis' }));
    b.x.forEach((label, i) => {
      if (!label) return;
      s.append(svgText(xOf(i), H - pad.b + 18, label, 'chart__xlab'));
    });

    const dlabels: { x: number; y: number; text: string; muted: boolean }[] = [];
    const draw = (
      series: { name: string; values: (number | null)[]; display?: (string | null)[]; hollowLast?: boolean },
      yOf: (v: number) => number,
      muted: boolean
    ) => {
      const pts = series.values
        .map((v, i) => (v == null ? null : { x: xOf(i), y: yOf(v), i }))
        .filter((p): p is { x: number; y: number; i: number } => p != null);
      if (!pts.length) return;
      const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
      s.append(svg('path', { d, class: `chart__line${muted ? ' is-muted' : ''}` }));
      pts.forEach((p, idx) => {
        const hollow = series.hollowLast && idx === pts.length - 1;
        s.append(
          svg('circle', {
            cx: String(p.x),
            cy: String(p.y),
            r: hollow ? '4.2' : '2.8',
            class: `chart__dot${muted ? ' is-muted' : ''}${hollow ? ' is-hollow' : ''}`,
          })
        );
        const disp = series.display?.[p.i];
        if (disp) dlabels.push({ x: p.x, y: p.y + (muted ? 20 : -10), text: disp, muted });
      });
      // Axis-side series label — lifted clear of the end-point value label.
      const last = pts[pts.length - 1];
      const first = pts[0];
      const lastHasV = Boolean(series.display?.[last.i]);
      const firstHasV = Boolean(series.display?.[first.i]);
      if (muted) s.append(svgText(first.x, Math.max(pad.t + 8, first.y - (firstHasV ? 14 : 12)), series.name, 'chart__slab is-muted', 'start'));
      else {
        // Clear the end-point value label: half its width plus a gap.
        const vHalf = lastHasV ? ((series.display![last.i] as string).length * 5.5) / 2 + 10 : 0;
        s.append(svgText(last.x - vHalf, Math.max(pad.t + 8, last.y - 12), series.name, 'chart__slab', 'end'));
      }
    };
    if (b.rightBars) {
      // Right series as muted bars behind the line, scaled from the baseline.
      const vals = b.right.values.filter((v): v is number => v != null);
      const rMax = Math.max(...vals);
      const yBar = (v: number) => H - pad.b - (v / (rMax * 1.35)) * (H - pad.t - pad.b);
      const bw = ((W - pad.l - pad.r) / b.x.length) * 0.55;
      b.right.values.forEach((v, i) => {
        if (v == null) return;
        s.append(
          svg('rect', {
            x: (xOf(i) - bw / 2).toFixed(1),
            y: yBar(v).toFixed(1),
            width: bw.toFixed(1),
            height: (H - pad.b - yBar(v)).toFixed(1),
            class: 'dual__bar',
          })
        );
        const disp = b.right.display?.[i];
        if (disp) s.append(svgText(xOf(i), yBar(v) - 6, disp, 'chart__vlab is-muted'));
      });
      s.append(svgText(W - pad.r, pad.t + 6, b.right.name, 'chart__slab is-muted', 'end'));
      draw(b.left, yL, false);
    } else {
      draw(b.right, yR, true);
      draw(b.left, yL, false);
    }

    // Where the two series converge, their value labels can land on each
    // other — push the muted one down until clear (staying above the axis).
    for (const a of dlabels.filter((l) => !l.muted)) {
      for (const m of dlabels.filter((l) => l.muted)) {
        if (Math.abs(a.x - m.x) < (a.text.length + m.text.length) * 3.1 && Math.abs(a.y - m.y) < 13) {
          m.y = Math.min(a.y + 15, H - pad.b - 4);
        }
      }
    }
    for (const l of dlabels) s.append(svgText(l.x, l.y, l.text, `chart__vlab${l.muted ? ' is-muted' : ''}`));

    if (b.marks) {
      for (const m of b.marks) {
        const onLeft = m.on !== 'right';
        const series = onLeft ? b.left : b.right;
        const v = series.values[m.at];
        if (v == null) continue;
        const x = xOf(m.at);
        const y = (onLeft ? yL : yR)(v);
        const dir = m.below ? 1 : -1;
        const lift = m.lift ?? 0;
        s.append(svg('line', { x1: String(x), y1: String(y + dir * 7), x2: String(x), y2: String(y + dir * (20 + lift)), class: 'chart__tick' }));
        s.append(
          svgText(x, y + dir * (30 + lift), m.text, 'chart__mark', m.at > b.x.length * 0.72 ? 'end' : m.at < b.x.length * 0.28 ? 'start' : 'middle')
        );
      }
    }

    w.append(s);
    return w;
  },

  // ── Deck 66: head-to-head scorecard ────────────────────────────────────────
  bout(b) {
    const w = el('div', 'bout');
    const head = el('div', 'bout__row bout__row--head');
    head.append(el('div', 'bout__round', ''), el('div', 'bout__head bout__head--a', b.heads[0]), el('div', 'bout__head', b.heads[1]), el('div', ''));
    w.append(head);
    for (const r of b.rows) {
      const row = el('div', 'bout__row');
      row.append(el('div', 'bout__round', r.round));
      row.append(el('div', `bout__cell${r.winner === 'a' ? ' is-win' : ''}`, r.a));
      row.append(el('div', `bout__cell${r.winner === 'b' ? ' is-win' : ''}`, r.b));
      row.append(el('div', `bout__chip bout__chip--${r.winner}`, r.winner === 'a' ? b.heads[0].split('·').pop()!.trim() : b.heads[1].split('·').pop()!.trim()));
      w.append(row);
    }
    w.append(el('div', 'bout__score', b.score));
    return w;
  },
};

export function renderExhibit(b: Body): HTMLElement {
  const fn = renderers[b.kind] as (x: Body) => HTMLElement;
  return fn(b);
}
