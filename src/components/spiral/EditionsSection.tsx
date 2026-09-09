import {
  EDITIONS,
  PRINTED_EDITION_LINE,
  STRIPE_BOOK_PDF_URL,
} from "@/data/editions";
import type { Edition } from "@/data/editions";
import { SECTION_INDEX } from "@/data/content";
import { Reveal } from "./Reveal";

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

/** The text block (status, title, format, description, price, order control)
 * shared by the single-edition feature block and the catalogue grid. */
function EditionText({ edition }: { edition: Edition }) {
  return (
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
  );
}

export function EditionsSection() {
  return (
    <section
      id="editions"
      aria-labelledby="editions-index"
      className="grain border-t border-metadata/25"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p id="editions-index" className="label-editorial">
            {SECTION_INDEX.editions}
          </p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">The first one exists.</h2>
        </Reveal>

        {EDITIONS.length === 1 ? (
          <Reveal delay={0}>
            <div className="mx-auto mt-16 max-w-4xl sm:mt-16">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
                <div className="mx-auto w-full max-w-[22rem]">
                  <img
                    src="/covers/segundas-acepciones.webp"
                    width="1200"
                    height="1855"
                    className="aspect-[396/612] w-full object-cover"
                    alt="Cover of Segundas acepciones: the title set in ink on paper above Found Fragment 21, a fan of sixty-six trajectories rising from a single amber point."
                    loading="lazy"
                  />
                </div>
                <EditionText edition={EDITIONS[0]} />
              </div>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-16 grid grid-cols-1 gap-14 sm:gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-20 lg:grid-cols-3 lg:gap-x-10">
            {EDITIONS.map((edition, i) => (
              <Reveal as="li" key={edition.id} delay={(i % 3) * 90}>
                <article>
                  <img
                    src="/covers/segundas-acepciones.webp"
                    width="1200"
                    height="1855"
                    className="aspect-[396/612] w-full object-cover"
                    alt="Cover of Segundas acepciones: the title set in ink on paper above Found Fragment 21, a fan of sixty-six trajectories rising from a single amber point."
                    loading="lazy"
                  />
                  <EditionText edition={edition} />
                </article>
              </Reveal>
            ))}
          </ul>
        )}

        <Reveal delay={90}>
          <p className="mt-14 max-w-prose border-t border-metadata/25 pt-6 text-sm leading-relaxed text-metadata">
            {PRINTED_EDITION_LINE}
          </p>
        </Reveal>

      </div>
    </section>
  );
}
