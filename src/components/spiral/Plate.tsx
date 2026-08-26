import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A single editorial plate: near-black grainy ground, centered statement,
 * a thin blue-gray rule near the lower edge, and archival metadata beneath it.
 */
export function Plate({
  id,
  index,
  label,
  children,
  className,
  minHeight = "full",
  ariaLabel,
}: {
  id?: string | undefined;
  index: string;
  label: string;
  children: ReactNode;
  className?: string | undefined;
  minHeight?: "full" | "auto" | undefined;
  ariaLabel?: string | undefined;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel ?? `Plate ${index}`}
      className={cn(
        "grain relative flex w-full flex-col justify-between px-6 pt-24 pb-8 sm:px-10 sm:pb-10",
        minHeight === "full" ? "min-h-[100svh]" : "min-h-[70svh]",
        className,
      )}
    >
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-3xl text-center">{children}</div>
      </div>

      <div className="mt-10 w-full">
        <div className="h-px w-full bg-metadata/35" />
        <div className="mt-3 flex items-baseline justify-between gap-6">
          <span className="label-editorial">TSM · {index} / 09</span>
          <span className="label-editorial text-right">{label}</span>
        </div>
      </div>
    </section>
  );
}
