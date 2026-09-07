import {
  EDITIONS,
  PRINTED_EDITION_LINE,
  STRIPE_BOOK_PDF_URL,
} from "@/data/editions";
import { SECTION_INDEX } from "@/data/content";
import { Reveal } from "./Reveal";
import { BookCover } from "./BookCover";

/**
 * Cover artwork per edition id, rendered as vector via BookCover — no image
 * assets. The printed book reads as a physical object (shadow); the PDF is flat.
 */
const EDITION_COVER_VARIANT: Record<string, "book" | "flat"> = {
  "02": "flat",
};

/** Each edition's own checkout URL, keyed by id. Empty → disabled text. */
const EDITION_URL: Record<string, string> = {
  "02": STRIPE_BOOK_PDF_URL,
};

/** Disabled fallback label per edition id. */
const EDITION_DISABLED_LABEL: Record<string, string> = {
  "02": "Available soon",
};

/**
 * Editions: the digital edition and its Stripe Payment Link (hosted checkout,
 * new tab). No cart, no in-app checkout, no inventory. While the link is
 * empty, the order control renders as disabled, non-clickable text — never a
 * dead link. The printed edition is announced beneath it as one line.
 */
export function EditionsSection() {
  return (
    <section id="editions" className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="label-editorial">Editions</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">The first one exists.</h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-14 sm:gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-20 lg:grid-cols-3 lg:gap-x-10">
          {EDITIONS.map((edition, i) => (
            <Reveal as="li" key={edition.id} delay={(i % 3) * 90}>
              <article>
                <BookCover
                  variant={EDITION_COVER_VARIANT[edition.id] ?? "flat"}
                  title={`${edition.title} — cover`}
                />

                <div className="mt-5 border-t border-metadata/25 pt-4">
                  <p className="label-editorial">{edition.status}</p>
                  <h3 className="mt-3 text-xl leading-snug sm:text-2xl">{edition.title}</h3>
                  <p className="mt-2 text-sm tracking-wide text-metadata">{edition.format}</p>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-metadata">
                    {edition.description}
                  </p>

                  <p className="mt-4 text-sm text-foreground">{edition.price}</p>
                  <p className="mt-1 text-xs tracking-wide text-metadata/70">
                    {edition.availability}
                  </p>

                  <div className="mt-4">
                    {EDITION_URL[edition.id] ? (
                      <a
                        href={EDITION_URL[edition.id]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-quiet"
                      >
                        {`Order — ${edition.price}`}
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="label-editorial text-metadata/50"
                      >
                        {EDITION_DISABLED_LABEL[edition.id]}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={90}>
          <p className="mt-14 max-w-prose border-t border-metadata/25 pt-6 text-sm leading-relaxed text-metadata">
            {PRINTED_EDITION_LINE}
          </p>
        </Reveal>

      </div>
    </section>
  );
}
