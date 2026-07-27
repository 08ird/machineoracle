/** Part IV — A Royalty on Machine Labor. */

import type { Block } from './types';

export const part4: Record<number, Block[]> = {
  31: [
    {
      kind: 'p',
      lead: true,
      text:
        'If infinite software runs on metered rails, the only question left is which rail to own. We divide the stack into six layers and we invest in four of them.',
    },
    {
      kind: 'p',
      text:
        'We avoid layer one, agentic applications and workflows, because that is the knife fight — the place where production costs approach zero and entrants arrive without end. We avoid layer six, the cloud and compute substrate, because it is GPU-gated and its economics are set by supply we do not control.',
    },
    {
      kind: 'p',
      text:
        'Layers two through five are the investable sweet spot: the tool rails of API, MCP, identity and auth; context, data, analytics and memory; build and verify, meaning repos, CI/CD, evals and tests; and observe, govern and secure — traces, policy, cost. These are the runtime meter, the memory meter, the build meter, and the audit meter. They are the least dependent on GPU availability and the most directly tied to software volume, compliance, and enterprise trust.',
    },
  ],

  32: [
    {
      kind: 'p',
      text:
        'We wrote the admission checklist before we owned a share, which is the only time such a list is worth writing.',
    },
    {
      kind: 'p',
      text:
        'A usage-priced core, meaning revenue that meters machine actions rather than human seats. Agent cohorts disclosed in the filings, not in the deck — usage we can audit every quarter. Growing retention and accelerating backlog, so the tape confirms conversion rather than mere adoption. Fortress economics: software gross margins, net cash, Rule of 40. And every link in the chain checkable, from adoption through usage through conversion through auditability.',
    },
    {
      kind: 'p',
      text:
        'Where a link cannot be checked, the position takes starter weight and nothing more. Each grade maps to a pre-written weight action we execute inside the quarter, which removes the discretion at exactly the moment discretion becomes expensive.',
    },
  ],

  33: [
    {
      kind: 'p',
      text:
        'And now the part that makes this a trade rather than an observation. This growth is being offered at the cheapest price it has ever carried.',
    },
    {
      kind: 'p',
      text:
        'As of July 2026 the five meters trade at 7.5x EV to revenue — a quarter of their 2021 peak. About 21x forward earnings, which is simply the software tape. Roughly 0.4x growth-adjusted, the cheapest on record for this group. They hold $14 billion of combined net cash, so none of them depends on financing the buildout. And aggregate gross margin sits at 73%, held intact straight through the agent transition.',
    },
    {
      kind: 'p',
      text:
        'Re-accelerating revenue at trough-regime multiples, while backlog and overages compound underneath. We have not been offered this combination before in this group, and we do not expect to be offered it again once the disclosures land.',
    },
  ],

  34: [
    {
      kind: 'p',
      text:
        'It is worth being precise about how this de-rating happened, because it did not happen for the reason a value investor would normally hope.',
    },
    {
      kind: 'p',
      text:
        'EV to next-twelve-months revenue went 30x in FY21, then 12x, 10x, 9x, 8x, and 7.5x by July 2026. Forward earnings multiples compressed from 50x in FY24 to 30x in FY25 to 21x today. FY21 through FY23 carry no meaningful earnings multiple because the group was pre-profitability.',
    },
    {
      kind: 'p',
      text:
        'Meanwhile the businesses improved on every axis. Operating margin went from −6% to +18%. Retention returned to 120%. The multiple compressed while the fundamentals compounded, which is a description of sentiment rather than of value.',
    },
  ],

  35: [
    {
      kind: 'p',
      text:
        'We built our revenue case by taking four honest haircuts, because a number nobody can attack is a number nobody believes.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Unit prices fall 30 to 50% a year, and all of it is given back to customers.',
        'Revenue is booked on discounted multi-year commitments rather than at list price.',
        'Usage converts to revenue at the measured elasticity of 0.5 to 0.7, not at unity.',
        'Agent revenue is compute-heavier than seat revenue, and we carry that margin cost.',
      ],
    },
    {
      kind: 'p',
      text:
        'After all four, aggregate 2029 revenue for the five meters is about $44 billion against the street’s $23 billion, with a floor case of $34 billion. That is roughly a 41% compound growth rate from $15.9 billion today. The $21 billion annual wedge between the wave and the fade is the entire trade.',
    },
  ],

  36: [
    {
      kind: 'p',
      text:
        'Revenue is the easier half of the argument. The margin machine underneath it is what turns a good revenue outcome into a re-rating.',
    },
    {
      kind: 'p',
      text:
        'Indexed to FY21 revenue of 100: revenue is 260 today and about 720 in our 2029 case. Gross margin holds at 72 to 74% throughout. Operating profit goes from −6 to 47 to roughly 280, and operating margin from −6% to 18% to something like 35 to 40%. Profit grows roughly 6x from here.',
    },
    {
      kind: 'p',
      text:
        'The important word is “built.” Twenty-four points of operating leverage were assembled before the wave arrived, during the years the multiple was compressing. Incremental drop-through of about 50% is not our assumption — it is what the filings already measure, in a range of 45 to 55%.',
    },
  ],

  37: [
    {
      kind: 'p',
      text:
        'The obvious objection to all of this is that today’s measured attach rate is only 0.2 to 0.3 events per token, well below the 20 to 40 we described. We think that measurement is a lag, not a leak, and the mechanics say why.',
    },
    {
      kind: 'p',
      text:
        'Committed contracts burn first, so surge usage draws down prepaid credits and appears in backlog rather than revenue — one to two quarters. Overage only bills above the floors, and then at list — another one to two quarters. Pilots meter lightly while production meters everything, because audit, security, and observability attach only when a workload graduates — two to three quarters. And teams optimise before they let agents run, so efficiency arrives before scale — one to two quarters.',
    },
    {
      kind: 'p',
      text:
        'Each of those lags closes on a disclosure date. The attach rate we can measure today is the entry price, not the ceiling. The lag is the opportunity.',
    },
  ],
};
