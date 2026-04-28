"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const sections = [
    {
        index: 1,
        title: "Overview",
        description: "Introduction to the project development process and how to use this guide.",
        url: "/project-development",
        available: true,
    },
    {
        index: 2,
        title: "Brainstorming",
        description:
            "Evaluate your idea, write user stories, define your MVP, and plan the long-term vision before writing a single line of code.",
        url: "/project-development/brainstorm",
        available: true,
    },
    {
        index: 3,
        title: "System Architecture Tools",
        description:
            "Design your data models, flow patterns, and architectural boundaries. Choose between monolithic and distributed systems.",
        url: "/project-development/system-architecture",
        available: false,
    },
    {
        index: 4,
        title: "Setting up a Development Environment",
        description:
            "Configure your local tooling, version control, and editor to be productive from day one.",
        url: "/project-development/dev-environment",
        available: false,
    },
    {
        index: 5,
        title: "Version Control & Git Workflow",
        description:
            "Establish branching strategies, commit conventions, and code review practices that scale with your team.",
        url: "/project-development/version-control",
        available: false,
    },
    {
        index: 6,
        title: "Testing Strategy",
        description:
            "Plan your unit, integration, and end-to-end test coverage before you build, not after.",
        url: "/project-development/testing",
        available: false,
    },
    {
        index: 7,
        title: "CI/CD & Deployment",
        description:
            "Automate your build, test, and release pipeline so that shipping is never a manual process.",
        url: "/project-development/ci-cd",
        available: false,
    },
];

export default function ProjectDevelopmentPage() {
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
            <Box>
                <Typography variant="h1" gutterBottom>
                    Project Development
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "60ch" }}>
                    A practical, opinionated guide to taking a software project from raw idea to
                    shipped product. Work through each section in order or jump to what you need.
                </Typography>
            </Box>

            <Grid container spacing={2}>
                {sections.map((section) => {
                    const cardContent = (
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="caption" color="text.secondary">
                                    {section.index}
                                </Typography>
                                {!section.available && <Chip label="Coming soon" size="small" />}
                            </Box>
                            <Typography variant="h6" component="h2">
                                {section.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {section.description}
                            </Typography>
                        </CardContent>
                    );

                    return (
                        <Grid key={section.index} size={{ xs: 12, sm: 6, md: 4 }}>
                            {section.available ? (
                                <NextLink href={section.url} style={{ textDecoration: "none" }}>
                                    <Card
                                        variant="outlined"
                                        sx={{ height: "100%", cursor: "pointer" }}
                                    >
                                        <CardActionArea
                                            sx={{ height: "100%", alignItems: "flex-start" }}
                                        >
                                            {cardContent}
                                        </CardActionArea>
                                    </Card>
                                </NextLink>
                            ) : (
                                <Card variant="outlined" sx={{ height: "100%", opacity: 0.6 }}>
                                    {cardContent}
                                </Card>
                            )}
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
