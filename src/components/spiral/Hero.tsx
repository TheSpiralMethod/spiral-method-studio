import { LogoMark } from "./LogoMark";
import { Reveal } from "./Reveal";

/**
 * Hero = printed archival title plate.
 * Reduced glyph in the upper third, wordmark centered, subline,
 * bottom rule and archival metadata.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Title plate"
      className="grain relative flex min-h-[100svh] flex-col justify-between px-6 pt-24 pb-8 sm:px-10 sm:pb-10"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <Reveal className="flex justify-center">
          {/* Full spiral mark, ember — primary hero mark */}
          <LogoMark asset="full" tone="ember" className="w-40 max-w-[60vw] sm:w-56" />
        </Reveal>


        <Reveal delay={140} className="mt-10 w-full text-center sm:mt-14">
          <h1 className="text-balance font-[family-name:var(--font-meta)] text-[2.1rem] leading-[1.05] font-semibold tracking-[0.28em] uppercase sm:text-5xl md:text-6xl">
            The Spiral Method
          </h1>
          <p className="label-editorial mt-6 sm:mt-8">A record of recurring patterns</p>
        </Reveal>



      </div>

      <div className="mt-10 w-full">
        <div className="h-px w-full bg-metadata/35" />
        <div className="mt-3 flex items-baseline justify-between gap-6">
          <span className="label-editorial">TSM · 01 / 09</span>
          <span className="label-editorial">Manifesto</span>
        </div>
      </div>
    </section>
  );
}
