/**
 * Slide renderers. Each `Body.kind` maps to one function returning a DOM node.
 *
 * Everything is real text in real elements — selectable, searchable, printable,
 * and screen-reader navigable. Charts are CSS/flex rather than canvas so they
 * reflow on a phone instead of shrinking to illegibility.
 */

import type { Body, Slide } from './data/slides';
import { partOf, PARTS } from './data/slides';

function el<K extends keyof HTMLElementTagNameMap>(
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
 * Bars are drawn on a log scale when the range spans more than ~2 decades.
 *
 * Every width is scaled by SPAN so the longest bar stops short of the track end,
 * leaving room for its value label. Scaling all bars by the same factor keeps
 * the proportions between them exact.
 */
const SPAN = 0.84;

function barWidths(values: number[]): number[] {
  const max = Math.max(...values);
  const min = Math.min(...values.filter((v) => v > 0));
  const decades = Math.log10(max / min);
  if (decades > 2) {
    // Log scale, floored so the smallest bar stays visible.
    const lo = Math.log10(min) - 0.4;
    const hi = Math.log10(max);
    return values.map((v) => Math.max(4, ((Math.log10(Math.max(v, min)) - lo) / (hi - lo)) * 100 * SPAN));
  }
  // Linear, but anchored below the smallest value so differences read clearly.
  const base = Math.max(0, min - (max - min) * 0.35);
  return values.map((v) => Math.max(4, ((v - base) / (max - base)) * 100 * SPAN));
}

const body: { [K in Body['kind']]: (b: Extract<Body, { kind: K }>) => HTMLElement } = {
  cover(b) {
    const w = el('div', 'cover');
    const mark = el('img', 'cover__mark');
    mark.src = 'logo.png';
    mark.alt = '';
    mark.width = 84;
    const meta = el('div', 'cover__meta');
    meta.append(el('span', undefined, 'Skycatcher'), el('span', undefined, b.date));
    const h = el('h1', undefined, 'Infinite Software');
    w.append(mark, meta, h, el('p', 'cover__lede', b.lede));
    return w;
  },

  quote(b) {
    const w = el('div', 'quote');
    const q = el('blockquote');
    b.quote.forEach((line, i) => {
      q.append(document.createTextNode((i === 0 ? '“' : '') + line + (i === b.quote.length - 1 ? '”' : '')));
      if (i < b.quote.length - 1) q.append(el('br'));
    });
    w.append(q, el('div', 'quote__attrib', '— ' + b.attrib));
    if (b.sub) w.append(el('p', 'quote__sub', b.sub));
    if (b.extra) w.append(el('p', 'quote__extra', b.extra));
    return w;
  },

  section(b) {
    const w = el('div', 'section');
    w.append(el('div', 'section__num', b.num), el('h2', undefined, b.label), el('p', 'section__sub', b.sub));
    return w;
  },

  agenda(b) {
    const w = el('div', 'agenda');
    for (const it of b.items) {
      const row = el('div', 'agenda__row');
      const txt = el('div');
      txt.append(el('div', 'agenda__t', it.title), el('div', 'agenda__d', it.desc));
      row.append(el('div', 'agenda__n', it.n), txt);
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
      const col = el('div', `col${c.tone ? ' col--' + c.tone : ''}`);
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
      row.append(el('div', 'step__n', it.n ?? '→'));
      row.append(el('div', 'step__head', it.head));
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
        if (it.here) row.append(el('div', 'tl__here', '◀ You are here'));
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
      // Rising heights communicate scale without a chart library.
      c.style.minHeight = `${5 + i * 1.15}rem`;
      const cos = el('div', 'wave__cos');
      for (const co of it.cos) cos.append(el('span', 'wave__co', co));
      c.append(el('div', 'wave__era', it.era), el('div', 'wave__name', it.name), cos);
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
        seg.append(el('div', 'split__pct', p.pct + '%'), el('div', 'split__lab', p.label));
        bar.append(seg);
      }
      grp.append(bar);
      w.append(grp);
    }
    return w;
  },

  prose(b) {
    const w = el('div', 'prose');
    for (const p of b.paras) {
      const para = el('p');
      if (p.head) para.append(el('b', undefined, p.head + ' '));
      para.append(document.createTextNode(p.text));
      w.append(para);
    }
    return w;
  },
};

/** Slides that read better as full-bleed dark panels. */
function isDark(s: Slide): boolean {
  return s.body.kind === 'cover' || s.body.kind === 'section' || s.body.kind === 'quote';
}

export function renderSlide(s: Slide): HTMLElement {
  const sec = el('section', 'slide');
  sec.dataset.id = String(s.id);
  sec.id = `s${s.id}`;
  sec.setAttribute('aria-label', `Slide ${s.id} of 50${s.title ? ': ' + s.title : ''}`);
  if (isDark(s)) sec.classList.add('slide--dark');
  else if (s.body.kind === 'prose') sec.classList.add('slide--tint');

  // Head
  const head = el('header');
  if (s.kicker) head.append(el('div', 'kicker', s.kicker));
  if (s.title) head.append(el('h2', undefined, s.title));
  sec.append(head);

  // Body
  const bodyWrap = el('div', 'slide__body');
  const fn = body[s.body.kind] as (b: Body) => HTMLElement;
  bodyWrap.append(fn(s.body));
  sec.append(bodyWrap);

  // Foot
  const foot = el('footer', 'slide__foot');
  if (s.takeaway) {
    const t = el('div', 'takeaway');
    if (s.takeaway.icon) t.append(el('span', 'takeaway__icon', s.takeaway.icon));
    t.append(el('span', undefined, s.takeaway.text));
    foot.append(t);
  }
  if (s.footnote) foot.append(el('p', 'footnote', s.footnote));
  sec.append(foot);

  if (s.body.kind === 'cover') {
    const wave = el('img', 'cover__wave');
    wave.src = 'wave.png';
    wave.alt = '';
    sec.append(wave);
  }
  return sec;
}

export function renderOverview(slides: Slide[], onPick: (id: number) => void): HTMLElement {
  const grid = el('div', 'overview__grid');
  let lastPart: number | undefined = -1;
  for (const s of slides) {
    const p = partOf(s.id);
    if (p !== lastPart) {
      lastPart = p;
      const meta = PARTS.find((x) => x.n === p);
      grid.append(el('div', 'overview__parthead', meta ? `Part 0${meta.n} — ${meta.title}` : 'Front & back matter'));
    }
    const b = el('button', 'thumb');
    b.dataset.id = String(s.id);
    b.append(
      el('div', 'thumb__n', String(s.id).padStart(2, '0')),
      el(
        'div',
        'thumb__t',
        s.title ?? (s.body.kind === 'section' ? s.body.label : s.body.kind === 'cover' ? 'Infinite Software' : '—')
      )
    );
    b.addEventListener('click', () => onPick(s.id));
    grid.append(b);
  }
  return grid;
}
