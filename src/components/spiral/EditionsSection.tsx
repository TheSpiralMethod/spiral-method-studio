import { EDITIONS_NOTE } from "@/data/content";
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

        <Reveal delay={90}>
          <div className="mt-14 border-t border-metadata/25 pt-8">
            {EDITIONS_NOTE.map((line) => (
              <p key={line} className="max-w-prose text-sm leading-relaxed text-metadata">
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
