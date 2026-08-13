/** Part 02 — The Token Tidal Wave. */

import type { Block } from './types';

export const part2: Record<number, Block[]> = {
  19: [
    {
      kind: 'p',
      lead: true,
      text:
        'Before any forecast, the record. Global token consumption ran 0.05 quadrillion in 2022, 0.5Q in 2023, 5Q in 2024, 25Q in 2025, and roughly 100Q in 2026 — a ~2,000x expansion in four years.',
    },
    {
      kind: 'p',
      text:
        'Note what that line ran through: two market corrections and one full-scale AI panic, complete with declarations that the buildout was a bubble and the models had hit a wall. Demand never blinked. The honest caveats: tokenizers differ across labs, so cross-platform counts are not perfectly commensurable, and the disclosure anchors are sparse. The uncertainty is in the second digit; the phenomenon is in the exponent.',
    },
  ],

  20: [
    {
      kind: 'p',
      text:
        'The institutional model of this market assumes falling prices compress revenue. It is the reflex of anyone who has watched a hardware cycle, it produces the fade case that dominates every sell-side model, and it has been wrong for four consecutive years.',
    },
    {
      kind: 'p',
      text:
        'What actually happened: over the same window, frontier token prices fell about 50x while volume rose about 2,000x. The measured slope is ~1.2–1.3 — every 10x price decline bought 15 to 20x more demand. This is the single most important measured fact in the piece: the demand curve for machine cognition is elastic above one.',
    },
    {
      kind: 'p',
      text:
        'We checked the obvious objection, which is that buyers were purchasing capability rather than responding to price. Measured against constant-capability tiers — models held at a fixed benchmark level whose prices fell as newer tiers arrived above them — the slope holds.',
    },
  ],

  21: [
    {
      kind: 'p',
      text:
        'This is not the first time the price of a compute input has collapsed, and the pattern has never once reversed. Internet transit fell from $1,200 to under $1 per Mbps between 1998 and 2010 while traffic grew 60 to 100% a year, and carrier and CDN revenue grew through the entire collapse. Storage fell about 30% a year for three decades and industry revenue compounded anyway. Mobile data fell about 40% a year in the smartphone era while usage per user grew roughly 100x in a decade, and data revenue rose as voice died.',
    },
    {
      kind: 'p',
      text: 'Every time compute’s inputs got 10x cheaper, spend grew anyway. Tokens are running the same curve, faster.',
    },
  ],

  22: [
    {
      kind: 'p',
      text:
        'The sharpest technical objection to this thesis is efficiency: if models get better at the same task, tokens per task fall, and work decouples from consumption. Four forces push that way, and the call survives all of them — because each one cuts the price per task, and cheaper tasks are the mechanism of the wave rather than its enemy.',
    },
    {
      kind: 'p',
      text:
        'We hold this answer with less confidence than the rest of the document, which is why tokens-per-task in our own production stack is a leading indicator we watch directly — the filings cannot give it to us.',
    },
  ],

  23: [
    {
      kind: 'p',
      text:
        'The reason we think this continues is that the heaviest users of tokens barely exist yet. Only about 2.5% of roughly a billion weekly AI users run agents today — 40x of headroom in penetration alone.',
    },
    {
      kind: 'p',
      text:
        'Intensity is the larger half of the arithmetic. Casual chat consumes about 10,000 tokens per user-day; an always-on agent consumes 5 to 25 million — a difference of 500 to 2,500x for the same human being. And the clock is different: a person gives you about forty attention-hours a week, an agent 168.',
    },
  ],

  24: [
    {
      kind: 'p',
      text:
        'This is the assumption that matters most in the entire piece, and we would rather name it plainly than bury it. Today roughly 85% of tokens are “ask” — chat — and about 15% are “doing”: delegate and automate. Our 2029 case puts doing at about 75%.',
    },
    {
      kind: 'p',
      text:
        'The evidence that the ladder is already climbing is public: 77% of a major lab’s API traffic classifies as automation; coding’s share of routed model traffic went from 11% to over 50% in a single year; enterprise API tokens at the leading lab grew 150% in five months. Our case needs a doing-share of 60% or better, and anything above that already beats consensus.',
    },
  ],

  25: [
    {
      kind: 'p',
      text:
        'So here is our call, stated as a number that can be graded against us: roughly 4,000 quadrillion tokens a year by 2029. From about 100Q in 2026, that is 40x, compounding ×3.4 a year.',
    },
    {
      kind: 'p',
      text:
        'It sounds aggressive until you look at what it assumes about growth. The trailing four years ran at about ×7 a year. We are underwriting a deceleration by half and still arrive at nearly four times the street’s floor of ~1,100Q — which is not a bear case we invented, but what you get applying unit elasticity to the announced price path.',
    },
  ],

  26: [
    {
      kind: 'p',
      text:
        'The 40x is not a curve we drew and then justified. It is three assumptions multiplied, each of which can be argued with separately — and the debate between us and consensus is entirely about the middle two.',
    },
  ],

  27: [
    {
      kind: 'p',
      text:
        'A forecast that cannot be checked between now and its horizon is not worth much. Ours can: the platforms publish token counts, and every dated disclosure so far sits on or above our path.',
    },
    {
      kind: 'p',
      text:
        'Our 2026 global estimate of about 100Q needs roughly six Googles. Alphabet alone was at a ~16Q annual run-rate as of its third-quarter 2025 disclosure.',
    },
  ],

  28: [
    {
      kind: 'p',
      text:
        'We grade ourselves in public, so it is only fair to grade someone else the same way. Aschenbrenner’s Situational Awareness, published June 2024, made forecasts we can now score with 2026 data.',
    },
    {
      kind: 'p',
      text:
        'An independent forecast drawn two years ago, graded against today’s prints: the wave keeps arriving on schedule, whoever draws the curve. Note that his central claim — AGI by 2027 — is not ours, and nothing in this piece requires it.',
    },
  ],

  29: [
    {
      kind: 'p',
      text:
        'It is worth setting the two maps side by side, because they differ in method and agree in direction. Their core driver is supply-side: effective compute compounding roughly an order of magnitude a year. Ours is demand-side: measured elasticity. Their unit is capability per token; ours is raw tokens with capability deliberately held constant.',
    },
    {
      kind: 'p',
      text:
        'The maps multiply rather than compete. Where they disagree is upside to the meters, not risk — which is why we underwrite the lower number.',
    },
  ],

  30: [
    {
      kind: 'p',
      text:
        'The obvious physical objection is supply: can compute actually deliver 40x more tokens? The arithmetic is less demanding than it sounds, because two efficiency terms sit between token demand and power draw.',
    },
    {
      kind: 'p',
      text:
        'And the capital has already been committed. A build of this size only clears its cost of capital if token demand compounds roughly like our curve — which means the suppliers have underwritten our demand forecast with their own balance sheets.',
    },
  ],

  31: [
    {
      kind: 'p',
      text:
        'Run the same meters on Situational Awareness assumptions, bounded by power. If the announced build fully lands — roughly 10x inference power by 2029, times ~3x FLOPs-per-token, times ~2.5x performance-per-watt — the physical ceiling is about 75x, or ~7,500Q. The SA case adopts below that ceiling: always-on share above 30%, intensity of 60 to 100M tokens a day, landing near 6,000Q.',
    },
    {
      kind: 'p',
      text:
        'Through the same event math and capture, that pays the cohort roughly $55–70B of 2029 revenue against about $42B in our wave. We underwrite 40x; the SA case is what the same meters earn if their map is right. Shown, not underwritten.',
    },
  ],

  32: [
    {
      kind: 'p',
      text:
        'A build approaching a trillion dollars a year invites the question of whether anything like it has happened before. It has, three times — and in each case the metered owners of the new rails collected the era’s royalties, whether or not the first wave of operators survived.',
    },
  ],

  33: [
    {
      kind: 'p',
      text:
        'Here is where our thesis departs from the one you have already heard. Tokens are the fuel. They are not the bill.',
    },
    {
      kind: 'p',
      text:
        'Two numbers here need to be squared, because a careful reader will divide one by the other. The 100,000-plus figure counts raw metered events — every log line, trace span, and cache read the task touches; most are bundled or priced near zero. Weighted by what actually bills, the same task nets out to 20 to 40 billable events per thousand agentic tokens, and that conservative number is what every downstream forecast in this document uses.',
    },
  ],

  34: [
    {
      kind: 'p',
      text:
        'Token demand of ~40x is the labs’ story. Every action, though, lands on rented rails — it runs, it stores, it is secured, it is observed — so billable infrastructure events compound faster: about 190x, from 0.3Q to roughly 57Q by 2029.',
    },
    {
      kind: 'p',
      text:
        'Events outgrow tokens in every single year of the forecast, because two things deepen simultaneously: the agentic share of tokens, and the number of billable events each agentic token drags behind it. For the labs this is a token story; for the meters it is an event story. We would rather own the event.',
    },
  ],

  36: [
    {
      kind: 'p',
      text:
        'A single-support forecast is a guess with a chart. Ours rests on five independent legs, and removing any one of them leaves the call standing.',
    },
  ],

  37: [
    {
      kind: 'p',
      text:
        'Three numbers carry this part. Part 03 has to prove the harder half: who actually collects the bill.',
    },
  ],
};
