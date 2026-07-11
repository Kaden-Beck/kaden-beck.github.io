"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { profile } from "@/data/site";
import { featuredProjects, type Project } from "@/data/projects";
import { lvtInternship } from "@/data/experience";
import SocialLinks from "@/components/ui/SocialLinks";

function FeaturedProjectCard({ project }: { project: Project }) {
    const inner = (
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5, height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Chip label={project.status} size="small" color="primary" variant="outlined" />
            </Box>
            <Typography variant="h6" component="h3">
                {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {project.summary}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: "auto", pt: 1 }}>
                {project.tech.slice(0, 4).map((t) => (
                    <Chip key={t} label={t} size="small" />
                ))}
            </Box>
        </CardContent>
    );

    return (
        <Card variant="outlined" sx={{ height: "100%" }}>
            {project.href ? (
                <NextLink
                    href={project.href}
                    style={{ textDecoration: "none", color: "inherit", height: "100%" }}
                >
                    <CardActionArea sx={{ height: "100%", alignItems: "stretch" }}>
                        {inner}
                    </CardActionArea>
                </NextLink>
            ) : (
                inner
            )}
        </Card>
    );
}

export default function Home() {
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: "flex", flexDirection: "column", my: 16, gap: 10 }}
        >
            {/* Hero */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: { xs: 2, md: 6 } }}>
                <Typography variant="body1" color="text.secondary">
                    {profile.role} · {profile.location}
                </Typography>
                <Typography variant="h1" sx={{ fontWeight: 700 }}>
                    {profile.name}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: "60ch" }}>
                    {profile.intro}
                </Typography>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ mt: 2, alignItems: { sm: "center" } }}
                >
                    <Stack direction="row" spacing={1.5}>
                        <Button
                            variant="contained"
                            component={NextLink}
                            href="/projects/"
                            endIcon={<ArrowForwardRoundedIcon />}
                        >
                            View Projects
                        </Button>
                        <Button variant="outlined" component={NextLink} href="/about-me/">
                            About Me
                        </Button>
                    </Stack>
                    <SocialLinks />
                </Stack>
            </Box>

            {/* Featured projects */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                    }}
                >
                    <Typography variant="h4" component="h2">
                        Featured Work
                    </Typography>
                    <Button
                        component={NextLink}
                        href="/projects/"
                        size="small"
                        endIcon={<ArrowForwardRoundedIcon fontSize="small" />}
                    >
                        All projects
                    </Button>
                </Box>
                <Grid container spacing={2}>
                    {featuredProjects.map((project) => (
                        <Grid key={project.slug} size={{ xs: 12, md: 6 }}>
                            <FeaturedProjectCard project={project} />
                        </Grid>
                    ))}
                    <Grid size={{ xs: 12, md: 6 }}>
                        {/* Internship highlight */}
                        <Card variant="outlined" sx={{ height: "100%", bgcolor: "action.hover" }}>
                            <NextLink
                                href="/experience/"
                                style={{ textDecoration: "none", color: "inherit", height: "100%" }}
                            >
                                <CardActionArea sx={{ height: "100%", alignItems: "stretch" }}>
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 1.5,
                                            height: "100%",
                                        }}
                                    >
                                        <Chip
                                            label="Experience"
                                            size="small"
                                            color="secondary"
                                            variant="outlined"
                                        />
                                        <Typography variant="h6" component="h3">
                                            {lvtInternship.role}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {lvtInternship.company} · {lvtInternship.summary}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                mt: "auto",
                                                pt: 1,
                                                color: "primary.main",
                                            }}
                                        >
                                            <Typography variant="button">Read more</Typography>
                                            <ArrowForwardRoundedIcon fontSize="small" />
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </NextLink>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            {/* Writing / guides pointer */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography variant="h4" component="h2">
                    Writing on the craft
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "60ch" }}>
                    I keep a working guide to taking a software project from raw idea to shipped
                    product — brainstorming, architecture, and the practices that make building
                    software sustainable.
                </Typography>
                <Box>
                    <Button
                        variant="outlined"
                        component={NextLink}
                        href="/project-development/"
                        endIcon={<ArrowForwardRoundedIcon />}
                    >
                        On Software Design
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
