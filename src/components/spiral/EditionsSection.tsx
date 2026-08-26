import { EDITION_ITEMS, PLACEHOLDER } from "@/data/content";
import { ArtworkPlaceholder } from "./ArtworkPlaceholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Editions are presentation-only for this first version:
 * no price, cart, inventory, shipping, or checkout.
 */
export function EditionsSection() {
  return (
    <section id="editions" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Editions"
          title="Objects from the archive."
          subtitle="Limited selections of objects made to accompany the movement."
        />

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {EDITION_ITEMS.map((edition, i) => (
            <Reveal as="li" key={edition.id} delay={i * 120}>
              <article className="grain h-full border border-hairline p-4">
                <ArtworkPlaceholder
                  variant={edition.variant + 3}
                  ratio="square"
                  label={PLACEHOLDER.productMockup}
                  src={edition.image || undefined}
                  alt={edition.image ? edition.category : undefined}
                />
                <div className="p-2 pt-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="label-editorial">{edition.number}</p>
                    <span className="border border-ember/40 px-2 py-1 font-mono text-[0.6rem] tracking-[0.2em] text-ember uppercase">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl">{edition.category}</h3>
                  <p className="label-editorial mt-3 normal-case">{edition.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {edition.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
