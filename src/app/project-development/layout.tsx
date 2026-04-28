"use client";

import { useState } from "react";
import FooterNav, { type FooterNavElement } from "@/components/ui/FooterNav";

export default function ProjectDevelopmentLayout({ children }: { children: React.ReactNode }) {
    const [navElements] = useState<FooterNavElement[]>([
        { url: "/project-development", title: "Overview", index: 0 },
        { url: "/project-development/brainstorm", title: "Brainstorming", index: 1 },
        {
            url: "/project-development/system-architecture",
            title: "System Architecture Tools",
            index: 2,
        },
        {
            url: "/project-development/dev-environment",
            title: "Setting up a Development Environment",
            index: 3,
        },
        {
            url: "/project-development/version-control",
            title: "Version Control & Git Workflow",
            index: 4,
        },
        { url: "/project-development/testing", title: "Testing Strategy", index: 5 },
        { url: "/project-development/ci-cd", title: "CI/CD & Deployment", index: 6 },
    ]);

    return (
        <>
            {children}
            <FooterNav navElements={navElements} />
        </>
    );
}
