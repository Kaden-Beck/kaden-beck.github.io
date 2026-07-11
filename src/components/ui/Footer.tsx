import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { contact } from "@/data/site";
import SocialLinks from "@/components/ui/SocialLinks";

const footerNav = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about-me/" },
    { label: "Projects", href: "/projects/" },
    { label: "Experience", href: "/experience/" },
];

function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            {"Copyright © "}
            <Link href={contact.github} sx={{ color: "text.secondary" }}>
                Kaden Beck
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <React.Fragment>
            <Divider />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 2, sm: 4 },
                    py: { xs: 4, sm: 5 },
                    textAlign: { sm: "center", md: "left" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        gap: 2,
                        pt: { xs: 4, sm: 8 },
                        width: "100%",
                    }}
                >
                    <div>
                        <Stack
                            direction="row"
                            spacing={0}
                            useFlexGap
                            sx={{ flexWrap: "wrap", alignItems: "center" }}
                        >
                            {footerNav.map((item, index) => (
                                <React.Fragment key={item.href}>
                                    {index > 0 && (
                                        <Typography
                                            sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}
                                        >
                                            &nbsp;•&nbsp;
                                        </Typography>
                                    )}
                                    <Link
                                        variant="body2"
                                        href={item.href}
                                        sx={{ color: "text.secondary" }}
                                    >
                                        {item.label}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </Stack>
                        <Copyright />
                    </div>
                    <SocialLinks size="small" />
                </Box>
            </Container>
        </React.Fragment>
    );
}
