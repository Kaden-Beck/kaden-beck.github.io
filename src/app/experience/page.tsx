import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Kaden Beck's SDET internship at LiveView Technologies — end-to-end and backend test automation for a distributed, event-driven platform.",
};

export default function ExperiencePage() {
    return <Experience />;
}
