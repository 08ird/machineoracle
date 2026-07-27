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
};

export function renderExhibit(b: Body): HTMLElement {
  const fn = renderers[b.kind] as (x: Body) => HTMLElement;
  return fn(b);
}
