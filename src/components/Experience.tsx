"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { lvtInternship } from "@/data/experience";

export default function Experience() {
    return (
        <Container
            maxWidth="md"
            component="main"
            sx={{ display: "flex", flexDirection: "column", my: 16, gap: 6 }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="overline" color="primary">
                    Experience
                </Typography>
                <Typography variant="h1" gutterBottom>
                    {lvtInternship.role}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {lvtInternship.company} · {lvtInternship.location} · {lvtInternship.period}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {lvtInternship.companyBlurb}
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ maxWidth: "68ch" }}>
                {lvtInternship.summary}
            </Typography>

            <Divider />

            {/* Highlights */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography variant="h4" component="h2">
                    What I worked on
                </Typography>
                <Grid container spacing={2}>
                    {lvtInternship.highlights.map((h) => (
                        <Grid key={h.title} size={{ xs: 12, sm: 6 }}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: 2.5,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                }}
                            >
                                <Typography variant="h6" component="h3">
                                    {h.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {h.body}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider />

            {/* Skills */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h4" component="h2">
                    Tools & technologies
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {lvtInternship.skills.map((s) => (
                        <Chip key={s} label={s} size="small" />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
