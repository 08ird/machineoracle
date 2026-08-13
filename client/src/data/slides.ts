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
        tone?: 'accent' | 'muted' | 'warn';
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
  | { kind: 'prose'; paras: { head?: string; text: string }[] };

export interface Slide {
  id: number;
  part?: Part;
  kicker?: string;
  title?: string;
  body: Body;
  takeaway?: { icon?: string; text: string };
  footnote?: string;
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
  {
    id: 6,
    kicker: 'The method behind every number in this piece',
    title: 'Straight lines, graded in public',
    body: {
      kind: 'steps',
      items: [
        {
          head: 'Measure the slopes',
          desc: 'Every forecast extrapolates a measured trend — token volumes, price curves, attach rates, filings — never a narrative. Where a slope is ours, the raw series is shown; where it is third-party, it is dated and sourced.',
        },
        {
          head: 'Pre-register the calls',
          desc: 'Predictions carry deadlines. Kill conditions are written before they are needed, and grading criteria are fixed at publication. If the ledger fills with misses, the thesis shrinks — in public.',
        },
        {
          head: 'Separate the bases',
          desc: 'Measured, estimated, and modeled figures are labeled as such on every exhibit. Scenario outputs are not forecasts; the fade case is always shown next to the wave.',
        },
      ],
    },
    takeaway: {
      icon: '📐',
      text: 'Trend extrapolation, with consequences — every claim is checkable, and most carry a date.',
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
    takeaway: {
      icon: '∞',
      text:
        'Not more apps in the store — software becoming as abundant as documents, and every piece of it running on rented, metered rails.',
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
    takeaway: {
      icon: '📈',
      text: 'Makers up ~2x and the machine-written share up ~5x in three years — a measured trend, not a metaphor.',
    },
  },
  {
    id: 13,
    part: 1,
    kicker: 'The syntax wall comes down',
    title: 'Everyone becomes a software developer',
    body: {
      kind: 'bars',
      axis: 'Population able to create software',
      items: [
        { label: '1990–2022', sub: 'a profession, behind a syntax wall', value: 30, display: '30M', tone: 'muted' },
        { label: 'The copilot era', sub: 'the wall lowers', value: 180, display: '180M' },
        { label: 'The natural-language era', sub: 'the wall is removed', value: 1000, display: '1B+', tone: 'accent' },
      ],
    },
    takeaway: {
      icon: '🌍',
      text: '~33x more makers — and every one of them is a customer of the meters.',
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
    takeaway: { icon: '🧾', text: 'Multiply this Tuesday by a billion makers — that’s the royalty.' },
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
          items: ['Compute cycles & runtime', 'State, memory & context', 'Delivery & network', 'Identity, audit & billing rails'],
          foot: 'Billed per unit of use — scaling with the software population',
          tone: 'warm',
        },
      ],
    },
    takeaway: { icon: '💡', text: 'The value moves to the metered column.' },
    footnote: 'Jevons (1865): efficiency in an input expands rather than reduces its consumption.',
  },
  {
    id: 16,
    part: 1,
    kicker: 'Total return, four years following the tidal wave memo (May 1995 – May 1999)',
    title: 'Last time, the rails got paid first',
    body: {
      kind: 'bars',
      items: [
        { label: 'NASDAQ', value: 3, display: '~3x', tone: 'muted' },
        { label: 'Intel', value: 6, display: '~6x' },
        { label: 'Microsoft', value: 7, display: '~7x' },
        { label: 'Cisco', value: 13, display: '~13x', tone: 'accent' },
      ],
    },
    takeaway: { icon: '🧠', text: 'All before the mania began. The crowd debated; the rails compounded.' },
    footnote: 'Approximate total-return multiples from public market data, May 1995–May 1999. Past performance is not indicative of future results.',
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
        { value: '5 layers', label: 'meter the running of it', sub: 'making deflates to zero; running is metered forever' },
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
    takeaway: {
      icon: '😲',
      text: 'Through two market corrections and one full-scale AI panic — demand never blinked.',
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
    takeaway: {
      icon: '📐',
      text: 'The measured slope is ~1.2–1.3 — the demand curve for machine cognition is elastic above one.',
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
    takeaway: {
      icon: '🔁',
      text: 'Every time compute’s inputs got 10x cheaper, spend grew anyway. Tokens are running the same curve, faster.',
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
        { head: 'Today', parts: [{ pct: 85, label: 'Ask (chat)' }, { pct: 15, label: 'Doing (delegate + automate)' }] },
        { head: '2029 — our case', parts: [{ pct: 25, label: 'Ask (chat)' }, { pct: 75, label: 'Doing (delegate + automate)' }] },
      ],
    },
    takeaway: {
      icon: '🔑',
      text:
        '77% of a major lab’s API traffic already classifies as automation; coding went 11% → 50%+ of routed traffic in a year; enterprise API tokens +150% in five months.',
    },
    footnote: 'Lab and marketplace traffic disclosures, 2025–26. Above 60% doing-share already beats consensus.',
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
    takeaway: { icon: '🚀', text: 'History ran ×7 a year. The wave case is a deceleration by half.' },
    footnote: 'Skycatcher scenarios. Floor applies unit elasticity to the announced price path.',
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
      text: 'Our 2026 global estimate (~100Q) needs about six Googles; every dated print sits on or above the path.',
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
        { n: 'Landing', head: 'Chatbots become agents', desc: 'Seven vendors now sell agent work by the unit.', meta: 'landing' },
        {
          n: 'Landed',
          head: 'AI investment scales toward $100B+ clusters',
          desc: '10-GW-class campuses announced; hyperscaler capex above $0.5T a year.',
          meta: 'landed',
        },
        { n: 'Landed', head: 'A scramble for power', desc: 'Grid interconnects are the binding constraint.', meta: 'landed' },
        {
          n: 'Landing',
          head: 'Test-time compute unlocks long-horizon work',
          desc: 'Agent tasks measure 5–25M tokens/day against ~10K for chat.',
          meta: 'landing',
        },
        { n: 'Open', head: '“AGI by 2027 is strikingly plausible”', desc: 'Not our claim, and not required.', meta: 'open' },
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
    title: 'Their OOMs, our meters',
    body: {
      kind: 'table',
      head: ['', 'Situational Awareness', 'Machine Oracle'],
      rows: [
        ['Core driver', 'Supply-side — effective compute ~1 OOM/yr', 'Demand-side — measured elasticity'],
        ['Unit', 'Capability per token', 'Raw tokens, capability held constant'],
        ['Adoption path', 'Drop-in remote workers by 2027', '22% of ~2B users by 2029'],
        ['Ceiling', 'The wage pool', 'Measured elasticity and capture'],
        ['Implied 2029 tokens', '~6,000Q+, power-bounded', '~4,000Q — still a slowdown vs. ×7/yr'],
      ],
      highlight: 4,
    },
    takeaway: {
      icon: '🗺️',
      text: 'The maps multiply rather than compete: where they disagree is upside to the meters, not risk.',
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
    takeaway: {
      icon: '⚡',
      text: 'A build of this size only clears its cost of capital if token demand compounds roughly like our curve.',
    },
  },
  {
    id: 31,
    part: 2,
    kicker: 'Their map, our meters — shown, not underwritten',
    title: 'The SA case: ~6,000Q',
    body: {
      kind: 'bars',
      axis: '2029 tokens / year',
      items: [
        { label: 'Street floor', sub: '×2.2/yr', value: 1100, display: '~1,100Q', tone: 'muted' },
        { label: 'Our wave case', sub: '×3.4/yr — underwritten', value: 4000, display: '~4,000Q', tone: 'accent' },
        { label: 'SA case', sub: 'adoption below the physical ceiling', value: 6000, display: '~6,000Q' },
        { label: 'Physical ceiling', sub: '~10x power × 3x FLOPs × 2.5x perf/watt', value: 7500, display: '~7,500Q', tone: 'warn' },
      ],
    },
    takeaway: {
      icon: '📊',
      text:
        'Through the same event math and capture, the SA case pays the cohort ~$55–70B of 2029 revenue against ~$42B in our wave.',
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
    takeaway: {
      icon: '🏗️',
      text:
        'Economies periodically rebuild themselves around a new input, and the metered owners of the new rails collected the era’s royalties each time.',
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
    kicker: 'Growth index, 2026 = 1 (log scale) — billable events vs. tokens',
    title: 'The wave lands on the meters: events grow ~190x',
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
    takeaway: {
      icon: '🌊',
      text: 'From 0.3Q to ~57Q of billable events by 2029 — events outgrow tokens every single year, as agentic share and attach both deepen.',
    },
    footnote: 'Skycatcher conversion model. For the labs this is a token story; for the meters it is an event story.',
  },
  {
    id: 36,
    part: 2,
    kicker: 'Remove any one leg; the call still stands',
    title: 'Five independent legs under one call',
    body: {
      kind: 'steps',
      items: [
        { n: 'History', head: '2,000x in four years', desc: 'Through two corrections and a panic.' },
        { n: 'Precedent', head: 'Bandwidth, storage, mobile data', desc: 'Three decades, zero exceptions.' },
        { n: 'The prints', head: 'Every dated platform disclosure', desc: 'On or above our path.' },
        {
          n: 'The suppliers',
          head: 'Half a trillion a year of committed capex',
          desc: 'Only clears its hurdle on our demand curve.',
        },
        {
          n: 'Our own meter',
          head: 'Sky1 runs agents in production',
          desc: 'Counts tokens per task directly — measured, not modeled.',
        },
      ],
    },
    takeaway: { icon: '🧱', text: '40x is the central case, not the hope.' },
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
        'A machine billable unit is a price on work an AI agent performs — outcomes, actions, sessions, metered compute. Not on human seats.',
    },
  },
  {
    id: 40,
    part: 3,
    kicker: 'Revenue = events × price × capture',
    title: 'Conversion is the question',
    body: {
      kind: 'flow',
      items: [
        { head: 'Events  ~190x by 2029', desc: 'guaranteed by the wave' },
        { head: 'Price  −30–40% a year', desc: 'the deflation we model' },
        { head: 'Capture  0.5–0.7', desc: 'our elasticity research — the fight' },
      ],
      out: [
        {
          value: '0.2–0.3',
          label: 'measured attach in the filings today — a lag, not a leak: committed contracts burn first, and the surge hits backlog one to three quarters before revenue',
        },
        {
          value: '>75%',
          label: 'of buyers keep paying at list price where usage caps bind',
        },
      ],
    },
    takeaway: {
      icon: '🎯',
      text: 'Underwriting a royalty on machine labor is underwriting capture.',
    },
  },
  {
    id: 41,
    part: 3,
    kicker: 'Hardware computes → models reason → infrastructure remembers → runtimes coordinate → applications deliver',
    title: 'The five-layer stack of machine labor',
    body: {
      kind: 'steps',
      items: [
        { n: 'L0', head: 'Computation', desc: 'GPU-hours, bytes, energy — capital-heavy, already priced', meta: 'avoid' },
        {
          n: 'L1',
          head: 'Intelligence',
          desc: 'Tokens and inference — priced, competitive, deflating, no public pure play',
          meta: 'avoid',
        },
        {
          n: 'L2',
          head: 'State',
          desc: 'Reads, writes, queries, storage — the memory and results of machine labor; data gravity compounds',
          meta: 'own',
        },
        {
          n: 'L3',
          head: 'Work',
          desc: 'Runs, steps, tool calls, execution time — coordinates, governs, and meters machine labor; billed twice: doing and watching',
          meta: 'own',
        },
        { n: 'L4', head: 'Outcomes', desc: 'Applications, records, and action rails', meta: 'track' },
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
      kind: 'columns',
      cols: [
        {
          head: 'The backend',
          sub: '25 companies',
          items: [
            'Execute — runs, steps, compute-seconds',
            'Remember — reads, writes, queries, storage',
            'Answer for it — logs, identities, audit trails',
          ],
          foot: 'L2 · State (6) + L3 · Work (19). The royalty is collected here.',
          tone: 'warm',
        },
        {
          head: 'The worksite',
          sub: '42 companies',
          items: [
            'Act — messages, calls, payments (the rails)',
            'Read and write the record — the systems agents work in',
            'Replace the seat — the tools they obsolete',
          ],
          foot: 'L4 · Apps, records and action rails. Tracked, but the cohort is not picked here.',
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
    part: 3,
    kicker: 'BVP Nasdaq Emerging Cloud Index plus four extensions',
    title: 'The universe: 67 public companies',
    body: {
      kind: 'stats',
      items: [
        { value: '67', label: 'names in the universe', sub: 'DigitalOcean reclassified to L0' },
        { value: '~4.1x', label: 'median forward revenue multiple', sub: 'at ~20% median growth' },
        { value: '~11', label: 'names are usage-billed', sub: 'out of 67' },
        { value: '25 / 42', label: 'backend / worksite split', sub: 'classification, not holdings — the full roster is published' },
      ],
    },
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
          head: 'Runtime',
          items: ['Temporal', 'Vercel', 'Modal', 'E2B', 'Browserbase', 'LangChain', 'Replit', 'Cursor', 'Lovable'],
        },
        { head: 'Control', items: ['Grafana', 'Snyk', 'Vanta', 'Braintrust'] },
        {
          head: 'State',
          items: ['Databricks', 'ClickHouse', 'Redis', 'Supabase', 'Pinecone', 'Neo4j', 'SpacetimeDB'],
        },
        { head: 'Layer 1 — cannot be bought at all', items: ['OpenAI', 'Anthropic', 'xAI', 'Mistral'], tone: 'cold' },
      ],
    },
  },
  {
    id: 47,
    part: 3,
    kicker: 'The backend’s markets today',
    title: 'Two ponds: one giant, one being dug deeper',
    body: {
      kind: 'bars',
      axis: 'Addressable market, $B',
      items: [
        { label: 'State', sub: '+18% a year — Gartner DBMS forecast', value: 161, display: '$161B', tone: 'accent' },
        { label: 'Work', sub: '+12–14% — metered core of observability and SIEM', value: 27, display: '~$25–30B' },
        { label: 'Agent runtime', sub: '>100% growth — $10B+ by 2029 on our event forecasts', value: 1.5, display: '~$1–2B' },
        { label: 'Security budget behind both', sub: 'almost none of it usage-billed yet', value: 240, display: '~$240B', tone: 'muted' },
      ],
    },
    takeaway: { icon: '🪣', text: 'That is the conversion prize.' },
  },
  {
    id: 48,
    part: 3,
    kicker: 'Machine labor prices against wages, not software budgets',
    title: 'The biggest pond',
    body: {
      kind: 'decompose',
      factors: [
        { value: '~$35T', label: 'global knowledge-work wage pool', note: 'the real denominator', from: 'software TAM', to: 'wage pool' },
        { value: '~1%', label: 'of task-value delegated by 2029', note: '≈ $350B of work', from: '0% today', to: '1% 2029e' },
        { value: '10–20¢', label: 'billed per human-dollar of work', note: 'the take rate', from: '—', to: '10–20%' },
      ],
      result: { value: '~$35–70B', label: 'of machine-labor billings', note: 'roughly a third of the old TAM, added' },
    },
    takeaway: {
      icon: '🌊',
      text:
        'At 5% delegation the new pond is one to two times the entire old TAM, every year. The wage-pool frame is the ceiling, not the case — our 2029 wave case (~$42B) is consistent with agents absorbing roughly 1% of knowledge work.',
    },
  },
  {
    id: 50,
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
    takeaway: {
      icon: '📊',
      text:
        'Most of the universe sits below 25% growth and below 8x; above the rule-of-40 line at 30%+ growth sits almost nobody — and what’s there is work and state, not apps.',
    },
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
    takeaway: { icon: '📈', text: 'Six quarters, rising — while seat-priced apps sit flat at ~101.' },
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
          values: [9, 10, 12, 13, 15, 16],
          display: ['9%', null, null, null, null, '16%'],
          tone: 'muted',
        },
      ],
    },
    takeaway: {
      icon: '⚡',
      text: 'Apps: zero. Deferred revenue tells the same story — state +15% → +22% y/y and accelerating, work +17%, apps ~+14%.',
    },
  },
  {
    id: 59,
    part: 3,
    kicker: 'Equal-weighted total return by layer, since ChatGPT (Nov 2022)',
    title: 'The tape has already voted',
    body: {
      kind: 'bars',
      axis: 'Total return since November 2022',
      items: [
        { label: 'State', value: 177, display: '+177%', tone: 'accent' },
        { label: 'Work', value: 175, display: '+175%', tone: 'accent' },
        { label: 'Apps', value: 55, display: '+55%', tone: 'muted' },
      ],
    },
    takeaway: {
      icon: '🗳️',
      text:
        'A roughly 3-to-1 spread in under four years, layer-level, no selection. Indexed to January 2022: work 146, state 128, apps 91.',
    },
    footnote: 'Equal-weighted layer aggregates through August 11, 2026. Past performance is not indicative of future results.',
  },
  {
    id: 61,
    part: 3,
    kicker: 'Three years of multiples, realized-forward basis',
    title: 'Nobody has re-rated for agents — at any layer',
    body: {
      kind: 'table',
      head: ['', 'Growth then → now', 'Multiple then → now', 'Read'],
      rows: [
        ['State', '13% → 20%', 'flat', 'Growth turned up while the multiple didn’t move — ~0.26x its growth rate, half the cohort’s ~0.5x'],
        ['Work', 'steady ~20%+', '10.6x → 8.8x realized (7.2x consensus)', 'The audit mandate is not yet priced as a meter'],
        ['Apps', 'fading to ~16%', 'sideways-to-down', 'The seats being replaced'],
      ],
      highlight: 0,
    },
    takeaway: {
      icon: '🤨',
      text: 'All three layers ground sideways-to-down through the biggest software demand shock ever. Consensus forward numbers carry zero agents.',
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
    takeaway: { icon: '💵', text: 'Falling multiples, rising cash. That divergence is the anomaly Part 04 examines.' },
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
    takeaway: {
      icon: '📏',
      text:
        'The rule: a company enters the cohort when the majority of its revenue is recognized from measured consumption — billed per unit used, or drawn down against commitments. It could have been applied in 2022 from public pricing pages alone.',
    },
    footnote: 'At August 11, 2026 marks. A mechanical research screen, not a portfolio or recommendation.',
  },
  {
    id: 71,
    part: 4,
    kicker: 'Every constituent is shown its work — and so is everyone who stays out',
    title: 'The admission worksheet',
    body: {
      kind: 'table',
      head: ['Company', 'Basis', 'Confidence'],
      rows: [
        ['Snowflake', '~95% of product revenue recognized as credits are consumed, per the 10-K revenue-recognition note', 'High'],
        ['MongoDB', 'Atlas is 73% of revenue, recognized on usage', 'High'],
        ['Datadog', 'Committed amounts drawn down by measured units plus on-demand; revenue moves with usage in-quarter', 'Moderate-high'],
        ['Fastly', 'Structurally usage-billed but discloses no percentage', 'Below the bar — converter watch'],
        ['Cloudflare', '10-K says revenue is primarily subscription', 'Out'],
        ['Elastic', 'Cloud share ~46–48% — below majority', 'Out'],
        ['Twilio · Bandwidth', 'Pass the billing test but sit on the worksite, not the backend', 'Tracked, not constituents'],
      ],
      highlight: 0,
    },
    takeaway: {
      icon: '🔍',
      text: 'The rule survives contact with the filings; backend names that fail it stay out, however much we like the story.',
    },
  },
  {
    id: 73,
    part: 4,
    kicker: 'All 25 backend names, one line at 50% consumption revenue',
    title: 'The ladder',
    body: {
      kind: 'bars',
      axis: 'Backend names by consumption-revenue status',
      items: [
        { label: 'Across the line', sub: 'Snowflake, MongoDB, Datadog', value: 3, display: '3', tone: 'accent' },
        {
          label: 'Converting toward it',
          sub: 'Fastly ~58%, Elastic ~47%, Akamai ~43%, Cloudflare ~25%, +5 more',
          value: 9,
          display: '9',
        },
        { label: 'Subscription today', sub: 'every agent SKU is an upgrade event on this board', value: 13, display: '13', tone: 'muted' },
      ],
    },
    takeaway: { icon: '🪜', text: 'Re-scored quarterly, in public.' },
  },
  {
    id: 74,
    part: 4,
    kicker: 'The wave arrives in the order the accounting requires: contracts first, meters next, revenue last',
    title: 'The cohort on the tape',
    body: {
      kind: 'line',
      axis: 'Cohort, y/y growth and overage share',
      x: ["Q2'25", "Q3'25", "Q4'25", "Q1'26", "Q2'26"],
      series: [
        { name: 'Deferred revenue y/y', values: [19, 23, 26, 29, 32], display: ['+19%', null, null, null, '+32%'] },
        { name: 'Revenue y/y', values: [25, 26, 28, 30, 32], display: ['25%', null, null, null, '32%'], tone: 'muted' },
        { name: 'Overage share', values: [11, 13, 15, 17, 19], display: ['11%', null, null, null, '19%'], dashed: true },
      ],
    },
    takeaway: {
      icon: '📊',
      text:
        'Overage dollars more than doubled to ~$0.59B a quarter. And the rule alone beats the layers: +218% since ChatGPT against +177% state, +175% work, +55% apps.',
    },
    footnote:
      'The honest cut: the cohort also absorbed the deepest 2022 derate (−60%), and from January 2022 it is +18% — behind both layers on the full period.',
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
          desc: 'Meters’ NDR is ~117 and rising; at 130+, the installed base alone compounds >30%. Snowflake ran ~170 through the last step function.',
        },
        { n: '5', head: 'The wave’s transmission is direct', desc: '40x tokens → ~190x billable events land on exactly these meters.' },
      ],
    },
    takeaway: { icon: '⏩', text: 'The acceleration is already in the contracts.' },
  },
  {
    id: 76,
    part: 4,
    kicker: 'The multiple has always tracked growth',
    title: 'Framed in growth ranges, not point multiples',
    body: {
      kind: 'table',
      head: ['', 'Forward revenue multiple', 'Growth', 'Growth-adjusted'],
      rows: [
        ['2021 peak', '42x', '~80%', '~0.5x'],
        ['Trough', '10x', '~25%', '~0.4x'],
        ['Today', '16.5x', '~32%', '~0.5x'],
      ],
      highlight: 2,
    },
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
        'The wave lands at ~45% (~$42B). What selects it is written down: commitment >40%, overage >25%, NDR >130. Above it sits the SA case.',
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
    takeaway: {
      icon: '🪜',
      text:
        'Past ~30% growth the tape triples what it pays. Which band a name occupies is the only multiple question that matters — and the three growth worlds map onto those bands.',
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
    takeaway: {
      icon: '⚠️',
      text:
        'The one world the thesis does not cover: machine labor migrating off public rails entirely — sealed labs, national projects. That risk is on the bear-case ledger, with the rest.',
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
    takeaway: { icon: '🚨', text: 'Each is measurable in public data; each is mapped to an action.' },
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
    takeaway: {
      icon: '🏛️',
      text: 'The layers that rewrite every year compete; the layers that accumulate compound.',
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
    takeaway: { icon: '🏢', text: 'Every one of these changes routes through the meters.' },
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
