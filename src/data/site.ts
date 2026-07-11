/**
 * Central profile + contact data for the site.
 * Edit these values in one place — they feed the hero, About, Experience,
 * and Footer. Keep URLs trailing-slash-free for external links.
 */

export const profile = {
    name: "Kaden Beck",
    role: "Full-Stack Software Engineer",
    location: "Orem, Utah",
    tagline: "Building software well.",
    /** One-line intro used under the hero heading. */
    intro: "Full-stack engineer and Software Development Engineer in Test. I care about the craft — clean code, thoughtful architecture, and testing that gives teams confidence to ship.",
} as const;

export const contact = {
    email: "kadenb12@gmail.com",
    github: "https://github.com/Kaden-Beck",
    // Update this if your LinkedIn vanity URL changes.
    linkedin: "https://www.linkedin.com/in/kadenbbeck",
} as const;

export const socialLinks = [
    { label: "GitHub", href: contact.github, kind: "github" as const },
    { label: "LinkedIn", href: contact.linkedin, kind: "linkedin" as const },
    { label: "Email", href: `mailto:${contact.email}`, kind: "email" as const },
];
