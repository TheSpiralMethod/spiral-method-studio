import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";

/**
 * A policy page: shipping & returns, privacy. Same dry register as the rest
 * of the site — a heading, a list of plain statements, and the way back.
 * Linked only from the footer.
 */
export function PolicyPage({
  label,
  title,
  lines,
}: {
  label: string;
  title: string;
  lines: readonly string[];
}) {
  return (
    <div className="grain min-h-screen bg-background px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <p className="label-editorial">{label}</p>
          <h1 className="mt-5 text-3xl leading-tight sm:text-4xl">{title}</h1>
        </Reveal>

        <Reveal delay={90}>
          <ul className="mt-12 space-y-4 border-t border-metadata/25 pt-8">
            {lines.map((line) => (
              <li key={line} className="max-w-prose text-sm leading-relaxed text-metadata">
                {line}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-16">
            <Link to="/" className="link-quiet">
              Return to the record
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
