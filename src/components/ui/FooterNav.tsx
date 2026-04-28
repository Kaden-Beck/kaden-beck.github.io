"use client";

import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export type FooterNavElement = { url: string; title: string; index: number };

export default function FooterNav({ navElements }: { navElements: FooterNavElement[] }) {
    const pathname = usePathname();

    const currentIndex = navElements.find((el) => el.url === pathname)?.index ?? -1;
    const prev = navElements.find((el) => el.index === currentIndex - 1);
    const next = navElements.find((el) => el.index === currentIndex + 1);

    return (
        <>
            <Divider />
            <Container maxWidth="lg" component="nav">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                    }}
                >
                    {prev ? (
                        <Button href={prev.url} variant="outlined" sx={{ px: 2, py: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <ArrowBackIcon fontSize="small" />
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography
                                        variant="caption"
                                        sx={{ display: "block" }}
                                        color="text.secondary"
                                    >
                                        Previous
                                    </Typography>
                                    {prev.title}
                                </Box>
                            </Box>
                        </Button>
                    ) : (
                        <span />
                    )}
                    {next ? (
                        <Button href={next.url} variant="outlined" sx={{ px: 2, py: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box sx={{ textAlign: "right" }}>
                                    <Typography
                                        variant="caption"
                                        sx={{ display: "block" }}
                                        color="text.secondary"
                                    >
                                        Next
                                    </Typography>
                                    {next.title}
                                </Box>
                                <ArrowForwardIcon fontSize="small" />
                            </Box>
                        </Button>
                    ) : (
                        <span />
                    )}
                </Box>
            </Container>
        </>
    );
}
