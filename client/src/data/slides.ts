/**
 * Deck content, extracted from "infinite software website.pptx" (Skycatcher, Jul 16 2026).
 *
 * Text is kept faithful to the source deck. Each slide declares a `body.kind`
 * that selects a responsive layout in render.ts — nothing here knows about DOM.
 */

export type Part = 1 | 2 | 3 | 4 | 5;

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
  /**
   * Multi-series time series. `dashed` marks modelled rather than actual data.
   * Empty strings in `x` suppress that tick label, so a long series can carry
   * many points but few labels. `marks` annotates specific points.
   */
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
      /** `lift` pushes a label further from its point, to stagger neighbours. */
      marks?: { at: number; text: string; below?: boolean; lift?: number }[];
    }
  /** Two or more measures compared across the same categories. */
  | {
      kind: 'grouped';
      axis?: string;
      x: string[];
      series: { name: string; values: (number | null)[]; display: (string | null)[]; tone?: 'accent' | 'muted' }[];
    }
  /** Factors multiplied to a result, each shown today → 2029. */
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
  notes?: string;
}

export const PARTS: { n: Part; title: string; sub: string; start: number }[] = [
  { n: 1, title: 'Infinite Software', sub: 'the era — machine labor makes software unlimited', start: 6 },
  { n: 2, title: 'The Token Tidal Wave', sub: 'the phenomenon — our ~27x call, landing on the rails', start: 12 },
  { n: 3, title: 'The Receipts', sub: 'dated, named, and already in the filings', start: 23 },
  { n: 4, title: 'A Royalty on Machine Labor', sub: 'the conclusion — the portfolio that owns the meters', start: 30 },
  { n: 5, title: 'Machine Oracle', sub: 'our sensing edge — the opportunity, the assumptions, and why now', start: 38 },
];

export const SLIDES: Slide[] = [
  {
    id: 1,
    body: {
      kind: 'cover',
      date: 'July 16, 2026',
      lede:
        'In 1995, the internet changed software distribution. In 2026, AI agents are changing software production — creating a tidal wave of demand for the infrastructure that runs, stores, secures, observes, and meters all software.',
    },
    notes:
      'Welcome to our thesis presentation on the infrastructure of Infinite Software. Earlier this year we presented AI opportunities, the scale-AI leader and the distribution opportunity. Today we take a step forward — arguably our most important thesis, as we have gained conviction in what is happening in the world of AI agents and machine labor.',
  },
  {
    id: 2,
    body: {
      kind: 'quote',
      quote: ['The Internet is a tidal wave.', 'It changes the rules.'],
      attrib: 'Bill Gates, internal Microsoft memo · May 26, 1995',
      sub: 'Thirty-one years later, the wave is running again — denominated in tokens.',
      extra:
        'It marked the moment an incumbent recognized a paradigm shift. The framing was right about magnitude, even when details were fuzzy. It timestamps the beginning of a ~30-year value creation wave.',
    },
    notes:
      'In May 1995, Gates told Microsoft the Internet was a tidal wave that changes the rules — and the next thirty years of value creation proved him right. Microsoft pivoted the whole company within months. Gates couldn\'t predict Google, smartphones, or SaaS — but "it changes the rules" was exactly correct. Nearly every trillion-dollar company created since traces to that wave. We think we\'re at the same moment again, except this time the wave is denominated in tokens.',
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
            { when: '1995', text: 'The “tidal wave” memo names the discontinuity' },
            { when: '1996–98', text: 'The rails get built and paid — the street debates “fad”' },
            { when: '1999–2000', text: 'The mania — 65–100x, then 60–85% compression' },
            { when: '2001+', text: "The rails' owners collect the era's fortunes" },
          ],
        },
        {
          name: 'The token wave',
          items: [
            { when: 'Nov 2022', text: 'ChatGPT — the Netscape moment, from ~zero' },
            { when: '2026', text: 'The reprice begins — multiples still at fade levels', here: true },
            { when: '2027–2028', text: 'Agent GAAP disclosures, earnings accelerate and multiples re-rate' },
            { when: '2029+', text: 'Meters hit all-time highs, software infra at premium multiples' },
          ],
        },
      ],
    },
    footnote:
      'Historical analogy illustrative; internet-era multiples per the acceleration-episodes analysis later in this deck.',
    notes:
      'This slide sets the clock. The 1995 memo equals November 2022 — ChatGPT was the Netscape moment, from roughly zero. 1996 to \'98 the rails got built and paid while the street debated "fad" — that is exactly where we are. Land on the marker: by the internet clock it is 1996 — after the memo, before the mania. Early enough to matter, late enough to have receipts. Today\'s tape pays 17–25x; 1999 paid 65x+.',
  },
  {
    id: 4,
    kicker: 'The argument of this presentation',
    title: 'Executive Summary',
    body: {
      kind: 'grid3',
      items: [
        {
          eyebrow: 'The era',
          title: 'Infinite Software',
          desc: 'Machine labor makes software free — the software population explodes.',
        },
        {
          eyebrow: 'The phenomenon',
          title: 'The Token Tidal Wave',
          desc: 'Every price drop buys more demand than it gives up — ~27x tokens by 2029.',
        },
        {
          eyebrow: 'The bet',
          title: 'A Royalty on Machine Labor',
          desc: 'Infinite software runs on metered rails. Own the meters; collect the royalty.',
        },
      ],
    },
    notes:
      'The whole argument in three phrases. The era: Infinite Software — machine labor makes making software free, so the software population explodes. The phenomenon: the Token Tidal Wave — every price drop buys more demand than it gives up, roughly 27x tokens by 2029. The bet: a Royalty on Machine Labor — infinite software runs on finite, metered rails, so own the meters and collect the royalty.',
  },
  {
    id: 5,
    kicker: 'Agenda',
    title: 'Five parts, one thesis',
    body: {
      kind: 'agenda',
      items: PARTS.map((p) => ({ n: String(p.n).padStart(2, '0'), title: p.title, desc: p.sub })),
    },
    notes:
      'Roadmap: five parts, one thesis. Part one names the era. Part two quantifies the phenomenon — the ~27x token call and where it lands. Part three is the receipts — dated, named, and already in the filings; this is not a futurist deck. Part four is the conclusion. Part five is Machine Oracle — our sensing edge and why the entry is now. Roughly 40 minutes; interrupt anywhere.',
  },

  // ── Part 01 ───────────────────────────────────────────────────────────────
  {
    id: 6,
    part: 1,
    body: { kind: 'section', num: '01', label: 'Infinite Software', sub: 'the era — machine labor makes software unlimited' },
    notes:
      'Part one. Before the numbers, the era has to be named. The claim: machine labor makes software unlimited — and that inverts where the money in software gets made.',
  },
  {
    id: 7,
    part: 1,
    kicker: 'Skycatcher illustrative view of tech wave scale',
    title: 'AI is the biggest tech wave yet — and this one produces labor',
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
    notes:
      'Every prior wave — mainframe, PC, networking, Web 1.0, mobile, cloud — sold tools that made humans more productive, and each minted the infrastructure names of its era. AI is the first wave that sells the labor itself. That is why it\'s the biggest yet: the addressable market isn\'t the software budget, it\'s the labor budget.',
  },
  {
    id: 8,
    part: 1,
    kicker: 'Cost per unit of software work, by production regime ($, log scale, illustrative)',
    title: 'Software production just broke free of human hands',
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
    takeaway: { icon: '🤯', text: '~4,000x cheaper in one step' },
    footnote:
      'Skycatcher illustration; inference economics per Epoch AI constant-performance price data. For illustrative purposes only.',
  },
  {
    id: 9,
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
          head: 'Key insights',
          items: [
            'Removes the human bottleneck — attention-hours no longer cap output',
            'Parallelization — agents launch agents, 10–100x workstreams',
            'Always-on duty cycle — 40 attention-hours → 168 machine-hours a week',
          ],
        },
      ],
    },
    footnote:
      'Skycatcher framework. Agent capabilities illustrative; reliability and supervision requirements remain constraints.',
  },
  {
    id: 10,
    part: 1,
    kicker: 'The scarcity inversion — where the money goes when production costs collapse',
    title: 'Making software is becoming free. Running it never is.',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Deflates to zero',
          items: ['Code, tests, documentation', 'Integration glue & boilerplate', 'One-off tools & scripts', 'Custom applications themselves'],
          foot: 'an infinite knife-fight of entrants',
          tone: 'cold',
        },
        {
          head: 'Metered forever',
          items: ['Compute cycles & runtime', 'State, memory & context', 'Delivery & network', 'Identity, audit & billing rails'],
          foot: 'billed per unit of use — scales with the software population',
          tone: 'warm',
        },
      ],
    },
    takeaway: { icon: '💡', text: 'Own the right-hand column' },
    footnote:
      'Jevons (1865): efficiency in an input expands rather than reduces its consumption. Nadella invoked the same law, Jan 2025.',
  },
  {
    id: 11,
    part: 1,
    kicker: 'Total return, 4 years following the internet tidal wave memo (May 1995 – May 1999)',
    title: 'Last time production costs collapsed, the rails got paid first',
    body: {
      kind: 'bars',
      items: [
        { label: 'NASDAQ', value: 3, display: '~3x', tone: 'muted' },
        { label: 'Intel', value: 6, display: '~6x' },
        { label: 'Microsoft', value: 7, display: '~7x' },
        { label: 'Cisco', value: 13, display: '~13x', tone: 'accent' },
      ],
    },
    takeaway: { icon: '🧠', text: 'All before the 1999 mania began. The crowd debated; the rails compounded.' },
    footnote:
      'Approximate total-return multiples from public market data, May 1995–May 1999. Past performance is not indicative of future results.',
  },

  // ── Part 02 ───────────────────────────────────────────────────────────────
  {
    id: 12,
    part: 2,
    body: {
      kind: 'section',
      num: '02',
      label: 'The Token Tidal Wave',
      sub: 'the phenomenon — our ~27x call, landing on the rails',
    },
  },
  {
    id: 13,
    part: 2,
    kicker:
      'Global token consumption, quadrillion tokens / year (log scale, Skycatcher aggregation of platform disclosures)',
    title: 'Tokens grew ~2,000x in four years',
    body: {
      kind: 'bars',
      items: [
        { label: '2022', value: 0.05, display: '0.05Q', tone: 'muted' },
        { label: '2023', sub: '×10', value: 0.5, display: '0.5Q', tone: 'muted' },
        { label: '2024', sub: '×10', value: 5, display: '5Q' },
        { label: '2025', sub: '×5', value: 25, display: '25Q' },
        { label: '2026', sub: '×4', value: 100, display: '100Q', tone: 'accent' },
      ],
    },
    takeaway: { icon: '😲', text: 'Through two market corrections and one full-scale AI panic — demand never blinked' },
    footnote:
      'Platform disclosures (e.g., 100T tokens/quarter, 1Q tokens/month anchors), Skycatcher aggregation; error bars apply. Illustrative.',
  },
  {
    id: 14,
    part: 2,
    kicker: 'What happened, 2022–26 — price down ÷50x, volume up ×2,000x, on the measured slope',
    title: 'Every 10x price drop has bought 15–20x more demand',
    body: {
      kind: 'line',
      axis: 'Log scale · price falling against volume rising',
      x: ['2022', '2023', '2024', '2025', '2026'],
      log: true,
      series: [
        {
          name: 'Volume  ×2,000',
          values: [0.05, 0.5, 5, 25, 100],
          display: ['0.05Q', '0.5Q', '5Q', '25Q', '100Q'],
        },
        {
          name: 'Price  ÷50',
          values: [20, 8, 2, 1, 0.4],
          display: ['$20', '$8', '$2', '$1', '$0.40'],
          tone: 'muted',
        },
      ],
    },
    takeaway: { icon: '📐', text: 'Measured slope ≈ 1.6 — every 10x price drop bought 15–20x more demand' },
    footnote:
      'Skycatcher analysis of platform volume disclosures vs. frontier pricing, 2022–26. Historical only; capability-vs-price confound checked against constant-capability tiers.',
  },
  {
    id: 15,
    part: 2,
    kicker: 'Where the 27x comes from — penetration × intensity × price',
    title: 'The heaviest users barely exist yet',
    body: {
      kind: 'stats',
      items: [
        { value: '2.5%', label: 'of ~1B weekly AI users run agents today', sub: '→ 40x headroom in users alone' },
        { value: '500–2,500x', label: 'tokens per user-day', sub: 'casual chat ~10K vs. always-on agent 5–25M' },
        { value: '168 hrs', label: 'agent duty cycle per week', sub: 'vs. ~40 human attention-hours' },
      ],
    },
    takeaway: {
      icon: '🔌',
      text: 'Same human, worth 500–2,500x more tokens the day software stops waiting for prompts',
    },
    footnote: 'Skycatcher estimates from platform usage disclosures; intensity band observed in the wild, illustrative.',
  },
  {
    id: 16,
    part: 2,
    kicker: 'Share of tokens by mode — the delegation ladder',
    title: 'Tokens are shifting from “asking” to “doing”',
    body: {
      kind: 'split',
      groups: [
        { head: 'Today', parts: [{ pct: 85, label: 'Ask (chat)' }, { pct: 15, label: 'Doing (delegate + automate)' }] },
        {
          head: '2029 — our case',
          parts: [{ pct: 25, label: 'Ask (chat)' }, { pct: 75, label: 'Doing (delegate + automate)' }],
        },
      ],
    },
    takeaway: {
      icon: '🔑',
      text: 'Key assumption — 77% of a major lab’s API traffic already classifies as automation; coding share of routed traffic went 11% → 50%+ in one year; enterprise API tokens +150% in five months',
    },
    footnote:
      'Lab and marketplace traffic disclosures, 2025–26. Our case needs doing-share ≥60% by 2029; anything above that already beats consensus.',
  },
  {
    id: 17,
    part: 2,
    kicker: 'Quadrillion tokens / year (log scale) — tidal-wave case vs. the street’s floor',
    title: 'Our call: ~2,700Q tokens by 2029 — a 27x from here',
    body: {
      kind: 'line',
      axis: 'Quadrillion tokens / year · log scale',
      x: ['2026', '2027', '2028', '2029'],
      log: true,
      series: [
        {
          name: 'Tidal wave  ×3.0/yr',
          values: [100, 300, 900, 2700],
          display: ['100Q', '~300Q', '~900Q', '~2,700Q'],
        },
        {
          name: 'Street floor  ×2.2/yr',
          values: [100, 225, 500, 1100],
          display: [null, '~225Q', '~500Q', '~1,100Q'],
          tone: 'muted',
          dashed: true,
        },
      ],
    },
    takeaway: { icon: '🚀', text: 'History ran ×7 / yr. The wave case is a deceleration by more than half.' },
    footnote:
      'Skycatcher scenarios. Floor applies unit elasticity to the announced price path; call applies the measured slope at roughly half its trailing pace.',
  },
  {
    id: 18,
    part: 2,
    kicker: 'The 2029 end state, bottom-up — each factor against today',
    title: '2,700Q, decomposed: three assumptions, multiplied',
    body: {
      kind: 'decompose',
      factors: [
        { value: '~2B', label: 'weekly AI users', note: '×2 vs today', from: '~1B today', to: '~2B 2029e' },
        { value: '~15%', label: 'run always-on agents', note: '×6 vs today', from: '2.5% today', to: '15% 2029e' },
        {
          value: '10–25M',
          label: 'tokens per agent-day',
          note: 'the observed band',
          from: '10M floor',
          to: '25M wave',
        },
      ],
      result: { value: '~2,700Q', label: 'tokens per year', note: '×27 vs today’s 100Q' },
    },
    takeaway: {
      icon: '🧮',
      text: 'The floor and the wave share the same users. 10M/day yields the street’s ~1,100Q; 25M/day yields our ~2,700Q — the debate is intensity.',
    },
    footnote:
      'Skycatcher estimates, illustrative: 2B × 15% × 25M tokens/day × 365 ≈ 2,700Q; at 10M/day ≈ 1,100Q (the floor). Equivalent to ×3/yr for three years vs. the trailing ~×7/yr.',
  },
  {
    id: 19,
    part: 2,
    kicker: 'What one delegated task does to the meters',
    title: 'Tokens are the fuel. Infrastructure events are the bill.',
    body: {
      kind: 'flow',
      items: [
        { head: 'One delegated task', desc: '“fix the failing build”' },
        { head: 'Agent thinks', desc: '~200K tokens of planning, reading, reasoning' },
        { head: 'Agent works', desc: 'API calls · DB reads & writes · test runs · builds · traces · logs' },
      ],
      out: [
        { value: '100,000+', label: 'metered events from a single multi-step coding task' },
        { value: '20–40', label: 'billable events dragged behind every 1,000 agentic tokens' },
      ],
    },
    takeaway: { icon: '🛠️', text: 'Machine labor arrives as an invoice on someone else’s rails' },
    footnote: 'Task-level traces, Skycatcher agent stack and public platform documentation. Illustrative.',
  },
  {
    id: 20,
    part: 2,
    kicker: 'First-order explosion in tokens; second-order explosion in metered events',
    title: 'The wave doesn’t stop at tokens — it lands on the meters',
    body: {
      kind: 'columns',
      cols: [
        { head: 'Token demand', sub: '~27x', items: ['past two quintillion tokens a year by 2029'], foot: 'the labs’ story', tone: 'cold' },
        {
          head: 'Every action lands on rented rails',
          items: [
            'RUNS — runtime, compute & edge',
            'STORES — data, state & memory',
            'SECURES — identity, audit & supply chain',
            'OBSERVES — logs, traces & telemetry',
          ],
        },
        {
          head: 'Billable infra events',
          sub: '~130x',
          items: ['0.3Q → ~39Q by 2029 — the wave amplifies as it lands'],
          foot: 'the meters’ story',
          tone: 'warm',
        },
      ],
    },
    takeaway: { icon: '🌊', text: 'Events compound faster than tokens' },
    footnote:
      'Attach of 20–40 events per 1K agentic tokens per the conversion model; ~130x = 0.3Q → ~39Q billable-weighted events by 2029, Skycatcher case. Illustrative.',
  },
  {
    id: 21,
    part: 2,
    kicker: 'Growth index, 2026 = 1 (log scale) — billable-weighted infrastructure events vs. tokens',
    title: 'The wave amplifies as it lands: events grow ~130x',
    body: {
      kind: 'line',
      axis: 'Growth index, 2026 = 1 · log scale · dashed = modelled',
      x: ['2026', '2027', '2028', '2029'],
      log: true,
      series: [
        {
          name: 'Infra events  ×4–6/yr',
          values: [1, 6, 25, 130],
          display: ['1x', '6x', '25x', '130x'],
          dashed: true,
        },
        {
          name: 'Tokens  ×3/yr',
          values: [1, 3, 9, 27],
          display: [null, '3x', '9x', '27x'],
          tone: 'muted',
          dashed: true,
        },
      ],
    },
    takeaway: {
      icon: '🌊',
      text: 'Events outgrow tokens every single year — agentic share and attach both deepen',
    },
    footnote:
      'Skycatcher conversion model. For the labs this is a token story; for the meters it is an event story — events compound faster.',
  },
  {
    id: 22,
    part: 2,
    kicker: 'Part 02 recap — and what part 03 must prove',
    title: 'The tidal wave, in three numbers',
    body: {
      kind: 'stats',
      items: [
        { value: '~27x', label: 'tokens by 2029', sub: '3x a year vs. a 7x/yr history — the call is a slowdown' },
        {
          value: '~75%',
          label: 'of tokens doing, not asking',
          sub: 'the delegation ladder — above 60% already beats consensus',
        },
        {
          value: '~130x',
          label: 'billable infrastructure events',
          sub: 'the wave amplifies as it lands on the meters',
        },
      ],
    },
    takeaway: { icon: '🤖', text: 'Most important assumption to the Machine Labor thesis' },
    footnote: 'Every figure on this page is graded quarterly against public filings via Sky1.',
  },

  // ── Part 03 ───────────────────────────────────────────────────────────────
  {
    id: 23,
    part: 3,
    body: { kind: 'section', num: '03', label: 'The Receipts', sub: 'The evidence in the reports and filings' },
  },
  {
    id: 24,
    part: 3,
    kicker: 'The invoice line for machine labor — seven vendors shipped one, 2023 → 2026 · all dated, all public',
    title: 'Machine billable units have arrived — 7 major companies so far',
    body: {
      kind: 'steps',
      items: [
        { n: '2023', head: 'Intercom Fin · $0.99', desc: 'per resolution — the first outcome price' },
        { n: '2024', head: 'Cognition Devin · ~$2', desc: 'per ACU — 15 min of agent work' },
        { n: 'Aug 2024', head: 'Zendesk · ~$1.50', desc: 'per automated resolution' },
        { n: 'Oct 2024', head: 'Salesforce · $0.10', desc: 'per action (from $2/conv) — 3.8B AWUs' },
        { n: 'Jul 2025', head: 'Cloudflare · $ / crawl', desc: 'Pay Per Crawl — machine reading, priced' },
        { n: 'Sep 2025', head: 'Microsoft · $0.01', desc: 'per Copilot Credit, Azure-metered' },
        { n: 'Apr 2026', head: 'ServiceNow · 25–150', desc: 'assists per task / agentic action' },
      ],
    },
    takeaway: {
      icon: '🧾',
      text:
        'Machine billable unit — a price on work an AI agent performs: outcomes, actions, sessions, or metered compute. Not on human seats.',
    },
    footnote:
      'Company pricing pages and announcements, 2023 – Apr 2026. Salesforce AWU is the disclosed volume metric; billing runs on conversations and per-action credits.',
  },
  {
    id: 25,
    part: 3,
    kicker: 'Aggregate net dollar retention, five public meters (%, Skycatcher aggregation)',
    title: 'The tape has turned: retention is compounding again',
    body: {
      kind: 'bars',
      axis: 'NDR %',
      items: [
        { label: "Q1'25", value: 113, display: '113%', tone: 'muted' },
        { label: "Q2'25", value: 113, display: '113%', tone: 'muted' },
        { label: "Q3'25", value: 114, display: '114%' },
        { label: "Q4'25", value: 115, display: '115%' },
        { label: "Q1'26", value: 117, display: '117%' },
        { label: "Q2'26", value: 120, display: '120%', tone: 'accent' },
      ],
    },
    takeaway: {
      icon: '📈',
      text:
        '6 straight quarters up — seat-based SaaS ~101%, consumption platforms 120–125%, AI agents ~132%',
    },
    footnote:
      'Company filings, Skycatcher aggregation (approximate). Every task an agent runs meters more revenue from the same customer — no salesperson involved.',
  },
  {
    id: 26,
    part: 3,
    kicker: 'Aggregate remaining performance obligations, five public meters ($B) — with q/q growth',
    title: 'Contracted backlog is compounding at +50% against +23% revenue',
    body: {
      kind: 'bars',
      axis: 'RPO $B',
      items: [
        { label: "Q1'25", value: 10.1, display: '$10.1B', tone: 'muted' },
        { label: "Q2'25", sub: '+13% q/q', value: 11.4, display: '$11.4B', tone: 'muted' },
        { label: "Q3'25", sub: '+11% q/q', value: 12.7, display: '$12.7B' },
        { label: "Q4'25", sub: '+13% q/q', value: 14.3, display: '$14.3B' },
        { label: "Q1'26", sub: '+15% q/q', value: 16.4, display: '$16.4B' },
        { label: "Q2'26", sub: '+16% q/q', value: 19, display: '$19B', tone: 'accent' },
      ],
    },
    takeaway: {
      icon: '📊',
      text: '+50% y/y vs. +23% revenue growth — and the q/q pills show it: growth itself is accelerating',
    },
    footnote:
      'Company filings, Skycatcher aggregation (approximate). RPO leads revenue by 1–3 quarters under committed-usage contracts.',
  },
  {
    id: 27,
    part: 3,
    kicker: 'Usage billed above committed floors, at list — estimated, five public meters ($B / quarter)',
    title: 'Revenue overage is accelerating',
    body: {
      kind: 'bars',
      axis: 'Overage $B / qtr',
      items: [
        { label: "Q1'25", value: 0.55, display: '$0.55B', tone: 'muted' },
        { label: "Q2'25", sub: '+13% q/q', value: 0.62, display: '$0.62B', tone: 'muted' },
        { label: "Q3'25", sub: '+15% q/q', value: 0.71, display: '$0.71B' },
        { label: "Q4'25", sub: '+17% q/q', value: 0.83, display: '$0.83B' },
        { label: "Q1'26", sub: '+18% q/q', value: 0.98, display: '$0.98B' },
        { label: "Q2'26", sub: '+19% q/q', value: 1.17, display: '$1.17B', tone: 'accent' },
      ],
    },
    takeaway: {
      icon: '⚡',
      text:
        '14% → 24% estimated share of aggregate revenue in six quarters — the purest agent signal, faster every quarter',
    },
    footnote:
      'Skycatcher estimate from on-demand revenue, consumption-vs-capacity timing, and credit disclosures. Where limits are enforced, >75% who hit them keep paying (Figma, reported). Illustrative — re-verify against the Sky1 export before external distribution.',
  },
  {
    id: 28,
    part: 3,
    kicker: 'Players · fundamentals · what happened at the print',
    title: 'The market pays the meters on disclosure day — not on ship day',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Meters with receipts',
          sub: 'Snowflake · JFrog · Cloudflare',
          items: [
            'Agent usage disclosed in filings',
            'Backlog + retention confirm conversion',
            'Guidance raised on agent products',
          ],
          foot: '~ +27% avg overnight / print-week re-pricing, 7 marked events',
          tone: 'warm',
        },
        {
          head: 'Narrative before receipts',
          sub: 'Same companies, quarters earlier',
          items: [
            'AI story in the deck, nothing in the filings',
            'Dead money for months — or −48% drawdowns',
            'Proof public, tape unmoved',
          ],
          foot: '~ 0% — SNOW fell 9 weeks after shipping its agent, until the CFO named it',
          tone: 'cold',
        },
      ],
    },
    footnote:
      'Massive market data (adjusted); company filings. Past re-pricings are not predictive. Cloudflare is an industry exhibit, not held in the aggregate.',
  },
  {
    id: 29,
    part: 3,
    kicker: 'SNOW month-end close, Jan 2025 – Jul 2026 ($, split/dividend adjusted)',
    title: 'Snowflake: sixteen weeks from ship to pay',
    body: {
      kind: 'line',
      axis: 'Share price, $',
      x: [
        'Jan ’25', '', '', 'Apr ’25', '', '', 'Jul ’25', '', '',
        'Oct ’25', '', '', 'Jan ’26', '', '', 'Apr ’26', '', '', 'Jul ’26',
      ],
      series: [
        {
          name: '',
          values: [
            189.1, 173.6, 149.5, 168.4, 209.1, 216.0, 205.8, 233.6, 225.6, 265.4,
            259.7, 234.5, 173.2, 165.8, 150.8, 141.7, 261.1, 254.5, 268.1,
          ],
          display: [
            null, null, null, null, null, null, null, null, null, '$265',
            null, null, null, null, null, null, '$261', null, '$268',
          ],
        },
      ],
      marks: [
        { at: 13, text: 'Ships CoCo agent, Feb ’26', below: true },
        { at: 15, text: 'Trough, −50% from peak', below: true, lift: 20 },
        { at: 16, text: 'CFO names it — +47% in a week', lift: 14 },
      ],
    },
    takeaway: {
      icon: '😵',
      text: 'The proof was public the entire time — the tape paid only when the filing said it',
    },
    footnote:
      'Month-end adjusted closes per Yahoo Finance, retrieved July 2026; the deck’s own exhibit uses Massive weekly adjusted closes, so figures may differ slightly. Peak-to-trough on this series is −50.1% (5 Nov 2025 $271.26 → 8 Apr 2026 $135.47 weekly). Week of 27 May 2026: $178 → $261, +47%; the overnight move on the print was ~+36%. Past performance is not indicative of future results.',
  },

  // ── Part 04 ───────────────────────────────────────────────────────────────
  {
    id: 30,
    part: 4,
    body: {
      kind: 'section',
      num: '04',
      label: 'A Royalty on Machine Labor',
      sub: 'the conclusion — the portfolio that owns the meters',
    },
  },
  {
    id: 31,
    part: 4,
    kicker: 'The portfolio · where we invest',
    title: 'Where we invest: layers 2–5',
    body: {
      kind: 'steps',
      items: [
        { n: '1', head: 'Agentic applications & workflows', desc: 'the knife fight', meta: 'avoid' },
        { n: '2', head: 'Tool rails — API · MCP · identity & auth', desc: 'the runtime & checkout meters', meta: 'own' },
        { n: '3', head: 'Context, data, analytics & memory', desc: 'the context & memory meters', meta: 'own' },
        { n: '4', head: 'Build & verify — repos, CI/CD, evals, tests', desc: 'the build meter', meta: 'own' },
        { n: '5', head: 'Observe, govern & secure — traces, policy, cost', desc: 'the audit meter', meta: 'own' },
        { n: '6', head: 'Cloud & compute substrate', desc: 'GPU-gated', meta: 'avoid' },
      ],
    },
    takeaway: {
      icon: '🎯',
      text:
        'Investable sweet spot — layers 2–5 are least dependent on GPU availability and most directly tied to software volume, compliance, and enterprise trust',
    },
  },
  {
    id: 32,
    part: 4,
    kicker: 'Admission checklist — written before we owned a share',
    title: 'What gets a meter into the book',
    body: {
      kind: 'steps',
      items: [
        { head: 'Usage-priced core', desc: 'revenue meters machine actions, not human seats' },
        { head: 'Agent cohorts in the filings', desc: 'not the deck — disclosed usage, auditable each quarter' },
        { head: 'Growing retention and accelerating backlog', desc: 'the tape confirms conversion, not just adoption' },
        { head: 'Fortress economics', desc: 'software gross margins, net cash, Rule of 40' },
        { head: 'Every link checkable', desc: 'adoption → usage → conversion → auditability, or starter weight only' },
      ],
    },
    footnote: 'Skycatcher audit framework. Grades map to pre-written weight actions inside the quarter.',
  },
  {
    id: 33,
    part: 4,
    kicker: 'Aggregate valuation and quality, five public meters, July 2026',
    title: 'The cheapest this growth has ever been offered',
    body: {
      kind: 'stats',
      items: [
        { value: '7.5x', label: 'EV / revenue', sub: 'a quarter of the 2021 peak' },
        { value: '~21x', label: 'forward P/E', sub: 'today’s software-tape multiple' },
        { value: '0.4x', label: 'growth-adjusted', sub: 'the cheapest on record for this group' },
        { value: '$14B', label: 'combined net cash', sub: 'no buildout financing dependence' },
        { value: '73%', label: 'aggregate gross margin', sub: 'held through the agent transition' },
      ],
    },
    takeaway: {
      icon: '🛒',
      text: 'Re-accelerating revenue at trough-regime multiples — while backlog and overages compound',
    },
    footnote: 'Company filings and market data, Skycatcher aggregation, Jul 2026. Multiples approximate.',
  },
  {
    id: 34,
    part: 4,
    kicker: 'Aggregate five-meter valuation by fiscal year — EV / NTM revenue and forward P/E (approximate)',
    title: 'Multiples compressed while fundamentals compounded',
    body: {
      kind: 'grouped',
      axis: 'Approximate, by fiscal year',
      x: ['FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'Jul ’26'],
      series: [
        {
          name: 'EV / NTM revenue',
          values: [30, 12, 10, 9, 8, 7.5],
          display: ['30x', '12x', '10x', '9x', '8x', '7.5x'],
        },
        {
          name: 'Forward P/E',
          values: [null, null, null, 50, 30, 21],
          display: ['n/m', 'n/m', 'n/m', '50x', '30x', '21x'],
          tone: 'muted',
        },
      ],
    },
    takeaway: {
      icon: '💪',
      text:
        'Meanwhile the business: op margin −6% → +18%, retention back to 120% — the de-rating happened while fundamentals compounded',
    },
    footnote:
      'Skycatcher estimates from market data and filings; multiples approximate, earnings basis non-GAAP. FY21–23 earnings not meaningful (pre-profitability). Verify against exchange data before external use.',
  },
  {
    id: 35,
    part: 4,
    kicker: 'Aggregate 2029 revenue, five public meters ($B)',
    title: 'Four honest haircuts still leave $44B against the street’s $23B',
    body: {
      kind: 'bars',
      axis: '2029 revenue $B',
      items: [
        { label: 'Street fade', value: 23, display: '$23B', tone: 'muted' },
        { label: 'Floor case', value: 34, display: '$34B' },
        { label: 'Tidal wave case', value: 44, display: '$44B', tone: 'accent' },
      ],
    },
    takeaway: {
      icon: '💰',
      text: 'The $21B/yr wedge between wave and fade is the entire trade.',
    },
    footnote:
      'Skycatcher model vs. consensus estimates. ~41% CAGR from ~$15.9B today. Illustrative; see assumptions appendix.',
  },
  {
    id: 36,
    part: 4,
    kicker: 'Aggregate five-meter P&L, actual and illustrative ($ indexed, FY21 = 100 revenue)',
    title: 'The meters’ margin machine, illustrated',
    body: {
      kind: 'table',
      head: ['', 'FY2021', 'Today', '2029 — wave case'],
      rows: [
        ['Revenue', '100', '260', '~720'],
        ['Gross margin', '73%', '74%', '~72%'],
        ['(−) Opex', '(79)', '(145)', '(~240)'],
        ['Operating profit', '(6)', '47', '~280'],
        ['Operating margin', '−6%', '18%', '~35–40%'],
      ],
    },
    takeaway: { icon: '⚙️', text: '24 points of operating leverage built before the wave arrived — profit multiple ~6x' },
    footnote:
      'Aggregate of five public meters per filings (FY21, today); 2029 illustrative at ~50% incremental drop-through (measured 45–55% in filings). Not a forecast of any company’s results.',
  },
  {
    id: 37,
    part: 4,
    kicker: 'Why the measured attach is a lag, not a leak — the surge hits backlog before it hits revenue',
    title: 'Today’s attach says 0.2–0.3 — that’s the entry price, not the ceiling',
    body: {
      kind: 'steps',
      items: [
        {
          n: '1',
          head: 'Committed contracts burn first',
          desc: 'usage draws down prepaid credits — surge appears in RPO, not revenue',
          meta: '1–2 qtrs',
        },
        {
          n: '2',
          head: 'Overage bills only above the floors',
          desc: 'then at list price — the spending nobody budgeted',
          meta: '1–2 qtrs',
        },
        {
          n: '3',
          head: 'Pilots meter lightly; production meters everything',
          desc: 'audit, security, observability attach when workloads graduate',
          meta: '2–3 qtrs',
        },
        { n: '4', head: 'Efficiency comes before scale', desc: 'teams optimize before they let agents rip', meta: '1–2 qtrs' },
      ],
    },
    takeaway: { icon: '⏳', text: 'The lag is the opportunity' },
    footnote: 'Contract mechanics per usage-platform disclosures. Each lag closes on a disclosure date.',
  },

  // ── Part 05 ───────────────────────────────────────────────────────────────
  {
    id: 38,
    part: 5,
    body: {
      kind: 'section',
      num: '05',
      label: 'Machine Oracle',
      sub: 'the underwriting, the risks, and what to do — our sensing edge and our conclusion',
    },
  },
  {
    id: 39,
    part: 5,
    kicker: 'The belief chain — tokens → agentic events → meter revenue, two falsifiable bridges',
    title: 'What you must believe — and how we check it',
    body: {
      kind: 'flow',
      items: [
        { head: 'Tokens · ~27x', desc: 'by 2029 — our tidal-wave call (floor ~11x)' },
        { head: 'Agentic events · ~130x', desc: 'events, our case — ~43x at the floor' },
        { head: 'Meter revenue · ~2.8x', desc: 'our case vs the street’s 1.5x fade' },
      ],
      out: [
        {
          value: 'Bridge 1',
          label: 'Tokens proxy agent work — agentic token share rises ~15% → ~60%; 20–40 events per 1K agentic tokens',
        },
        { value: 'Bridge 2', label: 'Events convert to revenue — elasticity holds at 0.5–0.7 as mix shifts to premium event tiers' },
      ],
    },
    takeaway: {
      icon: '🌉',
      text:
        'Two bridges carry the whole thesis. If both hold, 2029 revenue is ~$44B and the group re-rates. If elasticity compresses, the downside is mediocrity, not disaster.',
    },
  },
  {
    id: 40,
    part: 5,
    kicker: 'Aggregate revenue growth, y/y — same starting point, two shapes',
    title: 'The street isn’t bearish on agents — it has never modeled them',
    body: {
      kind: 'line',
      axis: 'Aggregate revenue growth, y/y',
      x: ['2026e', '2027e', '2028e', '2029e'],
      series: [
        {
          name: 'The event math',
          values: [20, 25, 31, 36],
          display: ['20%', '25%', '31%', '36%'],
        },
        {
          name: 'The fade',
          values: [20, 15, 14, 13],
          display: [null, '15%', '14%', '13%'],
          tone: 'muted',
          dashed: true,
        },
      ],
    },
    footnote:
      'Growth paths implied by the aggregate revenue models: consensus fade to ~$23B vs the event-math path to ~$44B on our call by 2029. Illustrative.',
  },
  {
    id: 41,
    part: 5,
    kicker: 'Forward P/E paid for re-accelerated growth — precedent episodes vs. today’s tape',
    title: '40x: what history pays for acceleration',
    body: {
      kind: 'bars',
      axis: 'Forward P/E',
      items: [
        { label: 'Today’s software tape', value: 21, display: '21x', tone: 'muted' },
        { label: 'MSFT cloud re-accel peak', value: 35, display: '35x' },
        { label: 'Our underwriting band', value: 40, display: '40x', tone: 'accent' },
        { label: 'NVDA in AI acceleration', value: 45, display: '45x' },
        { label: 'NOW at durable 25–30% growth', value: 53, display: '53x' },
        { label: '2021 SaaS / 1999 regime', value: 65, display: '65x', tone: 'warn' },
      ],
    },
    takeaway: {
      icon: '🚦',
      text:
        '40x = PEG ~1 on re-accelerated growth — the conservative end of every episode above. 65x+ is the caution, not the plan: 2021 SaaS and 1999 compressed 60–85% after.',
    },
    footnote:
      'Multiples approximate: industry & MSFT fwd P/E as of Jul 2026; MSFT 2016–21 re-rating; NVDA FY24–26; NOW 3-yr avg; 2021 SaaS / 1999 per compression studies. Sources: Massive, multiples est., simplified & illustrative.',
  },
  {
    id: 42,
    part: 5,
    kicker:
      'Combined equity value, 2029 ($B) = 2029e earnings × forward P/E + ~$14B net cash · today: ~$120B',
    title: 'Price the earnings: every path through 40x beats today',
    body: {
      kind: 'table',
      head: ['', 'Street fade — ~$5.0B', 'Floor — ~$9.0B', 'Wave — ~$15.3B'],
      rows: [
        ['21x — today’s tape', '$119B  (−1%)', '$203B  (+69%)', '$334B  (+178%)'],
        ['40x — our band', '$214B  (+78%)', '$374B  (+212%)', '$624B  (+420%)'],
        ['53x — durable-growth precedent', '$279B  (+133%)', '$491B  (+309%)', '$822B  (+585%)'],
      ],
      highlight: 1,
    },
    takeaway: {
      icon: '🛡️',
      text:
        '8 of 9 cells beat today — the loser needs the fade AND today’s trough multiple. Skycatcher case = the 40x × wave cell: $624B (+420%).',
    },
    footnote:
      'Skycatcher scenario grid, illustrative. 2029e non-GAAP net margins: fade ~22%, floor ~26%, wave ~35%. P/E bands per previous slide. Approximate.',
  },
  {
    id: 43,
    part: 5,
    kicker: 'Combined value of the five meters, 2026–2029e ($B, Skycatcher scenarios)',
    title: 'Our case: ~5x over four years',
    body: {
      kind: 'line',
      axis: 'Combined value of the five meters, $B',
      x: ['2026', '2027', '2028', '2029'],
      series: [
        // Intermediate years are constant-rate interpolations between today's
        // ~$120B and each 2029 outcome — the deck states the endpoints, not the
        // path. Disclosed in the footnote so the shape is not read as forecast.
        {
          name: 'Skycatcher  +420%',
          values: [120, 207.8, 359.8, 624],
          display: ['$120B', null, null, '$624B'],
        },
        {
          name: 'Reference floor  +220%',
          values: [120, 176.9, 260.8, 384],
          display: [null, null, null, '~$384B'],
          dashed: true,
        },
        {
          name: 'Consensus drift  +17%',
          values: [120, 126.3, 132.9, 140],
          display: [null, null, null, '~$140B'],
          tone: 'muted',
          dashed: true,
        },
      ],
    },
    takeaway: {
      icon: '🤩',
      text:
        '+420% attributed: earnings growth at today’s 21x → +$214B · the re-rate, 21x → 40x → +$290B. Hyperboom ≈ $1T (~8.3x) at 4,000Q tokens & 1999-regime multiples — shown, not underwritten.',
    },
    footnote:
      'Skycatcher scenarios, illustrative; central case capitalizes the unmodeled wedge at 40x — the conservative end of historical re-acceleration regimes. 1996–99 rails paid 6–13x. Endpoints are from the model; 2027 and 2028 are constant-rate interpolations shown to indicate shape, not a year-by-year forecast.',
  },
  {
    id: 44,
    part: 5,
    kicker: 'The Machine Oracle tracker',
    title: 'Upcoming inflections',
    body: {
      kind: 'steps',
      items: [
        { n: 'Aug–Nov 2026', head: 'The prints confirm the turn', desc: 'NDR ≥121% · backlog growth >45%' },
        {
          n: '2027',
          head: 'The seat recession goes visible',
          desc: 'shrinking seats, growing revenue at a major vendor · “agent GAAP” arrives',
        },
        {
          n: '2028',
          head: 'Machine-work units go mainstream',
          desc: 'billable events pass 5Q/yr; overage >30% of aggregate meter revenue',
        },
        { n: '2029', head: 'The wave lands in full', desc: 'tokens cross 2 quintillion/yr; the five meters bill ~$44B' },
      ],
    },
    footnote:
      'Forecasts are falsifiable by design: dated thresholds keyed to third-party filings, graded quarterly. Forward-looking statements; see disclosures.',
  },
  {
    id: 45,
    part: 5,
    kicker: 'The whole thesis in three lines — each one graded by Sky1',
    title: 'Said simply: the three bets you make',
    body: {
      kind: 'steps',
      items: [
        {
          n: '1',
          head: 'The wave builds.',
          desc: 'Tokens ~27x by 2029 — our tidal-wave call; the street’s own base case is the ~11x floor.',
        },
        {
          n: '2',
          head: 'The wave shifts from agents asking to doing.',
          desc: 'Agentic share 15% → ~60%; billable events ~130x — events follow tasks, not tokens.',
        },
        {
          n: '3',
          head: 'The wave lands on the meter bill.',
          desc:
            'Revenue ~2.8x vs the 1.5x fade — ~$500B the street isn’t modeling; our case ~5.2x, and 8 of 9 priced paths beat today.',
        },
      ],
    },
    takeaway: { icon: '🤑', text: 'The most important bet to get right — the rest will take care of itself' },
  },
  {
    id: 46,
    part: 5,
    kicker: 'Kill conditions — written in advance, keyed to public filings',
    title: 'How you’ll know if we’re wrong',
    body: {
      kind: 'steps',
      items: [
        {
          head: 'Token prices refuse to fall for 2 consecutive quarters',
          desc: 'the buildout is breaking — assumption 1 fails',
        },
        {
          head: 'A full 10x price tier down buys only ~10x demand',
          desc: 'elasticity collapsed to the street’s floor — we drift to consensus',
        },
        { head: 'API-vs-consumer token split stalls for a year', desc: 'the mix shift from asking to doing stops' },
        { head: 'Overage share reverses', desc: 'the budget governor is binding for years, not quarters' },
      ],
    },
    footnote:
      'Each trigger maps to a pre-written weight action executed inside the quarter. Multiple discipline: growth-adjusted >1.2x = sell into the parabola.',
  },
  {
    id: 47,
    part: 5,
    kicker: 'Disclosure re-pricings — individual holdings in the aggregate index — overnight / print-week moves',
    title: 'Waiting for proof misses the disclosure-day gap up',
    body: {
      kind: 'bars',
      axis: 'Re-pricing at the print',
      items: [
        { label: 'May ’26', value: 36, display: '+36%', tone: 'accent' },
        { label: 'Nov ’24', value: 32.7, display: '+32.7%' },
        { label: 'Feb ’24', value: 31, display: '+31%' },
        { label: 'Nov ’25', value: 27, display: '+27%' },
        { label: 'May ’26', value: 23.7, display: '+23.7%' },
        { label: 'Feb ’25', value: 21, display: '+21%' },
        { label: 'Oct ’25', value: 16, display: '+16%', tone: 'muted' },
      ],
    },
    takeaway: {
      icon: '🕰️',
      text:
        'Average ≈ +27%. There are 12 prints between here and 2029; capital in by August 1 owns the gap — capital that waits pays it.',
    },
    footnote:
      'Overnight close-to-close and print-week moves for individual holdings in the Skycatcher aggregate index, shown anonymized; per Massive market data (adjusted). Average illustrative; past re-pricings are not predictive of future moves.',
  },
  {
    id: 48,
    part: 5,
    kicker: 'The entry condition — every line below was false eighteen months ago',
    title: 'Why now: five things changed in the last eighteen months',
    body: {
      kind: 'steps',
      items: [
        { n: '1', head: 'Agents do delegation', desc: 'Today — agents ship; 77% of API traffic is automation' },
        {
          n: '2',
          head: 'The price of “agent doing” is trivial',
          desc: 'Today — $0.40/M; an always-on agent-day costs a few dollars',
        },
        {
          n: '3',
          head: 'Machine work got billable units',
          desc: 'Today — billable agent SKUs are shipping: AWUs, Pay Per Use, flex credits',
        },
        { n: '4', head: 'The wave reached the filings', desc: 'Today — NDR 120 and climbing · RPO +50% · overage 14→24%' },
        {
          n: '5',
          head: 'The multiple didn’t come with it',
          desc: 'Today — 21x fwd P/E vs. 40x precedent; the street models zero agents',
        },
      ],
    },
    footnote: 'Details in the body of the deck: traffic mix, price, billable units, tape, multiples.',
  },
  {
    id: 49,
    body: {
      kind: 'quote',
      quote: ['Machine labor is a tidal wave.', 'It changes the rules.'],
      attrib: 'Skycatcher · July 2026 · thirty-one years after Bill Gates’ Tidal Wave Memo',
      // The deck's closing paragraph lives in the commentary for this slide, so
      // it is not repeated here.
    },
    footnote: 'Not an offer of securities. Projections are illustrative and not guarantees of future results — see Disclosures.',
  },
  {
    id: 50,
    kicker: 'Appendix',
    title: 'Disclosures',
    body: {
      kind: 'prose',
      paras: [
        {
          head: 'Forward-looking statements.',
          text:
            'This presentation contains forecasts, projections and forward-looking statements, including token-volume scenarios, event-conversion estimates, revenue paths and valuation grids. These are based on assumptions that involve known and unknown risks; actual results may differ materially. Projections are inherently unreliable and should not be relied upon in making an investment decision.',
        },
        {
          head: 'Skycatcher estimates.',
          text:
            'Aggregate figures for the five-meter basket (retention, RPO, overage share, margins, multiples) are compiled from company filings and restated approximately for basket changes; they have not been audited. Token-volume figures are anchored to platform disclosures and are estimates with error bars. Event-conversion figures derive from Skycatcher’s internal model and its own operating stack.',
        },
        {
          head: 'Companies and market data.',
          text:
            'Company references are informational and are not recommendations. Cloudflare and JFrog exhibits illustrate market behavior; Cloudflare is not held in the aggregate. Market data per Massive (adjusted closes). Historical multiples for 1995–99 rails are approximate from public data. Past performance, including past disclosure re-pricings, is not indicative of future results.',
        },
        {
          head: 'AI risk.',
          text:
            'AI is an emerging technology subject to a higher level of risk and uncertainty than established sectors, including regulatory, supply-chain, capex-cycle and adoption risks. Chapter-VII-style assumptions and kill triggers are maintained at machineoracle.ai and graded quarterly.',
        },
        {
          head: 'Fund performance.',
          text:
            'References to prior fund returns (including +160% for the Battle Royale period and +60% for the Game Console App Store period) are overall fund returns for the thesis periods shown, per Skycatcher records, are unaudited, and are presented for illustration of investment process only. Position-level attribution is available in the data room. Individual investor results may differ based on timing and terms. Past performance is not indicative of future results, and there can be no assurance that any fund objective will be achieved.',
        },
        {
          head: 'Basis of presentation.',
          text:
            'These materials are prepared solely for discussion with a limited number of qualified investors and are confidential. They do not constitute an offer to sell or a solicitation of an offer to buy any security; any such offer will be made only through definitive offering documents, which will contain additional information including risk factors and should be read in their entirety. Recipients should consult their own advisers as to legal, tax, and financial matters. Distribution or reproduction without Skycatcher’s consent is prohibited.',
        },
        {
          head: 'Conflicts of interest.',
          text:
            'Skycatcher, its affiliates and principals hold venture-capital positions in certain private companies referenced in this presentation (including SpacetimeDB, SuperTuned.AI and HeyMido), operate DeadWeb.com, and may benefit from increased awareness of these companies. Venture positions are unrealized, illustrative in valuation, and involve a high risk of loss. Sky1 is an internal research tool; its outputs are not independent research.',
        },
        {
          head: 'Trademarks.',
          text:
            'All third-party names, logos and trademarks (including Nintendo, Google, Microsoft, Sony, Snowflake, Cloudflare, JFrog, Salesforce, Intercom, Zendesk, Cognition, ServiceNow and others) are the property of their respective owners. Their use is for identification only and does not imply affiliation, sponsorship or endorsement.',
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
