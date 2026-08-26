/**
 * THE SPIRAL METHOD — single source of replaceable copy.
 *
 * Every string the site owner will eventually replace lives here.
 * Placeholders are written in [BRACKETS] so they are easy to find:
 *   [REPLACE WITH ORIGINAL ARTWORK]
 *   [ADD FINAL TITLE]
 *   [ADD OPTIONAL CURATORIAL TEXT]
 *   [REPLACE WITH ORIGINAL PRODUCT MOCKUP]
 *   [ADD EDITION NAME]
 *   [ADD SHORT DESCRIPTION]
 *   [INSTAGRAM URL] / [X / TWITTER URL] / [CONTACT EMAIL]
 *
 * Keep private source material OUTSIDE this repository. Only export
 * web-ready files into `public/` or `src/assets/`.
 */

export const PLACEHOLDER = {
  artwork: "[REPLACE WITH ORIGINAL ARTWORK]",
  heroArtwork: "[REPLACE WITH ORIGINAL HERO ARTWORK]",
  productMockup: "[REPLACE WITH ORIGINAL PRODUCT MOCKUP]",
  finalTitle: "[ADD FINAL TITLE]",
  curatorialText: "[ADD OPTIONAL CURATORIAL TEXT]",
  editionName: "[ADD EDITION NAME]",
  shortDescription: "[ADD SHORT DESCRIPTION]",
  instagram: "[INSTAGRAM URL]",
  twitter: "[X / TWITTER URL]",
  email: "[CONTACT EMAIL]",
} as const;

export const NAV_LINKS = [
  { label: "Method", href: "#method" },
  { label: "Archive", href: "#archive" },
  { label: "Editions", href: "#editions" },
  { label: "Contact", href: "#contact" },
] as const;

export const METHOD_BLOCKS = [
  {
    number: "01",
    title: "Fragment",
    body: "A signal, question, or impression that has not yet settled.",
  },
  {
    number: "02",
    title: "Form",
    body: "An image, word, or symbol that makes it possible to look again.",
  },
  {
    number: "03",
    title: "Trace",
    body: "A piece that continues to exist beyond the screen.",
  },
] as const;

export type ArchiveItem = {
  id: string;
  number: string;
  workingTitle: string;
  /** Replace with the final public title of the work. */
  finalTitle: string;
  /** Optional curatorial note shown in the detail view. */
  curatorialText: string;
  /** Web-ready image path, e.g. "/archive/001.jpg". Empty = placeholder. */
  image: string;
  variant: 1 | 2 | 3 | 4 | 5 | 6;
};

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "001",
    number: "Archive 001",
    workingTitle: "Threshold",
    finalTitle: PLACEHOLDER.finalTitle,
    curatorialText: PLACEHOLDER.curatorialText,
    image: "",
    variant: 1,
  },
  {
    id: "002",
    number: "Archive 002",
    workingTitle: "Displacement",
    finalTitle: PLACEHOLDER.finalTitle,
    curatorialText: PLACEHOLDER.curatorialText,
    image: "",
    variant: 2,
  },
  {
    id: "003",
    number: "Archive 003",
    workingTitle: "Minimal Ember",
    finalTitle: PLACEHOLDER.finalTitle,
    curatorialText: PLACEHOLDER.curatorialText,
    image: "",
    variant: 3,
  },
  {
    id: "004",
    number: "Archive 004",
    workingTitle: "Persistence",
    finalTitle: PLACEHOLDER.finalTitle,
    curatorialText: PLACEHOLDER.curatorialText,
    image: "",
    variant: 4,
  },
  {
    id: "005",
    number: "Archive 005",
    workingTitle: "Contour Lines",
    finalTitle: PLACEHOLDER.finalTitle,
    curatorialText: PLACEHOLDER.curatorialText,
    image: "",
    variant: 5,
  },
  {
    id: "006",
    number: "Archive 006",
    workingTitle: "Background Signal",
    finalTitle: PLACEHOLDER.finalTitle,
    curatorialText: PLACEHOLDER.curatorialText,
    image: "",
    variant: 6,
  },
];

export type EditionItem = {
  id: string;
  number: string;
  category: string;
  /** Replace with the final edition name. */
  name: string;
  /** Replace with a short, non-promotional description. */
  description: string;
  /** Web-ready mockup path. Empty = placeholder. */
  image: string;
  variant: 1 | 2 | 3;
};

export const EDITION_ITEMS: EditionItem[] = [
  {
    id: "01",
    number: "Edition 01",
    category: "Garment",
    name: PLACEHOLDER.editionName,
    description: PLACEHOLDER.shortDescription,
    image: "",
    variant: 1,
  },
  {
    id: "02",
    number: "Edition 02",
    category: "Print",
    name: PLACEHOLDER.editionName,
    description: PLACEHOLDER.shortDescription,
    image: "",
    variant: 2,
  },
  {
    id: "03",
    number: "Edition 03",
    category: "Digital object",
    name: PLACEHOLDER.editionName,
    description: PLACEHOLDER.shortDescription,
    image: "",
    variant: 3,
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", value: PLACEHOLDER.instagram },
  { label: "X / Twitter", value: PLACEHOLDER.twitter },
  { label: "Contact", value: PLACEHOLDER.email },
] as const;
