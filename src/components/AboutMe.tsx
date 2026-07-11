"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { profile } from "@/data/site";
import { lvtInternship, education } from "@/data/experience";
import SocialLinks from "@/components/ui/SocialLinks";

const skillGroups: { label: string; items: string[] }[] = [
    {
        label: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
    },
    {
        label: "Frontend",
        items: ["React", "Next.js", "Material UI", "Tailwind CSS", "shadcn/ui"],
    },
    {
        label: "Backend & Data",
        items: ["Node.js", "Express", "NestJS", "GraphQL", "tRPC", "PostgreSQL", "MongoDB"],
    },
    {
        label: "Testing & QA",
        items: ["pytest", "Playwright", "Jest", "Test automation", "Apollo Federation testing"],
    },
    {
        label: "Platform & Tooling",
        items: ["Docker", "Kubernetes", "ArgoCD", "Helm", "Git", "CI/CD"],
    },
];

export default function AboutMe() {
    return (
        <Container
            maxWidth="md"
            component="main"
            sx={{ display: "flex", flexDirection: "column", my: 16, gap: 6 }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h1" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {profile.role} · {profile.location}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "68ch" }}>
                <Typography variant="body1">
                    I&apos;m Kaden Beck, a full-stack software engineer based in {profile.location}.
                    I work across the stack — building React and Next.js frontends, GraphQL and REST
                    backends, and the automated tests that keep them honest.
                </Typography>
                <Typography variant="body1">
                    Most recently I&apos;ve been a{" "}
                    <strong>Software Development Engineer in Test</strong> at{" "}
                    {lvtInternship.company}, where I write end-to-end and backend integration tests
                    for a distributed, event-driven platform and build internal tooling to make test
                    results easier to trust. I&apos;m drawn to the parts of engineering that make
                    software durable: clear architecture, readable code, and testing strategy that
                    is planned rather than bolted on.
                </Typography>
                <Typography variant="body1">
                    Outside of work I build things for myself — like a self-hosted app to manage my
                    Magic: The Gathering collection — and write about the process of taking a
                    project from raw idea to shipped product.
                </Typography>
            </Box>

            <Divider />

            {/* Skills */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography variant="h4" component="h2">
                    Skills & Tools
                </Typography>
                {skillGroups.map((group) => (
                    <Box
                        key={group.label}
                        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                        <Typography variant="subtitle2" color="text.secondary">
                            {group.label}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                            {group.items.map((item) => (
                                <Chip key={item} label={item} size="small" />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>

            <Divider />

            {/* Education */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Education
                </Typography>
                <Typography variant="h6">{education.program}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {education.school}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1 }}>
                    {education.coursework.map((c) => (
                        <Chip key={c} label={c} size="small" variant="outlined" />
                    ))}
                </Box>
            </Box>

            <Divider />

            {/* Contact */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h4" component="h2">
                    Get in touch
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "60ch" }}>
                    I&apos;m always happy to talk about software, testing, or a good project idea.
                </Typography>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ alignItems: { sm: "center" } }}
                >
                    <Button
                        variant="contained"
                        component={NextLink}
                        href="/experience/"
                        endIcon={<ArrowForwardRoundedIcon />}
                    >
                        See my experience
                    </Button>
                    <SocialLinks />
                </Stack>
            </Box>
        </Container>
    );
}
