/**
 * EDITIONS — the book and its digital edition.
 *
 * One purchasable product: the PDF edition of "Segundas acepciones".
 * No cart, no checkout, no inventory in-app. A Stripe Payment Link handles
 * hosted checkout on Stripe's own page.
 *
 * The printed edition is not on sale. It is announced as a single line
 * beneath the digital edition — no price, no control, no date — and its
 * Stripe Payment Link has been removed.
 */

/**
 * Stripe Payment Link for the PDF edition.
 * While this is empty, the order control renders as disabled, non-clickable
 * text — never a dead link.
 */
export const STRIPE_BOOK_PDF_URL = "https://buy.stripe.com/8x29AUcieapUfNfh1g6c001";

export type Edition = {
  id: string;
  title: string;
  format: string;
  description: string;
  price: string;
  status: string;
  availability: string;
  /**
   * Unused. The cover is the book's own artwork, served as a static file
   * from /covers and referenced directly by EditionsSection.
   */
  image: string;
};

export const EDITIONS: Edition[] = [
  {
    id: "02",
    title: "Segundas acepciones — PDF",
    format: "Digital · 88 pages · 66 entries",
    description: "The complete book as a PDF. Available worldwide, no shipping.",
    price: "MXN $139",
    status: "AVAILABLE",
    availability:
      "The download opens straight after payment. If you lose the page, write to ivan@thespiralmethod.life and it will be sent again.",
    image: "",
  },
];

/**
 * The printed edition, announced only. Not a product: no price, no control,
 * no date. Shipping and returns for it live at /shipping-returns.
 */
export const PRINTED_EDITION_LINE =
  "Segundas acepciones — printed edition. 140 × 216 mm, 88 pages, 66 entries. Not yet open.";
