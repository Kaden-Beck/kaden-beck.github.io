"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import { mtgApp } from "@/data/projects";

export default function MtgApp() {
    return (
        <Container
            maxWidth="md"
            component="main"
            sx={{ display: "flex", flexDirection: "column", my: 16, gap: 6 }}
        >
            <Box>
                <Button
                    component={NextLink}
                    href="/projects/"
                    size="small"
                    startIcon={<ArrowBackRoundedIcon fontSize="small" />}
                    sx={{ mb: 2 }}
                >
                    All projects
                </Button>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
                    <Typography variant="h1">{mtgApp.title}</Typography>
                    <Chip label="In progress" color="primary" variant="outlined" />
                </Box>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
                    {mtgApp.tagline}
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ maxWidth: "68ch" }}>
                {mtgApp.overview}
            </Typography>

            <Divider />

            {/* Features */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography variant="h4" component="h2">
                    Features
                </Typography>
                <Grid container spacing={2}>
                    {mtgApp.features.map((f) => (
                        <Grid key={f.title} size={{ xs: 12, sm: 6 }}>
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
                                    {f.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {f.body}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider />

            {/* Tech stack */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h4" component="h2">
                    Tech Stack
                </Typography>
                <TableContainer component={Paper} variant="outlined">
                    <Table size="small">
                        <TableBody>
                            {mtgApp.stack.map((row) => (
                                <TableRow key={row.layer}>
                                    <TableCell sx={{ fontWeight: 600, width: "40%" }}>
                                        {row.layer}
                                    </TableCell>
                                    <TableCell sx={{ color: "text.secondary" }}>
                                        {row.choice}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Divider />

            {/* Architecture */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h4" component="h2">
                    Architecture
                </Typography>
                <Box
                    component="ul"
                    sx={{ m: 0, pl: 3, display: "flex", flexDirection: "column", gap: 1 }}
                >
                    {mtgApp.architecture.map((line) => (
                        <Typography
                            key={line}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                        >
                            {line}
                        </Typography>
                    ))}
                </Box>
            </Box>

            <Divider />

            {/* Notes / constraints */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h4" component="h2">
                    Design Notes
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {mtgApp.notes.map((note) => (
                        <Box
                            key={note}
                            sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}
                        >
                            <CheckCircleOutlineRoundedIcon
                                fontSize="small"
                                color="primary"
                                sx={{ mt: 0.25 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                {note}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
