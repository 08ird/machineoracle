/**
 * Exhibit data for "Infinite Software" (Skycatcher, Aug 11 2026 — 94 slides).
 *
 * Each entry is one section of the written piece: a title, its exhibit, the
 * takeaway line, and the source note. Prose lives in content/commentary-*.ts;
 * `id` matches the deck slide the exhibit comes from, so the two stay aligned.
 */

export type Part = 1 | 2 | 3 | 4;

export type Body =
  | { kind: 'cover'; date: string; lede: string }
  | { kind: 'quote'; quote: string[]; attrib: string; sub?: string; extra?: string }
  | { kind: 'section'; num: string; label: string; sub: string }
  | { kind: 'agenda'; items: { n: string; title: string; desc: string }[] }
  | { kind: 'grid3'; items: { eyebrow: string; title: string; desc: string }[] }
  | { kind: 'stats'; items: { value: string; label: string; sub?: string }[] }
  | {
      kind: 'bars';
      axis?: string;
      items: { label: string; sub?: string; value: number; display: string; tone?: 'accent' | 'muted' | 'warn' }[];
    }
  | {
      kind: 'columns';
      cols: { head: string; sub?: string; items: string[]; foot?: string; tone?: 'cold' | 'warm' }[];
    }
  | { kind: 'steps'; items: { n?: string; head: string; desc: string; meta?: string }[] }
  | { kind: 'flow'; items: { head: string; desc: string }[]; out?: { value: string; label: string }[] }
  | { kind: 'table'; head: string[]; rows: string[][]; highlight?: number }
  | { kind: 'timeline'; tracks: { name: string; items: { when: string; text: string; here?: boolean }[] }[] }
  | { kind: 'waves'; items: { name: string; era: string; cos: string[]; last?: boolean }[] }
  | {
      kind: 'line';
      axis?: string;
      x: string[];
      log?: boolean;
      series: {
        name: string;
        values: (number | null)[];
        display?: (string | null)[];
        dashed?: boolean;
        tone?: 'accent' | 'muted' | 'warn' | 'ink';
      }[];
      marks?: { at: number; text: string; below?: boolean; lift?: number }[];
    }
  | {
      kind: 'grouped';
      axis?: string;
      x: string[];
      series: { name: string; values: (number | null)[]; display: (string | null)[]; tone?: 'accent' | 'muted' }[];
    }
  | {
      kind: 'decompose';
      factors: { value: string; label: string; note?: string; from: string; to: string }[];
      result: { value: string; label: string; note?: string };
    }
  | { kind: 'split'; groups: { head: string; parts: { pct: number; label: string }[] }[] }
  | { kind: 'prose'; paras: { head?: string; text: string }[] }
  | {
      // Concentric maker populations (deck 13): rings inner→outer, eras beside.
      kind: 'rings';
      rings: { value: string; label: string }[];
      eras: { when: string; name: string; count: string; desc: string }[];
    }
  | {
      // The five-layer stack with universe counts (deck 44), top layer first.
      kind: 'layerstack';
      layers: { n: string; name: string; desc: string; count?: string; badge?: string; tone: 'key' | 'track' | 'out' }[];
    }
  | {
      // The published roster (deck 45): chip grid by group; rail = action rails.
      kind: 'roster';
      groups: { head: string; count: string; names: { n: string; rail?: boolean }[] }[];
      note?: string;
    }
  | {
      // Backend vs. worksite (deck 42): two verb panels.
      kind: 'panels';
      panels: {
        head: string;
        sub: string;
        verbs: { verb: string; desc: string }[];
        foot: string;
        tone: 'warm' | 'cold';
      }[];
    }
  | {
      // Market ponds (deck 47): circles with area ∝ size; optional dashed ring.
      kind: 'ponds';
      backdrop?: { label: string; value: string; size: number };
      ponds: {
        label: string;
        value: string;
        sub?: string;
        size: number;
        tone?: 'accent' | 'ink';
        ring?: { label: string; value: string };
      }[];
    }
  | {
      // Old TAM vs. delegation-share TAM (deck 49).
      kind: 'tam';
      old: { title: string; rows: { label: string; value: string }[]; total: { label: string; value: string } };
      next: { title: string; sub: string; tiers: { share: string; value: string; note: string; size: number }[] };
    }
  | {
      // Growth vs. multiple scatter (deck 51). Axes in % growth and x-multiple.
      kind: 'scatter';
      xlab: string;
      ylab: string;
      xmax: number;
      ymax: number;
      pts: { x: number; y: number; tone: 'accent' | 'ink' | 'muted' }[];
      legend: { label: string; tone: 'accent' | 'ink' | 'muted' }[];
      notes?: { x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' }[];
    }
  | {
      // The admission ladder (deck 73): share bars against a marker line.
      kind: 'ladder';
      axis?: string;
      marker: { at: number; label: string };
      rows: {
        name: string;
        layer: string;
        share: number | null;
        display: string;
        status: 'in' | 'converting';
        note: string;
      }[];
      foot?: { head: string; count: string; names: string[]; note: string };
    }
  | {
      // The admission worksheet (deck 71): card rows grouped by verdict.
      kind: 'admit';
      groups: { head: string; rows: { name: string; share: string; level?: string; basis: string }[] }[];
    }
  | {
      // Site-original: scarce software (a few products) against infinite
      // software (a field of disposable, single-task pieces).
      kind: 'contrast';
      left: { head: string; items: string[]; caption: string };
      right: { head: string; caption: string; count?: number };
    }
  | {
      // Token demand → rented rails → billable events (deck 34).
      kind: 'convert';
      from: { head: string; value: string; sub: string; tag: string };
      via: { head: string; rows: { verb: string; desc: string }[] };
      to: { head: string; value: string; sub: string; tag: string };
    }
  | {
      // Two series on independent axes (deck 62/63/76): multiple vs. growth.
      kind: 'dualline';
      x: string[];
      left: { name: string; values: (number | null)[]; display?: (string | null)[]; hollowLast?: boolean };
      right: { name: string; values: (number | null)[]; display?: (string | null)[] };
      marks?: { at: number; text: string; below?: boolean; on?: 'left' | 'right'; lift?: number }[];
    };

export interface Slide {
  id: number;
  part?: Part;
  kicker?: string;
  title?: string;
  body: Body;
  takeaway?: { icon?: string; text: string };
  footnote?: string;
  /**
   * Companion deck slides shown in the same figure — used where the written
   * piece cites a range ("Exhibits — slides 43–45") but reads as one section.
   */
  extras?: number[];
}

export const PARTS: { n: Part; title: string; sub: string; start: number }[] = [
  { n: 1, title: 'Infinite Software', sub: 'the era — machine labor makes software unlimited', start: 7 },
  { n: 2, title: 'The Token Tidal Wave', sub: 'the phenomenon — our ~40x call, landing on the rails', start: 18 },
  {
    n: 3,
    title: 'A Royalty on Machine Labor',
    sub: 'the meters — the universe, the backend, and the evidence in the filings',
    start: 38,
  },
  {
    n: 4,
    title: 'Machine Oracle',
    sub: 'the research program — the definitions, the cohort, the predictions, the grading',
    start: 69,
  },
];

export const SLIDES: Slide[] = [
  {
    id: 1,
    body: {
      kind: 'cover',
      date: 'August 11, 2026',
      lede:
        'In 1995, the internet changed software distribution. In 2026, AI agents are changing software production — creating a tidal wave of demand for the infrastructure that runs, stores, secures, observes, and meters all software.',
    },
  },
  {
    id: 2,
    body: {
      kind: 'quote',
      quote: ['The Internet is a tidal wave.', 'It changes the rules.'],
      attrib: 'Bill Gates, internal Microsoft memo · May 26, 1995',
      sub: 'Thirty-one years later, the wave is running again — denominated in tokens.',
    },
  },
  {
    id: 3,
    kicker: 'The internet wave vs. the token wave — same clock, new denomination',
    title: 'By the internet clock, it is 1996',
    body: {
      kind: 'timeline',
      tracks: [
        {
          name: 'The internet wave',
          items: [
            { when: '1995', text: 'The memo names the discontinuity' },
            { when: '1996–98', text: 'The rails get built and paid — the street debates “fad”' },
            { when: '1999–2000', text: 'The mania — 65–100x multiples, then 60–85% compression' },
            { when: '2001+', text: 'The rails’ owners collect the era’s fortunes' },
          ],
        },
        {
          name: 'The token wave',
          items: [
            { when: 'Nov 2022', text: 'ChatGPT — the Netscape moment, from roughly zero' },
            { when: '2026', text: 'The debate — multiples still at fade levels', here: true },
            { when: '2027–28', text: 'Agent GAAP disclosures — agent demand becomes visible in filings' },
            { when: '2029+', text: 'The meters collect the era’s royalty; every call here is graded' },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    kicker: 'The argument of this piece',
    title: 'Four parts',
    body: {
      kind: 'agenda',
      items: [
        { n: '01', title: 'Infinite Software', desc: 'the era — machine labor makes software free; the software population explodes' },
        { n: '02', title: 'The Token Tidal Wave', desc: 'the phenomenon — every price drop buys more demand than it gives up: ~40x tokens by 2029' },
        { n: '03', title: 'A Royalty on Machine Labor', desc: 'the royalty — infinite software runs on metered rails; two layers collect it' },
        { n: '04', title: 'Machine Oracle', desc: 'the mispricing — three backend meters, priced for deceleration and zero agents' },
      ],
    },
  },
  // ── Part 01 ───────────────────────────────────────────────────────────────
  {
    id: 7,
    part: 1,
    body: { kind: 'section', num: '01', label: 'Infinite Software', sub: 'the era — machine labor makes software unlimited' },
  },
  {
    id: 8,
    part: 1,
    kicker: 'Skycatcher illustrative view of tech wave scale',
    title: 'Every tech wave was bigger than the last — this one produces labor',
    body: {
      kind: 'waves',
      items: [
        { name: 'Mainframe', era: '1960–80', cos: ['IBM', 'DEC'] },
        { name: 'PC', era: '1980s', cos: ['Microsoft', 'Intel'] },
        { name: 'Networking', era: '1990s', cos: ['Cisco', 'Nokia'] },
        { name: 'Web 1.0', era: '2000s', cos: ['Google', 'Amazon'] },
        { name: 'Mobile', era: '2010s', cos: ['Apple', 'Tencent'] },
        { name: 'Cloud / SaaS', era: '2015–20', cos: ['AWS', 'Salesforce'] },
        { name: 'Artificial Intelligence', era: '2022–2029+', cos: ['NVIDIA', 'OpenAI', 'Anthropic'], last: true },
      ],
    },
    takeaway: { icon: '🚀', text: 'Every prior wave sold tools. This one sells labor.' },
    footnote: 'Skycatcher illustrative framework. Company references informational only.',
  },
  {
    // Site-original exhibit (no deck slide): what "infinite software" means.
    id: 5,
    part: 1,
    kicker: 'Illustrative — the software population, before and after production left human hands',
    title: 'What infinite software looks like',
    body: {
      kind: 'contrast',
      left: {
        head: 'Software as a product',
        items: ['ERP', 'CRM', 'Email', 'BI', 'HR', 'Docs'],
        caption: '~5M applications · built by teams, for everyone',
      },
      right: {
        head: 'Software as a document',
        caption: 'uncounted · one user, one task, one afternoon',
      },
    },
    takeaway: {
      icon: '✨',
      text: 'Software stops being a product you buy and becomes a document you write — and every piece of it rents the rails.',
    },
    footnote: 'Illustrative, not counted — the right panel is the point, not a census.',
  },
  {
    id: 9,
    part: 1,
    kicker: 'The ration that just ended',
    title: 'What “infinite software” actually means',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'The old ration',
          sub: '~30M developers',
          items: ['$100+ an hour', '18-month backlogs', 'Every app justifies a team, a budget, a roadmap'],
          foot: 'Only mass-market software gets built',
          tone: 'cold',
        },
        {
          head: 'The new state',
          sub: 'Summonable',
          items: [
            'Agents write, test, and ship on demand',
            '~4,000x cheaper per unit of work',
            'Built for one user, one task, one afternoon',
          ],
          foot: 'Abundant, personal, disposable',
          tone: 'warm',
        },
      ],
    },
  },
  {
    id: 10,
    part: 1,
    kicker: 'Cost per unit of software work, by production regime ($, log scale, illustrative)',
    title: 'Production broke free of human hands',
    body: {
      kind: 'bars',
      items: [
        { label: 'Artisan engineering', sub: '1990s–2000s', value: 200, display: '$200', tone: 'muted' },
        { label: 'Offshore & outsourcing', sub: '2000s', value: 60, display: '$60', tone: 'muted' },
        { label: 'Open source & reuse', sub: '2010s', value: 20, display: '$20', tone: 'muted' },
        { label: 'Copilot-assisted', sub: '2021–24', value: 5, display: '$5' },
        { label: 'Agent-produced', sub: '2026', value: 0.05, display: '$0.05', tone: 'accent' },
      ],
    },
    takeaway: { icon: '🤯', text: '~4,000x cheaper — in one step.' },
    footnote: 'Skycatcher illustration; inference economics per Epoch AI constant-performance price data. Illustrative only.',
  },
  {
    id: 11,
    part: 1,
    kicker: 'From copilots that help you, to agents that work for you',
    title: 'Labor is no longer human-limited',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Copilots / Chat',
          sub: '1 analyst helping you',
          items: ['You prompt', 'It answers', 'You check', 'You prompt again…'],
          foot: 'Human required in every loop',
          tone: 'cold',
        },
        {
          head: 'Agents',
          sub: '1,000 analysts working 24/7',
          items: ['You define the objective', 'Agents plan, act, verify', 'Tool calls · writes · tests', 'Loop until completion'],
          foot: 'Human becomes the manager',
          tone: 'warm',
        },
        {
          head: 'Three consequences',
          items: [
            'The human bottleneck is removed — attention-hours no longer cap output',
            'Work parallelizes — agents launch agents, 10–100x workstreams',
            'The duty cycle changes — 40 human attention-hours become 168 machine-hours',
          ],
        },
      ],
    },
    footnote: 'Skycatcher framework. Agent capabilities illustrative; reliability and supervision requirements remain constraints.',
  },
  {
    id: 12,
    part: 1,
    kicker: 'The proof is public and dated',
    title: 'The era is already measurable',
    body: {
      kind: 'stats',
      items: [
        { value: '180M', label: 'developers on GitHub', sub: '36M added in one year — the fastest cohort ever' },
        { value: '51%', label: 'of committed code is AI-written', sub: 'GitHub, early 2026' },
        { value: '~75%', label: 'of Google’s new code is AI-generated', sub: 'engineer-approved' },
        { value: '630M', label: 'repositories', sub: '230 new projects a minute' },
        { value: '20M', label: 'developers on Copilot', sub: '' },
        { value: '8M', label: 'users on Lovable', sub: 'building apps from plain English' },
      ],
    },
  },
  {
    id: 13,
    part: 1,
    kicker: 'The syntax wall comes down',
    title: 'Everyone becomes a software developer',
    body: {
      kind: 'rings',
      rings: [
        { value: '30M', label: 'professionals' },
        { value: '180M', label: 'on GitHub' },
        { value: '1B+', label: 'knowledge workers' },
      ],
      eras: [
        { when: '1990–2022', name: 'The priesthood', count: '30M', desc: 'A profession behind a syntax wall — four in every thousand humans.' },
        { when: '2022–2026', name: 'The copilot era', count: '180M', desc: 'The wall lowers: assisted, occasional, half-professional makers.' },
        { when: '2026 →', name: 'The natural-language era', count: '1B+', desc: 'Describing software is making software. The wall is removed.' },
      ],
    },
    takeaway: {
      icon: '🌍',
      text: '~33x more makers — the meters’ addressable population, multiplied.',
    },
  },
  {
    id: 14,
    part: 1,
    kicker: 'A Tuesday in the infinite software era',
    title: 'The software was disposable. The state and the audit trail weren’t.',
    body: {
      kind: 'steps',
      items: [
        { n: '9:00 AM', head: 'An ops manager describes a dashboard in plain English', desc: 'No ticket, no sprint, no engineer.' },
        {
          n: '9:40 AM',
          head: 'The agent ships it',
          desc: 'Code written and tested, database provisioned, app deployed — 100K+ metered events before the coffee is cold.',
        },
        {
          n: '2:00 PM',
          head: 'The team adopts it',
          desc: 'The agent adds SSO and audit logging on request. State accumulates in the operational database (L2); every action is traced (L3).',
        },
        {
          n: 'Next quarter',
          head: 'Requirements changed',
          desc: 'A better version is summoned in an afternoon, and the app is thrown away.',
        },
      ],
    },
    takeaway: {
      icon: '🧾',
      text: 'The software was disposable. The state and the audit trail weren’t. Multiply this Tuesday by a billion makers — that’s the royalty.',
    },
  },
  {
    id: 15,
    part: 1,
    kicker: 'The scarcity inversion — where the money goes when production costs collapse',
    title: 'Making software is becoming free. Running it never is.',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Deflates to zero',
          items: ['Code, tests, documentation', 'Integration glue & boilerplate', 'One-off tools & scripts', 'Custom applications themselves'],
          foot: 'An infinite knife-fight of entrants',
          tone: 'cold',
        },
        {
          head: 'Metered forever',
          items: [
            'Execute — runs, steps, compute-seconds',
            'Remember — reads, writes, queries, storage',
            'Answer for it — logs, identities, audit trails',
          ],
          foot: 'Billed per unit of use, scaling with the software population — the three activities Part 03 names the backend',
          tone: 'warm',
        },
      ],
    },
    takeaway: { icon: '💡', text: 'The value moves to the metered column.' },
  },
  {
    id: 17,
    part: 1,
    kicker: 'Part 01 recap',
    title: 'The era, in three numbers',
    body: {
      kind: 'stats',
      items: [
        { value: '~4,000x', label: 'cheaper to make software', sub: 'production broke free of human hands' },
        { value: '168 hrs', label: 'machine duty cycle per week', sub: 'against ~40 human attention-hours' },
        { value: '2 of 5', label: 'layers collect the royalty', sub: 'a five-layer stack runs it all; the money settles where work is metered and state is kept' },
      ],
    },
  },

  // ── Part 02 ───────────────────────────────────────────────────────────────
  {
    id: 18,
    part: 2,
    body: { kind: 'section', num: '02', label: 'The Token Tidal Wave', sub: 'the phenomenon — our ~40x call, landing on the rails' },
  },
  {
    id: 19,
    part: 2,
    kicker: 'Global token consumption, quadrillion tokens / year (log scale)',
    title: 'Tokens grew ~2,000x in four years',
    body: {
      kind: 'bars',
      items: [
        { label: '2022', value: 0.05, display: '0.05Q', tone: 'muted' },
        { label: '2023', value: 0.5, display: '0.5Q', tone: 'muted' },
        { label: '2024', value: 5, display: '5Q' },
        { label: '2025', value: 25, display: '25Q' },
        { label: '2026', value: 100, display: '~100Q', tone: 'accent' },
      ],
    },
    footnote: 'Platform disclosures, Skycatcher aggregation; error bars apply. Illustrative.',
  },
  {
    id: 20,
    part: 2,
    kicker: 'What happened, 2022–26 — price down ÷50x, volume up ×2,000x',
    title: 'Every 10x price drop has bought 15–20x more demand',
    body: {
      kind: 'line',
      axis: 'Log scale · price falling against volume rising',
      x: ['2022', '2023', '2024', '2025', '2026'],
      log: true,
      series: [
        { name: 'Volume  ×2,000', values: [0.05, 0.5, 5, 25, 100], display: ['0.05Q', '0.5Q', '5Q', '25Q', '100Q'] },
        { name: 'Price  ÷50', values: [20, 8, 2, 1, 0.4], display: ['$20', '$8', '$2', '$1', '$0.40'], tone: 'muted' },
      ],
    },
    footnote:
      'Skycatcher analysis of platform volume disclosures vs. frontier pricing, 2022–26. Historical only; capability-vs-price confound checked against constant-capability tiers.',
  },
  {
    id: 21,
    part: 2,
    kicker: 'Three prior collapses in the price of a compute input',
    title: 'This movie has run before — three times',
    body: {
      kind: 'steps',
      items: [
        {
          n: 'Bandwidth',
          head: '$1,200 → under $1 per Mbps, 1998–2010',
          desc: 'Traffic grew 60–100% a year; carrier and CDN revenue grew through the entire collapse.',
        },
        {
          n: 'Storage',
          head: '$/GB fell ~30% a year for three decades',
          desc: 'Industry revenue compounded anyway.',
        },
        {
          n: 'Mobile data',
          head: '$/GB fell ~40% a year in the smartphone era',
          desc: 'Usage per user grew ~100x in a decade; data revenue rose as voice died.',
        },
      ],
    },
  },
  {
    id: 22,
    part: 2,
    kicker: 'Four forces that reduce tokens per task — and why the call survives all of them',
    title: 'The efficiency objections are already in the number',
    body: {
      kind: 'steps',
      items: [
        { n: 'Distillation', head: 'Small models do yesterday’s task with 10x fewer tokens', desc: 'The freed budget buys deeper tasks.' },
        { n: 'Caching', head: 'Repeated context stops being re-billed', desc: 'Already inside the ÷50x price line we model.' },
        {
          n: 'On-device',
          head: 'Trivial tasks leave the cloud meter',
          desc: 'Delegation replaces them with agent workflows running 500–2,500x the tokens.',
        },
        {
          n: 'Routing',
          head: 'Easy queries go to cheap models',
          desc: 'Cost per task drops, tasks per user rise, total tokens grow.',
        },
      ],
    },
    takeaway: {
      icon: '⚙️',
      text: 'Efficiency is the mechanism of the wave, not its enemy: every force cuts $/task, and cheaper tasks are how 40x happens.',
    },
  },
  {
    id: 23,
    part: 2,
    kicker: 'Where the 40x comes from — penetration × intensity × duty cycle',
    title: 'The heaviest users barely exist yet',
    body: {
      kind: 'stats',
      items: [
        { value: '~2.5%', label: 'of ~1B weekly AI users run agents today', sub: '40x headroom in users alone' },
        { value: '500–2,500x', label: 'intensity span', sub: 'casual chat ~10K tokens/user-day vs. always-on agent 5–25M' },
        { value: '168 hrs', label: 'agent duty cycle per week', sub: 'against ~40 human attention-hours' },
      ],
    },
    takeaway: {
      icon: '🔌',
      text: 'The same human is worth 500–2,500x more tokens the day software stops waiting for prompts.',
    },
  },
  {
    id: 24,
    part: 2,
    kicker: 'Share of tokens by mode — the delegation ladder',
    title: 'From asking to doing — the key assumption',
    body: {
      kind: 'split',
      groups: [
        { head: 'Today', parts: [{ pct: 85, label: 'Ask' }, { pct: 15, label: 'Doing' }] },
        { head: '2029 — our case', parts: [{ pct: 25, label: 'Ask' }, { pct: 75, label: 'Doing' }] },
      ],
    },
    footnote:
      'Ask = conversational chat; doing = tokens spent delegating and automating. Lab and marketplace traffic disclosures, 2025–26. Above 60% doing-share already beats consensus.',
  },
  {
    id: 25,
    part: 2,
    kicker: 'Quadrillion tokens / year (log scale) — tidal-wave case vs. the street’s floor',
    title: 'Our call: ~4,000Q tokens by 2029 — a 40x from here',
    body: {
      kind: 'line',
      axis: 'Quadrillion tokens / year · log scale',
      x: ['2026', '2027', '2028', '2029'],
      log: true,
      series: [
        { name: 'Tidal wave  ×3.4/yr', values: [100, 340, 1150, 4000], display: ['100Q', '~340Q', '~1,150Q', '~4,000Q'] },
        {
          name: 'Street floor  ×2.2/yr',
          values: [100, 225, 500, 1100],
          display: [null, '~225Q', '~500Q', '~1,100Q'],
          tone: 'muted',
          dashed: true,
        },
      ],
    },
    footnote: 'Skycatcher scenarios; scenario outputs are not forecasts.',
  },
  {
    id: 26,
    part: 2,
    kicker: 'The 2029 end state, bottom-up — each factor against today',
    title: '4,000Q, decomposed',
    body: {
      kind: 'decompose',
      factors: [
        { value: '~2B', label: 'weekly AI users', note: '×2 vs today', from: '~1B today', to: '~2B 2029e' },
        { value: '~22%', label: 'run always-on agents', note: '×9 vs today', from: '2.5% today', to: '22% 2029e' },
        { value: '10–25M', label: 'tokens per agent-day', note: 'the observed band', from: '10M floor', to: '25M wave' },
      ],
      result: { value: '~4,000Q', label: 'tokens per year', note: '×40 vs today’s ~100Q' },
    },
    takeaway: {
      icon: '🧮',
      text: 'At the street’s ~15% share and 10M/day you get its ~1,100Q floor. The debate is adoption and intensity — nothing else.',
    },
  },
  {
    id: 27,
    part: 2,
    kicker: 'Dated platform disclosures against our path',
    title: 'The prints keep landing on our curve',
    body: {
      kind: 'steps',
      items: [
        { n: 'Apr 2025', head: 'Microsoft: >100T tokens a quarter', desc: 'The first platform-scale disclosure.' },
        { n: 'May 2025', head: 'Google I/O: ~480T a month', desc: '×50 year over year.' },
        { n: 'Q2 2025', head: 'Alphabet: ~980T a month', desc: 'Doubled in ten weeks.' },
        { n: 'Q3 2025', head: 'Alphabet: ~1.3Q a month', desc: 'A ~16Q annual run-rate from one platform.' },
        { n: '2024→26', head: 'OpenRouter: ~30x token volume', desc: 'Through every price cut.' },
      ],
    },
    takeaway: {
      icon: '✅',
      text: 'Every dated platform print has landed on or above the path — the newest by the widest margin yet.',
    },
  },
  {
    id: 28,
    part: 2,
    kicker: 'Grading an independent 2024 forecast with 2026 data',
    title: 'Someone else drew this curve in 2024',
    body: {
      kind: 'steps',
      items: [
        {
          n: '1',
          head: 'AI investment scales toward $100B+ clusters',
          desc: '10-GW-class campuses announced; hyperscaler capex above $0.5T a year and guided higher.',
          meta: 'landed',
        },
        {
          n: '2',
          head: 'A scramble for power',
          desc: 'Grid interconnects are the binding constraint; a nuclear plant restarted to feed one campus.',
          meta: 'landed',
        },
        {
          n: '3',
          head: 'Chatbots become agents',
          desc: 'Seven vendors now sell agent work by the unit; coding traffic went majority-agent in a year.',
          meta: 'landing',
        },
        {
          n: '4',
          head: 'Test-time compute unlocks long-horizon work',
          desc: 'Agent tasks measure 5–25M tokens a day against ~10K for chat.',
          meta: 'landing',
        },
        {
          n: '5',
          head: '“AGI by 2027 is strikingly plausible”',
          desc: 'Not our claim, and not required by anything in this piece.',
          meta: 'open',
        },
      ],
    },
    takeaway: {
      icon: '🎓',
      text: 'The wave keeps arriving on schedule, whoever draws the curve.',
    },
    footnote: 'Forecasts from Aschenbrenner, Situational Awareness (June 2024), graded against 2026 data.',
  },
  {
    id: 29,
    part: 2,
    kicker: 'Two independent maps of the same wave',
    title: 'Their orders of magnitude, our meters',
    body: {
      kind: 'table',
      head: ['', 'Situational Awareness', 'Machine Oracle'],
      rows: [
        ['Core driver', 'Supply-side — effective compute up ~10x a year', 'Demand-side — measured elasticity'],
        ['Unit', 'Capability per token', 'Raw tokens, capability held constant'],
        ['Adoption path', 'Drop-in remote workers by 2027', '22% of ~2B users by 2029'],
        ['Ceiling', 'The wage pool', 'Measured elasticity and capture'],
        ['Implied 2029 tokens', '~6,000Q+, power-bounded', '~4,000Q — still a slowdown vs. ×7/yr'],
      ],
      highlight: 4,
    },
  },
  {
    id: 30,
    part: 2,
    kicker: 'Can compute deliver 40x tokens?',
    title: 'The suppliers already underwrote the wave',
    body: {
      kind: 'flow',
      items: [
        { head: '40x tokens', desc: 'the demand our curve implies' },
        { head: '÷ ~3x FLOPs-per-token efficiency', desc: 'model and serving gains' },
        { head: '÷ ~2–3x performance-per-watt', desc: 'two hardware generations' },
      ],
      out: [
        { value: '~4–7x', label: 'inference power needed by 2029 — not 40x' },
        {
          value: '>$0.5T/yr',
          label: 'hyperscaler capex guidance, with 10-GW-class campuses announced on three continents',
        },
      ],
    },
  },
  {
    // Site-original exhibit (no deck slide): the capex commitment, drawn.
    id: 6,
    part: 2,
    kicker: 'Combined capital expenditure, four largest hyperscalers — Microsoft, Alphabet, Amazon, Meta',
    title: 'The commitment, in dollars',
    body: {
      kind: 'bars',
      axis: 'Capex per calendar year, $B',
      items: [
        { label: '2022', sub: 'the cloud steady state', value: 147, display: '~$150B', tone: 'muted' },
        { label: '2023', sub: 'ChatGPT year one — capex flat', value: 152, display: '~$150B', tone: 'muted' },
        { label: '2024', sub: 'the buildout begins', value: 228, display: '~$230B', tone: 'muted' },
        { label: '2025', sub: 'measured', value: 410, display: '$410B' },
        { label: '2026', sub: 'company guidance', value: 700, display: '~$700B', tone: 'accent' },
        { label: '2027', sub: 'the announced trajectory', value: 1000, display: '~$1T', tone: 'accent' },
      ],
    },
    takeaway: {
      icon: '🏗️',
      text: 'Flat for a decade, then roughly 7x in four years — a bet of record scale, placed by the best-informed buyers of compute on earth.',
    },
    footnote:
      'Company disclosures; 2026 is guidance, 2027 the announced trajectory rather than guidance. Calendar years, approximate.',
  },
  {
    id: 31,
    part: 2,
    kicker: 'Their map, our meters — shown, not underwritten',
    title: 'The Situational Awareness case: ~6,000Q',
    body: {
      kind: 'bars',
      axis: '2029 tokens / year',
      items: [
        { label: 'Street floor', sub: '×2.2/yr', value: 1100, display: '~1,100Q', tone: 'muted' },
        { label: 'Our wave case', sub: '×3.4/yr — underwritten', value: 4000, display: '~4,000Q', tone: 'accent' },
        { label: 'Situational Awareness case', sub: 'adoption below the physical ceiling', value: 6000, display: '~6,000Q' },
        { label: 'Physical ceiling', sub: '~10x power × 3x FLOPs × 2.5x perf/watt', value: 7500, display: '~7,500Q', tone: 'warn' },
      ],
    },
  },
  {
    id: 32,
    part: 2,
    kicker: 'The fourth great mobilization',
    title: 'Capital mobilizations of this scale have precedent',
    body: {
      kind: 'steps',
      items: [
        { n: '1840s', head: 'British railways', desc: '~40% of GDP in cumulative private investment.' },
        {
          n: '1996–2001',
          head: 'US telecom buildout',
          desc: '~$1T (today’s dollars) of internet infrastructure laid before demand fully arrived — the rails outlived the bust.',
        },
        { n: 'Ongoing', head: 'The green transition', desc: 'Trillions, still running.' },
        { n: 'Now', head: 'The AI buildout', desc: 'Approaching $1T a year — ~3% of GDP.' },
      ],
    },
  },
  {
    id: 33,
    part: 2,
    kicker: 'What one delegated task does to the meters',
    title: 'Tokens are the fuel. Infrastructure events are the bill.',
    body: {
      kind: 'flow',
      items: [
        { head: 'One delegated task', desc: '“fix the failing build”' },
        { head: 'The agent thinks', desc: '~200K tokens of planning and reasoning' },
        { head: 'The agent works', desc: 'API calls · database reads and writes · test runs · builds · traces · logs' },
      ],
      out: [
        { value: '100,000+', label: 'metered events from a single multi-step coding task' },
        { value: '20–40', label: 'billable events dragged behind every 1,000 agentic tokens' },
      ],
    },
    footnote: 'Task-level traces, Skycatcher agent stack and public platform documentation. Illustrative.',
  },
  {
    id: 34,
    part: 2,
    kicker: 'First-order explosion in tokens; second-order explosion in metered events',
    title: 'The wave doesn’t stop at tokens — it lands on the meters',
    body: {
      kind: 'convert',
      from: {
        head: 'Token demand',
        value: '~40x',
        sub: 'to four quintillion tokens a year by 2029',
        tag: 'the labs’ story',
      },
      via: {
        head: 'Every action lands on rented rails',
        rows: [
          { verb: 'Executes', desc: 'runtime, compute & edge' },
          { verb: 'Remembers', desc: 'data, state & memory' },
          { verb: 'Answers for it', desc: 'identity, audit, logs & traces' },
        ],
      },
      to: {
        head: 'Billable infra events',
        value: '~190x',
        sub: '0.3Q → ~57Q by 2029 — the wave amplifies as it lands',
        tag: 'the meters’ story',
      },
    },
    takeaway: { icon: '🌊', text: 'Events compound faster than tokens.' },
    footnote:
      'Attach of 20–40 billable events per 1,000 agentic tokens, per the conversion model; ~190x = 0.3Q → ~57Q billable-weighted events by 2029. Illustrative.',
  },
  {
    id: 35,
    part: 2,
    kicker: 'Growth index, 2026 = 1 (log scale) — billable events vs. tokens',
    title: 'The amplification, drawn',
    body: {
      kind: 'line',
      axis: 'Growth index, 2026 = 1 · log scale',
      x: ['2026', '2027', '2028', '2029'],
      log: true,
      series: [
        { name: 'Infra events', values: [1, 7, 35, 190], display: ['1x', '7x', '35x', '190x'], dashed: true },
        { name: 'Tokens', values: [1, 3.4, 11.5, 40], display: [null, '3.4x', '11.5x', '40x'], tone: 'muted', dashed: true },
      ],
    },
    footnote: 'Skycatcher conversion model.',
  },
  {
    id: 37,
    part: 2,
    kicker: 'Part 02 recap',
    title: 'The tidal wave, in three numbers',
    body: {
      kind: 'stats',
      items: [
        { value: '~40x', label: 'tokens by 2029', sub: '×3.4 a year against a ×7 history — the call is still a slowdown' },
        { value: '~75%', label: 'of tokens doing, not asking', sub: 'above 60% already beats consensus' },
        { value: '~190x', label: 'billable infrastructure events', sub: 'the wave amplifies as it lands on the meters' },
      ],
    },
  },

  // ── Part 03 ───────────────────────────────────────────────────────────────
  {
    id: 38,
    part: 3,
    body: {
      kind: 'section',
      num: '03',
      label: 'A Royalty on Machine Labor',
      sub: 'the meters — the universe, the backend, and the evidence in the filings',
    },
  },
  {
    id: 39,
    part: 3,
    kicker: 'The invoice line for machine labor — seven vendors, all dated, all public',
    title: 'Machine billable units have arrived',
    body: {
      kind: 'steps',
      items: [
        { n: '2023', head: 'Intercom Fin · $0.99', desc: 'per resolution — the first outcome price' },
        { n: '2024', head: 'Cognition Devin · ~$2', desc: 'per agent-compute-unit' },
        { n: 'Aug 2024', head: 'Zendesk · ~$1.50', desc: 'per automated resolution' },
        { n: 'Oct 2024', head: 'Salesforce · $0.10', desc: 'per action, down from $2 per conversation — 3.8B agent work units disclosed' },
        { n: 'Jul 2025', head: 'Cloudflare · $ / crawl', desc: 'Pay Per Crawl — machine reading, priced' },
        { n: 'Sep 2025', head: 'Microsoft · $0.01', desc: 'per Copilot Credit, Azure-metered' },
        { n: 'Apr 2026', head: 'ServiceNow · 25–150', desc: 'assists per task' },
      ],
    },
    takeaway: {
      icon: '🧾',
      text:
        'A machine billable unit is a price on work an AI agent performs — not on the human seat that used to perform it.',
    },
  },
  {
    id: 40,
    extras: [54],
    part: 3,
    kicker: 'Revenue = events × price × capture',
    title: 'Conversion is the question',
    body: {
      kind: 'decompose',
      factors: [
        { value: '~190x', label: 'billable events by 2029', note: 'guaranteed by the wave', from: '0.3Q', to: '~57Q' },
        { value: '−30–40%', label: 'price, per year', note: 'the deflation we model, not resist', from: 'list today', to: '÷4–5x by 2029' },
        {
          value: '0.5–0.7',
          label: 'capture — the fight',
          note: 'each doubling of usage grows revenue 50–70%',
          from: 'attach 0.2–0.3 today',
          to: 'a lag, not a leak',
        },
      ],
      result: { value: 'The royalty', label: 'revenue on machine labor', note: 'checked against filings for the rest of this part' },
    },
    footnote: 'Attach today reflects committed contracts burning first — the surge hits backlog one to three quarters before revenue.',
  },
  {
    id: 41,
    part: 3,
    kicker: 'Hardware computes → models reason → infrastructure remembers → runtimes coordinate → applications deliver',
    title: 'The five-layer stack of machine labor',
    body: {
      kind: 'layerstack',
      layers: [
        {
          n: 'L4',
          name: 'Outcomes',
          desc: 'Applications, records, and action rails — where agents deliver the work',
          count: '42',
          badge: 'worksite',
          tone: 'track',
        },
        {
          n: 'L3',
          name: 'Work',
          desc: 'Runs, steps, tool calls, execution time — coordinates, governs, and meters machine labor; billed twice: doing and watching',
          count: '19',
          badge: 'backend · key',
          tone: 'key',
        },
        {
          n: 'L2',
          name: 'State',
          desc: 'Reads, writes, queries, storage — the memory and results of machine labor; data gravity compounds',
          count: '6',
          badge: 'backend · key',
          tone: 'key',
        },
        {
          n: 'L1',
          name: 'Intelligence',
          desc: 'Tokens and inference — priced, competitive, deflating',
          badge: 'no public pure play',
          tone: 'out',
        },
        {
          n: 'L0',
          name: 'Computation',
          desc: 'GPU-hours, bytes, energy — capital-heavy, already priced',
          badge: 'outside the universe',
          tone: 'out',
        },
      ],
    },
    takeaway: { icon: '🏛️', text: 'The key layers meter work and accumulate state.' },
  },
  {
    id: 42,
    part: 3,
    kicker: 'The one cut that matters',
    title: 'The backend and the worksite',
    body: {
      kind: 'panels',
      panels: [
        {
          head: 'The backend',
          sub: 'what agents run on — 25 public companies',
          verbs: [
            { verb: 'Execute', desc: 'Runs, steps, compute-seconds — the work itself' },
            { verb: 'Remember', desc: 'Reads, writes, queries, storage — the state it leaves' },
            { verb: 'Answer for it', desc: 'Logs, identities, audit trails — the account it must give' },
          ],
          foot: 'L2 · State (6) + L3 · Work (19). The royalty is collected here.',
          tone: 'warm',
        },
        {
          head: 'The worksite',
          sub: 'where agents do the work — 42 public companies',
          verbs: [
            { verb: 'Act', desc: 'Messages, calls, payments — the action rails' },
            { verb: 'Read & write the record', desc: 'The systems agents work in' },
            { verb: 'Replace the seat', desc: 'The tools they obsolete' },
          ],
          foot: 'L4 · Apps, records and action rails. Tracked — the cohort is not picked here.',
          tone: 'cold',
        },
      ],
    },
    takeaway: {
      icon: '🔑',
      text: 'Every unit of machine labor passes through the backend, and most of it is billed by the unit.',
    },
  },
  {
    id: 43,
    extras: [44],
    part: 3,
    kicker: 'Every name public, every bucket published — the map this part is scored against',
    title: 'The universe: 67 public companies',
    body: {
      kind: 'stats',
      items: [
        { value: '67', label: 'names in the universe', sub: 'screened by what they sell' },
        { value: '~4.1x', label: 'median forward revenue multiple', sub: 'at ~20% median growth' },
        { value: '~11', label: 'names are usage-billed', sub: 'out of 67' },
        { value: '25 / 42', label: 'backend / worksite split', sub: 'classification, not holdings — the full roster is published' },
      ],
    },
  },
  {
    id: 45,
    part: 3,
    kicker: 'All 67 names, published — classification, not holdings',
    title: 'The full roster',
    body: {
      kind: 'roster',
      groups: [
        {
          head: 'L2 · State',
          count: '6',
          names: [
            { n: 'Snowflake' },
            { n: 'MongoDB' },
            { n: 'Elastic' },
            { n: 'Nutanix' },
            { n: 'Fastly' },
            { n: 'Amplitude' },
          ],
        },
        {
          head: 'L3 · Work',
          count: '19',
          names: [
            { n: 'Datadog' },
            { n: 'Cloudflare' },
            { n: 'Okta' },
            { n: 'GitLab' },
            { n: 'JFrog' },
            { n: 'Atlassian' },
            { n: 'Dynatrace' },
            { n: 'CrowdStrike' },
            { n: 'SentinelOne' },
            { n: 'Zscaler' },
            { n: 'Palo Alto Networks' },
            { n: 'Rubrik' },
            { n: 'Tenable' },
            { n: 'Qualys' },
            { n: 'SailPoint' },
            { n: 'Cellebrite' },
            { n: 'Akamai' },
            { n: 'PagerDuty' },
            { n: 'Netskope' },
          ],
        },
        {
          head: 'L4 · Worksite',
          count: '42',
          names: [
            { n: 'Twilio', rail: true },
            { n: 'Bandwidth', rail: true },
            { n: 'Adobe' },
            { n: 'Salesforce' },
            { n: 'ServiceNow' },
            { n: 'Workday' },
            { n: 'Shopify' },
            { n: 'Palantir' },
            { n: 'Samsara' },
            { n: 'Toast' },
            { n: 'Veeva' },
            { n: 'HubSpot' },
            { n: 'Figma' },
            { n: 'DocuSign' },
            { n: 'Paycom' },
            { n: 'Paylocity' },
            { n: 'Procore' },
            { n: 'ServiceTitan' },
            { n: 'UiPath' },
            { n: 'AppFolio' },
            { n: 'Zeta' },
            { n: 'RingCentral' },
            { n: 'Klaviyo' },
            { n: 'Bill.com' },
            { n: 'Q2' },
            { n: 'Monday.com' },
            { n: 'Workiva' },
            { n: 'Braze' },
            { n: 'Freshworks' },
            { n: 'Agilysys' },
            { n: 'Intapp' },
            { n: 'AvePoint' },
            { n: 'SPS Commerce' },
            { n: 'Wix' },
            { n: 'Five9' },
            { n: 'Asana' },
            { n: 'Alkami' },
            { n: 'nCino' },
            { n: 'BlackLine' },
            { n: 'Sprinklr' },
            { n: 'C3.ai' },
            { n: 'Weave' },
          ],
        },
      ],
      note: '† Action rails — worksite names that pass the billing test but sit where agents act, not where they run. Classification only; no name is emphasized.',
    },
    footnote: 'Skycatcher classification, August 2026. A research classification, not holdings or recommendations.',
  },
  {
    id: 46,
    part: 3,
    kicker: 'Every name is a future universe entrant, on IPO and one 10-K',
    title: 'The next meters are still private',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'L3 · Runtime',
          items: ['Temporal', 'Vercel', 'Modal', 'E2B', 'Browserbase', 'LangChain', 'Replit', 'Cursor', 'Lovable'],
        },
        { head: 'L3 · Control plane', items: ['Grafana', 'Snyk', 'Vanta', 'Braintrust'] },
        {
          head: 'L2 · State',
          items: ['Databricks', 'ClickHouse', 'Redis', 'Supabase', 'Pinecone', 'Neo4j', 'SpacetimeDB'],
        },
        { head: 'L1 · Models', items: ['OpenAI', 'Anthropic', 'xAI', 'Mistral'] },
      ],
    },
  },
  {
    id: 47,
    part: 3,
    kicker: 'The backend’s markets today',
    title: 'Two ponds: one giant, one being dug deeper',
    body: {
      kind: 'ponds',
      backdrop: { label: 'Security budget behind both', value: '~$240B', size: 240 },
      ponds: [
        { label: 'L2 · State', value: '$161B', sub: '+18% a year', size: 161, tone: 'accent' },
        {
          label: 'L3 · Work',
          value: '$25–30B',
          sub: '+12–14% a year',
          size: 27,
          tone: 'ink',
          ring: { label: 'Runtime', value: '>100%/yr off ~$1–2B' },
        },
      ],
    },
    footnote: 'State sized per Gartner’s DBMS forecast; work is the usage-billed slice of observability and SIEM. Areas drawn to scale.',
  },
  {
    id: 48,
    extras: [49],
    part: 3,
    kicker: 'Machine labor prices against wages, not software budgets',
    title: 'The biggest pond',
    body: {
      kind: 'tam',
      old: {
        title: 'The old TAM · ~$190B',
        rows: [
          { label: 'State — databases and analytics', value: '$161B' },
          { label: 'Work — metered observability & SIEM', value: '$25–30B' },
          { label: 'Agent runtime', value: '$1–2B' },
        ],
        total: { label: 'Software budgets, measured', value: '~$190B' },
      },
      next: {
        title: 'The new TAM',
        sub: 'share of the ~$35T knowledge-work wage pool delegated, at a 10–20¢ take rate',
        tiers: [
          { share: '1% delegated', value: '$35–70B/yr', note: '≈ a third of the old TAM, added — consistent with our 2029 wave case', size: 1 },
          { share: '5% delegated', value: '$175–350B/yr', note: '≈ 1–2x the entire old TAM, every year', size: 5 },
          { share: '10% delegated', value: '$350–700B/yr', note: '≈ 2–4x the old TAM, every year', size: 10 },
        ],
      },
    },
    takeaway: {
      icon: '🌊',
      text:
        'At 5% delegation the new pond is one to two times the entire old TAM, every year. The wage-pool frame is the ceiling, not the case — our 2029 wave case (~$42B) is consistent with agents absorbing roughly 1% of knowledge work.',
    },
  },
  {
    id: 50,
    extras: [52],
    part: 3,
    kicker: 'On consensus, at August 11, 2026 marks',
    title: 'What the layers earn — and what they cost',
    body: {
      kind: 'table',
      head: ['Layer', 'Growth', 'EV / forward revenue', 'FCF conversion'],
      rows: [
        ['Work', '23%', '7.2x', '26%'],
        ['State', '20%', '5.2x', '21%'],
        ['Apps', '17%', '4.0x', '22%'],
      ],
      highlight: 0,
    },
  },
  {
    id: 51,
    part: 3,
    kicker: 'All 67 names, NTM growth against EV / NTM revenue, August 11, 2026 marks',
    title: 'The market’s actual opinion, one dot per company',
    body: {
      kind: 'scatter',
      xlab: 'NTM revenue growth',
      ylab: 'EV / NTM revenue',
      xmax: 62,
      ymax: 34,
      legend: [
        { label: 'L3 · Work', tone: 'accent' },
        { label: 'L2 · State', tone: 'ink' },
        { label: 'L4 · Apps', tone: 'muted' },
      ],
      pts: [
        // Work — the thin right edge.
        { x: 40, y: 31.5, tone: 'accent' },
        { x: 30, y: 28, tone: 'accent' },
        { x: 33.5, y: 19.8, tone: 'accent' },
        { x: 31, y: 19.2, tone: 'accent' },
        { x: 24, y: 13.5, tone: 'accent' },
        { x: 21, y: 11.8, tone: 'accent' },
        { x: 18, y: 10.4, tone: 'accent' },
        { x: 16, y: 9.6, tone: 'accent' },
        { x: 14, y: 8.8, tone: 'accent' },
        { x: 19, y: 7.9, tone: 'accent' },
        { x: 12, y: 7.2, tone: 'accent' },
        { x: 10, y: 6.6, tone: 'accent' },
        { x: 15, y: 6.1, tone: 'accent' },
        { x: 8, y: 5.4, tone: 'accent' },
        { x: 11, y: 4.9, tone: 'accent' },
        { x: 6, y: 4.4, tone: 'accent' },
        { x: 13, y: 4.1, tone: 'accent' },
        { x: 9, y: 3.6, tone: 'accent' },
        { x: 7, y: 3.1, tone: 'accent' },
        // State.
        { x: 36, y: 15.1, tone: 'ink' },
        { x: 58, y: 9.5, tone: 'ink' },
        { x: 22.5, y: 7.8, tone: 'ink' },
        { x: 12, y: 4.6, tone: 'ink' },
        { x: 8, y: 3.4, tone: 'ink' },
        { x: 5, y: 2.6, tone: 'ink' },
        // Apps — most of the universe, clustered low-left.
        { x: 23, y: 7.6, tone: 'muted' },
        { x: 21, y: 6.9, tone: 'muted' },
        { x: 19, y: 6.4, tone: 'muted' },
        { x: 24, y: 5.9, tone: 'muted' },
        { x: 17, y: 5.7, tone: 'muted' },
        { x: 20, y: 5.3, tone: 'muted' },
        { x: 15, y: 5.1, tone: 'muted' },
        { x: 22, y: 4.8, tone: 'muted' },
        { x: 13, y: 4.7, tone: 'muted' },
        { x: 18, y: 4.5, tone: 'muted' },
        { x: 16, y: 4.3, tone: 'muted' },
        { x: 11, y: 4.2, tone: 'muted' },
        { x: 14, y: 4.0, tone: 'muted' },
        { x: 19, y: 3.9, tone: 'muted' },
        { x: 9, y: 3.8, tone: 'muted' },
        { x: 12, y: 3.7, tone: 'muted' },
        { x: 16, y: 3.5, tone: 'muted' },
        { x: 7, y: 3.4, tone: 'muted' },
        { x: 10, y: 3.3, tone: 'muted' },
        { x: 13, y: 3.1, tone: 'muted' },
        { x: 5, y: 3.0, tone: 'muted' },
        { x: 8, y: 2.9, tone: 'muted' },
        { x: 11, y: 2.8, tone: 'muted' },
        { x: 15, y: 2.7, tone: 'muted' },
        { x: 6, y: 2.6, tone: 'muted' },
        { x: 9, y: 2.5, tone: 'muted' },
        { x: 12, y: 2.4, tone: 'muted' },
        { x: 4, y: 2.3, tone: 'muted' },
        { x: 7, y: 2.2, tone: 'muted' },
        { x: 10, y: 2.1, tone: 'muted' },
        { x: 5, y: 2.0, tone: 'muted' },
        { x: 8, y: 1.9, tone: 'muted' },
        { x: 3, y: 1.8, tone: 'muted' },
        { x: 6, y: 1.7, tone: 'muted' },
        { x: 2, y: 1.5, tone: 'muted' },
        { x: 4, y: 1.3, tone: 'muted' },
        { x: 25, y: 8.2, tone: 'muted' },
        { x: 27, y: 9.1, tone: 'muted' },
        { x: 17, y: 6.1, tone: 'muted' },
        { x: 21, y: 5.6, tone: 'muted' },
        { x: 14, y: 4.9, tone: 'muted' },
        { x: 18, y: 3.6, tone: 'muted' },
      ],
      notes: [
        { x: 38, y: 33, text: 'the right edge is thin — double-digit multiples', anchor: 'end' },
        { x: 38, y: 31, text: 'only where usage growth is on file', anchor: 'end' },
        { x: 3, y: 11.5, text: 'most of the universe: <25% growth, <8x', anchor: 'start' },
      ],
    },
    footnote:
      'Names withheld by design; positions approximate from August 11, 2026 marks. Axes clipped at 62% growth and 34x.',
  },
  {
    id: 53,
    part: 3,
    kicker: 'Two backend layers, two business models',
    title: 'The ledger and the toll road',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'State — the ledger',
          sub: 'Compounds the decade',
          items: [
            'Meters reads, writes, queries, storage — the memory of machine labor',
            'Moat: data gravity',
            'Revenue is balance-sheet-like — slow to win, brutal to displace',
            'Risk: open formats chipping the analytical edge',
          ],
          tone: 'warm',
        },
        {
          head: 'Work — the toll road',
          sub: 'Bills the next three years',
          items: [
            'Bills runs, steps, traces, scans as they happen — first to feel the wave',
            'Moat: workflow lock-in plus the audit mandate (you cannot self-audit)',
            'Cash today: 26% FCF, with the strategic bid behind it',
            'Risk: model vendors absorbing the runtime',
          ],
          tone: 'warm',
        },
      ],
    },
    takeaway: { icon: '⚖️', text: 'Different moats, different risks, independent falsifiers. One royalty.' },
  },
  {
    id: 55,
    part: 3,
    kicker: 'Median net dollar retention — usage-billed meters vs. seat-priced apps',
    title: 'A seat is bought once. A meter is billed every time an agent acts.',
    body: {
      kind: 'line',
      axis: 'Median NDR, %',
      x: ["Q1'25", "Q2'25", "Q3'25", "Q4'25", "Q1'26", "Q2'26"],
      series: [
        { name: 'Meters', values: [112, 113, 114, 115, 116, 117], display: ['112', null, null, null, null, '117'] },
        { name: 'Apps', values: [101, 101, 101, 101, 101, 101], display: ['101', null, null, null, null, '101'], tone: 'muted' },
      ],
    },
  },
  {
    id: 56,
    part: 3,
    kicker: 'Deferred revenue, median y/y by layer — measured from filings',
    title: 'Commitment: the wave signs before it bills',
    body: {
      kind: 'grouped',
      axis: 'Deferred revenue, median y/y, five quarters',
      x: ["Q2'25", "Q3'25", "Q4'25", "Q1'26", "Q2'26"],
      series: [
        { name: 'State', values: [15, 11, 16, 22, 22], display: ['15%', null, null, null, '22%'] },
        { name: 'Work', values: [18, 20, 14, 12, 16], display: ['18%', null, null, null, '16%'], tone: 'muted' },
        { name: 'Apps', values: [13, 13, 12, 15, 14], display: ['13%', null, null, null, '14%'], tone: 'muted' },
      ],
    },
    takeaway: { icon: '✍️', text: 'State commitments re-accelerated to +22% and are still climbing — the pre-buying shows up here first.' },
  },
  {
    id: 57,
    part: 3,
    kicker: 'Usage billed above committed floors, as a share of revenue',
    title: 'You cannot bill above a floor that doesn’t exist',
    body: {
      kind: 'grouped',
      axis: 'Overage share of revenue, six quarters',
      x: ["Q1'25", "Q2'25", "Q3'25", "Q4'25", "Q1'26", "Q2'26"],
      series: [
        {
          name: 'State',
          values: [14, 16, 18, 20, 22, 24],
          display: ['14%', null, null, null, null, '24%'],
        },
        {
          name: 'Work',
          values: [9, 10, 11.5, 13, 14.5, 16],
          display: ['9%', null, null, null, null, '16%'],
          tone: 'muted',
        },
        {
          name: 'Apps',
          values: [0, 0, 0, 0, 0, 0],
          display: ['0%', null, null, null, null, '0%'],
          tone: 'muted',
        },
      ],
    },
  },
  {
    id: 58,
    part: 3,
    kicker: 'Recognized revenue, median y/y by layer — measured from filings',
    title: 'Revenue: the meters pull away from the seats',
    body: {
      kind: 'grouped',
      axis: 'Revenue growth, median y/y, six quarters',
      x: ["Q1'25", "Q2'25", "Q3'25", "Q4'25", "Q1'26", "Q2'26"],
      series: [
        { name: 'Work', values: [20, 20, 21, 21, 23, 23], display: ['20%', null, null, null, null, '23%'] },
        { name: 'State', values: [16, 19, 19, 17, 20, 18], display: ['16%', null, null, null, null, '18%'], tone: 'muted' },
        { name: 'Apps', values: [18, 17, 16, 16, 15, 16], display: ['18%', null, null, null, null, '16%'], tone: 'muted' },
      ],
    },
    takeaway: {
      icon: '📈',
      text: 'Both meter layers are accelerating while apps fade — the same split, now on the income statement.',
    },
  },
  {
    id: 59,
    extras: [60],
    part: 3,
    kicker: 'Equal-weighted total return by layer, January 2022 = 100',
    title: 'The tape has already voted',
    body: {
      kind: 'line',
      axis: 'Indexed total return, January 2022 = 100',
      x: [
        'Jan ’22',
        '',
        '',
        '',
        'Jan ’23',
        '',
        '',
        '',
        'Jan ’24',
        '',
        '',
        '',
        'Jan ’25',
        '',
        '',
        '',
        'Jan ’26',
        '',
        'Aug ’26',
      ],
      series: [
        {
          name: 'L3 · Work',
          values: [100, 85, 68, 60, 55, 50, 58, 70, 82, 95, 105, 112, 120, 118, 125, 132, 138, 142, 146],
          display: ['100', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '146'],
        },
        {
          name: 'L2 · State',
          values: [100, 82, 64, 55, 48, 45, 52, 62, 72, 82, 90, 96, 104, 100, 108, 116, 122, 125, 128],
          display: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '128'],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [100, 80, 62, 52, 47, 43, 48, 55, 62, 68, 72, 75, 80, 76, 80, 84, 88, 90, 91],
          display: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '91'],
          tone: 'muted',
        },
      ],
      marks: [{ at: 3, text: 'ChatGPT — Nov ’22', below: true, lift: 28 }],
    },
    takeaway: {
      icon: '🗳️',
      text:
        'Since ChatGPT: state +177%, work +175%, apps +55% — a roughly 3-to-1 spread in under four years, layer-level, no selection.',
    },
    footnote:
      'Equal-weighted layer aggregates through August 11, 2026; monthly shape approximate between marked quarters. Past performance is not indicative of future results.',
  },
  {
    id: 61,
    part: 3,
    kicker: 'EV / forward revenue by layer, quarterly — last point is consensus NTM',
    title: 'Nobody has re-rated for agents — at any layer',
    body: {
      kind: 'line',
      axis: 'EV / forward revenue, Jul 2023 → Jul 2026',
      x: ['Jul ’23', '', 'Jan ’24', '', 'Jul ’24', '', 'Jan ’25', '', 'Jul ’25', '', 'Jan ’26', '', 'Jul ’26'],
      series: [
        {
          name: 'L3 · Work',
          values: [10.0, 10.4, 10.8, 10.2, 10.6, 11.2, 11.8, 10.8, 9.6, 8.8, 8.2, 7.6, 6.7],
          display: ['10.0x', null, null, null, null, null, '11.8x', null, null, null, null, null, '6.7x'],
        },
        {
          name: 'L2 · State',
          values: [7.0, 7.2, 6.8, 6.5, 6.9, 7.3, 7.5, 7.0, 6.6, 6.3, 6.8, 6.6, 6.5],
          display: ['7.0x', null, null, null, null, null, null, null, null, null, null, null, null],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [8.2, 7.8, 7.2, 6.6, 6.0, 5.6, 5.2, 4.8, 4.4, 4.0, 3.7, 3.5, 3.3],
          display: ['8.2x', null, null, null, null, null, null, null, null, null, null, null, '3.3x'],
          tone: 'muted',
        },
      ],
    },
    footnote: 'Realized-forward basis; July 2026 point is consensus NTM at August 11, 2026 marks. Approximate.',
  },
  {
    id: 62,
    part: 3,
    kicker: 'State layer: multiple against growth, quarterly since mid-2023',
    title: 'State: growth turned up, the multiple didn’t',
    body: {
      kind: 'dualline',
      x: ['Jul ’23', '', 'Jan ’24', '', 'Jul ’24', '', 'Jan ’25', '', 'Jul ’25', '', 'Jan ’26', '', 'Today'],
      left: {
        name: 'EV / forward revenue',
        values: [6.1, 6.4, 6.6, 6.3, 6.7, 7.2, 7.5, 6.9, 6.4, 6.0, 5.8, 5.5, 5.2],
        display: ['6.1x', null, null, null, null, null, '7.5x', null, null, null, null, null, '5.2x'],
      },
      right: {
        name: 'Revenue growth y/y (right)',
        values: [13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18.5, 19.5, 20],
        display: ['13%', null, null, null, null, null, null, null, null, null, null, null, '20%'],
      },
    },
    takeaway: {
      icon: '📏',
      text: 'Growth 13→20% while the multiple round-tripped to below its start — ~0.26x growth-adjusted, half the cohort’s ~0.5x.',
    },
  },
  {
    id: 63,
    part: 3,
    kicker: 'Work layer: multiple against growth, quarterly since mid-2023',
    title: 'Work: de-rated while growing steadily',
    body: {
      kind: 'dualline',
      x: ['Jul ’23', '', 'Jan ’24', '', 'Jul ’24', '', 'Jan ’25', '', 'Jul ’25', '', 'Jan ’26', '', 'Today'],
      left: {
        name: 'EV / forward revenue',
        values: [10.5, 10.9, 11.3, 10.7, 11.1, 11.6, 12.1, 11.0, 9.8, 9.0, 8.4, 7.8, 7.2],
        display: ['10.5x', null, null, null, null, null, '12.1x', null, null, null, null, null, '7.2x'],
      },
      right: {
        name: 'Revenue growth y/y (right)',
        values: [25, 24.5, 24, 23.5, 23, 23, 22.5, 22, 22, 21.5, 22, 22, 22],
        display: ['25%', null, null, null, null, null, null, null, null, null, null, null, '22%'],
      },
    },
    takeaway: {
      icon: '🧾',
      text: 'A 12.1x peak to 7.2x on steady ~22% growth — 0.31x growth-adjusted. The audit mandate is still priced as maintenance, not a meter.',
    },
  },
  {
    id: 64,
    part: 3,
    kicker: 'Median LTM free-cash-flow margins',
    title: 'The cash machines turned on',
    body: {
      kind: 'bars',
      axis: 'FCF margin',
      items: [
        { label: 'Work', value: 26, display: '26%', tone: 'accent' },
        { label: 'Apps', value: 22, display: '22%', tone: 'muted' },
        { label: 'State', sub: 'inflected from 14% — six points in a year', value: 21, display: '21%' },
      ],
    },
  },
  {
    id: 65,
    part: 3,
    kicker: 'Meter M&A, 2018 → 2026',
    title: 'The meters keep getting bought',
    body: {
      kind: 'bars',
      axis: 'EV / revenue paid',
      items: [
        { label: 'GitHub', sub: '2018', value: 28, display: '~28x', tone: 'muted' },
        { label: 'HashiCorp', value: 10, display: '~10x' },
        { label: 'Confluent', sub: '$11.3B, 2026', value: 8, display: '~8x', tone: 'accent' },
        { label: 'Splunk', sub: '$28B', value: 7, display: '~7x' },
        { label: 'New Relic', value: 6.5, display: '~6.5x' },
        { label: 'Informatica', value: 4.8, display: '~4.8x', tone: 'muted' },
      ],
    },
    takeaway: {
      icon: '🤝',
      text:
        'Scaled meters clear ~7–10x revenue in a sale — above where the layers trade after the derate. Pending: Palo Alto → CyberArk at ~$25B, the largest identity takeout yet.',
    },
  },
  {
    id: 66,
    extras: [67],
    part: 3,
    kicker: 'Scored on this section’s evidence',
    title: 'State vs. work: eight rounds, and two clocks',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'State wins',
          items: ['Moat durability', 'Margin trajectory', 'Commitment', 'Overage purity', 'Least repriced'],
          foot: 'The ledger compounds the decade — gravity accumulates with every write and never rewinds',
          tone: 'warm',
        },
        {
          head: 'Work wins',
          items: ['Wave beta', 'Cash today', 'The strategic bid'],
          foot: 'The toll road bills the next three years — usage recognizes as agents act, at 26% FCF',
          tone: 'warm',
        },
      ],
    },
    takeaway: {
      icon: '⏱️',
      text:
        'Each clock has a pre-registered falsifier: open, portable state formats break the decade case; runtime absorption by the model labs breaks the three-year case.',
    },
  },
  {
    id: 68,
    part: 3,
    kicker: 'Part 03 recap',
    title: 'The royalty, in three numbers',
    body: {
      kind: 'stats',
      items: [
        { value: '~117 vs 101', label: 'meter versus app retention', sub: 'agents pay the meters, not the seats' },
        { value: '14 → 24%', label: 'state-meter overage share', sub: 'billed above floors, at list' },
        { value: '5–7x', label: 'forward revenue for the meter layers', sub: '20–23% growth and real cash margins, at multiples that assume the fade' },
      ],
    },
  },

  // ── Part 04 ───────────────────────────────────────────────────────────────
  {
    id: 69,
    part: 4,
    body: {
      kind: 'section',
      num: '04',
      label: 'Machine Oracle',
      sub: 'the research program — the definitions, the cohort, the predictions, the grading',
    },
  },
  {
    id: 70,
    part: 4,
    kicker: 'One rule, applied to the 25-name backend',
    title: 'Three companies',
    body: {
      kind: 'stats',
      items: [
        { value: '~$250B', label: 'combined enterprise value', sub: 'Snowflake · MongoDB · Datadog' },
        { value: '~$15B', label: 'forward revenue', sub: 'at ~33% blended growth' },
        { value: '~16x', label: 'forward revenue', sub: 'with ~25% free-cash-flow margins' },
        { value: '~100', label: 'Rule of X', sub: 'growth plus margin' },
        { value: '+218%', label: 'since ChatGPT', sub: 'equal-weighted, ahead of both source layers, no selection' },
      ],
    },
    footnote: 'At August 11, 2026 marks. A mechanical research screen, not a portfolio or recommendation.',
  },
  {
    id: 71,
    part: 4,
    kicker: 'Every constituent is shown its work — and so is everyone who stays out',
    title: 'The admission worksheet',
    body: {
      kind: 'admit',
      groups: [
        {
          head: 'In — the cohort',
          rows: [
            {
              name: 'Snowflake',
              share: '~95%',
              level: 'High confidence',
              basis: 'Product revenue recognized as credits are consumed, per the 10-K revenue-recognition note.',
            },
            { name: 'MongoDB', share: '73%', level: 'High confidence', basis: 'Atlas is 73% of revenue, recognized on usage.' },
            {
              name: 'Datadog',
              share: 'n/d — structural',
              level: 'Moderate-high',
              basis: 'Committed amounts drawn down by measured units plus on-demand; revenue moves with usage in-quarter.',
            },
          ],
        },
        {
          head: 'Worksite rails — tracked, not constituents',
          rows: [
            { name: 'Twilio', share: '~70–75%', basis: 'Passes the billing test but sits on the worksite, not the backend.' },
            { name: 'Bandwidth', share: '~65–75%', basis: 'Same — an action rail, paid per message and minute.' },
          ],
        },
        {
          head: 'Excluded — and why',
          rows: [
            { name: 'Fastly', share: '~58% est.', basis: 'Structurally usage-billed but discloses no percentage — below the confidence bar, converter watch.' },
            { name: 'Elastic', share: '~46–48%', basis: 'Cloud share below majority — close, and not across the line.' },
            { name: 'Cloudflare', share: '~25%', basis: 'Its own 10-K says revenue is primarily subscription.' },
            { name: 'Akamai', share: '~40–45%', basis: 'Compute usage growing against delivery and security subscriptions — not yet majority.' },
          ],
        },
      ],
    },
  },
  {
    id: 73,
    part: 4,
    kicker: 'All 25 backend names, one line at 50% consumption revenue',
    title: 'The ladder',
    body: {
      kind: 'ladder',
      axis: 'Usage-linked share of revenue · the 50% line marked · re-scored quarterly',
      marker: { at: 50, label: '50% majority-consumption' },
      rows: [
        { name: 'Snowflake', layer: 'L2', share: 95, display: '~95%', status: 'in', note: 'stays on quarterly re-verification' },
        { name: 'MongoDB', layer: 'L2', share: 73, display: '73%', status: 'in', note: 'Atlas share still rising' },
        { name: 'Datadog', layer: 'L3', share: 68, display: 'structural', status: 'in', note: 'committed drawdown; usage moves revenue in-quarter' },
        { name: 'Fastly', layer: 'L2', share: 58, display: '~58% est.', status: 'converting', note: 'a disclosed percentage admits it — one filing away' },
        { name: 'Elastic', layer: 'L2', share: 47, display: '~47%', status: 'converting', note: 'Elastic Cloud crossing 50% admits it — +2pts/yr' },
        { name: 'Akamai', layer: 'L3', share: 43, display: '~43%', status: 'converting', note: 'compute growth against delivery + security subscriptions' },
        { name: 'Cloudflare', layer: 'L3', share: 25, display: '~25%', status: 'converting', note: 'Workers, R2, Pay-Per-Crawl scaling inside a subscription base' },
        { name: 'Dynatrace', layer: 'L3', share: null, display: 'emerging', status: 'converting', note: 'DPS consumption commitments scaling through the base' },
        { name: 'CrowdStrike', layer: 'L3', share: null, display: 'emerging', status: 'converting', note: 'Falcon Flex drawdown adoption' },
        { name: 'Palo Alto', layer: 'L3', share: null, display: 'emerging', status: 'converting', note: 'flex credits spreading across the platform' },
        { name: 'GitLab', layer: 'L3', share: null, display: 'emerging', status: 'converting', note: 'CI compute minutes — small share today' },
        { name: 'JFrog', layer: 'L3', share: null, display: 'emerging', status: 'converting', note: 'usage tiers and data-transfer billing' },
      ],
      foot: {
        head: 'Subscription today',
        count: '13',
        names: [
          'Nutanix',
          'Amplitude',
          'Okta',
          'Atlassian',
          'SentinelOne',
          'Zscaler',
          'Rubrik',
          'Tenable',
          'Qualys',
          'SailPoint',
          'Cellebrite',
          'PagerDuty',
          'Netskope',
        ],
        note: 'No material usage line yet — agent demand without agent metering; every per-agent or per-action SKU shipped is an upgrade event on this board.',
      },
    },
    takeaway: { icon: '🪜', text: 'One line at 50% — three across it, nine moving toward it, thirteen not started. Re-graded quarterly, in public.' },
    footnote: 'Usage-linked shares per filings where disclosed; drawdown and flex-credit models per pricing disclosures. Datadog’s bar is structural, not a disclosed percentage.',
  },
  {
    id: 74,
    extras: [75],
    part: 4,
    kicker: 'The wave arrives in the order the accounting requires: contracts first, meters next, revenue last',
    title: 'The cohort on the tape',
    body: {
      kind: 'line',
      axis: 'Cohort medians, quarterly since 2022 — y/y growth and overage share',
      x: [
        "Q1'22",
        '',
        '',
        '',
        "Q1'23",
        '',
        '',
        '',
        "Q1'24",
        '',
        '',
        '',
        "Q1'25",
        '',
        '',
        '',
        '',
        "Q2'26",
      ],
      series: [
        {
          name: 'Deferred revenue y/y',
          values: [82, 73, 61, 44, 25, 30, 33, 34, 31, 24, 21, 23, 17, 19, 22, 23, 30, 32],
          display: ['+82%', null, null, null, null, null, null, null, null, null, null, null, '+17%', null, null, null, null, '+32%'],
        },
        {
          name: 'Revenue y/y',
          values: [83, 74, 61, 47, 36, 29, 36, 30, 27, 27, 26, 25, 25, 25, 28, 28, 29, 32],
          display: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
          tone: 'muted',
        },
        {
          name: 'Overage share',
          values: [null, null, null, null, null, null, null, null, null, null, null, null, 11, 12.5, 14, 15.5, 17.5, 19],
          display: [null, null, null, null, null, null, null, null, null, null, null, null, '11%', null, null, null, null, '19%'],
          dashed: true,
        },
      ],
    },
    footnote:
      'Deferred revenue (current + non-current) and revenue medians computed from company filings; Snowflake and MongoDB fiscal quarters mapped to the calendar quarter containing their end month. Overage share is a Skycatcher estimate, measured from Q1 2025.',
  },
  {
    id: 81,
    part: 4,
    kicker: 'Five mechanisms, each measurable in filings',
    title: 'Why growth accelerates from here',
    body: {
      kind: 'steps',
      items: [
        { n: '1', head: 'Commitment leads revenue by two to four quarters', desc: 'The +32% is already signed, sitting on the balance sheet.' },
        { n: '2', head: 'Overage compounds faster than the base', desc: 'And re-rates floors at every renewal.' },
        {
          n: '3',
          head: 'Agent workloads stack a second S-curve on the first',
          desc: 'The cloud base still grows ~20%; always-on agents add 168-hour duty cycles on top of it.',
        },
        {
          n: '4',
          head: 'Retention math re-accelerates before new logos do',
          desc: 'Meters’ net dollar retention is ~117 and rising; at 130-plus, the installed base alone compounds above 30%. Snowflake ran ~170 through the last step function.',
        },
        { n: '5', head: 'The wave’s transmission is direct', desc: '40x tokens → ~190x billable events land on exactly these meters.' },
      ],
    },
    takeaway: { icon: '⏩', text: 'The acceleration is already in the contracts.' },
  },
  {
    id: 76,
    part: 4,
    kicker: 'Cohort EV / next-4Q revenue (left) and revenue growth y/y (right), Q4 2020 → today',
    title: 'The revenue multiple, 2020 → today: 42x, 10x, 16x',
    body: {
      kind: 'dualline',
      x: ['', '2021', '', '', '', '2022', '', '', '', '2023', '', '', '', '2024', '', '', '', '2025', '', '', '', '2026', ''],
      left: {
        name: 'EV / next-4Q revenue',
        values: [39, 39.2, 31.5, 34, 42, 32, 19.6, 16.5, 13.7, 13.2, 13.4, 15.5, 14.1, 15.7, 13.8, 12.6, 10.5, 10.7, 10.7, 9.8, 11.5, 13.4, 16.5],
        display: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '16.5x today'],
        hollowLast: true,
      },
      right: {
        name: 'Revenue growth y/y (right)',
        values: [null, 63, 70, 74, 80, 81, 73, 67, 53, 41, 34.5, 32, 29, 29, 28.5, 27.5, 24, 23.5, 25.5, 24.5, 25.5, 28.5, 32],
        display: [null, null, null, null, '~80%', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '+32%'],
      },
      marks: [
        { at: 4, text: '42x — Q4 ’21', lift: 2 },
        { at: 19, text: '~10x trough', below: true, lift: 2 },
      ],
    },
    takeaway: {
      icon: '📐',
      text: 'Growth-adjusted, the whole way: 2021 peak 42x ÷ ~80% ≈ 0.5x · trough 10x ÷ ~25% ≈ 0.4x · today 16.5x ÷ ~32% ≈ 0.5x.',
    },
    footnote:
      'Quarterly enterprise values ÷ realized next-4-quarter revenue; series begins at Snowflake’s first post-IPO quarter-end. August 2026 point is consensus NTM (hollow). Approximate.',
  },
  {
    id: 77,
    part: 4,
    kicker: 'From ~$11.3B LTM revenue — 2029 framed as 3.5-year CAGR ranges',
    title: 'Three growth worlds',
    body: {
      kind: 'bars',
      axis: '2029 cohort revenue, $B',
      items: [
        { label: 'The fade', sub: '~20–25% CAGR — what today’s price carries', value: 23, display: '$21–25B', tone: 'muted' },
        { label: 'Partial conversion', sub: '~25–35% — street-floor tokens, capture leaks', value: 29, display: '$25–33B' },
        { label: 'The wave', sub: '~35–50% — the ~4,000Q case through four haircuts', value: 42, display: '$33–47B', tone: 'accent' },
      ],
    },
    takeaway: {
      icon: '🎚️',
      text:
        'The wave lands at ~45% (~$42B). What selects it is written down: commitment above 40%, overage above 25%, retention above 130. Above it sits the Situational Awareness case.',
    },
    footnote: 'Scenarios, not forecasts. Skycatcher model; the fade is consensus.',
  },
  {
    id: 78,
    part: 4,
    kicker: 'The cash bridge',
    title: 'Usage revenue drops through at software economics',
    body: {
      kind: 'table',
      head: ['', 'Revenue', 'FCF margin', 'Free cash flow'],
      rows: [
        ['Today (measured)', '~$11B', '~25%', '~$2.8B'],
        ['2029 street fade', '~$24B', '~28%', '~$6.8B'],
        ['2029 wave case', '~$42B', '~34%', '~$14B'],
      ],
      highlight: 2,
    },
  },
  {
    id: 79,
    part: 4,
    kicker: 'Across the 67-name universe — the multiple is a step-function, not a slope',
    title: 'What the tape pays for growth',
    body: {
      kind: 'bars',
      axis: 'EV / forward revenue by growth band',
      items: [
        { label: 'Under 10% growth', value: 3.1, display: '3.1x', tone: 'muted' },
        { label: '10–20%', value: 3.8, display: '3.8x', tone: 'muted' },
        { label: '20–30%', value: 4.9, display: '4.9x' },
        { label: '30%+', value: 15.1, display: '15.1x', tone: 'accent' },
      ],
    },
  },
  {
    id: 80,
    part: 4,
    kicker: 'The meters work across the timeline distribution',
    title: 'You don’t need AGI for this thesis',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'The slow world',
          sub: 'AI plateaus near current capability',
          items: ['The street’s own fade still grows the cohort ~2.2x in revenue terms'],
          foot: 'The floor is an elasticity bet, not an AI bet',
          tone: 'cold',
        },
        {
          head: 'Our wave',
          sub: '~40x tokens',
          items: ['The demand stack alone puts the cohort in the top growth band'],
          foot: 'What this piece underwrites',
          tone: 'warm',
        },
        {
          head: 'The Aschenbrenner world',
          sub: 'effective machine labor far outruns tokens',
          items: ['Metered rails are among the few public claims on it'],
          foot: 'Upside, not requirement',
        },
      ],
    },
  },
  {
    id: 82,
    part: 4,
    kicker: 'The Oracle ledger — dated, falsifiable, graded in public',
    title: 'Eight predictions',
    body: {
      kind: 'steps',
      items: [
        { n: 'Q4 2026', head: 'A platform prints ≥2Q tokens a month', desc: 'From 1.3Q, October 2025.' },
        { n: 'Q2 2027', head: 'Cohort overage share reaches ≥25% of revenue', desc: 'From ~19%.' },
        { n: 'Mid-2027', head: 'Meters’ median NDR ≥120 while apps’ ≤103', desc: '' },
        { n: 'Every quarter', head: 'Cohort backlog growth ≥ revenue growth', desc: '' },
        { n: 'End-2027', head: '≥15 major vendors ship billable agent SKUs', desc: 'From 7 today.' },
        { n: '4 quarters', head: 'Consensus 2029 cohort revenue revised up ≥10%', desc: '' },
        { n: '18 months', head: 'A meter takeout at ≥8x EV/revenue', desc: '' },
        { n: 'By 2028', head: 'Cohort FCF margin ≥28%', desc: '' },
      ],
    },
    takeaway: { icon: '📒', text: 'If the ledger fills with misses, the thesis shrinks with it. That’s the deal.' },
  },
  {
    id: 83,
    part: 4,
    kicker: 'The long ledger — direction is the claim, timing is the error bar',
    title: 'Five calls for the 2030s',
    body: {
      kind: 'steps',
      items: [
        {
          n: 'By 2030',
          head: 'Machine labor becomes a reported line item',
          desc: 'A major public company discloses agent-labor spend as a distinct cost line. “Agent GAAP” completes, and comparability begins.',
        },
        {
          n: 'By 2031',
          head: 'The first $100B-revenue meter',
          desc: 'A usage-billed infrastructure company crosses $100B in annual revenue — a scale no consumption software business has reached.',
        },
        {
          n: 'By 2032',
          head: 'Machine labor bills over $1T a year',
          desc: 'Delegation passes ~5% of knowledge work; annual billings exceed today’s entire enterprise software market.',
        },
        {
          n: 'By 2033',
          head: 'The meters out-earn the models',
          desc: 'Aggregate free cash flow of public metered infrastructure exceeds that of the frontier labs. The toll roads out-earn the engines.',
        },
        {
          n: 'By 2035',
          head: 'Machine labor becomes an asset class',
          desc: 'Index providers launch machine-labor indices; allocators carry a deliberate weight to the meters, as they once did to energy.',
        },
      ],
    },
    takeaway: {
      icon: '🔭',
      text: 'We expect to be wrong on dates and right on direction — and each failure would teach us exactly where the thesis bends.',
    },
  },
  {
    id: 84,
    extras: [85],
    part: 4,
    kicker: 'Six tripwires, written before they’re needed',
    title: 'How you’ll know if we’re wrong',
    body: {
      kind: 'steps',
      items: [
        { head: 'Token growth below 2x/yr for two consecutive years', desc: 'The wave premise fails.' },
        { head: 'Cohort overage share falling for two consecutive quarters', desc: 'Conversion breaking.' },
        { head: 'The meter-vs-app NDR gap narrowing below ~8 points', desc: 'The royalty leaking.' },
        { head: 'Measured usage-to-revenue elasticity below 0.3 for a year', desc: 'Capture collapsing.' },
        { head: 'Production state migrating to open, portable formats at scale', desc: 'Gravity breaking.' },
        { head: 'Agent-execution revenue at the model labs exceeding the cohort’s', desc: 'The runtime being absorbed.' },
      ],
    },
  },
  {
    id: 86,
    part: 4,
    kicker: 'Companies cross the membrane; the rule doesn’t move',
    title: 'The cohort is designed to grow',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Converters',
          items: ['Elastic', 'Cloudflare', 'Akamai', 'Fastly'],
          foot: 'Public names crossing the 50% line, each with a measurable distance to the threshold',
        },
        {
          head: 'New listings',
          items: ['Databricks', 'ClickHouse', 'Redis', 'Temporal', 'Vercel', 'Modal'],
          foot: 'Entering the universe on IPO and the cohort on their first 10-K',
        },
        {
          head: 'New meters',
          items: ['Seat companies whose agent SKUs grow to majority'],
          foot: 'The way Atlas re-made MongoDB from 26% of revenue to 73% in six years',
        },
      ],
    },
  },
  {
    id: 87,
    part: 4,
    kicker: 'The vision — how the stack settles in the 2030s',
    title: 'Value flows toward memory and trust',
    body: {
      kind: 'steps',
      items: [
        { n: 'Apps', head: 'Fragment', desc: 'Infinite software dissolves the packaged app, and value leaks downward.' },
        {
          n: 'Work',
          head: 'Earns the toll, defended by neutrality',
          desc: 'The runtime is contested, but the auditor cannot be the vendor it audits; trust becomes a priced service.',
        },
        {
          n: 'State',
          head: 'Compounds',
          desc: 'The only layer where time is an ally; memory is the one asset agents make more valuable with every task.',
        },
        { n: 'Models', head: 'Commoditize toward utility economics', desc: 'Enormous value created, brutal value retention.' },
        { n: 'Compute', head: 'Captures cycles, not annuities', desc: '' },
      ],
    },
  },
  {
    id: 88,
    part: 4,
    kicker: 'What the firm becomes',
    title: 'Revenue decouples from headcount',
    body: {
      kind: 'steps',
      items: [
        { head: 'Revenue per employee becomes the defining metric of the era', desc: '' },
        {
          head: 'Labor moves onto the utility bill',
          desc: 'Compensation shifts from salaries to metered compute — a cost that flexes daily and shows up on the meters’ income statements.',
        },
        { head: 'Firms get smaller and more numerous', desc: 'Coase in reverse: billion-dollar outcomes from ten-person teams, and a thousand more teams trying.' },
        { head: 'Management becomes review, intent, and audit', desc: '' },
        { head: 'The new moats are proprietary state and earned trust', desc: 'When anyone can summon software, code stops being an advantage.' },
      ],
    },
  },
  {
    id: 90,
    part: 4,
    kicker: 'What we publish, every quarter',
    title: 'The program in practice',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'The indices',
          items: ['Machine labor cohort and backend layers', 'Inception August 11, 2026 = 100', 'Live marks, no back-fill, no retouching'],
        },
        {
          head: 'The tape',
          items: ['Commitment, overage, retention, revenue growth', 'Re-measured every filing season', 'The three selectors that pick the growth world'],
        },
        {
          head: 'The ladder',
          items: ['All 25 backend names re-scored against the 50% line', 'Admissions, exits, conversions', 'Logged with reasons'],
        },
        {
          head: 'The ledger',
          items: ['The eight dated predictions graded on schedule', 'Misses published with the same prominence as hits'],
        },
      ],
    },
    takeaway: {
      icon: '📡',
      text: 'Follow the grading live — every mark, re-score, and quarterly grade publishes in the Machine Oracle tracker.',
    },
  },
  {
    id: 91,
    part: 4,
    kicker: 'The argument, assembled',
    title: 'Conclusion: a mispriced deceleration',
    body: {
      kind: 'grid3',
      items: [
        {
          eyebrow: 'The era',
          title: '~4,000x',
          desc: 'Software production left human hands. Making software deflates toward zero; running it stays metered. The population of software explodes.',
        },
        {
          eyebrow: 'The wave',
          title: '~40x → ~190x',
          desc: 'Tokens grew ~2,000x in four years, measured. Our call is a deceleration of that trend, checked five independent ways — and events amplify as the wave lands.',
        },
        {
          eyebrow: 'The royalty',
          title: '117 vs 101',
          desc: 'Two layers meter the work and keep its memory. The evidence is in filings, not narratives — and three backend companies bill it by the unit.',
        },
      ],
    },
    takeaway: {
      icon: '🎯',
      text:
        'Those three trade at ~16x, priced for a 16-point deceleration and zero agents. Machine labor is being billed today; the market prices it as if it weren’t.',
    },
  },
  {
    id: 93,
    body: {
      kind: 'quote',
      quote: ['Machine labor is a tidal wave.', 'It changes the rules.'],
      attrib: 'Skycatcher · August 2026 · thirty-one years after Bill Gates’s Tidal Wave memo',
    },
  },
  {
    id: 94,
    kicker: 'Appendix',
    title: 'Disclosures',
    body: {
      kind: 'prose',
      paras: [
        {
          head: 'Research commentary.',
          text:
            'These materials are research commentary for informational and educational purposes only — not an offer, solicitation, recommendation, or investment advice.',
        },
        {
          head: 'Scenarios are not forecasts.',
          text:
            'Scenario outputs illustrate the arithmetic of stated assumptions and are not predictions of any company’s results. The fade case is shown alongside the wave throughout.',
        },
        {
          head: 'The cohort is a research screen.',
          text:
            'The machine labor cohort is a mechanical research screen, not an index fund, portfolio, or recommendation. Cohort figures are hypothetical equal-weighted aggregations that reflect no fees or actual accounts, and constituents change when the rule admits or removes them.',
        },
        {
          head: 'Estimates and bases.',
          text:
            'Figures are compiled from company filings, platform disclosures, and market data as of August 11, 2026, and are labeled measured, estimated, or modeled on each exhibit. Token-volume figures are anchored to platform disclosures and carry error bars. Event-conversion figures derive from Skycatcher’s internal model and its own operating stack.',
        },
        {
          head: 'Positions and conflicts.',
          text:
            'Skycatcher and its clients may hold positions in companies referenced. Skycatcher, its affiliates and principals hold venture positions in certain private companies referenced (including SpacetimeDB), which are unrealized and involve a high risk of loss. Sky1 is an internal research tool; its outputs are not independent research.',
        },
        {
          head: 'Past performance.',
          text:
            'Past performance, including past disclosure re-pricings and index returns, is not indicative of future results. Forward-looking statements involve known and unknown risks; actual results may differ materially.',
        },
        {
          head: 'Trademarks.',
          text:
            'All third-party names, logos and trademarks are the property of their respective owners. Their use is for identification only and does not imply affiliation, sponsorship or endorsement.',
        },
      ],
    },
  },
];

export const TOTAL = SLIDES.length;

/** Which part a slide belongs to (walks back to the last section divider). */
export function partOf(id: number): Part | undefined {
  let found: Part | undefined;
  for (const p of PARTS) if (id >= p.start) found = p.n;
  return found;
}
