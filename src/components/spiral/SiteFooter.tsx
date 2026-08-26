import { SOCIAL_LINKS } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="grain border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.28em] uppercase">The Spiral Method</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A way of holding what turns.
            </p>
          </div>

          {/* TO REPLACE: swap each placeholder for a real URL or address,
              then turn the <span> into an <a href="…">. */}
          <ul className="space-y-3">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label} className="flex items-baseline gap-4">
                <span className="label-editorial w-24 shrink-0">{link.label}</span>
                <span className="text-sm text-muted-foreground">{link.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 border-t border-hairline pt-6 text-xs text-muted-foreground">
          © 2026 The Spiral Method.
        </p>
      </div>
    </footer>
  );
}
