import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://kaden-beck.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about-me`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/mtg-app`,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/experience`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/project-development`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/project-development/brainstorm`,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}
