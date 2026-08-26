import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string | undefined;
  title: ReactNode;
  subtitle?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      {eyebrow ? <p className="label-editorial mb-5">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl leading-[1.1] sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
