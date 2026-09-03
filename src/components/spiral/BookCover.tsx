/**
 * BookCover — vector cover of "Segundas acepciones" rendered as inline SVG.
 * No image assets: all colours come from the theme tokens, all type from the
 * site's font families. 4:5 canvas (1200 × 1500), centred 140 × 216-proportioned
 * book in ivory paper on the ink-black ground.
 *
 * variant "book" adds a soft offset drop shadow (physical object);
 * variant "flat" renders the same cover without shadow (digital edition).
 */
export function BookCover({
  variant,
  title = "Segundas acepciones — cover",
}: {
  variant: "book" | "flat";
  title?: string;
}) {
  const filterId = variant === "book" ? "book-cover-shadow" : undefined;

  return (
    <svg
      viewBox="0 0 1200 1500"
      className="aspect-[4/5] w-full"
      role="img"
      aria-label={title}
    >
      {variant === "book" ? (
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="24" />
            <feOffset dx="18" dy="26" result="offset" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.35" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      ) : null}

      {/* Ink ground */}
      <rect width="1200" height="1500" style={{ fill: "var(--color-background)" }} />

      {/* Book: 140 × 216 proportions → 700 × 1080, ~72% of canvas height */}
      <g filter={filterId ? `url(#${filterId})` : undefined}>
        <rect x="250" y="210" width="700" height="1080" style={{ fill: "var(--color-foreground)" }} />
      </g>

      {/* Cover contents — left-aligned, generous margin */}
      <text
        x="330"
        y="330"
        style={{
          fill: "var(--color-metadata)",
          fontFamily: "var(--font-meta)",
          fontWeight: 600,
          fontSize: "30px",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
        }}
      >
        The Spiral Method
      </text>

      <rect x="330" y="366" width="60" height="3" style={{ fill: "var(--color-ember)" }} />

      <text
        x="330"
        y="540"
        style={{
          fill: "var(--color-background)",
          fontFamily: "var(--font-display)",
          fontSize: "96px",
        }}
      >
        Segundas
      </text>
      <text
        x="330"
        y="650"
        style={{
          fill: "var(--color-background)",
          fontFamily: "var(--font-display)",
          fontSize: "96px",
        }}
      >
        acepciones
      </text>

      <text
        x="330"
        y="740"
        style={{
          fill: "var(--color-background)",
          fontFamily: "var(--font-meta)",
          fontSize: "38px",
          opacity: 0.75,
        }}
      >
        Sesenta y seis entradas
      </text>

      <text
        x="330"
        y="1220"
        style={{
          fill: "var(--color-metadata)",
          fontFamily: "var(--font-meta)",
          fontWeight: 600,
          fontSize: "26px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        Iván Reátiga
      </text>
    </svg>
  );
}
