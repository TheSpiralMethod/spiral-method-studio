/**
 * ARCHIVE ENTRIES — the published record.
 *
 * To add an entry: append one object to ARCHIVE_ENTRIES below.
 *  - id: unique, stable string
 *  - number: display index, format "FRAGMENT — 003"
 *  - title: the piece's title (also used for the image alt text)
 *  - description: one quiet line; leave "[ADD DESCRIPTION]" until written
 *  - image: web-ready public path, e.g. "/archive/003.jpg".
 *           Leave "" (or the bracketed marker) while the asset is missing —
 *           a textured 4:5 placeholder renders in its place.
 *  - href: optional outbound link to the Instagram post
 *
 * Only ever place web-ready, public files in this repository.
 */

export type ArchiveEntry = {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Public image path; empty while awaiting the final asset. */
  image: string;
  href?: string;
};

export const ARCHIVE_ENTRIES: ArchiveEntry[] = [
  {
    id: "001",
    number: "FRAGMENT — 001",
    title: "Return",
    description: "The same curve, two hundred and sixty times. Only the drift is visible.",
    image: "/archive/001.jpg",
  },
  {
    id: "002",
    number: "FRAGMENT — 002",
    title: "The Constant",
    description: "One rule, one thousand eight hundred strokes. One of them sits lower.",
    image: "/archive/002.jpg",
  },
  {
    id: "003",
    number: "FRAGMENT — 003",
    title: "A Decimal Fraction",
    description:
      "Each return plotted against the one before it. The line is where it would have landed.",
    image: "/archive/003.jpg",
  },
  {
    id: "004",
    number: "FRAGMENT — 004",
    title: "Not Softened",
    description: "The same signature, forty-four times. The amplitude does not decay.",
    image: "/archive/004.jpg",
  },
];
