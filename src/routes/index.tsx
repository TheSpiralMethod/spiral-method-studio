import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/spiral/SiteNav";
import { Hero } from "@/components/spiral/Hero";
import { MethodSection } from "@/components/spiral/MethodSection";
import { ArchiveGrid } from "@/components/spiral/ArchiveGrid";
import { EditionsSection } from "@/components/spiral/EditionsSection";
import { StatementSection } from "@/components/spiral/StatementSection";
import { SubscribeForm } from "@/components/spiral/SubscribeForm";
import { SiteFooter } from "@/components/spiral/SiteFooter";

const TITLE = "The Spiral Method — A Visual and Editorial Archive";
const DESCRIPTION = "An editorial space for image, form, and memory.";

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
        <MethodSection />
        <ArchiveGrid />
        <EditionsSection />
        <StatementSection />
        <SubscribeForm />
      </main>
      <SiteFooter />
    </div>
  );
}
