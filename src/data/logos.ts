/**
 * LOGO ASSETS — replaceable references.
 *
 * When your original files are ready, export web-ready versions (SVG or PNG
 * with transparency) into `public/logo/` and set the matching `src` below.
 * Suggested filenames are already written in as comments.
 *
 * Until then each entry renders a clearly marked placeholder box.
 * Never redraw, recolor beyond the two supplied variants, or regenerate the mark.
 */

export type LogoAsset = {
  /** Marked placeholder text shown until the file is uploaded. */
  placeholder: string;
  /** Public path once uploaded, e.g. "/logo/spiral-full.svg". Empty = placeholder. */
  src: string;
  alt: string;
  /**
   * The file's own dimensions, from its viewBox. Rendered as width/height on
   * the <img> so the browser reserves the right box before the SVG loads and
   * nothing shifts. CSS still controls the displayed size.
   */
  width: number;
  height: number;
};

export const LOGOS = {
  /** Full spiral mark with wordmark — hero. */
  full: {
    placeholder: "[REPLACE WITH FULL SPIRAL MARK]",
    src: "/logo/tsm-full-mark-ember.svg",
    alt: "The Spiral Method",
    width: 512,
    height: 512,
  },
  /** Ink version of the full mark — footer. */
  fullInk: {
    placeholder: "[REPLACE WITH FULL SPIRAL MARK — INK]",
    src: "/logo/tsm-full-mark-ink.svg",
    alt: "The Spiral Method",
    width: 512,
    height: 512,
  },
  /** Reduced spiral glyph — plates, small section markers. */
  glyph: {
    placeholder: "[REPLACE WITH REDUCED SPIRAL GLYPH]",
    src: "/logo/tsm-glyph-ember.svg",
    alt: "",
    width: 512,
    height: 512,
  },
  /** Ink version of the reduced glyph — navigation. */
  glyphInk: {
    placeholder: "[REPLACE WITH REDUCED SPIRAL GLYPH — INK]",
    src: "/logo/tsm-glyph-ink.svg",
    alt: "",
    width: 512,
    height: 512,
  },
  /** Horizontal lockup (mark + wordmark), ember. */
  lockupHorizontal: {
    placeholder: "[REPLACE WITH HORIZONTAL LOCKUP]",
    src: "/logo/tsm-lockup-horizontal-ember.svg",
    alt: "The Spiral Method",
    width: 1712,
    height: 190,
  },
  /** Horizontal lockup, ink. */
  lockupHorizontalInk: {
    placeholder: "[REPLACE WITH HORIZONTAL LOCKUP — INK]",
    src: "/logo/tsm-lockup-horizontal-ink.svg",
    alt: "The Spiral Method",
    width: 1712,
    height: 190,
  },
  /** Stacked lockup, ember. */
  lockupStacked: {
    placeholder: "[REPLACE WITH STACKED LOCKUP]",
    src: "/logo/tsm-lockup-stacked-ember.svg",
    alt: "The Spiral Method",
    width: 1486,
    height: 308,
  },
  /** Stacked lockup, ink. */
  lockupStackedInk: {
    placeholder: "[REPLACE WITH STACKED LOCKUP — INK]",
    src: "/logo/tsm-lockup-stacked-ink.svg",
    alt: "The Spiral Method",
    width: 1486,
    height: 308,
  },
  /** Full mark, Smoke Ivory — dark grounds and photography. */
  fullIvory: {
    placeholder: "[REPLACE WITH FULL SPIRAL MARK — IVORY]",
    src: "/logo/tsm-full-mark-ivory.svg",
    alt: "The Spiral Method",
    width: 512,
    height: 512,
  },
  /** Full mark, 100% black — single-colour production. */
  fullEngrave: {
    placeholder: "[REPLACE WITH FULL SPIRAL MARK — ENGRAVE]",
    src: "/logo/tsm-full-mark-engrave.svg",
    alt: "The Spiral Method",
    width: 512,
    height: 512,
  },
  /** Reduced glyph, Smoke Ivory. */
  glyphIvory: {
    placeholder: "[REPLACE WITH REDUCED SPIRAL GLYPH — IVORY]",
    src: "/logo/tsm-glyph-ivory.svg",
    alt: "",
    width: 512,
    height: 512,
  },
  /** Reduced glyph, 100% black — engrave. */
  glyphEngrave: {
    placeholder: "[REPLACE WITH REDUCED SPIRAL GLYPH — ENGRAVE]",
    src: "/logo/tsm-glyph-engrave.svg",
    alt: "",
    width: 512,
    height: 512,
  },
} satisfies Record<string, LogoAsset>;

export type LogoKey = keyof typeof LOGOS;
