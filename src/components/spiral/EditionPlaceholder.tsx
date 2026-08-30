/**
 * Edition placeholder: the same soft haze/grain/faint-light texture as
 * ArchivePlaceholder, with the existing ember spiral glyph centered on
 * top as a quiet mark. Used only on Edition cards while product
 * photography is pending. Do not redraw or recolor the glyph.
 */
export function EditionPlaceholder({ number }: { number: string }) {
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
      <img
        src="/logo/tsm-glyph-ember.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 w-[32%] -translate-x-1/2 -translate-y-1/2 opacity-90"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-metadata/20" />
    </div>
  );
}
