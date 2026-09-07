import { LOGOS, type LogoKey } from "@/data/logos";
import { cn } from "@/lib/utils";

/**
 * Renders an uploaded logo file, or a clearly marked placeholder until then.
 * Set the `src` in `src/data/logos.ts` to swap in the real asset.
 */
export function LogoMark({
  asset,
  className,
  tone = "bone",
  showPlaceholderText = true,
}: {
  asset: LogoKey;
  className?: string | undefined;
  tone?: "bone" | "ember" | undefined;
  showPlaceholderText?: boolean | undefined;
}) {
  const logo = LOGOS[asset];

  if (logo.src) {
    return (
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={cn("h-auto w-full object-contain", className)}
        loading={asset === "full" ? "eager" : "lazy"}
        decoding="async"
        {...(logo.alt ? {} : { "aria-hidden": true })}
      />
    );
  }


  const reduced = asset === "glyph" || asset === "glyphInk";

  return (
    <span
      className={cn(
        "inline-flex flex-col items-center justify-center gap-2 border border-dashed border-metadata/40 px-3 py-3",
        tone === "ember" ? "text-ember" : "text-foreground/70",
        className,
      )}
      role="img"
      aria-label={logo.alt || logo.placeholder}
    >
      {/* Neutral geometric stand-in only — not a version of the real mark. */}
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
        className={reduced ? "h-7 w-7" : "h-10 w-10"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="24" cy="24" r="17" strokeOpacity="0.35" />
        <circle cx="24" cy="24" r="10" strokeOpacity="0.5" />
        <circle cx="24" cy="24" r="3.5" strokeOpacity="0.8" />
      </svg>
      {showPlaceholderText ? (
        <span className="label-editorial text-center leading-relaxed">{logo.placeholder}</span>
      ) : null}
    </span>
  );
}
