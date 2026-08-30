import { EDITIONS, EDITIONS_NOTE, EDITIONS_FINE_PRINT } from "@/data/editions";
import { EDITIONS_DISCLOSURE } from "@/data/content";
import { Reveal } from "./Reveal";
import { EditionPlaceholder } from "./EditionPlaceholder";

/**
 * Editions: presentation + optional Stripe Payment Links (hosted checkout,
 * new tab). No cart, no in-app checkout, no inventory.
 */
export function EditionsSection() {
  return (
    <section id="editions" className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="label-editorial">Editions</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Objects, now.</h2>
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
                    className="aspect-[4/5] w-full bg-background object-contain"
                  />
                ) : (
                  <EditionPlaceholder number={edition.number} />
                )}

                <div className="mt-5 border-t border-metadata/25 pt-4">
                  <p className="label-editorial">{edition.number}</p>
                  <h3 className="mt-3 text-xl leading-snug sm:text-2xl">{edition.name}</h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-metadata">
                    {edition.summary}
                  </p>

                  <ul className="mt-4 space-y-1">
                    {edition.variants.map((variant) => (
                      <li
                        key={variant.name}
                        className="flex items-baseline gap-2 text-xs tracking-wide text-metadata"
                      >
                        <span>{variant.name}</span>
                        <span aria-hidden="true" className="text-metadata/40">
                          —
                        </span>
                        {variant.order ? (
                          <a
                            href={variant.order.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-quiet"
                          >
                            {variant.order.label}
                          </a>
                        ) : (
                          <span className="label-editorial">Coming soon</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={90}>
          <div className="mt-16 border-t border-metadata/25 pt-8">
            <p className="max-w-prose text-sm leading-relaxed text-metadata">{EDITIONS_NOTE}</p>
            <p className="mt-4 text-xs tracking-wide text-metadata/70">{EDITIONS_FINE_PRINT}</p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div
            id="shipping-returns"
            className="mt-16 scroll-mt-20 border-t border-metadata/25 pt-8"
          >
            <div className="space-y-10">
              {EDITIONS_DISCLOSURE.map((section) => (
                <div key={section.label}>
                  <p className="label-editorial">{section.label}</p>
                  <ul className="mt-4 space-y-2">
                    {section.lines.map((line) => (
                      <li
                        key={line}
                        className="max-w-prose text-sm leading-relaxed text-metadata"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  {section.contact ? (
                    <p className="mt-4 text-sm leading-relaxed text-metadata">
                      {section.contact.prefix}{" "}
                      <a
                        href={`mailto:${section.contact.email}`}
                        className="text-sm text-metadata underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        {section.contact.email}
                      </a>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
