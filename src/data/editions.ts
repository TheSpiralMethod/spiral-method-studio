/**
 * EDITIONS — presentation-only record of the first drop.
 *
 * No prices, no cart, no checkout. To add an edition: append one object.
 *  - number: display index, format "EDITION — 01"
 *  - name: the object's name (also used for the image alt text)
 *  - summary: one quiet line for the card
 *  - detail: longer description for a future detail view
 *  - variants: available sizes / formats
 *  - image: web-ready public path; leave "" while the asset is missing —
 *           a textured 4:5 placeholder renders in its place.
 */

export type Edition = {
  id: string;
  number: string;
  kind: string;
  name: string;
  summary: string;
  detail: string;
  variants: readonly string[];
  image: string;
};

export const EDITIONS: Edition[] = [
  {
    id: "01",
    number: "EDITION — 01",
    kind: "Garment",
    name: "The Constant Tee — Black",
    summary: "Heavyweight black cotton tee with a small back line and no front print.",
    detail:
      "A black tee built around one confirmed line: A SPIRAL AS THE ONLY CONSTANT. Quiet placement, no visible front graphic, and one interior amber glyph.",
    variants: ["S", "M", "L", "XL", "XXL"],
    image: "",
  },
  {
    id: "02",
    number: "EDITION — 02",
    kind: "Print",
    name: "The Constant Print — 50 × 70 cm",
    summary: "Matte print with one line, one index, and one spiral.",
    detail:
      "A vertical print with wide margins, a single confirmed line, and a small amber spiral. Designed as an object, not a slogan.",
    variants: ["50 × 70 cm", "A3"],
    image: "",
  },
  {
    id: "03",
    number: "EDITION — 03",
    kind: "Notebook",
    name: "Record No. 001 — Black Notebook",
    summary: "A blank numbered record with no prompts.",
    detail:
      "Black cover, blind-embossed spiral glyph, blank pages, and sequential page indexing. Built as a record, not a guide. A5. Small batch, local production.",
    variants: ["A5"],
    image: "",
  },
];

export const EDITIONS_NOTE =
  "Physical and digital editions will appear here when they are ready. Nothing is available yet.";
