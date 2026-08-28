/**
 * EDITIONS — record of the first drop.
 *
 * No cart, no checkout, no inventory in-app. Stripe Payment Links handle
 * hosted checkout (payment, shipping address) on Stripe's own page.
 *  - number: display index, format "EDITION — 01"
 *  - name: the object's name (also used for the image alt text)
 *  - summary: one quiet line for the card
 *  - detail: longer description for a future detail view
 *  - variants: available sizes / formats; each may carry an optional
 *      order link { label, url } when that variant is purchasable now.
 *      Omit `order` to show "Coming soon" for that variant.
 *  - image: web-ready public path; leave "" while the asset is missing —
 *           a textured 4:5 placeholder renders in its place.
 */

export type EditionOrder = {
  label: string;
  url: string;
};

export type EditionVariant = {
  name: string;
  order?: EditionOrder;
};

export type Edition = {
  id: string;
  number: string;
  kind: string;
  name: string;
  summary: string;
  detail: string;
  variants: readonly EditionVariant[];
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
    variants: [
      { name: "S" },
      { name: "M" },
      { name: "L" },
      { name: "XL" },
      { name: "XXL" },
    ],
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
    variants: [
      {
        name: "50 × 70 cm",
        order: {
          label: "Order — $549 MXN",
          url: "https://buy.stripe.com/00wbIUaPv2MtdU7chBgUM00",
        },
      },
      { name: "A3" },
    ],
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
    variants: [
      {
        name: "A5",
        order: {
          label: "Order — $399 MXN",
          url: "https://buy.stripe.com/00w7sE5vb1Ip8zNa9tgUM01",
        },
      },
    ],
    image: "",
  },
];

export const EDITIONS_NOTE =
  "Physical and digital editions will appear here when they are ready. Nothing is available yet.";

export const EDITIONS_FINE_PRINT = "Limited stock. Orders ship from Mexico.";
