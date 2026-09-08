import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";

/**
 * One entry of a policy page: a plain statement, or a subheading that opens
 * a block of them. Pages with nothing to divide pass strings only and read
 * exactly as before.
 */
export type PolicyLine = string | { readonly heading: string };

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
  lines: readonly PolicyLine[];
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
            {lines.map((line, i) =>
              typeof line === "string" ? (
                <li key={i} className="max-w-prose text-sm leading-relaxed text-metadata">
                  {line}
                </li>
              ) : (
                <li key={i} className={i === 0 ? undefined : "pt-6"}>
                  <h2 className="text-base leading-snug text-foreground">{line.heading}</h2>
                </li>
              ),
            )}
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
