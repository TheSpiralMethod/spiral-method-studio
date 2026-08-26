import { MANIFESTO_PLATES } from "@/data/content";
import { LogoMark } from "./LogoMark";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";

/** Renders a statement line, optionally marking one word in ember. */
function StatementLine({ line, emphasis }: { line: string; emphasis?: string | undefined }) {
  if (!emphasis) return <>{line}</>;

  const idx = line.toLowerCase().indexOf(emphasis.toLowerCase());
  if (idx === -1) return <>{line}</>;

  return (
    <>
      {line.slice(0, idx)}
      <em className="text-ember not-italic">{line.slice(idx, idx + emphasis.length)}</em>
      {line.slice(idx + emphasis.length)}
    </>
  );
}

export function ManifestoSection() {
  return (
    <div id="manifesto">
      {MANIFESTO_PLATES.slice(1).map((plate) => (
        <Plate key={plate.index} index={plate.index} label={plate.label}>
          {plate.glyph === "top" ? (
            <Reveal className="mb-10 flex justify-center">
              <LogoMark
                asset="glyph"
                tone="ember"
                showPlaceholderText={false}
                className="max-w-[5rem] border-none px-0 py-0"
              />
            </Reveal>
          ) : null}

          <Reveal>
            <p className="text-balance text-3xl leading-[1.25] sm:text-5xl md:text-6xl md:leading-[1.2]">
              {plate.lines.map((line, i) => (
                <span key={line + i} className="block">
                  <StatementLine line={line} emphasis={plate.emphasis} />
                </span>
              ))}
            </p>
          </Reveal>
        </Plate>
      ))}
    </div>
  );
}
