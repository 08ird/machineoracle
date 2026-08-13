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
export const WIDE: ReadonlySet<Body['kind']> = new Set(['table', 'timeline', 'waves', 'columns', 'flow']);

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
    const flat = b.series.flatMap((s) => s.values).filter((v): v is number => v != null && v > 0);
    const max = Math.max(...flat);
    const min = Math.min(...flat);
    // Narrow-band series (retention rates) zoom to their range; wide ones keep
    // a zero-ish baseline so magnitudes stay honest.
    const span = max - min;
    const zoomed = !b.log && span / max < 0.2;
    const lo = b.log ? Math.log10(min) - 0.25 : zoomed ? min - span * 0.9 : 0;
    const hi = b.log ? Math.log10(max) + 0.12 : zoomed ? max + span * 0.5 : max * 1.1;
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
    b.x.forEach((label, i) => {
      if (!label) return; // Empty label = point without a tick.
      const t = ns('text', { x: String(xOf(i)), y: String(H - pad.b + 18), class: 'chart__xlab' });
      t.textContent = label;
      svg.append(t);
    });

    // Value and name labels are collected first, then placed with collision
    // avoidance — series that end near the same value would otherwise print
    // their labels on top of each other.
    const vlabels: { x: number; y: number; text: string }[] = [];
    const nlabels: { x: number; y: number; text: string; muted: boolean }[] = [];

    b.series.forEach((s) => {
      const pts = s.values
        .map((v, i) => (v == null ? null : { x: xOf(i), y: yOf(v), i, v }))
        .filter((p): p is { x: number; y: number; i: number; v: number } => p != null);
      if (!pts.length) return;

      const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
      const cls = `chart__line${s.tone === 'muted' ? ' is-muted' : ''}${s.tone === 'warn' ? ' is-warn' : ''}${
        s.dashed ? ' is-dashed' : ''
      }`;
      svg.append(ns('path', { d, class: cls }));

      for (const p of pts) {
        svg.append(ns('circle', { cx: String(p.x), cy: String(p.y), r: '3.2', class: `chart__dot${s.tone === 'muted' ? ' is-muted' : ''}` }));
        const disp = s.display?.[p.i];
        if (disp) vlabels.push({ x: p.x, y: p.y - 10, text: disp });
      }

      const last = pts[pts.length - 1];
      nlabels.push({ x: last.x + 8, y: last.y + 4, text: s.name, muted: s.tone === 'muted' });
    });

    // Same-x value labels that would stack: flip later ones below their point.
    for (let i = 0; i < vlabels.length; i++) {
      for (let j = 0; j < i; j++) {
        if (Math.abs(vlabels[i].x - vlabels[j].x) < 10 && Math.abs(vlabels[i].y - vlabels[j].y) < 13) {
          vlabels[i].y += 30; // from y−10 above the point to y+20 below it
        }
      }
    }
    for (const l of vlabels) {
      const t = ns('text', { x: String(l.x), y: String(l.y), class: 'chart__vlab' });
      t.textContent = l.text;
      svg.append(t);
    }

    // Series names: nudge apart vertically when their line-ends coincide.
    nlabels.sort((a, b2) => a.y - b2.y);
    for (let i = 1; i < nlabels.length; i++) {
      if (nlabels[i].y - nlabels[i - 1].y < 14) nlabels[i].y = nlabels[i - 1].y + 14;
    }
    for (const l of nlabels) {
      const t = ns('text', {
        x: String(l.x),
        y: String(Math.min(l.y, H - pad.b - 4)),
        class: `chart__slab${l.muted ? ' is-muted' : ''}`,
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
        const col = el('div', `grouped__bar${s.tone === 'muted' ? ' is-muted' : ''}`);
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
};

export function renderExhibit(b: Body): HTMLElement {
  const fn = renderers[b.kind] as (x: Body) => HTMLElement;
  return fn(b);
}
