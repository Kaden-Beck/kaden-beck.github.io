import type { Metadata } from "next";
import AboutMe from "@/components/AboutMe";

export const metadata: Metadata = {
    title: "About Me",
    description:
        "Kaden Beck — full-stack software engineer and SDET. Background, skills, education, and how to get in touch.",
};

export default function AboutMePage() {
    return <AboutMe />;
}
