# Logo assets

Final original marks for The Spiral Method. Do not redraw, recolor, crop,
rasterize or regenerate these files.

| File                            | Referenced as           | Used in                                    |
| ------------------------------- | ----------------------- | ------------------------------------------ |
| tsm-full-mark-ember.svg         | LOGOS.full              | Hero title plate                           |
| tsm-full-mark-ink.svg           | LOGOS.fullInk           | Footer / neutral contexts                  |
| tsm-full-mark-ivory.svg         | LOGOS.fullIvory         | Dark grounds, over photography             |
| tsm-full-mark-engrave.svg       | LOGOS.fullEngrave       | Single-colour production                   |
| tsm-glyph-ember.svg             | LOGOS.glyph             | Manifesto plates 01 and 09, edition cards  |
| tsm-glyph-ink.svg               | LOGOS.glyphInk          | Small navigation marker                    |
| tsm-glyph-ivory.svg             | LOGOS.glyphIvory        | Small marker on dark grounds / photography |
| tsm-glyph-engrave.svg           | LOGOS.glyphEngrave      | Emboss, laser, one-colour print            |
| tsm-lockup-horizontal-ember.svg | LOGOS.lockupHorizontal  | Wide accent lockup                         |
| tsm-lockup-horizontal-ink.svg   | LOGOS.lockupHorizontalInk | Wide lockup on light grounds             |
| tsm-lockup-stacked-ember.svg    | LOGOS.lockupStacked     | Stacked accent lockup                      |
| tsm-lockup-stacked-ink.svg      | LOGOS.lockupStackedInk  | Stacked lockup on light grounds            |

References live in `src/data/logos.ts`.

## Notes

- All marks are the same golden logarithmic spiral: r = e^(b·θ),
  b = ln(φ)/(π/2) = 0.3063490. Full mark 2.5 turns; reduced glyph 0.85 turns.
- Colourways: ember `#E58A3A` (accent), ink `#0D0E10` (on light grounds),
  ivory `#E8E1D6` (on dark grounds or photography), engrave 100% black
  (single-colour production — laser, blind emboss, one-colour print).
- Amber appears once per piece. Never place two ember elements in the same
  artefact.
- The lockup wordmark is Cormorant Garamond SemiBold converted to outlines,
  tracking 0.28 em. It is already outlined, so no font file is needed to
  render it.
- Clear space around any mark or lockup: at least the height of the glyph's
  inner curl on all sides.
- Minimum sizes: reduced glyph 16 px; horizontal lockup 120 px wide; stacked
  lockup 90 px wide. Below 16 px use the ink or ivory glyph on a solid tile —
  never the full 2.5-turn mark, whose inner turns fill in.
- Browser and app icons (`favicon.ico`, `favicon-32.png`,
  `apple-touch-icon.png`, `icon-512.png`) live in `public/` and are built from
  the reduced glyph in ember on an ink tile.
