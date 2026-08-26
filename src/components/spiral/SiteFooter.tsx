import { COPYRIGHT, FOOTER_LINE, FOOTER_LINKS } from "@/data/content";
import { LogoMark } from "./LogoMark";

export function SiteFooter() {
  return (
    <footer className="grain border-t border-metadata/25">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            {/* Full spiral mark, ink version — shown on its light paper plate,
                the neutral/light-background context the ink asset is made for. */}
            <div className="inline-flex bg-foreground p-4">
              <LogoMark asset="fullInk" className="w-20 sm:w-24" />
            </div>


            <p className="mt-6 text-sm leading-relaxed text-metadata">{FOOTER_LINE}</p>
          </div>

          {/* TO REPLACE: put the real URL / address in src/data/content.ts,
              then turn the <span> into an <a href="…">. */}
          <ul className="space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label} className="flex items-baseline gap-4">
                <span className="label-editorial w-24 shrink-0">{link.label}</span>
                <span className="text-sm text-metadata">{link.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 h-px w-full bg-metadata/35" />
        <p className="label-editorial mt-4">{COPYRIGHT}</p>
      </div>
    </footer>
  );
}
