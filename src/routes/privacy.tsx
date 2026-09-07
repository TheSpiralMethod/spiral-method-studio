import { createFileRoute } from "@tanstack/react-router";

import { PolicyPage } from "@/components/spiral/PolicyPage";
import { PRIVACY_LINES } from "@/data/content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — The Spiral Method" },
      { name: "description", content: "What this site does and does not collect." },
    ],
    links: [{ rel: "canonical", href: "https://thespiralmethod.life/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <PolicyPage label="THE SPIRAL METHOD" title="Privacy." lines={PRIVACY_LINES} />;
}
