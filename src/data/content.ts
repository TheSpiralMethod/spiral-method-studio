/**
 * THE SPIRAL METHOD — single editable content file.
 *
 * Every public-facing string lives here. Placeholders are in [BRACKETS]
 * so they are easy to search for and replace:
 *   [REPLACE WITH PUBLIC ARTWORK] / [ADD PUBLIC TITLE] / [ADD PUBLIC EDITORIAL NOTE]
 *   [REPLACE WITH ORIGINAL MOCKUP] / [ADD EDITION NAME] / [ADD SHORT PUBLIC DESCRIPTION]
 *   [INSTAGRAM URL] / [CONTACT EMAIL]
 *
 * Logo asset placeholders live in `src/data/logos.ts`.
 * Only ever place web-ready, public files in this repository.
 */

export const PLACEHOLDER = {
  artwork: "[REPLACE WITH PUBLIC ARTWORK]",
  publicTitle: "[ADD PUBLIC TITLE]",
  editorialNote: "[ADD PUBLIC EDITORIAL NOTE]",
  mockup: "[REPLACE WITH ORIGINAL MOCKUP]",
  editionName: "[ADD EDITION NAME]",
  editionDescription: "[ADD SHORT PUBLIC DESCRIPTION]",
  instagram: "[INSTAGRAM URL]",
  email: "[CONTACT EMAIL]",
} as const;

export const WORDMARK = "The Spiral Method";
export const SUBLINE = "A record of recurring patterns";

export const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Archive", href: "#archive" },
  { label: "Editions", href: "#editions" },
  { label: "About", href: "#about" },
] as const;

/**
 * MANIFESTO SEQUENCE — 9 editorial plates.
 * Copy is fixed. Do not add explanation, resolution, or calls to action.
 * `lines` render as separate lines of one centered statement.
 * `emphasis` marks a single word rendered in the ember accent.
 */
export type ManifestoPlate = {
  index: string;
  lines: string[];
  subline?: string;
  label: string;
  emphasis?: string;
  glyph?: "top" | "above-wordmark";
  isTitlePlate?: boolean;
};

export const MANIFESTO_PLATES: ManifestoPlate[] = [
  {
    index: "01",
    lines: ["The Spiral Method"],
    subline: "A record of recurring patterns",
    label: "Manifesto",
    glyph: "above-wordmark",
    isTitlePlate: true,
  },
  { index: "02", lines: ["It comes back."], label: "Observation" },
  {
    index: "03",
    lines: ["It comes back the same.", "Not softened.", "No lesson."],
    label: "Observation",
  },
  {
    index: "04",
    lines: ["You recognize it in the body", "before the head."],
    label: "Observation",
  },
  { index: "05", lines: ["For years it was", "the only constant."], label: "Constant" },
  {
    index: "06",
    lines: ["A constant does not change.", "That is what the word means."],
    label: "Constant",
    emphasis: "constant",
  },
  { index: "07", lines: ["And still —", "a decimal fraction", "moved."], label: "Deviation" },
  { index: "08", lines: ["Too small to see.", "Too small to help."], label: "Deviation" },
  {
    index: "09",
    lines: ["Nothing healed.", "I call this a method."],
    label: "No conclusions",
    glyph: "top",
  },
];

export type ArchiveItem = {
  id: string;
  /** Archive index number, e.g. "A / 001". */
  number: string;
  title: string;
  note: string;
  label: "Observation" | "Constant" | "Deviation" | "Trace" | "Unresolved";
  /** Web-ready public image path, e.g. "/archive/001.jpg". Empty = placeholder. */
  image: string;
};

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "001",
    number: "A / 001",
    title: PLACEHOLDER.publicTitle,
    note: PLACEHOLDER.editorialNote,
    label: "Observation",
    image: "",
  },
  {
    id: "002",
    number: "A / 002",
    title: PLACEHOLDER.publicTitle,
    note: PLACEHOLDER.editorialNote,
    label: "Constant",
    image: "",
  },
  {
    id: "003",
    number: "A / 003",
    title: PLACEHOLDER.publicTitle,
    note: PLACEHOLDER.editorialNote,
    label: "Deviation",
    image: "",
  },
  {
    id: "004",
    number: "A / 004",
    title: PLACEHOLDER.publicTitle,
    note: PLACEHOLDER.editorialNote,
    label: "Trace",
    image: "",
  },
  {
    id: "005",
    number: "A / 005",
    title: PLACEHOLDER.publicTitle,
    note: PLACEHOLDER.editorialNote,
    label: "Unresolved",
    image: "",
  },
  {
    id: "006",
    number: "A / 006",
    title: PLACEHOLDER.publicTitle,
    note: PLACEHOLDER.editorialNote,
    label: "Observation",
    image: "",
  },
];

export type EditionItem = {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  /** Web-ready public mockup path. Empty = placeholder. */
  image: string;
};

export const EDITION_ITEMS: EditionItem[] = [
  {
    id: "01",
    number: "E / 01",
    category: "Garment",
    name: PLACEHOLDER.editionName,
    description: PLACEHOLDER.editionDescription,
    image: "",
  },
  {
    id: "02",
    number: "E / 02",
    category: "Print",
    name: PLACEHOLDER.editionName,
    description: PLACEHOLDER.editionDescription,
    image: "",
  },
  {
    id: "03",
    number: "E / 03",
    category: "Digital edition",
    name: PLACEHOLDER.editionName,
    description: PLACEHOLDER.editionDescription,
    image: "",
  },
];

export const EDITION_STATUS = "Coming later";

export const ABOUT_TEXT = [
  "The Spiral Method is an independent visual and editorial record of recurring patterns.",
  "It does not offer conclusions.",
  "It documents what returns, what remains, and what shifts by too little to explain.",
] as const;

export const FOOTER_LINKS = [
  { label: "Instagram", value: PLACEHOLDER.instagram },
  { label: "Contact", value: PLACEHOLDER.email },
] as const;

export const FOOTER_LINE = "A record of recurring patterns.";
export const COPYRIGHT = "© 2026 The Spiral Method";
