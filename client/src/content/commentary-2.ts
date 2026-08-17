/** Part 02 — The Token Tidal Wave. Expanded narrative with dated sources. */

import type { Block } from './types';

export const part2: Record<number, Block[]> = {
  19: [
    {
      kind: 'p',
      lead: true,
      text:
        'Two variables decide how big infinite software gets: token usage, the measurable fuel, and the AI agent population, the workforce that burns it. This part measures the first and models the second. Tokens first, because they are the rawest series this industry publishes. Global token consumption ran 0.05 quadrillion in 2022, 0.5Q in 2023, 5Q in 2024, 25Q in 2025, and roughly 100Q in 2026: a ~2,000x expansion in four years.',
    },
    {
      kind: 'p',
      text:
        'That line ran through two market corrections and one full-scale AI panic, complete with declarations that the buildout was a bubble and the models had hit a wall. The DeepSeek weekend of January 2025 knocked half a trillion dollars off Nvidia in a day on the theory that efficiency meant less demand. Token consumption that quarter grew anyway — the users never got the memo the market was trading on. Demand never blinked.',
    },
    {
      kind: 'p',
      text:
        'Two caveats: tokenizers differ across labs, so cross-platform counts are not perfectly commensurable, and the disclosure anchors are sparse. The uncertainty is in the second digit; the phenomenon is in the exponent.',
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
        'What actually happened: frontier token prices fell about 50x while volume rose about 2,000x. To make the price line concrete — GPT-4 launched in March 2023 at $30 per million input tokens; sixteen months later GPT-4o-mini did most of the same work at fifteen cents, a 200x collapse on one axis alone, and the 2025 price war pushed capable models below a dime. The measured slope across the whole window is ~1.2–1.3: every 10x price decline bought 15 to 20x more demand. This is the single most important measured fact in the piece — the demand curve for machine cognition is elastic above one.',
    },
    {
      kind: 'p',
      text:
        'We checked the obvious objection, which is that buyers were purchasing capability rather than responding to price. Measured against constant-capability tiers — models held at a fixed benchmark level whose prices fell as newer tiers arrived above them — the slope holds. People do not just buy the smarter model; they buy vastly more of the same intelligence when it gets cheap.',
    },
  ],

  21: [
    {
      kind: 'p',
      text:
        'This is not the first time the price of a compute input has collapsed, and the pattern has never once reversed. Internet transit fell from $1,200 per Mbps in 1998 to under a dollar by 2010 — a thousandfold — while traffic grew 60 to 100% a year and carrier and CDN revenue grew through the entire collapse. Storage fell roughly 30% a year for three decades; the industry sold more dollars of disk every decade anyway. Mobile data fell about 40% a year through the smartphone era; when India’s Jio cut the price of a gigabyte to pennies in 2016, Indians went from data rationers to the heaviest mobile-data users on earth within two years, and the carriers’ data revenue rose as voice quietly died.',
    },
    {
      kind: 'p',
      text:
        'Three different decades, three different inputs, one shape: the cheaper the unit, the larger the bill. Every time compute’s inputs got 10x cheaper, spend grew anyway. Tokens are running the same curve, faster — and with a larger pool of latent demand behind them than bandwidth or storage ever had, because the substitute for a token is an hour of human attention.',
    },
  ],

  22: [
    {
      kind: 'p',
      text:
        'The sharpest technical objection to this thesis is efficiency: if models get better at the same task, tokens per task fall, and work decouples from consumption. Four forces genuinely push that way. Distillation lets small models do yesterday’s task with a tenth of the tokens — DeepSeek made this a market event. Caching stops re-billing repeated context; the labs themselves sell it at up to 90% off, and it is already inside the ÷50x price line we model. On-device models take trivial tasks off the cloud meter entirely. And routers send easy queries to cheap models.',
    },
    {
      kind: 'p',
      text:
        'The call survives all four, because each one cuts the price per task — and cheaper tasks are the mechanism of the wave, not its enemy. The freed budget has never gone home; it has gone deeper. The clearest evidence is what the labs did with their own efficiency gains: they spent them on reasoning models that think for minutes instead of seconds, converting every saved token into a longer chain of thought. Efficiency in this market is a manufacturing process for new demand.',
    },
    {
      kind: 'p',
      text:
        'The variant that would bite is tokens-per-task falling faster than tasks multiply — which is why tokens-per-task in our own production stack is a leading indicator we watch directly. The filings cannot give it to us.',
    },
  ],

  23: [
    {
      kind: 'p',
      text:
        'The reason we think this continues is that the heaviest users of tokens barely exist yet. Only about 2.5% of roughly a billion weekly AI users run agents today — 40x of headroom in penetration alone, before anyone new arrives.',
    },
    {
      kind: 'p',
      text:
        'Intensity is the larger half of the arithmetic, and the least appreciated. Casual chat consumes about 10,000 tokens per user-day — a few questions, a few answers. An always-on agent consumes 5 to 25 million: it reads entire codebases and document sets as context, plans, acts, checks its own work, and loops, around the clock. That is a difference of 500 to 2,500x for the same human being. And the clock itself is different: a person gives you about forty attention-hours a week; an agent gives you 168. Task horizons that double every few months (Part 01) keep converting chat users into agent users — each conversion multiplying one person’s token demand by three orders of magnitude.',
    },
  ],

  // Site-original exhibit: the agent population, modeled.
  52: [
    {
      kind: 'p',
      text:
        'The second variable is the one that matters most, and almost nobody counts it: how many AI agents are operating? We count always-on instances — an agent deployed and working, not a person chatting. Today, roughly 25 million people delegate to agents, but most agents still run episodically; our modeled estimate of always-on instances is about 10 million. By 2030, with a quarter of ~2.5 billion AI users delegating and several instances per delegator, the population reaches roughly a billion.',
    },
    {
      kind: 'p',
      text:
        'The workweek math in the exhibit is why the definition matters: an instance that never clocks out is worth several human schedules, so even a modest instance count already represents an enormous labor pool — and at the modeled endpoint, machine schedules rival humanity’s entire professional class. Every estimate on this page is modeled and labeled as such; the point is the order of magnitude, and the tracker grades it as disclosures arrive.',
    },
  ],

  // Site-original exhibit: the internet, and the share on the stack.
  89: [
    {
      kind: 'p',
      text:
        'Where does that workforce show up? On the internet’s infrastructure — and the internet is already more machine than most people think. About 5.5 billion humans are online, growing single digits; roughly half of all internet traffic is already non-human — bots, crawlers, APIs — before agents arrive at scale. The machine internet compounds; the human internet does not.',
    },
    {
      kind: 'p',
      text:
        'Now place the backend stack on that map. By our modeled estimate, about one in three internet applications touches at least one of the 25 public backend names — Cloudflare alone fronts roughly 20% of all websites, and the data, identity, and observability paths of most large digital businesses run through the rest. Inside the cohort, we estimate 5–10% of consumption is already agent-driven — the source of the overage acceleration in Part 03. The multiplication of those two estimates is the thesis, and it lands exactly where the next part goes.',
    },
  ],

  24: [
    {
      kind: 'p',
      text:
        'This is the assumption that matters most in the entire piece. Today roughly 85% of tokens are “ask” — a person waiting at a chat box — and about 15% are “doing”: work delegated to software that no longer waits for prompts. Our 2029 case requires doing to reach about 75%. If the delegation ladder stalls, our numbers do not happen, whatever else goes right.',
    },
    {
      kind: 'p',
      text:
        'The evidence that the ladder is already climbing is public and comes from the labs’ own traffic. 77% of a major lab’s API volume classifies as automation rather than conversation. Coding — the first true agent workload — went from 11% to over half of routed model traffic in a single year. Enterprise API tokens at the leading lab grew 150% in five months. None of these numbers requires a forecast; they are a description of the mix shift already underway. Our case needs a doing-share of 60% or better, and anything above that already beats consensus.',
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
        'The call assumes less growth than the recent past delivered. The trailing four years ran at about ×7 a year. We are underwriting a deceleration by half — a wave that is visibly losing speed — and still arrive at nearly four times the street’s floor of ~1,100Q. The floor is not a bear case we invented to look balanced: it is what you get applying unit elasticity to the announced price path — the street’s own arithmetic. The distance between those two lines is the entire debate.',
    },
  ],

  26: [
    {
      kind: 'p',
      text:
        'The 40x is not a curve we drew and then justified. It is three assumptions multiplied, each of which can be argued with separately. Users doubling to two billion is the least controversial — it is roughly the trajectory of every prior consumer platform at this stage. The always-on share reaching 22% is where we and the street genuinely part ways; it is nine times today’s 2.5%, and it is the delegation ladder of the previous section doing three more years of climbing. Tokens per agent-day we do not extrapolate at all: 10 to 25 million is the band already observed in production agents today, ours included.',
    },
    {
      kind: 'p',
      text:
        'The widest error bars sit on the middle factor. Adoption curves for delegation inside enterprises are young, and the range around 22% is wide in both directions. That is why the floor case shares the same users and the same intensity band — the whole disagreement compresses into how many people let the software work while they sleep.',
    },
  ],

  27: [
    {
      kind: 'p',
      text:
        'A forecast that cannot be checked between now and its horizon is not worth much. Ours can: the platforms publish token counts on earnings calls, and every dated disclosure so far has landed on or above our path — Microsoft’s hundred trillion a quarter in April 2025, Google’s 480 trillion a month at I/O a month later, Alphabet’s 980 trillion by mid-2025, then 1.3 quadrillion a month by October.',
    },
    {
      kind: 'p',
      text:
        'And since that exhibit was drawn, the freshest print lapped it. Alphabet’s June 2026 investor presentation disclosed 3.2 quadrillion tokens a month — a three-hundred-fold increase in two years, an annual run-rate near 40Q from a single platform. Our ~100Q global estimate for 2026, which looked bold against the October print, now needs less than three Googles to be true. The curve keeps arriving early.',
    },
  ],

  28: [
    {
      kind: 'p',
      text:
        'We grade ourselves in public, so it is only fair to grade someone else the same way. In June 2024, Leopold Aschenbrenner published [Situational Awareness](https://situational-awareness.ai) — the essay this site’s epigraph borrows its “straight lines” discipline from — and it made concrete forecasts that can now be scored with 2026 data: chatbots becoming agents, $100-billion-class clusters, a national scramble for power, test-time compute unlocking long-horizon work.',
    },
    {
      kind: 'p',
      text:
        'The scoreboard in the exhibit speaks for itself — landed, landed, landing, landing. His central claim, AGI by 2027, we mark open: it is not our claim, and nothing in this piece requires it. What the grading establishes is narrower and more useful: an independent forecaster, using a completely different method, drew a demand curve two years ago that keeps coming true on schedule.',
    },
  ],

  29: [
    {
      kind: 'p',
      text:
        'Set the two maps side by side: they differ in method and agree in direction. Situational Awareness counts in orders of magnitude — factors of ten, the “OOMs” of its title chapter — and reasons from supply: effective compute compounding roughly one order of magnitude a year, capability per token rising, drop-in remote workers arriving as a consequence. We reason from demand: measured elasticity, capability deliberately held constant, adoption counted in users and intensity rather than IQ. Their ceiling is the wage pool; ours is what the elasticity data will bear.',
    },
    {
      kind: 'p',
      text:
        'Two maps drawn from opposite coasts landing within 2x of each other is not a coincidence to explain away; it is triangulation. The maps multiply rather than compete — and where they disagree, the disagreement is upside to the meters, not risk. That is why we underwrite the lower number.',
    },
  ],

  30: [
    {
      kind: 'p',
      text:
        'The obvious physical objection is supply: can compute actually deliver 40x more tokens? The arithmetic is less demanding than it sounds, because two efficiency terms sit between token demand and power draw — roughly 3x from FLOPs-per-token improvements and 2–3x from two hardware generations of performance-per-watt. 40x the tokens needs only about 4–7x the inference power.',
    },
    {
      kind: 'p',
      text:
        'And the capital has already been committed — publicly, and at a scale with few precedents. The four largest hyperscalers spent about $410 billion in 2025 and have guided to roughly $700 billion for 2026, with a trillion a year in sight for 2027; Stargate alone was announced at half a trillion dollars; Microsoft restarted a nuclear plant to feed it. A build of this size only clears its cost of capital on a demand curve shaped like ours — which means the deepest-pocketed, best-informed buyers of compute on earth have underwritten our forecast with their own balance sheets.',
    },
  ],

  // Site-original exhibit: the hyperscaler capex commitment, drawn.
  6: [
    {
      kind: 'p',
      text:
        'The chart makes the commitment plain. For a decade, the four largest hyperscalers spent a steady ~$150 billion a year building the cloud — and the number barely moved through ChatGPT’s first year, because you cannot re-plan a datacenter fleet in a quarter. Then the re-planning landed: capex half again higher in 2024, $410 billion in 2025, roughly $700 billion guided for 2026, and a trillion a year on the announced trajectory for 2027.',
    },
    {
      kind: 'p',
      text:
        'Read the shape, not just the level. A step-function this violent, from operators this disciplined, is not enthusiasm — it is a capacity plan against a demand forecast they can see and we cannot: their own order books. Nothing in this piece asks you to trust our curve over theirs; it only notes that the two curves agree.',
    },
  ],

  31: [
    {
      kind: 'p',
      text:
        'Run the same meters on Situational Awareness assumptions, bounded by physics. If the announced build fully lands — roughly 10x inference power by 2029, times ~3x FLOPs-per-token, times ~2.5x performance-per-watt — the physical ceiling is about 75x today’s tokens, or ~7,500Q. The Situational Awareness case adopts below that ceiling: always-on share above 30%, intensity of 60 to 100 million tokens a day, landing near 6,000Q.',
    },
    {
      kind: 'p',
      text:
        'Through the same event math and capture that Part 03 develops, that world pays the cohort roughly $55–70 billion of 2029 revenue against about $42 billion in our wave. We underwrite 40x. The Situational Awareness case is what the same meters earn if their map is right — shown, not underwritten, and the reason “too conservative” is a live criticism of this piece from one direction while “too aggressive” arrives from the other. Criticism from both directions is a sign the number is placed about right.',
    },
  ],

  32: [
    {
      kind: 'p',
      text:
        'Has a build approaching a trillion dollars a year happened before? Three times. British railways absorbed roughly 40% of GDP in cumulative private investment across the 1840s — and the investors of the mania mostly lost, while the users of the rails built the industrial economy on top of them. The US telecom buildout of 1996–2001 laid about a trillion of today’s dollars of fiber before demand arrived; the operators went bankrupt in rows, and the dark fiber they left behind carried the next twenty years of the internet at pennies. The green transition runs at trillions, ongoing.',
    },
    {
      kind: 'p',
      text:
        'The pattern across all three is uncomfortable for builders and comfortable for meters: economies periodically rebuild themselves around a new input, over-invest at the peak, and hand the durable economics to whoever bills the input’s use rather than whoever financed its construction. The AI buildout — approaching 3% of GDP — is the fourth great mobilization. This piece is about positioning for the royalty, not the construction.',
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
        'Watch one delegated task — “fix the failing build” — move through the stack. The agent thinks: two hundred thousand tokens of reading, planning, reasoning. Then the agent works, and working is where the meters start: API calls, database reads and writes, test runs, container builds, traces, logs. The thinking happens at the lab and is priced in tokens; the working happens on infrastructure someone else rents out, and every step of it is a line item.',
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
        'Token demand of ~40x is the labs’ story, and it is the one being told everywhere. But every action lands on rented rails — it executes, it leaves state behind, and it must answer for itself — so billable infrastructure events compound faster than the tokens that cause them: about 190x by our model, from 0.3Q to roughly 57Q by 2029. The exhibit is the whole conversion in one picture: tokens on the left are what the labs sell; the three activities in the middle are what every agent action must rent; the events on the right are what the meters bill. The wave amplifies as it lands.',
    },
  ],

  35: [
    {
      kind: 'p',
      text:
        'The amplification comes from two ratios deepening at once: the agentic share of tokens (the delegation ladder), and the events each agentic token drags behind it (attach, which rises as workloads graduate from pilots to production with security, audit, and observability switched on). Both basis and label matter here: this series is modeled, not disclosed — it is our conversion model applied to measured token data, and it is the single number in this piece most dependent on our own assumptions. Part 03 exists to check it against filings. For the labs this is a token story; for the meters it is an event story — and the event is the larger number.',
    },
  ],

  37: [
    {
      kind: 'p',
      text:
        'Three numbers close the part: ~40x tokens, ~75% of them doing rather than asking, ~190x billable events landing on the rails. None of the three stands on a single support — the history, the precedents, the platform prints, the suppliers’ capex, and our own production telemetry all point the same way, and removing any one of them leaves the call standing. Part 01 said the software population explodes; this part counted the explosion. What it has not yet shown is the only thing an investor of any kind should care about — whether anyone actually gets paid. That is Part 03: the companies already billing machine labor by the unit, and the evidence, line by line, in their filings.',
    },
  ],
};
