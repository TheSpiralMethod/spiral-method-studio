import { useState } from "react";
import { ARCHIVE_ITEMS, PLACEHOLDER, type ArchiveItem } from "@/data/content";
import { ArtworkPlaceholder } from "./ArtworkPlaceholder";
import { ArchiveModal } from "./ArchiveModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ArchiveGrid() {
  const [active, setActive] = useState<ArchiveItem | null>(null);

  return (
    <section id="archive" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Archive"
          title="Found fragments."
          subtitle="An evolving collection of images, forms, and signals."
        />

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
          {ARCHIVE_ITEMS.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={(i % 3) * 110}
              className={i % 3 === 1 ? "md:mt-12" : undefined}
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group block w-full text-left"
                aria-haspopup="dialog"
              >
                <ArtworkPlaceholder
                  variant={item.variant}
                  label={PLACEHOLDER.artwork}
                  src={item.image || undefined}
                  alt={item.image ? item.workingTitle : undefined}
                  className="transition-opacity duration-500 group-hover:opacity-85"
                />
                <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-hairline pt-3">
                  <span className="label-editorial">{item.number}</span>
                  <span className="text-sm text-foreground">{item.workingTitle}</span>
                </div>
                <p className="label-editorial mt-2 normal-case">{item.finalTitle}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.curatorialText}
                </p>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {active ? <ArchiveModal item={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}
