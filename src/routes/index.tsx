import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/spiral/SiteNav";
import { Hero } from "@/components/spiral/Hero";
import { ManifestoSection } from "@/components/spiral/ManifestoSection";
import { ArchiveIndex } from "@/components/spiral/ArchiveIndex";
import { EditionsSection } from "@/components/spiral/EditionsSection";
import { AboutSection } from "@/components/spiral/AboutSection";
import { ContactSection } from "@/components/spiral/ContactSection";

import { SiteFooter } from "@/components/spiral/SiteFooter";

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
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
        <EditionsSection />
        <AboutSection />
        <ContactSection />

      </main>
      <SiteFooter />
    </div>
  );
}
