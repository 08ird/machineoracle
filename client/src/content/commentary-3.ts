/** Part 03 — A Royalty on Machine Labor. */

import type { Block } from './types';

export const part3: Record<number, Block[]> = {
  39: [
    {
      kind: 'p',
      lead: true,
      text:
        'The invoice line for machine labor already exists, and that is a more important fact than any forecast in this document. Seven vendors have shipped a machine billable unit between 2023 and 2026 — all dated, all public.',
    },
    {
      kind: 'p',
      text:
        'Four flavours emerge — outcomes, actions, sessions, metered compute — and the variety matters less than the fact of it. The unit of account for machine work is being standardized in public, vendor by vendor. When an industry invents a unit of account, the market has arrived; nobody prices a thing that isn’t selling.',
    },
  ],

  40: [
    {
      kind: 'p',
      text:
        'Revenue is events times price times capture. The wave guarantees the first term — roughly 190x by 2029. Prices fall 30 to 40% a year, which we model. Capture is the fight, and our elasticity research puts it at 0.5 to 0.7.',
    },
    {
      kind: 'p',
      text:
        'Measured attach in the filings today reads 0.2 to 0.3, well below the 20-to-40-per-thousand-tokens we described. That is a lag, not a leak. Committed contracts burn first, so surge usage draws down prepaid credits and appears in backlog one to three quarters before revenue. Where usage caps bind, more than 75% of buyers keep paying at list. And mix carries the model: premium event classes — security, governed queries, CI — gain share as agents graduate to production.',
    },
    {
      kind: 'p',
      text: 'Underwriting a royalty on machine labor is underwriting capture. That is what this section prices, meter by meter.',
    },
  ],

  41: [
    {
      kind: 'p',
      text:
        'Hardware computes, models reason, infrastructure remembers, runtimes coordinate, applications deliver. Five layers, and they are not equally investable.',
    },
    {
      kind: 'p',
      text:
        'We avoid layer 0, where the economics are capital-heavy and already priced, and layer 1, where competition hands the gains to customers and there is no public pure play in any case. The key layers meter work and accumulate state.',
    },
  ],

  42: [
    {
      kind: 'p',
      text: 'Everything that follows rests on one distinction.',
    },
    {
      kind: 'p',
      text:
        'The backend is what agents run on: three unavoidable activities — execute, remember, and answer for it. Twenty-five companies, and every unit of machine labor passes through them, most of it billed by the unit. The worksite is where agents do the work: forty-two companies whose rails get paid per action, whose records convert or compress, and whose seats are the other side of the trade.',
    },
    {
      kind: 'p',
      text: 'The royalty is collected in the backend. Winners on the worksite are tracked, but the cohort is not picked there.',
    },
  ],

  43: [
    {
      kind: 'p',
      text:
        'The universe is the BVP Nasdaq Emerging Cloud Index plus four extensions — 67 names, with DigitalOcean reclassified to layer 0. The median cloud business trades at about 4.1x forward revenue and grows about 20%; only about eleven names are usage-billed at all.',
    },
    {
      kind: 'p',
      text:
        'Bucketed on the master frame, that is a 25-name backend and a 42-name worksite. The full roster is published — classification, not holdings — with the action rails marked as per-action worksite meters.',
    },
  ],

  46: [
    {
      kind: 'p',
      text:
        'A reader who follows this space will notice the most interesting meters are missing from the public universe. They are being built in private, and every one of them is a future entrant — on IPO, and on one 10-K.',
    },
  ],

  47: [
    {
      kind: 'p',
      text:
        'The backend fishes in two ponds. State is a $161B pond growing 18% a year on Gartner’s DBMS forecast — the game there is winning share of something already enormous. Work is a smaller $25–30B pond growing 12 to 14%, the metered core of observability and SIEM.',
    },
    {
      kind: 'p',
      text:
        'But the wave is digging a new pond beside it: agent runtime, roughly $1–2B today and growing over 100% a year, which our event forecasts put above $10B by 2029. And behind both sits roughly $240B of security budget, almost none of it usage-billed yet. That is the conversion prize.',
    },
  ],

  48: [
    {
      kind: 'p',
      text:
        'Software TAMs measure the old pond. Machine labor ultimately prices against something far larger: the roughly $35 trillion global knowledge-work wage pool.',
    },
    {
      kind: 'p',
      text:
        'The old TAM is a line item inside the new one. Delegation share, not software budgets, sets the ceiling on the royalty — and at 5% delegation the new pond is one to two times the entire old TAM, every year.',
    },
  ],

  50: [
    {
      kind: 'p',
      text:
        'Scatter all 67 names and the pattern holds: most of the universe sits below 25% growth and below 8x forward revenue. The right edge is thin, and above the rule-of-40 line at 30%-plus growth sits almost nobody — and what is there is work and state, not apps.',
    },
    { kind: 'p', text: 'Work earns today; state compounds for decades.' },
  ],

  53: [
    {
      kind: 'p',
      text:
        'The two backend layers run different business models, and conflating them is the most common analytical error we see in this space.',
    },
    {
      kind: 'p',
      text:
        'They also fail differently, which is why we hold both. Open, portable state formats would break the ledger case; model vendors absorbing the runtime would break the toll-road case. Independent falsifiers, one royalty.',
    },
  ],

  55: [
    {
      kind: 'p',
      text:
        'Retention is where a usage business tells the truth about itself. Usage-billed meter names run a median NDR climbing from about 112 to 117 over six quarters. Seat-priced apps sit at about 101, flat.',
    },
    {
      kind: 'p',
      text:
        'The reason is structural rather than commercial: a seat is bought once and renewed, while a meter is billed every time an agent acts — from a customer who has already signed, with no salesperson involved in the increment. This is what a royalty looks like before anyone calls it one.',
    },
  ],

  57: [
    {
      kind: 'p',
      text:
        'If you want the purest read on agent usage available from outside a company, it is overage: usage billed above committed floors, at list price. State meters went from 14% to 24% of revenue over six quarters; work meters from 9% to 16%.',
    },
    {
      kind: 'p',
      text:
        'Apps are at zero, and structurally must be — you cannot bill above a floor that doesn’t exist. Commitment tells the same story one step earlier: deferred revenue growth is accelerating fastest exactly where usage is metered.',
    },
  ],

  59: [
    {
      kind: 'p',
      text:
        'Before any of our analysis, the tape has already voted — at the layer level, with no selection involved and no judgement about individual names.',
    },
    {
      kind: 'p',
      text:
        'The deeper a layer derated in 2022, the harder it rebounded, and work leads the full period. The market pays the layers that meter machine labor, not the seats it replaces.',
    },
  ],

  61: [
    {
      kind: 'p',
      text:
        'Here is the anomaly this entire piece is built around. Three years of multiples, on a realized-forward basis, show all three layers grinding sideways-to-down — through the biggest software demand shock ever recorded.',
    },
    {
      kind: 'p',
      text:
        'Nothing is priced for agents. Consensus forward numbers carry zero of them. The state layer is the cleanest illustration: growth turned up from 13% to 20% while the multiple did not move, leaving it at roughly 0.26x its growth rate — half the cohort’s ~0.5x.',
    },
  ],

  64: [
    {
      kind: 'p',
      text:
        'And the businesses are not merely growing; they are converting. Work converts at 26% of revenue to free cash flow, apps at 22%, and state just inflected from 14% to 21% — six points in a single year.',
    },
    { kind: 'p', text: 'Falling multiples, rising cash. That divergence is the anomaly Part 04 examines.' },
  ],

  65: [
    {
      kind: 'p',
      text:
        'One more market check, from the buyers with the most information: strategic acquirers keep paying for meters, and paying above where the layers trade.',
    },
    {
      kind: 'p',
      text:
        'Scaled meters clear roughly 7 to 10x revenue in a sale. That is a floor of sorts under the public names — set by people who have done diligence the public market has not.',
    },
  ],

  66: [
    {
      kind: 'p',
      text:
        'Scored on this section’s evidence, the two backend layers split the honours — and the resolution is not a winner but two horizons.',
    },
  ],

  68: [
    {
      kind: 'p',
      text:
        'The royalty is measured and growing. Part 04 defines the cohort that bills it, states the valuation framework, and commits the whole program to public grading.',
    },
  ],
};
