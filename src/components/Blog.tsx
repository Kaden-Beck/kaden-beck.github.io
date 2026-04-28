import Container from "@mui/material/Container";
import AppAppBar from "./ui/AppAppBar";
import MainContent from "./ui/MainContent";
import Latest from "./ui/Latest";
import Footer from "./ui/Footer";

export default function Blog() {
    return (
        <>
            <AppAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
            >
                <MainContent />
                <Latest />
            </Container>
            <Footer />
        </>
    );
}
