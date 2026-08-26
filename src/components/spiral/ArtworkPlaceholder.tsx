import { cn } from "@/lib/utils";

/**
 * Abstract, non-representational placeholder composition.
 * Pure CSS + inline SVG, so it costs almost nothing to load.
 *
 * TO REPLACE: pass a web-ready image path via `src` (export originals
 * from your private source folder into `public/`), e.g.
 *   <ArtworkPlaceholder src="/archive/001.jpg" alt="…" />
 */
export function ArtworkPlaceholder({
  variant = 1,
  label,
  src,
  alt,
  className,
  ratio = "portrait",
}: {
  variant?: number;
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  ratio?: "portrait" | "square" | "wide";
}) {
  const ratioClass =
    ratio === "square" ? "aspect-square" : ratio === "wide" ? "aspect-[16/10]" : "aspect-[4/5]";

  if (src) {
    return (
      <div className={cn("grain overflow-hidden bg-muted", ratioClass, className)}>
        <img
          src={src}
          alt={alt ?? ""}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const rotation = (variant % 6) * 17;

  return (
    <div
      className={cn(
        "grain relative overflow-hidden border border-hairline bg-muted",
        ratioClass,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id={`haze-${variant}`} cx="50%" cy="42%" r="58%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#haze-${variant})`} className="text-foreground" />
        <g
          transform={`rotate(${rotation} 200 250)`}
          fill="none"
          stroke="currentColor"
          className="text-foreground/25"
          strokeWidth="0.75"
        >
          <path d="M60 400 C 160 300, 120 180, 220 140 S 360 160, 330 260" />
          <path d="M90 430 C 200 340, 150 200, 250 170" strokeOpacity="0.5" />
          <ellipse cx="200" cy="250" rx="120" ry="150" strokeOpacity="0.25" />
        </g>
        <circle cx="268" cy="176" r="2.5" className="fill-ember" opacity="0.75" />
      </svg>
      <span className="label-editorial absolute bottom-3 left-3 right-3 leading-relaxed">
        {label}
      </span>
    </div>
  );
}
