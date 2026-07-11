"use client";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { socialLinks } from "@/data/site";

const icons = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    email: EmailRoundedIcon,
};

export default function SocialLinks({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
    return (
        <Stack direction="row" spacing={1} sx={{ color: "text.secondary" }}>
            {socialLinks.map(({ label, href, kind }) => {
                const Icon = icons[kind];
                return (
                    <IconButton
                        key={label}
                        color="inherit"
                        size={size}
                        href={href}
                        aria-label={label}
                        {...(kind !== "email"
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                    >
                        <Icon />
                    </IconButton>
                );
            })}
        </Stack>
    );
}
