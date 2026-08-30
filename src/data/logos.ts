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
};

export const LOGOS = {
  /** Full spiral mark with wordmark — hero. */
  full: {
    placeholder: "[REPLACE WITH FULL SPIRAL MARK]",
    src: "/logo/tsm-full-mark-ember.svg",
    alt: "The Spiral Method",
  },
  /** Ink version of the full mark — footer. */
  fullInk: {
    placeholder: "[REPLACE WITH FULL SPIRAL MARK — INK]",
    src: "/logo/tsm-full-mark-ink.svg",
    alt: "The Spiral Method",
  },
  /** Reduced spiral glyph — plates, small section markers. */
  glyph: {
    placeholder: "[REPLACE WITH REDUCED SPIRAL GLYPH]",
    src: "/logo/tsm-glyph-ember.svg",
    alt: "",
  },
  /** Ink version of the reduced glyph — navigation. */
  glyphInk: {
    placeholder: "[REPLACE WITH REDUCED SPIRAL GLYPH — INK]",
    src: "/logo/tsm-glyph-ink.svg",
    alt: "",
  },
  /** Horizontal lockup (mark + wordmark), ember. */
  lockupHorizontal: {
    placeholder: "[REPLACE WITH HORIZONTAL LOCKUP]",
    src: "/logo/tsm-lockup-horizontal-ember.svg",
    alt: "The Spiral Method",
  },
  /** Horizontal lockup, ink. */
  lockupHorizontalInk: {
    placeholder: "[REPLACE WITH HORIZONTAL LOCKUP — INK]",
    src: "/logo/tsm-lockup-horizontal-ink.svg",
    alt: "The Spiral Method",
  },
  /** Stacked lockup, ember. */
  lockupStacked: {
    placeholder: "[REPLACE WITH STACKED LOCKUP]",
    src: "/logo/tsm-lockup-stacked-ember.svg",
    alt: "The Spiral Method",
  },
  /** Stacked lockup, ink. */
  lockupStackedInk: {
    placeholder: "[REPLACE WITH STACKED LOCKUP — INK]",
    src: "/logo/tsm-lockup-stacked-ink.svg",
    alt: "The Spiral Method",
  },
} satisfies Record<string, LogoAsset>;

export type LogoKey = keyof typeof LOGOS;
