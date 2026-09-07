import { Link } from "@tanstack/react-router";

import { COPYRIGHT, FOOTER_LINE, FOOTER_LEGAL_LINKS } from "@/data/content";
import { LogoMark } from "./LogoMark";

/**
 * The footer is a signature, not a second navigation. Email and Instagram
 * live once, in #contact. What remains here is the mark, the line, and the
 * two policy pages.
 */
export function SiteFooter() {
  return (
    <footer className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Compact footer signature: bone-paper logo plate and tagline
              grouped as one block so it reads as a signature, not a section. */}
          <div className="flex flex-col gap-4">
            {/* Ink full mark on its bone-paper plate — reduced to a signature scale. */}
            <div className="inline-flex w-fit bg-foreground p-3 sm:p-3.5">
              <LogoMark asset="fullInk" className="w-14 sm:w-16" />
            </div>

            <p className="text-sm leading-relaxed text-metadata">{FOOTER_LINE}</p>
          </div>

          <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.href} className="flex items-baseline">
                <Link
                  to={link.href}
                  className="label-editorial underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 h-px w-full bg-metadata/35" />
        <p className="label-editorial mt-4">{COPYRIGHT}</p>
      </div>
    </footer>
  );
}
