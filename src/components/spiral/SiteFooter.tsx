import { COPYRIGHT, FOOTER_LINE, FOOTER_LINKS } from "@/data/content";
import { LogoMark } from "./LogoMark";

export function SiteFooter() {
  return (
    <footer className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Compact footer signature: bone-paper logo plate, tagline, and status lines
              grouped as one block so it reads as a signature, not a separate visual section. */}
          <div className="flex flex-col gap-4">
            {/* Ink full mark on its bone-paper plate — reduced to a signature scale. */}
            <div className="inline-flex w-fit bg-foreground p-3 sm:p-3.5">
              <LogoMark asset="fullInk" className="w-14 sm:w-16" />
            </div>

            <p className="text-sm leading-relaxed text-metadata">{FOOTER_LINE}</p>
          </div>

          {/* Status lines, kept as plain text — no links or integrations. */}
          <ul className="space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label} className="flex items-baseline gap-4">
                <span className="label-editorial w-24 shrink-0">{link.label}</span>
                <span className="text-sm text-metadata">{link.value}</span>
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
