/**
 * The written sections of Part 04 that have no exhibit of their own — the
 * definitions that open it, and the coda and closing quote that end the piece.
 * Interleaved with exhibit sections by the `sequence` below.
 */

import type { Conclusion } from './types';

export const conclusion: Conclusion = {
  title: 'Machine Oracle',
  sub: 'the research program — the definitions, the cohort, the predictions, the grading',
  sequence: [
    // Opens the part: the three coined terms.
    {
      heading: 'The definitions',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text:
            'This is the part of the piece we intend to be remembered by. Parts 01 to 03 established an era, measured a wave, and located the layer that bills it. Part 04 gives that work its names, states the thesis as a measurable instrument, makes the bold calls, and commits — in public, on a schedule — to being graded on all of it.',
        },
        {
          kind: 'p',
          text: 'Three terms, coined here, that the rest of this work is built on.',
        },
        {
          kind: 'quote',
          text:
            'Machine labor is work performed by AI agents — planned, executed, and verified by software — and billed by the unit rather than the seat. It is not a metaphor. It has an invoice line: seven vendors already price it per resolution, per action, per crawl, per credit.',
        },
        {
          kind: 'quote',
          text:
            'A royalty on machine labor is the per-unit toll collected on every unit of that work. It exists because every agent action, without exception, must do three things: execute, remember, and answer for itself. The companies that meter those three activities — the backend — collect a small toll on all of it, the way rails, ports, and toll roads collected on every prior industrial mobilization. The royalty is not a story about who builds the best agent. It is a claim on all agents, whoever builds them.',
        },
        {
          kind: 'quote',
          text:
            'The machine labor cohort is the instrument that captures it: a mechanical research screen over the backend — every company whose revenue is majority-recognized from measured consumption. No picks, no weights, no hindsight.',
        },
        {
          kind: 'p',
          text:
            'The thesis in one sentence: machine labor is being billed today, its billings compound with the token wave, and the companies that collect the royalty are priced as if neither were true.',
        },
      ],
    },

    // The cohort and the ladder.
    { slide: 70 },
    { slide: 71 },
    { slide: 73 },
    { slide: 74 },
    { slide: 81 },

    // The valuation framework.
    { slide: 76 },
    { slide: 77 },
    { slide: 78 },
    { slide: 79 },
    { slide: 80 },

    // The predictions and the falsifiers.
    { slide: 82 },
    { slide: 83 },
    { slide: 84 },
    { slide: 86 },

    // The vision.
    { slide: 87 },
    { slide: 88 },

    {
      heading: 'What machine labor frees',
      blocks: [
        {
          kind: 'p',
          text:
            'The cost of trying collapses. When an experiment costs an afternoon instead of a quarter, most of the era’s growth comes from work that was never attempted — the projects that died in prioritization rather than in production.',
        },
        {
          kind: 'p',
          text:
            'Time moves up the stack: routine cognition is delegated, judgment is not. The 168-hour machine week exists to protect the 40-hour human one. Scarcity migrates to attention, intent, and trust — which is why the audit layer is a growth business in every version of this future.',
        },
        {
          kind: 'p',
          text:
            'The honesty clause: displacement precedes redeployment, and the transition is measured in careers, not quarters.',
        },
      ],
    },

    // The program and the conclusion.
    { slide: 90 },
    { slide: 91 },

    {
      heading: 'Coda: the human ledger',
      blocks: [
        {
          kind: 'p',
          text:
            'When making things stops being scarce, directing them becomes the work. Every prior tool amplified human hands; this one substitutes for them. The scarce human inputs shift to judgment, intent, and accountability — the human moves from operator to editor, from doing the work to deciding what work is worth doing. That transition created the modern professions the last three times it happened: after the plow, after the factory, after the spreadsheet.',
        },
        {
          kind: 'p',
          text:
            'Abundance of software will feel like literacy did. For seventy years software was written by a priesthood for everyone else. When writing stopped being a scribal profession, civilization reorganized around the written word — not because writing got cheaper, but because everyone could suddenly do it. A billion people who can summon software will reorganize work in ways no forecast in this piece captures. Honesty requires the other side too: substitution displaces before it redeploys, and the distribution of these gains is a political question, not a technical one.',
        },
        {
          kind: 'p',
          text:
            'The meters are how a society counts what it hands to machines. Beneath the economics, the state and audit layers exist for a human reason: delegation requires memory and accountability. “You cannot self-audit” is not a billing observation — it is a statement about trust between people. Whatever machine labor becomes, humans will insist it be measured, remembered, and answerable. That insistence is older than software, and it is why the ledger — in every sense — is where this story has always been headed.',
        },
        {
          kind: 'p',
          text:
            'The economy will price machine labor in dollars; people will price it in meaning. We can only measure the first. The second is why the measuring matters.',
        },
      ],
    },

    // The closing quote, then the disclosures.
    { slide: 93 },
    { slide: 94 },
  ],
};
