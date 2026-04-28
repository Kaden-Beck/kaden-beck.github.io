@AGENTS.md

# Project

This is Kaden Beck's personal website, hosted at kaden-beck.github.io. It is built with:

- **Next.js 16** (see AGENTS.md — read `node_modules/next/dist/docs/` before writing Next.js code)
- **Material UI v9** (`@mui/material`, `@emotion/react`, `@emotion/styled`)
- **TypeScript**
- **React 19**

Deployment target is GitHub Pages via the `kaden-beck.github.io` repository.

# Site Structure

## Layout Pattern

All pages use `AppAppBar` + `Container` + `Footer` from `src/components/ui/`. The standard wrapper:

```tsx
<>
    <AppAppBar />
    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
        {/* page content */}
    </Container>
    <Footer />
</>
```

## Pages

- `/` — Blog home (`src/app/page.tsx` → `<Blog />`)
- `/project-development/` — Project development index with section cards (`src/app/project-development/page.tsx`)
- `/project-development/brainstorm/` — Project brainstorm process guide, uses MUI Accordions

## Component Conventions

- Pages with interactivity use `"use client"` at the top
- Shared layout components live in `src/components/ui/`
- Theme utilities live in `src/components/shared-theme/`
- Passing a Next.js component (e.g. `NextLink`) as a `component={}` prop is only valid inside `"use client"` files — never from server components. Prefer wrapping with `<NextLink>` directly when in doubt.
- `FooterNav` (`src/components/ui/FooterNav.tsx`) provides prev/next section navigation; pass a `navElements` array from the segment layout

# URL & SEO Conventions

- **Trailing slashes**: enforced via `trailingSlash: true` in `next.config.ts`. Always use trailing slashes in `href` values and `navElements` URLs.
- **Canonical URL**: `https://kaden-beck.github.io` — set as `metadataBase` in root layout.
- **Title template**: root layout uses `template: "%s | Kaden Beck"` — add `export const metadata = { title: "Page Name" }` to each page.
- **Sitemap**: `src/app/sitemap.ts` — add new pages here when created. Use a real date for `lastModified`, not `new Date()`.
- **OG image**: add a static `src/app/opengraph-image.png` before sharing any links publicly — social platforms cache the first image they see.

# Agent Skill Files

Additional agent rules and documentation live in `agents/`:

- [agents/MATERIAL_UI.md](agents/MATERIAL_UI.md) — MUI component index and links to official docs. Reference this before writing or modifying MUI components.
