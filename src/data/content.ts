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

/**
 * Editions / store toggle.
 * Set to `true` to bring the Editions section, its disclosure block, the nav
 * link, and the footer policy link back online. Currently `true` — the store
 * is live for the printed book pre-order. Set to `false` to take it offline.
 */
export const SHOW_EDITIONS = true;

const ALL_NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Archive", href: "#archive" },
  { label: "Editions", href: "#editions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const NAV_LINKS = SHOW_EDITIONS
  ? ALL_NAV_LINKS
  : ALL_NAV_LINKS.filter((link) => link.href !== "#editions");

/** Real, public contact points. No forms, no services. */
export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "ivan@thespiralmethod.life",
    href: "mailto:ivan@thespiralmethod.life",
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


export const ABOUT_TEXT = [
  "The Spiral Method is an independent visual and editorial record of recurring patterns.",
  "It does not offer conclusions.",
  "It documents what returns, what remains, and what shifts by too little to explain.",
] as const;

export const FOOTER_LINE = "A record of recurring patterns.";
export const COPYRIGHT = "© 2026 The Spiral Method";

/**
 * POLICY COPY — served at /shipping-returns and /privacy, linked only from
 * the footer. Kept out of the Editions section so the store reads as the work
 * and not as terms.
 */
export const SHIPPING_RETURNS_LINES = [
  { heading: "The PDF edition." },
  "Delivered as a download the moment payment clears. Nothing ships.",
  "If the download fails or you lose the link, write to ivan@thespiralmethod.life and it will be sent again.",
  "Because the file is delivered immediately, a completed download is not refundable. If you paid and never received the file, the payment is refunded in full.",
  { heading: "The printed edition." },
  "Not currently for sale.",
  "The printed book ships within Mexico only. Shipping is included in the price.",
  "Printed to order. Shipped within four weeks of order.",
  "Returns accepted within 30 days, unread and in original condition. Return shipping is paid by the buyer, unless the book arrived damaged or incorrect.",
] as const;

export const PRIVACY_LINES = [
  "No analytics. No tracking.",
  "Typefaces load from Google Fonts, which sees your IP address.",
  "Payment is handled by Stripe, on Stripe's pages. Card details never reach this site.",
  "The only cookies are those the host sets to serve the page.",
] as const;

/** The footer's only links. Policy pages, not navigation. */
export const FOOTER_LEGAL_LINKS = [
  { label: "SHIPPING & RETURNS", href: "/shipping-returns" },
  { label: "PRIVACY", href: "/privacy" },
] as const;

/**
 * SECTION INDEX — the lower half's counterpart to the manifesto's
 * "TSM · 01 / 09". Same treatment, letters instead of numbers, so the
 * record and the shop read as one continuous document.
 */
export const SECTION_INDEX = {
  archive: "TSM · A — ARCHIVE",
  editions: "TSM · B — EDITIONS",
  about: "TSM · C — ABOUT",
  contact: "TSM · D — CONTACT",
} as const;
