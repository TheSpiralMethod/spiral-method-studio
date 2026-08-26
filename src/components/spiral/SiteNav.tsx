import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-hairline bg-background/95 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="font-mono text-[0.7rem] tracking-[0.28em] text-foreground uppercase"
        >
          The Spiral Method
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#method"
            className="border border-border px-4 py-2 text-xs tracking-[0.18em] uppercase transition-colors hover:border-ember hover:text-ember"
          >
            Explore
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
            {open ? (
              <g stroke="currentColor" strokeWidth="1.25">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </g>
            ) : (
              <g stroke="currentColor" strokeWidth="1.25">
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="15" x2="19" y2="15" />
              </g>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-hairline bg-background md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-hairline last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-5 pb-2">
              <a
                href="#method"
                onClick={() => setOpen(false)}
                className="inline-block border border-border px-5 py-3 text-xs tracking-[0.18em] uppercase"
              >
                Explore
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
