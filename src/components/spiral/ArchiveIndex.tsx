import { ARCHIVE_ENTRIES } from "@/data/archive";
import { Reveal } from "./Reveal";
import { ArchivePlaceholder } from "./ArchivePlaceholder";

/**
 * Archive = record index of published fragments.
 * Entries live in src/data/archive.ts — append one object to add a piece.
 */
export function ArchiveIndex() {
  return (
    <section id="archive" className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="label-editorial">Archive</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Found fragments.</h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-14 sm:gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {ARCHIVE_ENTRIES.map((entry, i) => {
            const media = entry.image ? (
              <img
                src={entry.image}
                alt={entry.title}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <ArchivePlaceholder number={entry.number} />
            );

            return (
              <Reveal as="li" key={entry.id} delay={(i % 2) * 90}>
                <article>
                  {entry.href ? (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`${entry.title} — open on Instagram`}
                    >
                      {media}
                    </a>
                  ) : (
                    media
                  )}

                  <div className="mt-5 border-t border-metadata/25 pt-4">
                    <p className="label-editorial">{entry.number}</p>
                    <h3 className="mt-3 text-xl leading-snug sm:text-2xl">{entry.title}</h3>
                    {entry.description ? (
                      <p className="mt-2 max-w-prose text-sm leading-relaxed text-metadata">
                        {entry.description}
                      </p>
                    ) : null}
                    {entry.href ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-editorial mt-4 inline-block underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        View post
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
