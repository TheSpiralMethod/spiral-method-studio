import { ABOUT_TEXT } from "@/data/content";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10 sm:py-32">
        <Reveal>
          <p className="label-editorial">About</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 space-y-5">
            {ABOUT_TEXT.map((line) => (
              <p
                key={line}
                className="mx-auto max-w-xl text-pretty font-display text-lg leading-[1.6] sm:text-xl sm:leading-[1.6]"
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
