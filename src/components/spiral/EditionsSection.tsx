import { EDITIONS, EDITIONS_NOTE } from "@/data/editions";
import { Reveal } from "./Reveal";
import { ArchivePlaceholder } from "./ArchivePlaceholder";

/** Editions are presentation-only: no price, cart, inventory, or checkout. */
export function EditionsSection() {
  return (
    <section id="editions" className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="label-editorial">Editions</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Objects, later.</h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-14 sm:gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-20 lg:grid-cols-3 lg:gap-x-10">
          {EDITIONS.map((edition, i) => (
            <Reveal as="li" key={edition.id} delay={(i % 3) * 90}>
              <article>
                {edition.image ? (
                  <img
                    src={edition.image}
                    alt={edition.name}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <ArchivePlaceholder number={edition.number} />
                )}

                <div className="mt-5 border-t border-metadata/25 pt-4">
                  <p className="label-editorial">{edition.number}</p>
                  <h3 className="mt-3 text-xl leading-snug sm:text-2xl">{edition.name}</h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-metadata">
                    {edition.summary}
                  </p>
                  <p className="mt-4 text-xs tracking-wide text-metadata">
                    {edition.variants.join(" · ")}
                  </p>
                  <p className="label-editorial mt-4">Coming soon</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={90}>
          <div className="mt-16 border-t border-metadata/25 pt-8">
            <p className="max-w-prose text-sm leading-relaxed text-metadata">{EDITIONS_NOTE}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
