import { useEffect, useRef } from "react";
import type { ArchiveItem } from "@/data/content";
import { PLACEHOLDER } from "@/data/content";
import { ArtworkPlaceholder } from "./ArtworkPlaceholder";

export function ArchiveModal({ item, onClose }: { item: ArchiveItem; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/92 p-4 backdrop-blur-sm sm:p-8">
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`archive-modal-${item.id}`}
        className="relative my-auto w-full max-w-4xl border border-hairline bg-card"
      >
        <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
          <p className="label-editorial">{item.number}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="p-1 text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            Close
          </button>
        </div>

        <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-[1.2fr_1fr]">
          <ArtworkPlaceholder
            variant={item.variant}
            ratio="portrait"
            label={PLACEHOLDER.artwork}
            src={item.image || undefined}
            alt={item.image ? item.workingTitle : undefined}
          />

          <div>
            <h2 id={`archive-modal-${item.id}`} className="text-3xl leading-tight">
              {item.workingTitle}
            </h2>
            <p className="label-editorial mt-4">{item.finalTitle}</p>
            <hr className="my-6 border-hairline" />
            <p className="text-sm leading-relaxed text-muted-foreground">{item.curatorialText}</p>
            <p className="label-editorial mt-8">{PLACEHOLDER.artwork}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
