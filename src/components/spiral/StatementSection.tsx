import { Reveal } from "./Reveal";

export function StatementSection() {
  return (
    <section
      aria-label="Statement"
      className="grain relative flex min-h-[90svh] items-center border-t border-hairline"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-[220%] rounded-full bg-ember/12 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-[560%] rounded-full bg-ember/80" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-5 py-32 text-center sm:px-8">
        <Reveal>
          <p className="text-balance text-2xl leading-[1.35] sm:text-4xl md:text-5xl md:leading-[1.3]">
            Not everything that changes is lost.
            <br />
            Some things find another way to exist.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
