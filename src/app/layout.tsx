import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import ThemeRegistry from "@/components/ThemeRegistry";
import AppAppBar from "@/components/ui/AppAppBar";
import Footer from "@/components/ui/Footer";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

const BASE_URL = "https://kaden-beck.github.io";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Kaden Beck",
        template: "%s | Kaden Beck",
    },
    description:
        "Personal website of Kaden Beck — software developer writing about building software well.",
    authors: [{ name: "Kaden Beck", url: BASE_URL }],
    openGraph: {
        type: "website",
        url: BASE_URL,
        siteName: "Kaden Beck",
        title: "Kaden Beck",
        description:
            "Personal website of Kaden Beck — software developer writing about building software well.",
    },
    twitter: {
        card: "summary",
        title: "Kaden Beck",
        description:
            "Personal website of Kaden Beck — software developer writing about building software well.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <AppRouterCacheProvider>
                    <ThemeRegistry>
                        <AppAppBar />
                        {children}
                        <Footer />
                    </ThemeRegistry>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
