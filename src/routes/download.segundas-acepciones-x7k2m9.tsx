import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/spiral/Reveal";

/**
 * Private, unlisted download page for the PDF edition of
 * "Segundas acepciones". Buyers reach this only after paying on Stripe.
 *
 * Not linked from nav, footer, or sitemap. noindex, nofollow so search
 * engines never index it. The PDF itself lives at
 * `public/segundas-acepciones.pdf`; if the file is absent the page still
 * renders — the download control simply points at the path.
 */
export const Route = createFileRoute("/download/segundas-acepciones-x7k2m9")({
  head: () => ({
    meta: [
      { title: "Segundas acepciones — Download" },
      { name: "description", content: "Your copy of Segundas acepciones." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <div className="grain flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <Reveal>
          <p className="label-editorial">THE SPIRAL METHOD</p>
          <h1 className="mt-6 text-3xl leading-tight sm:text-4xl">
            Segundas acepciones
          </h1>
          <p className="mt-4 text-sm tracking-wide text-metadata">
            Sixty-six words, defined twice. 88 pages.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <p className="mx-auto mt-10 max-w-prose text-sm leading-relaxed text-metadata">
            Your copy is below. The link stays on this page — save the file
            somewhere you will find it again.
          </p>

          <div className="mt-10">
            <a
              href="/segundas-acepciones.pdf"
              download
              className="link-quiet"
            >
              Download the PDF
            </a>
          </div>

          <p className="mt-10 text-xs tracking-wide text-metadata/70">
            Trouble downloading? Write to ivan@thespiralmethod.life
          </p>
        </Reveal>
      </div>
    </div>
  );
}
