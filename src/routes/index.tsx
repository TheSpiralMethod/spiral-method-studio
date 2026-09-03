import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/spiral/SiteNav";
import { Hero } from "@/components/spiral/Hero";
import { ManifestoSection } from "@/components/spiral/ManifestoSection";
import { ArchiveIndex } from "@/components/spiral/ArchiveIndex";
import { ArchiveFiles } from "@/components/spiral/ArchiveFiles";
import { EditionsSection } from "@/components/spiral/EditionsSection";
import { AboutSection } from "@/components/spiral/AboutSection";
import { ContactSection } from "@/components/spiral/ContactSection";

import { SiteFooter } from "@/components/spiral/SiteFooter";
import { SHOW_EDITIONS } from "@/data/content";

const TITLE = "The Spiral Method — A Record of Recurring Patterns";
const DESCRIPTION =
  "An independent visual and editorial record of recurring patterns. It documents what returns, what remains, and what shifts by too little to explain.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thespiralmethod.life/" },
      { property: "og:image", content: "https://thespiralmethod.life/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "The Spiral Method — a record of recurring patterns",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://thespiralmethod.life/og.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://thespiralmethod.life/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Spiral Method",
          url: "https://thespiralmethod.life",
          logo: "https://thespiralmethod.life/logo/tsm-full-mark-ember.svg",
          description:
            "An independent visual and editorial record of recurring patterns.",
          sameAs: ["https://instagram.com/the_spiral_method"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <ManifestoSection />
        <ArchiveIndex />
        <ArchiveFiles />
        {SHOW_EDITIONS ? <EditionsSection /> : null}
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
