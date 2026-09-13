# Contributing to spiral-method-studio

Thanks for your interest in this project! This is the source code for
[thespiralmethod.life](https://thespiralmethod.life), an independent editorial
website built with React, TypeScript, Vite, and TanStack Start.

## Getting Started

This project uses [Bun](https://bun.sh) as the package manager and runtime.

```bash
# install dependencies
bun install

# start local dev server
bun run dev

# type-check
bun run tsc --noEmit

# lint
bun run lint

# build for production
bun run build
```

## Project Structure

- `src/components/spiral/` — UI components specific to the site.
- `src/data/` — editable content, logos, and edition/product data.
- `src/routes/` — page routes (TanStack Router file-based routing).
- `public/` — static assets, including brand logo files.

## Guidelines

- Keep pull requests small and focused.
- Do not commit secrets, API keys, or `.env` files.
- Do not add, request, or infer personal data about identifiable people.
- Brand assets in `public/logo/` and `brand/` should not be redrawn, recolored,
  or regenerated without approval — see `public/logo/README.md`.
- Run lint and type-check before opening a pull request.

## Reporting Bugs or Suggesting Features

Please use the issue templates provided under `.github/ISSUE_TEMPLATE/`.

## Code of Conduct

Be respectful and constructive. This is a small, independently maintained
creative project — please keep discussion focused on the code and the site.
