import { createFileRoute } from "@tanstack/react-router";

import { PolicyPage } from "@/components/spiral/PolicyPage";
import { SHIPPING_RETURNS_LINES } from "@/data/content";

export const Route = createFileRoute("/shipping-returns")({
  head: () => ({
    meta: [
      { title: "Shipping & Returns — The Spiral Method" },
      {
        name: "description",
        content: "How the PDF edition is delivered, and how returns work.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://thespiralmethod.life/shipping-returns" },
    ],
  }),
  component: ShippingReturnsPage,
});

function ShippingReturnsPage() {
  return (
    <PolicyPage
      label="THE SPIRAL METHOD"
      title="Shipping & returns."
      lines={SHIPPING_RETURNS_LINES}
    />
  );
}
