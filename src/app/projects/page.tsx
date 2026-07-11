import type { Metadata } from "next";
import ProjectsIndex from "@/components/projects/ProjectsIndex";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Software projects by Kaden Beck — a self-hosted Magic: The Gathering app, this portfolio, and computer-science coursework.",
};

export default function ProjectsPage() {
    return <ProjectsIndex />;
}
