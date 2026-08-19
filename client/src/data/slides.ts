/**
 * Exhibit data for "The Machine Economy" (Skycatcher, 2026).
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
      /** Force the zoomed narrow-band scale even when the range is wide-ish. */
      zoom?: boolean;
      series: {
        name: string;
        values: (number | null)[];
        display?: (string | null)[];
        dashed?: boolean;
        tone?: 'accent' | 'muted' | 'warn' | 'ink';
      }[];
      marks?: { at: number; text: string; below?: boolean; lift?: number }[];
      /** Dotted vertical event line (e.g. the ChatGPT moment). */
      vline?: { at: number; label: string };
    }
  | {
      kind: 'grouped';
      axis?: string;
      x: string[];
      series: { name: string; values: (number | null)[]; display: (string | null)[]; tone?: 'accent' | 'muted' | 'ink' }[];
    }
  | {
      kind: 'decompose';
      factors: { value: string; label: string; note?: string; from: string; to: string }[];
      result: { value: string; label: string; note?: string };
    }
  | {
      // Site-original (fig 6): three consequences, each with a small drawing.
      kind: 'trio';
      items: { viz: 'uncap' | 'fanout' | 'week'; value: string; head: string; desc: string }[];
    }
  | {
      // Site-original (Part 1, fig 12): the master equation, drawn.
      kind: 'eqn';
      terms: { sym: string; name: string; now: string; later: string; dir: 'up' | 'down' }[];
      result: { value: string; label: string };
      second?: string;
    }
  | {
      // Site-original (Part 1): agent at the center, spokes to what it touches.
      kind: 'hub';
      center: string;
      spokes: { label: string; desc: string }[];
    }
  | {
      // Site-original (Part 1): human chain vs agent fan-out tree.
      kind: 'fantree';
      left: { head: string; nodes: string[]; foot: string };
      right: { head: string; trunk: string[]; branch: { at: number; nodes: string[] }; foot: string };
    }
  | {
      // Site-original hero (fig 1): the era's two magnitudes, drawn to scale.
      kind: 'unlock';
      price: {
        head: string;
        factor: string;
        from: { value: string; label: string };
        to: { value: string; label: string };
        note: string;
      };
      makers: {
        head: string;
        factor: string;
        from: { value: string; label: string };
        to: { value: string; label: string };
        note: string;
      };
      result: { value: string; label: string; note: string };
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
      /** Render the right series as muted bars behind the left line. */
      rightBars?: boolean;
      marks?: { at: number; text: string; below?: boolean; on?: 'left' | 'right'; lift?: number }[];
    }
  | {
      // Head-to-head scorecard (deck 66): rounds, evidence, winner chips.
      kind: 'bout';
      heads: [string, string];
      rows: { round: string; a: string; b: string; winner: 'a' | 'b' }[];
      score: string;
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
  { n: 1, title: 'The Machine Economy', sub: 'the era — the marginal consumer of software becomes software itself', start: 7 },
  { n: 2, title: 'Measuring Machine Demand', sub: 'the model — from work to workflows to billable units', start: 18 },
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
    id: 4,
    kicker: 'The argument of this piece',
    title: 'Four parts',
    body: {
      kind: 'agenda',
      items: [
        { n: '01', title: 'The Machine Economy', desc: 'the era — the marginal consumer of software becomes software itself' },
        { n: '02', title: 'Measuring Machine Demand', desc: 'the model — work × penetration × fan-out × duty cycle, proven on the token record' },
        { n: '03', title: 'A Royalty on Machine Labor', desc: 'the money — machine demand runs on metered rails; two layers collect it' },
        { n: '04', title: 'Machine Oracle', desc: 'the instrument — three meters, killer ratios, signals, and dated predictions, graded in public' },
      ],
    },
  },
  // ── Part 01 ───────────────────────────────────────────────────────────────
  {
    id: 7,
    part: 1,
    body: { kind: 'section', num: '01', label: 'The Machine Economy', sub: 'the era — the marginal consumer of software becomes software itself' },
  },
  {
    // Site-original exhibit: the three chains.
    id: 100,
    part: 1,
    kicker: 'The cloud era, the agent era, and what comes after',
    title: 'From human intent to machine execution',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'The cloud era',
          sub: 'humans → software → infrastructure',
          items: [
            'A person opens the app, runs the query, starts the workflow',
            'Human attention is the rate limiter on every backend',
          ],
          foot: '1995–2022',
          tone: 'cold',
        },
        {
          head: 'The agent era',
          sub: 'humans → agents → tools & APIs → infrastructure',
          items: [
            'A person sets the goal; agents do the work',
            'Each goal fans out into many machine actions',
          ],
          foot: 'Now',
          tone: 'cold',
        },
        {
          head: 'The machine era',
          sub: 'events → agents → other agents → infrastructure',
          items: [
            'No human action required at the start',
            'Machines respond to machines, continuously',
          ],
          foot: 'Where the decade is headed',
          tone: 'warm',
        },
      ],
    },
    takeaway: {
      icon: '🔁',
      text: 'The defining feature of the era is not that software becomes intelligent — it is that the marginal consumer of software infrastructure becomes software itself.',
    },
  },
  {
    // Site-original exhibit: the decoupling, drawn as an org.
    id: 101,
    part: 1,
    kicker: 'Backend activity decouples from human population',
    title: 'Humans stop being the rate limiter',
    body: {
      kind: 'rings',
      rings: [
        { value: '10,000', label: 'employees' },
        { value: '50,000+', label: 'persistent agents & subagents' },
        { value: 'Millions', label: 'machine workflows a day' },
      ],
      eras: [
        {
          when: 'Then',
          name: 'One worker, one login',
          count: '10,000',
          desc: 'Backend activity scaled with headcount — employees, developers, customers, users.',
        },
        {
          when: 'Now',
          name: 'Agents beside every team',
          count: '50,000+',
          desc: 'Persistent agents plus transient subagents, each making calls no person initiates.',
        },
        {
          when: 'Ahead',
          name: 'Workflows without people',
          count: 'Millions/day',
          desc: 'Machine intensity — machine actions over human actions — becomes the era’s defining ratio.',
        },
      ],
    },
    takeaway: {
      icon: '⚙️',
      text: 'A human makes ~50 meaningful software actions in a workday. An agent makes thousands — continuously, at machine speed, while spawning more agents.',
    },
    footnote: 'Illustrative company; counts are orders of magnitude, not forecasts.',
  },
  {
    // Site-original exhibit: work expansion examples.
    id: 102,
    part: 1,
    kicker: 'Cheap intelligence does not shrink the work — it multiplies it',
    title: 'Work expansion: the most underappreciated variable',
    body: {
      kind: 'table',
      head: ['The job', 'A human does', 'Agents do', 'Expansion'],
      rows: [
        ['Equity research', '30 companies, covered deeply', 'every company, every day, hundreds of scenarios', '×100+'],
        ['Security', 'the 50 most suspicious events', 'all 5 million', '×100,000'],
        ['Sales research', '20 accounts', '20,000 accounts', '×1,000'],
        ['Software testing', '10 test runs', '10,000 permutations', '×1,000'],
      ],
    },
    takeaway: {
      icon: '📈',
      text: 'Work expansion (X) = work performed with agents ÷ work that would have been performed without them. We care about this more than the share of jobs automated.',
    },
    footnote: 'Skycatcher illustrations of demand elasticity at the level of work, not price.',
  },
  {
    // Site-original exhibit: passive vs active software.
    id: 103,
    part: 1,
    kicker: 'Software stops waiting',
    title: 'From request–response to observe, reason, act',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Software that waits',
          sub: 'the SaaS era',
          items: [
            'Salesforce waits for someone to update the CRM',
            'Snowflake waits for a query',
            'MongoDB waits for an application request',
            'Datadog waits for telemetry to arrive',
          ],
          foot: 'request → response',
          tone: 'cold',
        },
        {
          head: 'Software that acts',
          sub: 'the agent era',
          items: [
            'Monitors, investigates, reconciles',
            'Researches, tests, optimizes',
            'Negotiates, reports, acts — continuously',
            'A standing loop: observe → reason → act',
          ],
          foot: 'Duty cycle (D) = active time ÷ available time',
          tone: 'warm',
        },
      ],
    },
    takeaway: {
      icon: '🔄',
      text: 'Most agents today run 45 seconds after a prompt. The consequential world is an agent provisioned once and operating for six months — 1% duty cycle against 80% is an enormous difference for the backend.',
    },
  },
  {
    // Site-original exhibit: the fan-out tree.
    id: 104,
    part: 1,
    kicker: 'One unit of thought, many units of infrastructure',
    title: 'Every agent task fans out',
    body: {
      kind: 'fantree',
      left: {
        head: 'A human interaction',
        nodes: ['Click', 'API call', 'Database', 'Response'],
        foot: 'one action → a few backend touches',
      },
      right: {
        head: 'An agent task',
        trunk: [
          'Goal',
          'Reason',
          'Retrieve context',
          'Query database',
          'Call model',
          'Call API',
          'Validate',
          'Retry',
          'Write state',
          'Emit telemetry',
          'Complete',
        ],
        branch: { at: 5, nodes: ['Spawn subagent', 'Retrieve · call API', 'Query database'] },
        foot: 'one task → dozens of backend actions',
      },
    },
    takeaway: {
      icon: '🌳',
      text: 'Agent fan-out (F) = backend actions ÷ agent task. A small population of agents with deep fan-out can out-consume a large population of humans.',
    },
    footnote: 'Trace shape per Cloudflare’s agent tracing and Skycatcher’s own Sky1 traces: invocations, subagents, model calls, tool calls, database operations.',
  },
  {
    // Site-original exhibit: from stateless inference to persistent workers.
    id: 105,
    part: 1,
    kicker: 'Prompts in, tokens out was the easy part. Agents need to remember.',
    title: 'Agents create state',
    body: {
      kind: 'convert',
      from: {
        head: 'The inference era',
        value: 'Model + prompt',
        sub: 'stateless — nothing persists between calls',
        tag: '2023–2025',
      },
      via: {
        head: 'What a useful agent must keep',
        rows: [
          { verb: 'Identity', desc: 'who it is, what it may touch' },
          { verb: 'Memory', desc: 'context, preferences, history' },
          { verb: 'Checkpoints', desc: 'where the work stands' },
          { verb: 'Artifacts', desc: 'what it produced, and for whom' },
        ],
      },
      to: {
        head: 'The agent era',
        value: 'Model + state + tools + identity + memory',
        sub: 'a persistent digital worker',
        tag: '2026 →',
      },
    },
    takeaway: {
      icon: '💾',
      text: 'State intensity (S) = persistent state ÷ unit of agent work. If agents stay ephemeral, databases get incremental transactions. If they become persistent workers, databases become their memory.',
    },
  },
  {
    // Site-original exhibit: machine-to-machine as an economic category.
    id: 106,
    part: 1,
    kicker: 'Machines become a class of economic actor — operationally, not legally',
    title: 'Machine-to-machine becomes an economic category',
    body: {
      kind: 'hub',
      center: 'Agent',
      spokes: [
        { label: 'APIs', desc: 'calls services, consumes quotas' },
        { label: 'Databases', desc: 'reads and writes state no human sees' },
        { label: 'Other agents', desc: 'hands work between machines' },
        { label: 'Payments', desc: 'transacts for resources' },
        { label: 'Identity & security', desc: 'authenticates, holds permissions, fails' },
        { label: 'Observability', desc: 'is watched, traced, and audited' },
      ],
    },
    takeaway: {
      icon: '🤝',
      text: 'The internet was built for billions of humans. We are adding billions of software workers that authenticate, transact, generate data, and fail — all of which someone must meter.',
    },
  },
  {
    // Site-original exhibit: the era's arithmetic, up front.
    id: 3,
    part: 1,
    kicker: 'Why now — making software collapsed in price',
    title: 'The production unlock: infinite software',
    body: {
      kind: 'unlock',
      price: {
        head: 'Price of a unit of software work',
        factor: '÷4,000',
        from: { value: '$200', label: 'human-built — a professional’s hours' },
        to: { value: '$0.05', label: 'agent-built, end to end, 2026' },
        note: 'Drawn to scale: at this height, the agent-built bar is one pixel tall.',
      },
      makers: {
        head: 'People who can make software',
        factor: '×33',
        from: { value: '30M', label: 'professional developers' },
        to: { value: '1B+', label: 'anyone who can describe what they want' },
        note: 'Drawn to scale: circle area is proportional to people.',
      },
      result: {
        value: 'Infinite software',
        label: 'software as abundant as documents',
        note: 'every piece of it runs on rented, metered rails',
      },
    },
    takeaway: { icon: '♾️', text: 'Price collapses, the maker population explodes — and the constraint moves to what all software must rent.' },
    footnote: 'A unit of software work: a scoped piece a mid-level engineer ships in about a day. 4,000x is a Skycatcher estimate — the claim is the order of magnitude, not the precision.',
  },

  {
    // Site-original exhibit: METR's task-horizon trend, drawn.
    id: 97,
    part: 1,
    kicker: 'An independent measure: the autonomous task horizon, 2019 → 2026',
    title: 'How long a machine can work alone',
    body: {
      kind: 'line',
      axis: 'Longest software task completed autonomously — human-time equivalent, log scale',
      log: true,
      x: ["'19", "'20", "'21", "'22", "'23", "'24", "'25", "'26"],
      series: [
        {
          name: 'Task horizon',
          values: [0.05, 0.13, 0.4, 0.7, 5, 18, 90, 360],
          display: ['3 sec', null, null, null, '5 min', null, '1.5 hrs', 'a working day'],
        },
      ],
      marks: [
        { at: 2, text: 'doubling every ~7 months' },
        { at: 6, text: 'now every ~4 months', below: true },
      ],
    },
    takeaway: {
      icon: '⏱️',
      text: 'From seconds to a working day in seven years — and the doubling is speeding up, not settling down.',
    },
    footnote:
      'METR, “Measuring AI Ability to Complete Long Tasks”, with 2025–26 updates. Task length at roughly 50% success; points are approximate readings of the published trend.',
  },

  {
    id: 12,
    part: 1,
    kicker: 'The proof is public and dated',
    title: 'The early signs are already measurable',
    body: {
      kind: 'stats',
      items: [
        { value: '180M', label: 'developers on GitHub', sub: '36M added in one year — the fastest cohort ever' },
        { value: '~1B', label: 'commits pushed in 2025', sub: 'up 25% in a year — a record 100M in August alone' },
        { value: '51%', label: 'of committed code is AI-written', sub: 'GitHub, early 2026' },
        { value: '~75%', label: 'of Google’s new code is AI-generated', sub: 'engineer-approved' },
        { value: '25%', label: 'of a Y Combinator batch shipped ~95% AI-written code', sub: 'Winter 2025' },
        { value: '8M', label: 'users on Lovable', sub: 'building apps from plain English' },
        { value: '−75%', label: 'Stack Overflow questions since the 2022 peak', sub: 'the stuck developer now asks the model' },
        { value: '630M', label: 'repositories on GitHub', sub: '230 new projects a minute' },
      ],
    },
    footnote:
      'GitHub Octoverse and platform disclosures, 2025–26; Google, 2025; Y Combinator, Winter 2025 batch; Stack Overflow public data through 2025; Lovable company disclosures.',
  },

  {
    // Site-original exhibit: the seven variables on one page.
    id: 107,
    part: 1,
    kicker: 'The whole thesis on one page',
    title: 'Seven variables above everything else',
    body: {
      kind: 'table',
      head: ['Variable', 'Definition', 'Why it matters'],
      rows: [
        ['P · Agent penetration', 'share of addressable workflows performed by agents', 'how broadly the technology spreads — important, and the most obvious'],
        ['X · Work expansion', 'work performed with agents ÷ work performed without them', 'entirely new activity — possibly the most underappreciated'],
        ['F · Agent fan-out', 'backend actions ÷ agent task', 'the backend’s leverage — the most important technical variable'],
        ['D · Duty cycle', 'active agent time ÷ available time', 'occasional tools, or continuously running workers'],
        ['S · State intensity', 'persistent state ÷ unit of agent work', 'decides whether databases become agent memory'],
        ['E · Efficiency', 'infrastructure per action, future ÷ today', 'the biggest counterargument — today’s waste will improve'],
        ['M · Monetization', 'incremental vendor revenue ÷ incremental consumption', 'converts a technology thesis into an equity thesis'],
      ],
    },
    takeaway: {
      icon: '🔑',
      text: 'The gate is reliable autonomy. The cleanest top-down metric is machine-hours per human. The bridge to the backend is backend actions per machine-hour.',
    },
  },
  {
    // Site-original exhibit: the master equation.
    id: 108,
    part: 1,
    kicker: 'The era, reduced to one equation',
    title: 'Machine demand, factored',
    body: {
      kind: 'eqn',
      terms: [
        { sym: 'P', name: 'agent penetration', now: '2–5%', later: '40–70%', dir: 'up' },
        { sym: 'X', name: 'work expansion', now: '~1.05x', later: '1.8–3x', dir: 'up' },
        { sym: 'F', name: 'fan-out per task', now: '3–8x', later: '10–30x', dir: 'up' },
        { sym: 'D', name: 'duty cycle', now: '<5%', later: '30%+', dir: 'up' },
        { sym: 'E', name: 'efficiency offset', now: '1x', later: '0.2–0.4x', dir: 'down' },
      ],
      result: { value: 'Machine demand', label: 'the machine-generated share of all software activity' },
      second: 'equivalently: machine demand = humans × machine-hours per human × backend actions per machine-hour — then vendor value = machine demand × category exposure × vendor share × monetization',
    },
    footnote: 'Ranges are Skycatcher scenario priors for 2026 → 2035 — assumptions published to be graded, not observed facts. Part 02 builds the model.',
  },
  {
    // Site-original exhibit: the four phases.
    id: 109,
    part: 1,
    kicker: 'Four phases, 2026 → 2035',
    title: 'Where we are in the era',
    body: {
      kind: 'steps',
      items: [
        {
          n: '2026–27',
          head: 'Agent experimentation',
          desc: 'The loop works — goal, reason, tool, observe, act — but agents are expensive, supervised, and operationally messy. Roughly 5% of AI requests still fail. This phase is for learning the coefficients.',
          meta: 'we are here',
        },
        {
          n: '2028–29',
          head: 'Workflow delegation',
          desc: '“Own this workflow and escalate exceptions.” One human commands a portfolio of agents, and adoption × fan-out becomes visible in backend consumption.',
          meta: '2029 — the infrastructure inflection',
        },
        {
          n: '2030–32',
          head: 'The persistent agent workforce',
          desc: 'Agents stop being executions and become entities: memory, standing permissions, event-driven work. Duty cycle rivals adoption in importance.',
          meta: '2032 — the architectural inflection',
        },
        {
          n: '2033–35+',
          head: 'The machine economy',
          desc: 'Chains run agent → agent → API → database with no human at the start. In software-intensive domains, machine-generated backend actions pass human-generated ones.',
          meta: 'the bold call',
        },
      ],
    },
    takeaway: {
      icon: '🗺️',
      text: 'You do not need agents doing half the work: mid-teens penetration is enough to move the meters.',
    },
  },
  {
    id: 110,
    part: 1,
    title: 'The thesis, in one paragraph',
    // Prose-only closer.
    body: { kind: 'prose', paras: [] },
  },

  // ── Part 02 ───────────────────────────────────────────────────────────────
  {
    id: 18,
    part: 2,
    body: { kind: 'section', num: '02', label: 'Measuring Machine Demand', sub: 'the model — from work to workflows to billable units' },
  },
  {
    // Site-original exhibit: the model chain.
    id: 120,
    part: 2,
    kicker: 'A top-down work model feeding a bottom-up infrastructure model',
    title: 'Start with the work, not the number of agents',
    body: {
      kind: 'flow',
      items: [
        { head: 'Work', desc: 'addressable digital workflows in the economy — expanded by cheap intelligence (X)' },
        { head: 'Agent penetration', desc: 'the share of workflows assigned to agents (P)' },
        { head: 'Machine actions', desc: 'each workflow fans out — tool calls, retries, subagents (F)' },
        { head: 'Backend units', desc: 'database operations, queries, telemetry, state — net of efficiency (E)' },
        { head: 'Billable units', desc: 'what survives sampling, caching, and pricing (M)' },
      ],
      out: [{ value: 'Vendor revenue', label: 'the only number the market grades' }],
    },
    takeaway: {
      icon: '🧮',
      text: 'The mistake to avoid is starting with “there will be X billion agents.” Work is measurable; agents are a means.',
    },
    footnote: 'We model three checkpoints: 2026, 2029, and 2031.',
  },
  {
    // Site-original exhibit: four-phase scenario priors.
    id: 121,
    part: 2,
    kicker: 'Scenario priors across four phases — shares are of addressable digital workflows',
    title: 'Our base case: 2026 → 2035, in four phases',
    body: {
      kind: 'table',
      head: ['', '2026–27 · experimentation', '2028–29 · delegation', '2030–32 · persistent agents', '2033–35 · machine economy'],
      rows: [
        ['Main interface', 'human → agent', 'human → many agents', 'events → agents', 'agents → agents'],
        ['Agent penetration (P)', '2–5%', '10–20%', '25–45%', '40–70%'],
        ['Work expansion (X)', '~1.05x', '1.15–1.4x', '1.4–2.0x', '1.8–3x+'],
        ['Duty cycle (D)', '<5%', '5–15%', '15–35%', '30%+'],
        ['Stateful workflows (S)', '10–25%', '25–50%', '50–75%', '70%+'],
        ['Agent fan-out (F)', '3–8x', '5–12x', '7–20x', '10–30x'],
        ['Efficiency vs 2026 (E)', '1x', '0.6–0.8x', '0.35–0.6x', '0.2–0.4x'],
        ['Human approval', 'nearly every action', 'exceptions only', 'mostly supervisory', 'policy & governance'],
        ['Backend consequence', 'detectable', 'growth inflection', 'material demand driver', 'architecture shift'],
      ],
    },
    footnote:
      'Skycatcher scenario priors, August 2026 — assumptions published to be graded, not measured forecasts. Penetration is of addressable digital workflows, not all economic tasks.',
  },
  {
    // Site-original exhibit: the net backend multiplier.
    id: 122,
    part: 2,
    kicker: 'The critical tension, at the 2029 base case: more activity against more efficient infrastructure',
    title: 'The net backend multiplier',
    body: {
      kind: 'decompose',
      factors: [
        { value: '8x', label: 'gross machine actions per workflow', from: 'a person’s workflow', to: '2029 mid-case' },
        { value: '0.65x', label: 'infrastructure per action', from: 'today’s waste', to: 'caching, batching, reuse' },
      ],
      result: {
        value: '5.2x',
        label: 'net backend workload per agent workflow',
        note: 'versus the same workflow done by a person',
      },
    },
    takeaway: {
      icon: '⚖️',
      text: 'Agents may generate 10x the actions while efficiency cuts resource use per action by half or more. Model both, or the thesis is naive.',
    },
  },
  {
    // Site-original exhibit: the 2029 worked example.
    id: 123,
    part: 2,
    kicker: 'The 2029 base case, worked',
    title: 'You do not need agents to take over the work',
    body: {
      kind: 'bars',
      axis: 'Backend workload — indexed to the all-human world',
      items: [
        { label: 'All-human world', sub: 'the same economy, no agents', value: 1, display: '1.0x', tone: 'muted' },
        {
          label: 'With agents — 2029 base case',
          sub: '15% penetration · 1.3x work expansion · 5.2x net multiplier',
          value: 2.12,
          display: '≈2.1x',
          tone: 'accent',
        },
      ],
    },
    takeaway: {
      icon: '🎯',
      text: 'Backend demand = X × [(1−P) + P×M] = 1.3 × (0.85 + 0.78) ≈ 2.1x. Fifteen percent penetration ≈ twice the backend activity — that is why 2029 matters.',
    },
    footnote: '2029 penetration scenarios: bear 7%, base 15%, bull 30%. 2032 base case: 35% penetration, 1.7x expansion, 12x fan-out at 0.45 efficiency — net 5.4x.',
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

  // ── Part 03 ───────────────────────────────────────────────────────────────
  {
    // Site-original exhibit: the observable signals.
    id: 126,
    part: 2,
    kicker: 'In 2026, the job is measuring behavior — not forecasting agent counts',
    title: 'The variables are becoming observable',
    body: {
      kind: 'table',
      head: ['Signal', 'Informs', 'Source'],
      rows: [
        ['Active agents in Microsoft 365: 15x year over year through March 2026', 'penetration (P)', 'Microsoft Work Trend Index, 2026'],
        ['Agent-framework adoption: 9% → 18% of observed organizations in one year', 'penetration (P)', 'Datadog, State of AI Engineering, 2026'],
        ['99th-percentile Codex users: 60+ hours of agent turns a day via parallel agents; >70% of sampled users assigned hour-plus tasks', 'duty cycle (D) · machine-hours per human', 'OpenAI, June 2026'],
        ['~5% of AI model requests fail; capacity limits a major cause', 'the reliability gate (A)', 'Datadog, 2026'],
        ['Agent job starts and sessions, now in the usage-metrics API', 'activity & duty cycle (D)', 'GitHub, August 2026'],
        ['Tool calls, subagents, and database operations per trace', 'fan-out (F)', 'Cloudflare agent tracing; Sky1 traces'],
        ['Cached reads in only ~28% of observed model-call spans', 'efficiency headroom (E)', 'Datadog, 2026'],
        ['Authenticated machine identities on tool access; signed agent traffic', 'the machine share of requests', 'MCP authorization spec; Cloudflare, 2026'],
      ],
    },
    takeaway: {
      icon: '🔬',
      text: 'The 2026 question — how infrastructure-intensive are real production agents? — is measurable today. We measure it.',
    },
  },
  {
    // Site-original exhibit: the questions by phase.
    id: 127,
    part: 2,
    kicker: 'What each phase asks',
    title: 'The questions, by phase',
    body: {
      kind: 'steps',
      items: [
        {
          n: '2026–27',
          head: 'Learn the coefficients',
          desc: 'Fan-out, duty cycle, state, and success rates from production traces. Exit signal: agents complete multi-hour workflows at 80–90%+ success, and human intervention moves from inside the workflow to after it.',
          meta: 'we are here',
        },
        {
          n: '2028–29',
          head: 'Delegation shows up in consumption',
          desc: 'Penetration reaches the mid-teens; one human runs a portfolio of agents. Backend consumption inflects before the labor market notices.',
          meta: 'infrastructure inflection',
        },
        {
          n: '2030–32',
          head: 'Persistence changes the architecture',
          desc: 'Agents become entities with memory and standing permissions. Watch for machine-generated backend actions passing human-generated ones — first in software-intensive domains.',
          meta: 'architectural inflection',
        },
      ],
    },
    takeaway: {
      icon: '📐',
      text: 'Get the coefficients right in 2026–27, and the two inflections become arithmetic instead of narrative.',
    },
  },
  {
    // Site-original exhibit: judgmental probabilities.
    id: 128,
    part: 2,
    kicker: 'Judgmental probabilities, re-marked quarterly — not externally sourced',
    title: 'When does the infrastructure inflection arrive?',
    body: {
      kind: 'bars',
      axis: 'Probability that agent-driven activity materially lifts backend vendor growth',
      items: [
        { label: 'By end-2028', value: 30, display: '~30%', tone: 'muted' },
        { label: 'By end-2029', value: 55, display: '~55%', tone: 'accent' },
        { label: 'By end-2030', value: 70, display: '~70%', tone: 'muted' },
        { label: 'By end-2032', value: 85, display: '~85%', tone: 'muted' },
      ],
    },
    takeaway: {
      icon: '🎲',
      text: 'The deeper, architectural shift — persistent agents, machine-originated actions exceeding human ones across software-intensive businesses — centers on 2031–33, with wider uncertainty.',
    },
    footnote: 'Skycatcher judgmental probabilities, August 2026 — re-marked quarterly against the thresholds in Part 04.',
  },
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
    title: 'Machine work now has a price sheet',
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
    title: 'How usage becomes revenue',
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
    footnote: 'Attach today reflects committed contracts burning first — the surge reaches commitment one to three quarters before revenue.',
  },
  {
    // Site-original exhibit (no deck slide): the royalty from the agent's side.
    id: 16,
    part: 3,
    kicker: 'Illustrative — one delegated task, and every meter it touches',
    title: 'Follow one agent through its work',
    body: {
      kind: 'steps',
      items: [
        {
          n: '1',
          head: 'It plans',
          desc: 'Reads the goal, breaks it into steps — tokens, priced by the labs.',
          meta: 'L1',
        },
        {
          n: '2',
          head: 'It acts',
          desc: 'Runs code, calls tools, executes step after step — every run and compute-second metered.',
          meta: 'L3 · work',
        },
        {
          n: '3',
          head: 'It touches state',
          desc: 'Reads and writes the operational database — every query and byte of storage billed.',
          meta: 'L2 · state',
        },
        {
          n: '4',
          head: 'It is watched',
          desc: 'Logs, traces, identity checks, the audit trail — the answering-for-itself, metered again.',
          meta: 'L3 · work',
        },
        {
          n: '5',
          head: 'It delivers',
          desc: 'The outcome lands in the systems of record, out on the worksite.',
          meta: 'L4',
        },
      ],
    },
    takeaway: { icon: '🤖', text: 'One task, five layers touched — and the royalty collects in the middle two.' },
    footnote: 'Skycatcher illustrative framework.',
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
    title: 'All 67 names, on the record',
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
    // Site-original exhibit: the categories forming around agents.
    id: 95,
    part: 3,
    kicker: 'New meters are forming around agents',
    title: 'Where the backend grows next',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Agent memory',
          sub: 'State that outlives the session',
          items: [
            'Agents need recall: what they did, what they learned, what the user prefers',
            'Vector and embedding stores move from add-on to core infrastructure',
            'Every long-running agent is a standing database customer',
          ],
          tone: 'cold',
        },
        {
          head: 'Machine identity & audit',
          sub: 'Who did what, at machine speed',
          items: [
            'A billion agents need credentials, permissions, and spending limits',
            'Every action must be attributable to an owner',
            'Volume scales with actions, not headcount',
          ],
          tone: 'cold',
        },
        {
          head: 'Realtime backends',
          sub: 'Humans and agents share live state',
          items: [
            'The database pushes every change to every connected client as it commits',
            'Logic runs inside the database — the separate server layer disappears',
            'A team of agents and people can work in one live, consistent world',
          ],
          foot: 'The most exciting of the three — case study next',
          tone: 'warm',
        },
      ],
    },
    takeaway: {
      icon: '🌱',
      text: 'Each category bills by the unit and grows with the agent population — three future entrants to the universe.',
    },
    footnote: 'Category framing: Skycatcher, August 2026. Company examples on the previous exhibit.',
  },
  {
    // Site-original exhibit: SpacetimeDB performance case study.
    id: 96,
    part: 3,
    kicker: 'SpacetimeDB, from our own stack',
    title: 'Case study: the realtime backend we run on',
    body: {
      kind: 'panels',
      panels: [
        {
          head: 'The traditional pipeline',
          sub: 'five systems, kept in sync by hand',
          verbs: [
            { verb: 'App server', desc: 'holds the logic' },
            { verb: 'Database', desc: 'holds the state' },
            { verb: 'Cache', desc: 'hides the latency' },
            { verb: 'Message broker', desc: 'moves the updates' },
            { verb: 'Sync code', desc: 'keeps every client consistent — by hand' },
          ],
          foot: 'Each action crosses three to four network hops; correctness depends on the glue holding.',
          tone: 'cold',
        },
        {
          head: 'The realtime backend',
          sub: 'one system — the database is the server',
          verbs: [
            { verb: 'Logic', desc: 'runs inside the database as modules' },
            { verb: 'State', desc: 'lives in memory, where the logic runs' },
            { verb: 'Updates', desc: 'stream to every subscribed client as they commit' },
            { verb: 'Audit', desc: 'every action is a transaction, logged by default' },
          ],
          foot: 'One hop. Transactions commit in memory, in well under a millisecond.',
          tone: 'warm',
        },
      ],
    },
    takeaway: {
      icon: '⚡',
      text: 'Sky1, our research stack, runs on SpacetimeDB: five systems became one, hops per action fell to one, and every agent action lands as an audited transaction.',
    },
    footnote:
      'Public stress test: BitCraft Online, an MMO whose players share one persistent world, runs its entire backend as a single SpacetimeDB module.',
  },
  {
    id: 47,
    part: 3,
    kicker: 'The backend’s markets today',
    title: 'Two markets today — and a third forming inside one',
    body: {
      kind: 'ponds',
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
    title: 'How big the new market can get',
    body: {
      kind: 'tam',
      old: {
        title: 'The old market · ~$190B',
        rows: [
          { label: 'State — databases and analytics', value: '$161B' },
          { label: 'Work — metered observability & SIEM', value: '$25–30B' },
          { label: 'Agent runtime', value: '$1–2B' },
        ],
        total: { label: 'Software budgets, measured', value: '~$190B' },
      },
      next: {
        title: 'The new market',
        sub: 'share of the ~$35T knowledge-work wage pool delegated, at a 10–20¢ take rate',
        tiers: [
          { share: '5% delegated', value: '$175–350B/yr', note: '≈ 1–2x the entire old market, every year', size: 5 },
          { share: '15% delegated', value: '$525B–1.05T/yr', note: '≈ 3–5x the old market, every year', size: 15 },
          { share: '25% delegated', value: '$875B–1.75T/yr', note: '≈ 5–9x the old market — software re-denominated as labor', size: 25 },
        ],
      },
    },
    takeaway: {
      icon: '🌊',
      text:
        'At 5% delegation the new market is one to two times the entire old one, every year. The wage-pool frame is the ceiling, not the case — our 2029 wave case (~$42B) is consistent with agents absorbing roughly 1% of knowledge work.',
    },
  },
  {
    id: 51,
    part: 3,
    kicker: 'All 67 names, NTM growth against EV / NTM revenue, August 11, 2026 marks',
    title: 'What investors pay today, company by company',
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
      notes: [{ x: 3, y: 11.5, text: 'most of the universe: <25% growth, <8x', anchor: 'start' }],
    },
    footnote:
      'Names withheld by design; positions approximate from August 11, 2026 marks. Axes clipped at 62% growth and 34x.',
  },
  {
    id: 53,
    part: 3,
    kicker: 'Two backend layers, two business models',
    title: 'State compounds. Work gets paid first.',
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
    kicker: 'Median net dollar retention by layer, quarterly since 2022',
    title: 'A seat is bought once. A meter is billed every time an agent acts.',
    body: {
      kind: 'line',
      zoom: true,
      axis: 'Median net dollar retention, %',
      x: ["Q1'22", '', '', '', "Q1'23", '', '', '', "Q1'24", '', '', '', "Q1'25", '', '', '', '', "Q2'26"],
      series: [
        {
          name: 'L2 · State',
          values: [132, 130, 127, 124, 120, 117, 114, 112, 110, 109, 109, 110, 112, 113, 114, 115, 116, 117],
          display: ['132', null, null, null, '120', null, null, null, null, '109', null, null, '112', null, '114', null, null, '117'],
        },
        {
          name: 'L3 · Work',
          values: [122, 121, 119, 117, 115, 113, 112, 111, 110, 110, 110, 111, 111, 112, 113, 114, 115, 115],
          display: ['122', null, '119', null, null, null, '112', null, null, null, '110', null, null, '112', null, null, null, null],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [112, 110, 108, 106, 105, 104, 103, 102, 102, 101, 101, 101, 101, 101, 101, 101, 101, 101],
          display: ['112', null, null, '106', null, null, null, '102', null, null, null, '101', null, null, null, null, null, '101'],
          tone: 'muted',
        },
      ],
    },
    footnote:
      'Layer medians from company disclosures; quarterly, approximate. Retention above 100 means the installed base grows without new customers. The state and work troughs bottom in early 2024 and have climbed every quarter since.',
  },
  {
    id: 56,
    part: 3,
    kicker: 'Deferred revenue, median y/y by layer, quarterly since 2022 — measured from filings',
    title: 'Commitments: demand shows up here first',
    body: {
      kind: 'line',
      axis: 'Deferred revenue, median y/y, %',
      x: ["Q1'22", '', '', '', "Q1'23", '', '', '', "Q1'24", '', '', '', "Q1'25", '', '', '', '', "Q2'26"],
      series: [
        {
          name: 'L2 · State',
          values: [35, 32, 28, 25, 22, 19, 17, 15, 14, 13, 12, 13, 14, 15, 11, 16, 22, 22],
          display: ['35%', null, null, null, '22%', null, null, null, '14%', null, null, null, '14%', null, '11%', null, null, '22%'],
        },
        {
          name: 'L3 · Work',
          values: [30, 28, 26, 24, 22, 20, 19, 18, 17, 16, 15, 16, 17, 18, 20, 14, 12, 16],
          display: ['30%', null, '26%', null, null, null, '19%', null, null, null, '15%', null, null, '18%', null, null, null, '16%'],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [24, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 13, 13, 13, 13, 12, 15, 14],
          display: ['24%', null, null, '20%', null, null, null, null, null, '14%', null, null, null, null, null, null, null, '14%'],
          tone: 'muted',
        },
      ],
    },
    takeaway: { icon: '✍️', text: 'State commitments re-accelerated to +22% and are still climbing — the pre-buying shows up here first.' },
    footnote: 'Layer medians computed from filings; quarterly, approximate before 2025.',
  },
  {
    id: 57,
    part: 3,
    kicker: 'Usage billed above committed floors, as a share of revenue, quarterly since 2022',
    title: 'Overage: spending beyond the contract',
    body: {
      kind: 'line',
      axis: 'Overage share of revenue, %',
      x: ["Q1'22", '', '', '', "Q1'23", '', '', '', "Q1'24", '', '', '', "Q1'25", '', '', '', '', "Q2'26"],
      series: [
        {
          name: 'L2 · State',
          values: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 16, 18, 20, 22, 24],
          display: ['8%', null, null, null, '10%', null, null, null, '12%', null, null, null, '14%', null, '18%', null, null, '24%'],
        },
        {
          name: 'L3 · Work',
          values: [5, 5.3, 5.6, 6, 6.3, 6.6, 7, 7.4, 7.8, 8.2, 8.6, 8.8, 9, 10, 11.5, 13, 14.5, 16],
          display: ['5%', null, null, '6%', null, null, '7%', null, null, null, null, null, '9%', null, null, '13%', null, '16%'],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          display: ['0%', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '0%'],
          tone: 'muted',
        },
      ],
    },
    footnote: 'Skycatcher estimates from pricing structures and disclosures; quarterly, approximate before 2025.',
  },
  {
    id: 58,
    part: 3,
    kicker: 'Recognized revenue, median y/y by layer, quarterly since 2022 — measured from filings',
    title: 'Revenue: the meters pull away from the seats',
    body: {
      kind: 'line',
      axis: 'Revenue growth, median y/y, %',
      x: ["Q1'22", '', '', '', "Q1'23", '', '', '', "Q1'24", '', '', '', "Q1'25", '', '', '', '', "Q2'26"],
      series: [
        {
          name: 'L3 · Work',
          values: [34, 32, 30, 28, 26, 25, 24, 23, 22, 21, 20, 20, 20, 20, 21, 21, 23, 23],
          display: ['34%', null, null, null, '26%', null, null, null, '22%', null, null, null, '20%', null, null, null, null, '23%'],
        },
        {
          name: 'L2 · State',
          values: [38, 35, 32, 29, 26, 23, 21, 19, 18, 17, 16, 16, 16, 19, 19, 17, 20, 18],
          display: ['38%', null, '32%', null, null, null, '21%', null, null, null, '16%', null, null, null, '19%', null, null, '18%'],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [30, 29, 28, 26, 25, 23, 22, 21, 20, 19, 19, 18, 18, 17, 16, 16, 15, 16],
          display: ['30%', null, null, '26%', null, null, null, null, null, '19%', null, null, null, null, null, null, null, '16%'],
          tone: 'muted',
        },
      ],
    },
    takeaway: {
      icon: '📈',
      text: 'Both meter layers are accelerating while apps fade — the same split, now on the income statement.',
    },
    footnote: 'Layer medians computed from filings; quarterly, approximate before 2025.',
  },
  {
    id: 64,
    part: 3,
    kicker: 'Median trailing free-cash-flow margins by layer, quarterly since 2022',
    title: 'Free cash flow arrived',
    body: {
      kind: 'line',
      axis: 'Free-cash-flow margin, median, %',
      x: ["Q1'22", '', '', '', "Q1'23", '', '', '', "Q1'24", '', '', '', "Q1'25", '', '', '', '', "Q2'26"],
      series: [
        {
          name: 'L3 · Work',
          values: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 24, 25, 25, 26, 26],
          display: ['12%', null, null, null, '16%', null, null, null, '20%', null, null, null, '24%', null, null, null, null, '26%'],
        },
        {
          name: 'L2 · State',
          values: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21],
          display: ['0%', null, '2%', null, null, null, '7%', null, null, null, '11%', null, null, '14%', null, null, null, '21%'],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 21, 22, 22],
          display: ['14%', null, null, '16%', null, null, null, null, null, '19%', null, null, null, null, null, null, null, null],
          tone: 'muted',
        },
      ],
    },
    footnote: 'Layer medians from filings; trailing-twelve-month basis, approximate before 2025.',
  },
  {
    // Site-original exhibit: the vendor equation.
    id: 130,
    part: 3,
    kicker: 'From backend units to reported revenue — five questions per name',
    title: 'The vendor equation',
    body: {
      kind: 'decompose',
      factors: [
        { value: 'Δ units', label: 'incremental backend units', from: 'the Part 02 model', to: 'per category' },
        { value: 'attach', label: 'does the workload touch this category?', from: 'not all does', to: 'e.g. ~70% instrumented' },
        { value: 'share', label: 'does this vendor capture it?', from: 'market share', to: 'e.g. ~25%' },
        { value: 'pass-through', label: 'is it billable?', from: 'sampling, caching', to: 'e.g. ~30%' },
        { value: 'price', label: 'realized price per unit', from: 'volume discounts', to: 'erosion over 5 years' },
      ],
      result: {
        value: 'Δ revenue',
        label: 'what the vendor actually reports',
        note: 'the last two terms keep the model from becoming absurd',
      },
    },
  },
  {
    // Site-original exhibit: MongoDB model.
    id: 131,
    part: 3,
    kicker: 'MongoDB — the state meter',
    title: 'MongoDB: does agent state become operational data?',
    body: {
      kind: 'decompose',
      factors: [
        { value: 'workflows', label: 'agent workflows', from: 'the Part 02 model', to: 'per customer' },
        { value: '× stateful', label: 'share keeping durable state (S)', from: '10–30% today', to: '60–90% by 2031' },
        { value: '× DB ops', label: 'reads, writes, checkpoints per workflow', from: 'per trace', to: 'measured' },
        { value: '× efficiency', label: 'net of batching and reuse', from: '1.0x', to: '0.3–0.6x' },
      ],
      result: {
        value: 'MongoDB units',
        label: 'plus storage: persistent bytes × retention',
        note: 'concurrency forces cluster-tier upgrades on top',
      },
    },
    takeaway: {
      icon: '🗄️',
      text: 'Killer ratios: database operations per agent-hour, persistent gigabytes per agent, stateful share of workflows.',
    },
    footnote: 'Billing mechanics per MongoDB Atlas invoice documentation; some AI-related APIs are separately usage-based.',
  },
  {
    // Site-original exhibit: Snowflake model.
    id: 132,
    part: 3,
    kicker: 'Snowflake — the analysis meter',
    title: 'Snowflake: queries per agent-hour',
    body: {
      kind: 'stats',
      items: [
        { value: '3', label: 'queries — a human analyst, one question', sub: 'ask, check, answer' },
        { value: '25', label: 'queries — an agent, the same question', sub: 'query, inspect, reformulate, validate, cross-check, retry' },
        { value: '~8x', label: 'gross multiplier per workflow', sub: 'before efficiency' },
        { value: 'net', label: '= gross × (1 − cache rate)', sub: 'semantic caching is the offset to watch' },
      ],
    },
    takeaway: {
      icon: '❄️',
      text: 'Snowflake exposes both sides of the ledger: platform credits for warehouses, AI credits for agent features — and agent workflows bill additively across the services they invoke.',
    },
    footnote: 'Billing mechanics per Snowflake Cortex pricing documentation, 2026.',
  },
  {
    // Site-original exhibit: Datadog model.
    id: 133,
    part: 3,
    kicker: 'Datadog — the telemetry meter',
    title: 'Datadog: fan-out in, sampling out',
    body: {
      kind: 'decompose',
      factors: [
        { value: '~10x', label: 'raw telemetry per agent workflow', from: 'spans + log bytes', to: 'the agent waterfall' },
        { value: '× ~0.3x', label: 'sampling and billable retention', from: 'ingest ≠ invoice', to: 'the pass-through question' },
      ],
      result: {
        value: '~3x',
        label: 'billable Datadog consumption',
        note: 'more observability and harder sampling — both true at once',
      },
    },
    takeaway: {
      icon: '📡',
      text: 'Killer ratio: spans and log gigabytes per agent-hour × sampling rate × billable retention. Pass-through is the Datadog question.',
    },
    footnote: 'Datadog billing mixes volume-based log ingestion with host, function, and APM units — pass-through differs by product. Datadog billing documentation.',
  },
  {
    // Site-original exhibit: the five sensitivities.
    id: 134,
    part: 3,
    kicker: 'Five assumptions carry the bull, base, and bear',
    title: 'The five highest-sensitivity assumptions',
    body: {
      kind: 'steps',
      items: [
        { n: 'P', head: 'Agent penetration', desc: 'How much work moves to agents. Obvious — and the least interesting.', meta: 'watch' },
        { n: 'X', head: 'Work expansion', desc: 'Does cheap intelligence cause 2x or 20x more work?', meta: 'underappreciated' },
        { n: 'F', head: 'Fan-out per workflow', desc: 'Where backend infrastructure gets its leverage.', meta: 'the leverage' },
        { n: 'I', head: 'Efficiency offset', desc: '20x more actions at 90% less resource per action is only 2x real workload.', meta: 'the offset' },
        { n: 'B', head: 'Billing pass-through', desc: 'Huge workload growth can coexist with weak revenue growth — decisive for Datadog.', meta: 'the equity test' },
      ],
    },
    takeaway: {
      icon: '🎛️',
      text: 'Backend revenue impact ≈ P × X × F × I × B × V — with different fan-out, efficiency, pass-through, and capture for every name.',
    },
  },
  {
    id: 59,
    extras: [60],
    part: 3,
    kicker: 'Equal-weighted total return by layer since January 2022',
    title: 'The stock market has already voted',
    body: {
      kind: 'line',
      axis: 'Total return since January 2022, %',
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
          values: [0, -15, -32, -40, -45, -50, -42, -30, -18, -5, 5, 12, 20, 18, 25, 32, 38, 42, 46],
          display: [null, null, null, null, null, null, null, null, null, null, '+5%', null, null, null, '+25%', null, null, null, '+46%'],
        },
        {
          name: 'L2 · State',
          values: [0, -18, -36, -45, -52, -55, -48, -38, -28, -18, -10, -4, 4, 0, 8, 16, 22, 25, 28],
          display: [null, null, null, null, null, '−55%', null, null, null, null, null, null, '+4%', null, null, null, null, null, '+28%'],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [0, -20, -38, -48, -53, -57, -52, -45, -38, -32, -28, -25, -20, -24, -20, -16, -12, -10, -9],
          display: [null, null, null, null, null, null, null, null, '−38%', null, null, null, null, null, null, null, null, null, '−9%'],
          tone: 'muted',
        },
      ],
      vline: { at: 3, label: 'ChatGPT — Nov ’22' },
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
    kicker: 'EV / forward revenue by layer, quarterly since 2022 — last point is consensus NTM',
    title: 'No price yet reflects agents — at any layer',
    body: {
      kind: 'line',
      axis: 'EV / forward revenue, Jan 2022 → Jul 2026',
      x: ['Jan ’22', '', 'Jul ’22', '', 'Jan ’23', '', 'Jul ’23', '', 'Jan ’24', '', 'Jul ’24', '', 'Jan ’25', '', 'Jul ’25', '', 'Jan ’26', '', 'Jul ’26'],
      series: [
        {
          name: 'L3 · Work',
          values: [17, 13.5, 11, 10, 9.5, 9.8, 10.0, 10.4, 10.8, 10.2, 10.6, 11.2, 11.8, 10.8, 9.6, 8.8, 8.2, 7.6, 6.7],
          display: ['17x', null, null, null, null, null, '10x', null, null, null, null, null, '11.8x', null, null, null, '8.2x', null, '6.7x'],
        },
        {
          name: 'L2 · State',
          values: [12, 9.5, 8, 7.2, 6.8, 6.9, 7.0, 7.2, 6.8, 6.5, 6.9, 7.3, 7.5, 7.0, 6.6, 6.3, 6.8, 6.6, 6.5],
          display: ['12x', null, null, null, '6.8x', null, null, null, null, '6.5x', null, null, null, null, '6.6x', null, null, null, null],
          tone: 'ink',
        },
        {
          name: 'L4 · Apps',
          values: [14, 11, 9.5, 8.8, 8.5, 8.4, 8.2, 7.8, 7.2, 6.6, 6.0, 5.6, 5.2, 4.8, 4.4, 4.0, 3.7, 3.5, 3.3],
          display: ['14x', null, '9.5x', null, null, null, null, null, '7.2x', null, null, null, '5.2x', null, null, null, null, null, '3.3x'],
          tone: 'muted',
        },
      ],
    },
    footnote: 'Realized-forward basis; July 2026 point is consensus NTM at August 11, 2026 marks. Approximate.',
  },
  {
    id: 62,
    part: 3,
    kicker: 'State layer: multiple (line) against revenue growth (bars), quarterly since 2022',
    title: 'State: growth turned up, the valuation didn’t',
    body: {
      kind: 'dualline',
      rightBars: true,
      x: ['Jan ’22', '', 'Jul ’22', '', 'Jan ’23', '', 'Jul ’23', '', 'Jan ’24', '', 'Jul ’24', '', 'Jan ’25', '', 'Jul ’25', '', 'Jan ’26', '', 'Today'],
      left: {
        name: 'EV / forward revenue',
        values: [11, 9, 7.8, 7, 6.5, 6.3, 6.1, 6.4, 6.6, 6.3, 6.7, 7.2, 7.5, 6.9, 6.4, 6.0, 5.8, 5.5, 5.2],
        display: ['11x', null, '7.8x', null, null, null, '6.1x', null, null, '6.3x', null, null, '7.5x', null, '6.4x', null, '5.8x', null, '5.2x'],
      },
      right: {
        name: 'Revenue growth y/y (bars)',
        values: [26, 24, 22, 20, 18, 15, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18.5, 19.5, 20],
        display: ['26%', null, null, '20%', null, null, '13%', null, null, null, '15%', null, null, null, '17%', null, null, null, '20%'],
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
    kicker: 'Work layer: multiple (line) against revenue growth (bars), quarterly since 2022',
    title: 'Work: steady growth, a falling valuation',
    body: {
      kind: 'dualline',
      rightBars: true,
      x: ['Jan ’22', '', 'Jul ’22', '', 'Jan ’23', '', 'Jul ’23', '', 'Jan ’24', '', 'Jul ’24', '', 'Jan ’25', '', 'Jul ’25', '', 'Jan ’26', '', 'Today'],
      left: {
        name: 'EV / forward revenue',
        values: [19, 15, 12.5, 11.2, 10.8, 10.6, 10.5, 10.9, 11.3, 10.7, 11.1, 11.6, 12.1, 11.0, 9.8, 9.0, 8.4, 7.8, 7.2],
        display: ['19x', null, '12.5x', null, null, null, '10.5x', null, null, '10.7x', null, null, '12.1x', null, '9.8x', null, '8.4x', null, '7.2x'],
      },
      right: {
        name: 'Revenue growth y/y (bars)',
        values: [32, 30, 28, 27, 26, 25.5, 25, 24.5, 24, 23.5, 23, 23, 22.5, 22, 22, 21.5, 22, 22, 22],
        display: ['32%', null, null, '27%', null, null, '25%', null, null, null, '23%', null, null, null, '22%', null, null, null, '22%'],
      },
    },
    takeaway: {
      icon: '🧾',
      text: 'A 12.1x peak to 7.2x on steady ~22% growth — 0.31x growth-adjusted. The audit mandate is still priced as maintenance, not a meter.',
    },
  },
  {
    id: 65,
    part: 3,
    kicker: 'Meter M&A, 2018 → 2026 — layer, growth into the deal, and the price paid',
    title: 'The meters keep getting bought',
    body: {
      kind: 'table',
      head: ['Company', 'Layer', 'Growth into the deal', 'Price', 'EV / revenue'],
      rows: [
        ['GitHub (2018)', 'L3 · Work', '~40%', '$7.5B', '~28x'],
        ['HashiCorp (2024)', 'L3 · Work', '~25%', '$6.4B', '~10x'],
        ['Confluent (2026)', 'L2 · State', '~25%', '$11.3B', '~8x'],
        ['Splunk (2024)', 'L3 · Work', '~15%', '$28B', '~7x'],
        ['New Relic (2023)', 'L3 · Work', '~10%', '$6.5B', '~6.5x'],
        ['Informatica (2025)', 'L2 · State', '~5%', '$8B', '~4.8x'],
        ['CyberArk (pending)', 'L3 · Work', '~30%', '~$25B', '~22x'],
        ['Average paid', '', '', '', '~12x'],
      ],
      highlight: 7,
    },
    takeaway: {
      icon: '🤝',
      text: 'The faster the meter was growing into the deal, the more the acquirer paid.',
    },
    footnote: 'Growth is the approximate revenue growth rate in the years before each deal. Multiples approximate, on revenue at announcement.',
  },
  {
    id: 66,
    extras: [67],
    part: 3,
    kicker: 'Head-to-head on measured evidence — every row from the exhibits in this part',
    title: 'State vs. work: the scorecard',
    body: {
      kind: 'bout',
      heads: ['L2 · State', 'L3 · Work'],
      rows: [
        { round: 'Moat durability', a: 'gravity compounds with every write', b: 'mandate is strong — but runtimes can be rebuilt', winner: 'a' },
        { round: 'Wave beta', a: 'bills after state accumulates', b: 'bills the work as it happens — first paid', winner: 'b' },
        { round: 'Cash today', a: '19–21% FCF, still investing', b: '26% FCF, converting now', winner: 'b' },
        { round: 'Margin trajectory', a: '+6 pts in a year — inflecting', b: 'flat at a high plateau', winner: 'a' },
        { round: 'Commitment', a: '+22% deferred-revenue growth — fastest in the universe', b: '+16%', winner: 'a' },
        { round: 'Overage purity', a: '14→24% of revenue — purest meters', b: '9→16%, diluted by subscriptions', winner: 'a' },
        { round: 'Scarcity / M&A bid', a: 'state assets trade at 5–8x takeouts', b: 'strategics pay 7–28x for work meters', winner: 'b' },
      ],
      score:
        'Score: state 4, work 3 — but the rounds aren’t equally weighted: the ledger’s wins are structural, the toll road’s are already in the cash.',
    },
    takeaway: { icon: '🥊', text: 'State wins on moat and commitment; work wins on conversion and bid.' },
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
    kicker: 'One rule, applied to the 25-name public backend',
    title: 'Three companies',
    body: {
      kind: 'grid3',
      items: [
        {
          eyebrow: 'L2 · State',
          title: 'Snowflake',
          desc: 'The cloud data platform — the ledger where enterprise state accumulates, sold as consumption credits.',
        },
        {
          eyebrow: 'L2 · State',
          title: 'MongoDB',
          desc: 'The operational database of the application era — Atlas turned it into a metered cloud service, in public.',
        },
        {
          eyebrow: 'L3 · Work',
          title: 'Datadog',
          desc: 'The watching layer — observability and security billed by the events, hosts, and traces it ingests.',
        },
      ],
    },
    takeaway: {
      icon: '🎯',
      text: 'Together: ~$250B of enterprise value, ~$15B of forward revenue at ~33% blended growth, ~16x — and +218% since ChatGPT, no selection involved.',
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
    title: 'The cohort’s full market record',
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
    title: 'What the market pays for growth',
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
    kicker: 'The three risks we take seriously',
    title: 'What would break this thesis',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Superintelligence',
          items: [
            'The system-breaking case: value creation as we know it ends, and no public claim survives — this piece included',
            'We see no evidence we are close; capability curves are steep, not vertical',
          ],
          foot: 'Watched, not underwritten',
          tone: 'cold',
        },
        {
          head: 'Tokens never commoditize',
          items: [
            'The best tokens keep premium pricing, costs stop falling, and adoption throttles — the agent population stalls',
            'Against it: a 50x price collapse in three years, and every prior compute input',
          ],
          foot: 'The inverse of our measured elasticity — graded in the token prints',
          tone: 'cold',
        },
        {
          head: 'Backend-grade correctness',
          items: [
            'Today AI is approximately correct; the backend must be exactly correct — 99% looks done and is not',
            'That gap is the backend’s moat. The risk is the inverse: agents reaching 100% would make the incumbents buildable',
          ],
          foot: 'The moat and its breaking point — on the tripwire list',
          tone: 'warm',
        },
      ],
    },
    takeaway: { icon: '⚠️', text: 'Each risk has a public signal; none requires trusting us.' },
  },
  {
    id: 82,
    part: 4,
    kicker: 'The Oracle ledger — dated, falsifiable, graded in public',
    title: 'Eight predictions',
    body: {
      kind: 'table',
      head: ['By when', 'The call', 'From today'],
      rows: [
        ['Q4 2026', 'A platform prints ≥2Q tokens a month', '1.3Q, Oct 2025'],
        ['Q2 2027', 'Cohort overage reaches ≥25% of revenue', '~19%'],
        ['Mid-2027', 'Meter retention ≥120 while apps ≤103', '~117 vs ~101'],
        ['End-2027', '≥15 major vendors ship billable agent SKUs', '7'],
        ['Mid-2027', 'Consensus 2029 cohort revenue revised up ≥10%', 'carries the fade'],
        ['Early 2028', 'A meter takeout at ≥8x EV / revenue', 'average paid ~12x'],
        ['By 2028', 'Cohort free-cash-flow margin ≥28%', '~25%'],
        ['Every quarter', 'Cohort commitment growth ≥ revenue growth', 'holding'],
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
          desc: 'A major public company discloses agent-labor spend as a distinct cost line. “Agent GAAP” completes, and comparability begins. Today: zero companies report it.',
        },
        {
          n: 'By 2036',
          head: 'The first $100B-revenue meter',
          desc: 'A usage-billed infrastructure company crosses $100B a year. The largest meter today bills ~$4.5B — a ~20x that takes about nine years at wave-case growth and twelve at 30%. The date splits the difference; the destination doesn’t move.',
        },
        {
          n: 'By 2038',
          head: 'The public backend stack bills $1T a year',
          desc: 'Measured as the summed revenue of the 25 public backend names and their future entrants: ~$60B a year today. A ~17x needs 25–30% compounded for over a decade — re-summed quarterly on this site.',
        },
        {
          n: 'By 2038',
          head: 'The meters out-earn the models',
          desc: 'Cohort revenue against frontier-lab token revenue (OpenAI, Anthropic, xAI, Mistral). The meters out-earned the labs ~17:1 in 2022; the labs crossed parity in 2024 and bill ~$3 per $1 the cohort meters today. The labs cut unit prices 30–40% a year by design while the meters’ events per token rise — the call is the re-crossing, tracked quarterly.',
        },
        {
          n: 'By 2040',
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
    // Site-original exhibit: the six clocks.
    id: 142,
    part: 4,
    kicker: 'Forecast by instrument, not by calendar',
    title: 'Six clocks',
    body: {
      kind: 'table',
      head: ['Clock', 'The question', 'Milestones'],
      rows: [
        ['Capability', 'how long a task can an agent reliably own', 'hours → a day → several days → weeks, at ~80% success'],
        ['Cost', 'is it cheaper to give the work to a machine?', 'adoption accelerates below 10–20% of human cost'],
        ['Autonomy', 'share of workflows completed without intervention', '50% interesting · 80% deployable · 95%+ infrastructure'],
        ['Penetration', 'share of addressable workflows on agents', 'the backend trade starts at 10–20%, not 50%'],
        ['Duty cycle', 'active agent hours per day', 'episodic minutes → hours of parallel work → persistent → continuous'],
        ['Work elasticity', 'work done vs the counterfactual', '10 analyses a week becoming 1,000 — uneconomic work turning economic'],
      ],
    },
    takeaway: {
      icon: '🕰️',
      text: 'Six clocks beat one adoption line. Each has thresholds where the regime changes, and each is separately observable.',
    },
    footnote:
      'Capability clock per METR, which cautions that its tasks are well-specified software work and beyond-16-hour estimates are not yet reliable.',
  },
  {
    // Site-original exhibit: the 2029 thresholds.
    id: 143,
    part: 4,
    kicker: 'Do not move the calendar — move the probabilities',
    title: 'The 2029 thresholds',
    body: {
      kind: 'table',
      head: ['Signal', 'Today', '2029 threshold', 'Moves'],
      rows: [
        ['Multi-hour task success', 'emerging', '>85%', 'P ↑'],
        ['Agent cost vs human cost', 'falling', '<20%', 'P, X ↑'],
        ['Agent hours per user per day', 'low outside the frontier', '>5', 'D ↑'],
        ['Tool calls per session', 'growing', '>10', 'F ↑'],
        ['Autonomous runs', 'early', '>50% of workflows', 'P, D ↑'],
        ['Persistent-agent share', 'low', '>30%', 'S, D ↑'],
        ['Machine share of relevant API traffic', 'early', '>20%', 'the whole thesis ↑'],
      ],
    },
    takeaway: {
      icon: '🚦',
      text: 'Each quarter the question is the same: did the evidence pull the inflection forward six months, or push it back?',
    },
  },
  {
    // Site-original exhibit: the signals dashboard.
    id: 140,
    part: 4,
    kicker: 'Leading indicators predict; coincident confirm; lagging report',
    title: 'The signals dashboard',
    body: {
      kind: 'columns',
      cols: [
        {
          head: 'Leading — capability & adoption',
          sub: '6–18 months ahead',
          items: [
            'Cost per completed task; autonomous completion rate',
            'Agent sessions per user; agent jobs started',
            'Tool & MCP integrations available',
            'Enterprise rollouts; human-approval rates',
          ],
          foot: 'Predicts future agent workload',
          tone: 'cold',
        },
        {
          head: 'Coincident — infrastructure consumption',
          sub: 'the middle layer',
          items: [
            'Tool calls and subagents per session',
            'Database reads and writes per session',
            'Warehouse queries and credits per session',
            'Spans, log volume, and persistent state per agent',
          ],
          foot: 'Where the analytical advantage lives',
          tone: 'warm',
        },
        {
          head: 'Lagging — financial results',
          sub: 'what the sell side models',
          items: [
            'Consumption revenue',
            'Net dollar retention',
            'Commitments — deferred revenue, RPO',
            'Upsells and larger renewals',
          ],
          foot: 'By the time this moves, it is priced',
          tone: 'cold',
        },
      ],
    },
    takeaway: {
      icon: '📶',
      text: 'Observe the middle layer before it becomes reported revenue and you hold a 6–18 month analytical advantage. That is what this instrument is built to do.',
    },
  },
  {
    // Site-original exhibit: killer ratios per name.
    id: 141,
    part: 4,
    kicker: 'What we track per name, from real agent traces',
    title: 'The killer ratios',
    body: {
      kind: 'table',
      head: ['Name', 'Ratio', 'The question it answers'],
      rows: [
        ['MongoDB', 'database operations per agent-hour · persistent GB per agent · stateful share', 'does persistent agent state become operational data?'],
        ['Snowflake', 'credits per agent-hour · machine-generated vs human-generated queries', 'what share of analysis is machine-run?'],
        ['Datadog', 'spans + log GB per agent-hour × sampling × billable retention', 'does complexity outrun sampling — does it pass through?'],
      ],
    },
    takeaway: {
      icon: '🔍',
      text: 'The most valuable primary research of 2026: real agent execution traces, normalized to backend units per 1,000 agent workflows.',
    },
  },
  {
    id: 90,
    part: 4,
    kicker: 'What we publish, every quarter',
    title: 'The program in practice',
    body: {
      kind: 'grid3',
      items: [
        {
          eyebrow: 'The indices',
          title: 'Cohort = 100',
          desc: 'Machine labor cohort and backend layers, marked live from inception (August 11, 2026 = 100). No back-fill, no retouching.',
        },
        {
          eyebrow: 'The filings',
          title: 'Four numbers',
          desc: 'Commitment, overage, retention, and revenue growth, re-measured every filing season — the numbers that pick the growth world.',
        },
        {
          eyebrow: 'The signals',
          title: 'Lead → coincide → lag',
          desc: 'Capability and adoption ahead of consumption; consumption ahead of revenue. The middle layer is the advantage.',
        },
        {
          eyebrow: 'The ladder',
          title: '25 names, one line',
          desc: 'Every backend name re-scored against the 50% consumption line each quarter; admissions, exits, and conversions logged with reasons.',
        },
        {
          eyebrow: 'The ledger',
          title: 'Graded on schedule',
          desc: 'The eight dated predictions and the five long calls — including the meters-vs-models revenue ratio — with misses published as prominently as hits.',
        },
      ],
    },
    takeaway: {
      icon: '📡',
      text: 'Every mark, re-score, and quarterly grade publishes live in the tracker.',
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
          title: 'Machine demand',
          desc: 'The marginal consumer of software becomes software itself. Work expands, tasks fan out, duty cycles lengthen — backend activity decouples from human population.',
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
