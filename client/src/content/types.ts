/**
 * Content model for the site.
 *
 * A `Piece` is one page: either an `article` (prose blocks) or a `deck` (the
 * slides of a presentation, rendered as a long-form document rather than a
 * slideshow). Both draw on the same block vocabulary, so an article can embed a
 * chart and a deck can embed a paragraph.
 *
 * To publish something new: add a file exporting a Piece, then register it in
 * content/index.ts. Nothing else needs to change.
 */

import type { Body, Slide } from '../data/slides';

export type Block =
  /** Body copy. `lead: true` gets the drop cap — use it on the opening paragraph. */
  | { kind: 'p'; text: string; lead?: boolean }
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  /** Pull quote. */
  | { kind: 'quote'; text: string; cite?: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  /** Small print — sources, caveats, disclosures. */
  | { kind: 'note'; text: string }
  /** A horizontal rule / section break. */
  | { kind: 'rule' }
  /** Signature block at the end of a letter. */
  | { kind: 'signoff'; lines: string[] }
  /** Embed any of the deck exhibit layouts (bars, table, stats, timeline…). */
  | { kind: 'exhibit'; caption?: string; body: Body; source?: string };

interface Base {
  slug: string;
  /** Shown as the page's h1 and in the index list. */
  title: string;
  /** Optional deck-style eyebrow above the title. */
  kicker?: string;
  /** One line under the title. */
  subtitle?: string;
  date?: string;
  /** Sentence for the index list on the home page. */
  blurb?: string;
  /** Hide from the nav (e.g. the home letter, which is the nav's root). */
  hidden?: boolean;
  /** Short label for the top nav. Falls back to `title`. */
  navLabel?: string;
}

export interface Article extends Base {
  kind: 'article';
  blocks: Block[];
}

export interface Deck extends Base {
  kind: 'deck';
  slides: Slide[];
  /** Optional standfirst paragraphs before the first section. */
  intro?: Block[];
}

export type Piece = Article | Deck;
