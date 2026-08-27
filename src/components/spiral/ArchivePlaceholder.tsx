/**
 * 4:5 placeholder for archive entries awaiting their final image asset.
 * Built from the existing texture language only: soft haze, grain,
 * one faint light source. No generated art, no grey box.
 */
export function ArchivePlaceholder({ number }: { number: string }) {
  return (
    <div
      className="grain relative aspect-[4/5] w-full overflow-hidden bg-card"
      role="img"
      aria-label={`${number} — image not yet published`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(58% 42% at 32% 26%, color-mix(in oklab, var(--color-foreground) 12%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(22% 16% at 70% 74%, color-mix(in oklab, var(--color-ember) 14%, transparent), transparent 72%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-metadata/20" />
    </div>
  );
}
