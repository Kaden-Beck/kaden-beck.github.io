import type { Metadata } from "next";
import MtgApp from "@/components/projects/MtgApp";

export const metadata: Metadata = {
    title: "MTG Collection & Deck Manager",
    description:
        "A self-hosted Magic: The Gathering web app for collection management, deck building, price tracking, and recommendations — built with Next.js, tRPC, Drizzle, and PostgreSQL.",
};

export default function MtgAppPage() {
    return <MtgApp />;
}
