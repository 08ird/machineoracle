/** Part III — The Receipts. */

import type { Block } from './types';

export const part3: Record<number, Block[]> = {
  24: [
    {
      kind: 'p',
      lead: true,
      text:
        'Machine labor now has an invoice line, and that is a more important fact than any forecast in this document. Between 2023 and 2026, seven vendors shipped a machine billable unit — a price on work an agent performs rather than on a human seat. All of them dated. All of them public.',
    },
    {
      kind: 'p',
      text:
        'Intercom priced the outcome first, at 99 cents per resolution in 2023. Cognition priced the agent’s time, roughly $2 per agent compute unit — fifteen minutes of work. Zendesk took $1.50 per automated resolution in August 2024. Salesforce went to a dime an action in October 2024, down from $2 a conversation, and has since disclosed 3.8 billion agentic work units. Cloudflare priced machine reading itself with Pay Per Crawl in July 2025. Microsoft metered Copilot Credits at a cent apiece through Azure in September 2025. ServiceNow shipped assists per agentic action in April 2026.',
    },
    {
      kind: 'p',
      text:
        'Four flavours emerge — outcomes, actions, sessions, metered compute — and the variety matters less than the fact of it. When an industry invents a unit of account, the market has arrived. Nobody prices a thing that isn’t selling.',
    },
  ],

  25: [
    {
      kind: 'p',
      text:
        'Retention is where a usage business tells the truth about itself, and the tape has turned.',
    },
    {
      kind: 'p',
      text:
        'Aggregate net dollar retention across our five public meters has risen for six consecutive quarters: 113% in the first quarter of 2025, then 113, 114, 115, 117, and 120% by the second quarter of 2026. Six quarters up, without interruption.',
    },
    {
      kind: 'p',
      text:
        'The reason is structural rather than commercial. Seat-based software retains at roughly 101% — you grow by selling more chairs. Consumption platforms retain at 120 to 125%. AI agent products are retaining at roughly 132%. Every task an agent runs meters more revenue from a customer who has already signed, with no salesperson involved in the increment. This is what a royalty looks like before anyone calls it one.',
    },
  ],

  26: [
    {
      kind: 'p',
      text:
        'Retention tells you what happened. Contracted backlog tells you what is about to.',
    },
    {
      kind: 'p',
      text:
        'Aggregate remaining performance obligations across the five meters went from $10.1 billion in the first quarter of 2025 to $19 billion in the second quarter of 2026 — roughly +50% year on year against revenue growth of about +23%. Read the sequential prints rather than the annual: +13%, +11%, +13%, +15%, +16%. The growth rate is itself accelerating.',
    },
    {
      kind: 'p',
      text:
        'Under committed-usage contracts, backlog leads revenue by one to three quarters. Customers are signing for consumption they have not yet drawn down. The demand is already contracted; it simply has not been recognised.',
    },
  ],

  27: [
    {
      kind: 'p',
      text:
        'If you want the purest read on agent usage available from outside a company, it is overage — usage billed above committed floors, at list price.',
    },
    {
      kind: 'p',
      text:
        'We estimate it went from $0.55 billion a quarter in the first quarter of 2025 to $1.17 billion in the second quarter of 2026, with sequential growth of +13%, +15%, +17%, +18%, +19%. As a share of aggregate revenue it moved from roughly 14% to roughly 24% in six quarters, and it gets faster every quarter.',
    },
    {
      kind: 'p',
      text:
        'Overage is spending nobody budgeted. It is what happens when a workload outruns its own contract, and where limits are enforced, more than 75% of customers who hit them keep paying anyway. This is our own estimate built from on-demand revenue, consumption-versus-capacity timing, and credit disclosures — the softest number in this section, and we flag it as such.',
    },
  ],

  28: [
    {
      kind: 'p',
      text:
        'Here is the pattern that decides when this thesis pays, and it is not the pattern most investors expect. The market does not pay the meters when they ship an agent. It pays them when the filing names it.',
    },
    {
      kind: 'p',
      text:
        'Take the same companies at two different moments. When there was an AI story in the deck and nothing in the filings — Snowflake, JFrog, Cloudflare, quarters earlier — the result was dead money for months, and in one case a 48% drawdown. The proof was public the entire time. The tape did not move.',
    },
    {
      kind: 'p',
      text:
        'When agent usage appeared in the filings, backlog and retention confirmed conversion, and guidance was raised on agent products specifically, the same names re-priced roughly +27% on average across seven marked events, overnight or within the print week. Disclosure is the trigger. Everything before disclosure is preparation.',
    },
  ],

  29: [
    {
      kind: 'p',
      text:
        'Snowflake is the cleanest illustration we have, and we would rather show one case in full than seven in summary.',
    },
    {
      kind: 'p',
      text:
        'The company shipped its AI agent in February 2026. Over the following sixteen weeks the stock fell 48% while the proof compounded in plain sight. Then on 27 May 2026 the CFO named the agent as the largest single driver of a guidance raise, and the stock rose 36% overnight.',
    },
    {
      kind: 'p',
      text:
        'Nothing about the business changed on 27 May. The only thing that changed was that the filing said out loud what the product had been doing since February. That sixteen-week gap between truth and price is the window this entire thesis is designed to stand inside.',
    },
  ],
};
