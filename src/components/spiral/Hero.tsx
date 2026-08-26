import { PLACEHOLDER } from "@/data/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      {/* Abstract hero composition: shadow, an irregular line, haze, one light source.
          TO REPLACE: swap this <svg> block for your own web-ready artwork
          (<img src="/hero.jpg" alt="" />) exported from your private source folder. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          focusable="false"
        >
          <defs>
            <radialGradient id="hero-light" cx="72%" cy="30%" r="52%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
              <stop offset="60%" stopColor="currentColor" stopOpacity="0.05" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="900" fill="url(#hero-light)" className="text-foreground" />
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-foreground/20"
          >
            <path d="M-40 780 C 320 700, 300 420, 620 360 S 1080 420, 980 660" />
            <path d="M40 860 C 420 760, 380 380, 700 320" strokeOpacity="0.55" />
            <path d="M180 900 C 520 800, 470 340, 800 300" strokeOpacity="0.3" />
          </g>
          <circle cx="864" cy="270" r="3" className="fill-ember" opacity="0.9" />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pt-28 pb-16 sm:px-8 sm:pb-24">
        <Reveal>
          <p className="label-editorial">Living Archive — 001</p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 max-w-3xl text-balance text-[2.6rem] leading-[1.03] sm:text-6xl md:text-7xl">
            It is not a loop.
            <br />
            It is a spiral.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            An editorial space for image, form, and memory.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#archive"
              className="border border-foreground bg-foreground px-6 py-3 text-center text-xs tracking-[0.18em] text-background uppercase transition-opacity hover:opacity-85"
            >
              Explore the archive
            </a>
            <a
              href="#editions"
              className="border border-border px-6 py-3 text-center text-xs tracking-[0.18em] uppercase transition-colors hover:border-ember hover:text-ember"
            >
              View editions
            </a>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <p className="label-editorial mt-14 border-t border-hairline pt-4">
            {PLACEHOLDER.heroArtwork}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
