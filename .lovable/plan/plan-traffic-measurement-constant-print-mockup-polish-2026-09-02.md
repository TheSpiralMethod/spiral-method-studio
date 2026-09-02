# Plan — Traffic measurement + Constant Print mockup polish

## 1. Traffic: Lovable native analytics (already on)

Your published site already reports to Lovable's built-in analytics — no code, no connector, no setup needed. I can read it directly. Current snapshot (Aug 26 – Sep 2, 2026):

- **111 visitors**, **212 pageviews**, avg **1.9 pageviews/visit**, ~76s avg session, 80% bounce
- Top sources: Direct (95), then Instagram/Bing/Facebook/Google
- Devices: desktop 69, mobile 44
- Countries: MX 37, US 14

**What I'll do:** nothing in code. I'll point you to the in-app Analytics view so you can watch it yourself, and I can pull fresh numbers for any date range on request. If later you want deeper insight (click/scroll tracking, funnels), PostHog or GA4 can be added without changing this.

## 2. Improve the Constant Print mockup (site)

The current `public/products/print-50x70.jpg` is low-res (432×860), grainy, flat-lit, and washed-out — the amber spiral and the line "A SPIRAL AS THE ONLY CONSTANT" read softly. This is the image shown in the Edition 02 card.

**Approach:** use `imagegen--edit_image` on the existing file (not regenerate from scratch) to lift it to a premium noir editorial look while keeping the brand palette:
- Deepen the blacks; remove the digital grain.
- Add a single soft directional light + faint rim so the print's edge separates from the dark ground.
- Make the amber spiral and the line read as crisp foil (sharp, slightly specular), not muddy ink.
- Re-frame to a clean 4:5 (~1200×1500) with breathing room at the bottom.
- Keep the exact text "A SPIRAL AS THE ONLY CONSTANT" and the "TSM · 05 / 09" index; keep the muted slate/amber palette.

**Output:** overwrite `public/products/print-50x70.jpg`. No change to `editions.ts`, no layout/style change — the Editions card already renders this path with `object-contain`. I'll visually verify the result (legibility, no garbled text, no artifacts) before finishing.

Risk note: image models can distort text. If the edit garbles the line, I'll fall back to generating a fresh brand-accurate mockup in the Spiral Method style and tell you which path I took.

## 3. Framed product-shot (marketing image)

After the mockup is improved, I'll capture a screenshot of the Edition 02 card from the live preview and run it through the built-in product-shot generator: macOS-style window frame, rounded corners, drop shadow, mesh-gradient backdrop. I'll pick a noir-matching preset (midnight or ember) so it reads as Spiral Method, not generic SaaS.

**Output:** a PNG saved to `/mnt/documents/` for you to use on Instagram/social. This does not touch the site.

## Out of scope
No new colors, fonts, layouts, cart/checkout, database, or analytics code. No changes to other editions, archive, or copy.
