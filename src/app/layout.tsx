import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import ThemeRegistry from "@/components/ThemeRegistry";
import AppAppBar from "@/components/ui/AppAppBar";
import Footer from "@/components/ui/Footer";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
    title: "kaden-beck.github.io",
    description: "Personal Website of Kaden Beck",
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
