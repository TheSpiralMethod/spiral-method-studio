import { ARCHIVE_ITEMS } from "@/data/content";
import { Reveal } from "./Reveal";

/**
 * Archive = record index, not a gallery or shop.
 * Each row: index number, public title, optional public note, classification.
 * Replace `image` in src/data/content.ts with a public web-ready path.
 */
export function ArchiveIndex() {
  return (
    <section id="archive" className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="label-editorial">Index</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Archive</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-metadata">
            A running index of recorded material. Entries are added without order of importance.
          </p>
        </Reveal>

        <ul className="mt-14 border-t border-metadata/25">
          {ARCHIVE_ITEMS.map((item, i) => (
            <Reveal as="li" key={item.id} delay={(i % 3) * 80}>
              <article className="grid gap-4 border-b border-metadata/25 py-8 sm:grid-cols-[7rem_1fr_9rem] sm:items-baseline sm:gap-8">
                <p className="label-editorial">{item.number}</p>

                <div>
                  <h3 className="text-xl leading-snug sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-metadata">
                    {item.note}
                  </p>

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="mt-5 w-full max-w-sm object-cover"
                    />
                  ) : (
                    <p className="label-editorial mt-5 border border-dashed border-metadata/40 px-3 py-6 text-center">
                      {PLACEHOLDER.artwork}
                    </p>
                  )}
                </div>

                <p className="label-editorial sm:text-right">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
