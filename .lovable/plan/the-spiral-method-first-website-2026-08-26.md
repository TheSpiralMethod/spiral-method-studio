# The Spiral Method — First Website

A single-page, mobile-first English landing site with a contemporary noir editorial aesthetic. No backend, no external services, no personal data — every image, title, link, and product detail ships as a clearly marked placeholder.

## Design system

- Warm charcoal-black background, bone white text, ash gray secondary, one restrained ember/aged-amber accent — all defined as semantic tokens in `src/styles.css`.
- Expressive editorial serif for headings, clean sans-serif for body, loaded via `<link>` in the root route.
- Barely visible grain/paper texture as a CSS overlay utility, thin hairline dividers, small monospaced archive numbers, generous negative space, controlled asymmetry.
- Slow fade-in-on-scroll animations, fully disabled under `prefers-reduced-motion`.

## Page sections (all on `/`)

1. **Navigation** — text logo THE SPIRAL METHOD, links Method / Archive / Editions / Contact, secondary "Explore" button. Transparent over hero, solid dark after scroll. Accessible collapsible mobile menu with focus trap and Escape close.
2. **Hero** — "It is not a loop. It is a spiral." / "An editorial space for image, form, and memory." / buttons "Explore the archive" and "View editions" / label "LIVING ARCHIVE — 001". Large abstract CSS/SVG composition of shadow, an irregular line, haze and a single light source, marked `[REPLACE WITH ORIGINAL HERO ARTWORK]`.
3. **The Method** — "A way of looking at what returns." plus the supplied body copy and the three blocks 01 Fragment / 02 Form / 03 Trace, joined by a subtle broken-line spiral SVG.
4. **Archive** — "Found fragments." / "An evolving collection of images, forms, and signals." Responsive editorial grid of six placeholder items (001 Threshold through 006 Background Signal). Each carries `[REPLACE WITH ORIGINAL ARTWORK]`, `[ADD FINAL TITLE]`, `[ADD OPTIONAL CURATORIAL TEXT]`. Selecting one opens an accessible modal with large visual, archive number, title and the same marked placeholder fields.
5. **Editions** — "Objects from the archive." plus body copy and three cards (Garment, Print, Digital object) with `[REPLACE WITH ORIGINAL PRODUCT MOCKUP]`, `[ADD EDITION NAME]`, `[ADD SHORT DESCRIPTION]` and a "Coming soon" label. No cart, price, or checkout.
6. **Statement** — full-screen quiet composition: "Not everything that changes is lost. / Some things find another way to exist." with one ember-light detail.
7. **Email updates** — "Receive the next signals." optional Name, required Email, "Receive updates" button, client-side validation, success state "Thank you. Your registration has been received." Nothing is stored or sent; a comment block marks exactly where an email service would later connect.
8. **Footer** — wordmark, tagline "A way of holding what turns.", `[INSTAGRAM URL]`, `[X / TWITTER URL]`, `[CONTACT EMAIL]`, "© 2026 The Spiral Method."

## Components

`SiteNav`, `Hero`, `MethodSection`, `ArchiveGrid` + `ArchiveCard` + `ArchiveModal`, `EditionsSection` + `EditionCard`, `StatementSection`, `SubscribeForm`, `SiteFooter`, plus small shared pieces: `SectionHeading`, `ArtworkPlaceholder`, `Reveal` (reduced-motion-aware fade-in).

Placeholder copy lives in one `src/data/content.ts` file so every replaceable string sits in a single place.

## Technical notes

- TanStack Start route `src/routes/index.tsx` replaces the template placeholder; SEO title "The Spiral Method — A Visual and Editorial Archive" and the given description set in that route's `head()`, with og/twitter tags.
- Semantic landmarks, labelled form controls, visible focus rings, keyboard-operable modal and mobile menu, contrast-checked palette.
- Placeholders are lightweight CSS/SVG compositions, not heavy raster files, so the page stays fast.
- No database, payments, analytics, chat, map, or cookie banner.

## After the build

I will summarise the sections and components, list every placeholder token to replace, give simple steps for swapping images/titles/text/links, and recommend a private local folder structure that keeps original source material outside the project repository.
