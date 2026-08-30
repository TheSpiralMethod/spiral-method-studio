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

export const ARCHIVE_ENTRIES: ArchiveEntry[] = [];
