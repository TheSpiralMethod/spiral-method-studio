/**
 * EDITIONS — the book and its digital edition.
 *
 * Two products: the printed book "Segundas acepciones" (pre-order) and its
 * PDF edition (available). No cart, no checkout, no inventory in-app.
 * Stripe Payment Links handle hosted checkout on Stripe's own page.
 *
 * STRIPE_BOOK_PREORDER_URL and STRIPE_BOOK_PDF_URL must hold their Stripe
 * Payment Links before the Editions section is published. While a URL is
 * empty, that edition's order control renders as disabled, non-clickable
 * text — never a dead link.
 */

/**
 * Stripe Payment Link for the printed book pre-order.
 * Paste the hosted-checkout URL here before enabling the section.
 * The Editions section MUST NOT be published while this is empty.
 */
export const STRIPE_BOOK_PREORDER_URL = "https://buy.stripe.com/cNieV6bTz4UBbLZ6XhgUM04";

/**
 * Stripe Payment Link for the PDF edition.
 * Paste the hosted-checkout URL here before enabling the section.
 * The Editions section MUST NOT be published while this is empty.
 */
export const STRIPE_BOOK_PDF_URL = "";

export type Edition = {
  id: string;
  title: string;
  format: string;
  description: string;
  price: string;
  status: string;
  availability: string;
  /**
   * Covers are rendered as SVG via BookCover — no image files needed.
   * These fields stay empty until real photographs of the printed object
   * replace the vector covers.
   */
  image: string;
};

export const EDITIONS: Edition[] = [
  {
    id: "01",
    title: "Segundas acepciones",
    format: "Book · 140 × 216 mm · 69 pages · 66 entries",
    description:
      "Sixty-six words, defined twice. The first definition is the dictionary's. The second is not.",
    price: "MXN $220",
    status: "PRE-ORDER",
    availability: "Printed to order. Shipping within four weeks of order.",
    image: "",
  },
  {
    id: "02",
    title: "Segundas acepciones — PDF",
    format: "Digital · 69 pages · 66 entries",
    description: "The complete book as a PDF. Available worldwide, no shipping.",
    price: "MXN $90",
    status: "AVAILABLE",
    availability: "Delivered by email after purchase.",
    image: "",
  },
];

export const EDITIONS_NOTE =
  "The book is available to pre-order, printed to order. The PDF is available now, anywhere.";

export const EDITIONS_FINE_PRINT = "Printed to order. Shipping within four weeks of order.";
