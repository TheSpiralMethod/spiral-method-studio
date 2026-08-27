/**
 * THE SPIRAL METHOD — single editable content file.
 *
 * No bracketed placeholder text is rendered on the public site.
 * When real material is ready, replace the temporary Archive / Editions
 * notes below with real entries.
 *
 * Logo assets live in `src/data/logos.ts`.
 * Only ever place web-ready, public files in this repository.
 */


export const WORDMARK = "The Spiral Method";
export const SUBLINE = "A record of recurring patterns";

export const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Archive", href: "#archive" },
  { label: "Editions", href: "#editions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

/** Real, public contact points. No forms, no services. */
export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "thespiralmethod@icloud.com",
    href: "mailto:thespiralmethod@icloud.com",
    external: false,
  },
  {
    label: "Instagram",
    value: "@the_spiral_method",
    href: "https://instagram.com/the_spiral_method",
    external: true,
  },
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

/** Temporary single entry until real recorded material is public. */
export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "001",
    number: "A / 001",
    title: "The archive is not open yet.",
    note: "Recorded material will appear here when it is ready to be public.",
    label: "Unresolved",
    image: "",
  },
];

/** Editions are presentation-only; nothing is available yet. */
export const EDITIONS_NOTE = [
  "Physical and digital editions will appear here when they are ready.",
  "Nothing is available yet.",
] as const;

export const ABOUT_TEXT = [
  "The Spiral Method is an independent visual and editorial record of recurring patterns.",
  "It does not offer conclusions.",
  "It documents what returns, what remains, and what shifts by too little to explain.",
] as const;

export const FOOTER_LINKS = [
  { label: "Instagram", value: "INSTAGRAM — COMING SOON" },
  { label: "Contact", value: "CONTACT — NOT YET OPEN" },
] as const;


export const FOOTER_LINE = "A record of recurring patterns.";
export const COPYRIGHT = "© 2026 The Spiral Method";
