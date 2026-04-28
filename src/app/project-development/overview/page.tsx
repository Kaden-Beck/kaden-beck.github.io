import React from "react";
import Link from "next/link";

export default function ProjectDevelopmentPage() {
    return (
        <>
            <h1>Project Development </h1>
            <h2>Sections </h2>
            <Link href={"/project-development/brainstorm"}>Brainstorm</Link>
        </>
    );
}
