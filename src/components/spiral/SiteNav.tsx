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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700",
        scrolled || open
          ? "border-b border-metadata/25 bg-background/95 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:h-20 sm:px-10">
        <a
          href="#top"
          className="flex items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase"
          aria-label="The Spiral Method — back to top"
        >
          {/* The ink glyph is reserved for light/neutral contexts; on the dark
              bar the wordmark stands alone. */}
          <span className="sm:inline">The Spiral Method</span>

        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.18em] text-metadata uppercase underline-offset-8 transition-colors hover:text-foreground hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
            {open ? (
              <g stroke="currentColor" strokeWidth="1.1">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </g>
            ) : (
              <g stroke="currentColor" strokeWidth="1.1">
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
          className="border-t border-metadata/25 bg-background md:hidden"
        >
          <ul className="mx-auto max-w-5xl px-6 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-metadata/20 last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base tracking-[0.14em] uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="label-editorial underline underline-offset-4"
              >
                Close
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
