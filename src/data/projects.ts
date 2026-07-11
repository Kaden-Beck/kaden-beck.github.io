/**
 * Project catalogue. `featured` projects surface on the home page and get a
 * detail route; the rest render as lighter cards on the Projects index.
 */

export type Project = {
    slug: string;
    title: string;
    /** Short one-liner for cards. */
    summary: string;
    /** Primary tech chips shown on cards. */
    tech: string[];
    status: "In progress" | "Live" | "Ongoing";
    /** Detail route within the site, if one exists. */
    href?: string;
    /** External source/demo link. */
    repo?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        slug: "mtg-app",
        title: "MTG Collection & Deck Manager",
        summary:
            "A self-hosted Magic: The Gathering web app that unifies collection management, deck building, price tracking, and recommendations on top of the Scryfall API.",
        tech: ["Next.js", "TypeScript", "tRPC", "Drizzle ORM", "PostgreSQL", "TanStack Query"],
        status: "In progress",
        href: "/projects/mtg-app/",
        featured: true,
    },
    {
        slug: "portfolio",
        title: "This Portfolio",
        summary:
            "The site you're on now — a statically-exported personal site and writing space, built and deployed to GitHub Pages.",
        tech: ["Next.js 16", "Material UI", "TypeScript", "GitHub Pages"],
        status: "Live",
        repo: "https://github.com/Kaden-Beck/kaden-beck.github.io",
    },
    {
        slug: "cse-coursework",
        title: "CS Coursework",
        summary:
            "Projects from my BYU-Idaho / BYU-Pathway computer science track — REST APIs with authentication and docs, data-structure implementations, and software-testing labs.",
        tech: ["Node.js", "Express", "MongoDB", "Swagger / OAuth", "Python"],
        status: "Ongoing",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Long-form content for the MTG app detail page. */
export const mtgApp = {
    title: "MTG Collection & Deck Manager",
    tagline: "One roof for collection, decks, prices, and recommendations.",
    overview:
        "A personal, self-hosted Magic: The Gathering web app built on the Scryfall API. The goal is to consolidate collection management, deck building, price tracking, and EDHRec-style recommendations into a single tool — with no third-party rate limits or feature paywalls.",
    stack: [
        { layer: "Framework", choice: "Next.js (App Router) + TypeScript" },
        { layer: "UI", choice: "shadcn/ui + Tailwind CSS" },
        { layer: "Data fetching", choice: "tRPC + TanStack Query" },
        { layer: "ORM", choice: "Drizzle ORM" },
        { layer: "Database", choice: "PostgreSQL" },
        { layer: "Background jobs", choice: "pg-boss (Postgres-native)" },
        { layer: "Auth", choice: "NextAuth.js" },
        { layer: "Charts", choice: "Recharts" },
    ],
    features: [
        {
            title: "Universal Collection Converter",
            body: "Convert between Manabox, Moxfield, and Archidekt exports using each card's Scryfall ID as a universal pivot key. Every format normalizes into one canonical shape, so conversions are format → canonical → target rather than brittle direct mappings — which sidesteps naming ambiguity and condition-scale mismatches.",
        },
        {
            title: "Deck Builder",
            body: "Scryfall-syntax card search, main/side/maybe boards and a commander slot, Archidekt-style categories, and visual grouping by type, mana curve, and color identity — including commander legality checks derived from Scryfall color identity.",
        },
        {
            title: "Price Tracking",
            body: "Daily price snapshots stored as time-series data drive trend charts for individual cards and total collection value over time, plus price alerts. Built around Scryfall's once-a-day price granularity.",
        },
        {
            title: "Recommendations",
            body: "EDHRec recommendation data pulled through a read-through cache with a TTL, isolated behind an adapter so upstream shape changes stay contained. Collection-ownership status is overlaid on top of each suggestion.",
        },
    ],
    architecture: [
        "Frontend (Next.js + React) — feature modules: Converter, Deck Builder, Price Tracker, Recommendations",
        "API layer (tRPC) — typed end-to-end contracts between client and server",
        "Services — Scryfall cache sync (bulk data every 24h), format converter, price aggregator",
        "Database (PostgreSQL + Drizzle) — cards, decks, collection, price_history, recommendation cache",
        "Background jobs (pg-boss) — daily bulk sync, daily price snapshot, weekly cache refresh",
    ],
    notes: [
        "Scryfall bulk data updates every 12 hours and prices once per day — the sync layer respects that cadence instead of polling.",
        "Uses `@scryfall/api-types` for full TypeScript typing of card objects (legalities, color identity, mana cost).",
        "Designed to comply with Scryfall's Fan Content Policy — no paywalling or repackaging of data.",
    ],
};
