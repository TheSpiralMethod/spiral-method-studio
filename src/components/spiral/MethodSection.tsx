import { METHOD_BLOCKS } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function MethodSection() {
  return (
    <section id="method" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading eyebrow="The Method" title="A way of looking at what returns." />

        <Reveal delay={100}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Some ideas do not move in a straight line. They return, shift, and leave traces behind.
            This project explores how image, language, and object can give form to what remains in
            motion.
          </p>
        </Reveal>

        {/* Subtle broken-line spiral connecting the three blocks. */}
        <div aria-hidden="true" className="mt-16 hidden md:block">
          <svg viewBox="0 0 1000 90" className="h-20 w-full" focusable="false">
            <path
              d="M20 70 C 180 10, 300 90, 480 45 S 800 10, 980 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="2 9"
              className="text-foreground/35"
            />
            <circle cx="480" cy="45" r="2" className="fill-ember" opacity="0.8" />
          </svg>
        </div>

        <ol className="mt-10 grid gap-px border border-hairline bg-hairline md:mt-4 md:grid-cols-3">
          {METHOD_BLOCKS.map((block, i) => (
            <Reveal as="li" key={block.number} delay={i * 120} className="bg-background">
              <div className="grain h-full p-8 sm:p-10">
                <p className="label-editorial">{block.number}</p>
                <h3 className="mt-6 text-2xl">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
