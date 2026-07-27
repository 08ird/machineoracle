/** Part II — The Token Tidal Wave. */

import type { Block } from './types';

export const part2: Record<number, Block[]> = {
  13: [
    {
      kind: 'p',
      lead: true,
      text:
        'Before any forecast, the record. Global token consumption went from 0.05 quadrillion a year in 2022 to roughly 100 quadrillion in 2026. That is about 2,000x in four years, and it arrived in an orderly sequence: 10x, then 10x, then 5x, then 4x.',
    },
    {
      kind: 'p',
      text:
        'Note what that line ran through. Two market corrections and one full-scale AI panic, complete with declarations that the buildout was a bubble and the models had hit a wall. Demand never blinked. Not once did the curve bend to accommodate the narrative.',
    },
    {
      kind: 'p',
      text:
        'These are aggregated platform disclosures, not a survey and not our imagination, and they carry error bars we would not pretend away. But the shape is not in dispute, and the shape is the point.',
    },
  ],

  14: [
    {
      kind: 'p',
      text:
        'The institutional model of this market assumes that falling prices compress revenue. It is the reflex of anyone who has watched a hardware cycle. Applied here it produces the fade case that dominates every sell-side model, and it has been wrong for four consecutive years.',
    },
    {
      kind: 'p',
      text:
        'What actually happened: frontier price per million tokens fell about 50x, from roughly $20 to $0.40. Volume rose about 2,000x. Every 10x reduction in price has purchased 15 to 20x more demand — a measured elasticity of about 1.6, sustained across the entire period.',
    },
    {
      kind: 'p',
      text:
        'We checked the obvious objection, which is that buyers were purchasing capability rather than responding to price. Against constant-capability tiers the slope holds. Cheaper tokens do not shrink this market. They enlarge it, and they enlarge it faster than they cut it.',
    },
  ],

  15: [
    {
      kind: 'p',
      text:
        'The reason we think this continues is that the heaviest users of tokens barely exist yet.',
    },
    {
      kind: 'p',
      text:
        'Of roughly a billion weekly AI users, about 2.5% run agents today. That alone is 40x of headroom in penetration. But penetration is the smaller half of the arithmetic. A casual chat user consumes on the order of 10,000 tokens a day. An always-on agent consumes 5 to 25 million — a difference of 500 to 2,500x for the same human being.',
    },
    {
      kind: 'p',
      text:
        'And the clock is different. A person gives you about forty attention-hours a week. An agent runs one hundred and sixty-eight. The same customer becomes worth orders of magnitude more the day their software stops waiting to be prompted.',
    },
  ],

  16: [
    {
      kind: 'p',
      text:
        'This is the assumption that matters most in the entire piece, and we would rather name it plainly than bury it. Tokens are shifting from asking to doing.',
    },
    {
      kind: 'p',
      text:
        'Today roughly 85% of tokens are spent on chat and 15% on delegated work. Our case requires that ratio to invert to something like 25/75 by 2029. If the delegation ladder stalls, our numbers do not happen.',
    },
    {
      kind: 'p',
      text:
        'The evidence that it is not stalling is already public. About 77% of one major lab’s API traffic already classifies as automation rather than conversation. Coding’s share of routed model traffic went from 11% to over 50% in a single year. Enterprise API tokens at the leading lab rose 150% in five months. Our case needs a doing-share of 60% or better; anything above that beats consensus outright.',
    },
  ],

  17: [
    {
      kind: 'p',
      text:
        'So here is our call, stated as a number that can be graded against us: roughly 2,700 quadrillion tokens a year by 2029. From today’s 100 quadrillion, that is 27x.',
    },
    {
      kind: 'p',
      text:
        'It sounds aggressive until you look at what it assumes about growth. Our case runs at about 3x a year. The trailing four years ran at about 7x a year. We are underwriting a deceleration of more than half, and we still arrive at a number two and a half times the street’s floor of roughly 1,100 quadrillion.',
    },
    {
      kind: 'p',
      text:
        'The floor is not a bear case invented to look balanced. It is what you get by applying unit elasticity to the announced price path — the street’s own arithmetic, run honestly. The distance between the two lines is the entire opportunity.',
    },
  ],

  18: [
    {
      kind: 'p',
      text:
        'The 27x is not a curve we drew and then justified. It is three assumptions multiplied, each of which can be argued with separately.',
    },
    {
      kind: 'p',
      text:
        'Weekly AI users roughly double, from about 1 billion to about 2 billion. The share running always-on agents goes from 2.5% to about 15%, a factor of six. And each agent-day consumes somewhere in the observed band of 10 to 25 million tokens. Two billion users, times fifteen percent, times twenty-five million tokens a day, times three hundred and sixty-five days, is approximately 2,700 quadrillion.',
    },
    {
      kind: 'p',
      text:
        'Notice that the floor and the wave share the same users and the same penetration. At 10 million tokens a day you get the street’s 1,100 quadrillion. At 25 million you get our 2,700. The entire debate between us and consensus is a debate about intensity — how hard a delegated agent works — and that is a question the filings will settle within four quarters.',
    },
  ],

  19: [
    {
      kind: 'p',
      text:
        'Here is where our thesis departs from the one you have already heard. Tokens are the fuel. They are not the bill.',
    },
    {
      kind: 'p',
      text:
        'Take a single delegated task — “fix the failing build.” The agent thinks, consuming perhaps 200,000 tokens of planning, reading, and reasoning. Then the agent works, and working means API calls, database reads and writes, test runs, builds, traces, and logs. One multi-step coding task can generate more than 100,000 metered events.',
    },
    {
      kind: 'p',
      text:
        'Across our own stack and public platform documentation, we measure 20 to 40 billable infrastructure events dragged behind every thousand agentic tokens. Machine labor does not arrive as a token invoice. It arrives as an invoice on somebody else’s rails.',
    },
  ],

  20: [
    {
      kind: 'p',
      text:
        'This is the second-order effect that consensus has not modelled at all, because consensus is still reading this as a story about the labs.',
    },
    {
      kind: 'p',
      text:
        'Token demand grows about 27x, past two quintillion tokens a year by 2029. That is the labs’ story and it is the one being told. But every action an agent takes lands on rented rails — something that runs it, something that stores its state and memory, something that secures its identity and audits its supply chain, something that observes its logs and traces.',
    },
    {
      kind: 'p',
      text:
        'Run the attach rate through those four layers and billable infrastructure events grow about 130x, from roughly 0.3 quadrillion to about 39 quadrillion. The wave does not dissipate as it lands. It amplifies.',
    },
  ],

  21: [
    {
      kind: 'p',
      text:
        'The amplification is not a one-off step; it compounds annually, and it compounds faster than the thing causing it.',
    },
    {
      kind: 'p',
      text:
        'Indexed to 2026, infrastructure events run 6x by 2027, 25x by 2028, and 130x by 2029 — between four and six times a year. Tokens over the same period run 3x, 9x, and 27x. Events outgrow tokens in every single year of the forecast, because two things deepen simultaneously: the agentic share of tokens, and the number of billable events each agentic token drags behind it.',
    },
    {
      kind: 'p',
      text:
        'For the labs this is a token story. For the meters it is an event story. We would rather own the event.',
    },
  ],

  22: [
    {
      kind: 'p',
      text:
        'Three numbers carry this part, and each is graded quarterly against public filings through Sky1.',
    },
    {
      kind: 'p',
      text:
        'Tokens 27x by 2029 — 3x a year against a 7x history, which makes our call a slowdown rather than a stretch. About 75% of tokens doing rather than asking, where anything above 60% already beats consensus. And roughly 130x billable infrastructure events, because the wave amplifies as it lands on the meters.',
    },
    {
      kind: 'p',
      text:
        'The middle number is the one to argue with. It is the most important assumption in the machine labor thesis, and everything downstream of it — revenue, margin, multiple — is a consequence rather than a separate bet. What Part III does is show that the consequences have already started appearing in the filings.',
    },
  ],
};
