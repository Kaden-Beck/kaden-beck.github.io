"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

import { projects, type Project } from "@/data/projects";

function ProjectCardBody({ project }: { project: Project }) {
    return (
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5, height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Chip
                    label={project.status}
                    size="small"
                    color={project.featured ? "primary" : "default"}
                    variant="outlined"
                />
                {project.featured && <Chip label="Featured" size="small" color="primary" />}
            </Box>
            <Typography variant="h6" component="h2">
                {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {project.summary}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: "auto", pt: 1 }}>
                {project.tech.map((t) => (
                    <Chip key={t} label={t} size="small" />
                ))}
            </Box>
        </CardContent>
    );
}

export default function ProjectsIndex() {
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography variant="h1" gutterBottom>
                    Projects
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "60ch" }}>
                    Things I&apos;ve built — for work, for school, and for fun. Personal projects
                    are where I get to make my own architecture and testing calls end to end.
                </Typography>
            </Box>

            <Grid container spacing={2}>
                {projects.map((project) => (
                    <Grid key={project.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card variant="outlined" sx={{ height: "100%" }}>
                            {project.href ? (
                                <NextLink
                                    href={project.href}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                        height: "100%",
                                    }}
                                >
                                    <CardActionArea sx={{ height: "100%", alignItems: "stretch" }}>
                                        <ProjectCardBody project={project} />
                                    </CardActionArea>
                                </NextLink>
                            ) : project.repo ? (
                                <CardActionArea
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ height: "100%", alignItems: "stretch" }}
                                >
                                    <ProjectCardBody project={project} />
                                </CardActionArea>
                            ) : (
                                <ProjectCardBody project={project} />
                            )}
                            {project.repo && (
                                <Box sx={{ px: 2, pb: 1.5 }}>
                                    <Link
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="body2"
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                        }}
                                    >
                                        <GitHubIcon fontSize="small" /> Source
                                    </Link>
                                </Box>
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
