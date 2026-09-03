import { CONTACT_LINKS, COPYRIGHT, FOOTER_LINE, FOOTER_POLICY_LINK, SHOW_EDITIONS } from "@/data/content";
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

          {/* One quiet row of real contact points. */}
          <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label} className="flex min-w-0 items-baseline gap-3">
                <span className="label-editorial shrink-0">{link.label}</span>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="min-w-0 truncate text-sm text-metadata underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {link.value}
                </a>
              </li>
            ))}
            <li className="flex items-baseline">
              <a
                href={FOOTER_POLICY_LINK.href}
                className="text-sm text-metadata underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {FOOTER_POLICY_LINK.label}
              </a>
            </li>
          </ul>
        </div>


        <div className="mt-12 h-px w-full bg-metadata/35" />
        <p className="label-editorial mt-4">{COPYRIGHT}</p>
      </div>
    </footer>
  );
}
