/**
 * EDITIONS — the book.
 *
 * A single product: "Segundas acepciones", sold as a pre-order.
 * No cart, no checkout, no inventory in-app. A Stripe Payment Link
 * handles hosted checkout (payment, shipping address) on Stripe's page.
 *
 * STRIPE_BOOK_PREORDER_URL must hold the Stripe Payment Link before the
 * Editions section is published. While it is empty, the order control
 * renders as disabled, non-clickable text — never a dead link.
 */

/**
 * Stripe Payment Link for the book pre-order.
 * Paste the hosted-checkout URL here before enabling the section.
 * The Editions section MUST NOT be published while this is empty.
 */
export const STRIPE_BOOK_PREORDER_URL = "";

export type Edition = {
  id: string;
  title: string;
  format: string;
  description: string;
  price: string;
  status: string;
  availability: string;
  /** Web-ready public path; "" renders a textured 4:5 placeholder. */
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
];

export const EDITIONS_NOTE = "The book is available to pre-order. Printed to order.";

export const EDITIONS_FINE_PRINT = "Printed to order. Shipping within four weeks of order.";
