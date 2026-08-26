import { EDITION_ITEMS, EDITION_STATUS, PLACEHOLDER } from "@/data/content";
import { Reveal } from "./Reveal";

/** Editions are presentation-only: no price, cart, inventory, or checkout. */
export function EditionsSection() {
  return (
    <section id="editions" className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="label-editorial">Editions</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Objects, later.</h2>
        </Reveal>

        <ul className="mt-14 border-t border-metadata/25">
          {EDITION_ITEMS.map((edition, i) => (
            <Reveal as="li" key={edition.id} delay={i * 90}>
              <article className="grid gap-4 border-b border-metadata/25 py-8 sm:grid-cols-[7rem_1fr_9rem] sm:items-baseline sm:gap-8">
                <p className="label-editorial">{edition.number}</p>

                <div>
                  <h3 className="text-xl leading-snug sm:text-2xl">{edition.category}</h3>
                  <p className="label-editorial mt-3">{edition.name}</p>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-metadata">
                    {edition.description}
                  </p>

                  {edition.image ? (
                    <img
                      src={edition.image}
                      alt={edition.category}
                      loading="lazy"
                      decoding="async"
                      className="mt-5 w-full max-w-sm object-cover"
                    />
                  ) : (
                    <p className="label-editorial mt-5 border border-dashed border-metadata/40 px-3 py-6 text-center">
                      {PLACEHOLDER.mockup}
                    </p>
                  )}
                </div>

                <p className="label-editorial sm:text-right">{EDITION_STATUS}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
