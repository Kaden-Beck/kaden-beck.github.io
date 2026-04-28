"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppAppBar from "@/components/ui/AppAppBar";
import Footer from "@/components/ui/Footer";

const steps: { title: string; subtitle?: string; items: string[] }[] = [
    {
        title: "Evaluate the Idea",
        items: [
            "What is the problem, and what is the solution?",
            "Who is the audience?",
            "Who is making, who is maintaining, who is grading?",
        ],
    },
    {
        title: "Write User Stories",
        subtitle: "Focus on what, not how",
        items: [],
    },
    {
        title: "What is my Data?",
        items: [
            "What data do I need to store?",
            "What is static and what is dynamic?",
            "Mock an ERD",
        ],
    },
    {
        title: "What is my Minimal Viable Product?",
        items: ["Remove features until it wouldn't work"],
    },
    {
        title: "Sketch a Wireframe",
        items: ["Focus on interactions and user stories"],
    },
    {
        title: "What is the Long-Term Plan?",
        subtitle: "What is over-complicated and what is under-complicated?",
        items: ["CI/CD?", "Long term costs ($ or time)"],
    },
    {
        title: "Design User and Data Flow Patterns",
        items: ["How will users see data", "How will app see data"],
    },
    {
        title: "Design Larger Architectural Pieces",
        items: [
            "Monolithic or separate?",
            "What language(s) for my needs",
            "Are there services that will save me more than cost me",
        ],
    },
    {
        title: "Determine the Stack and Tools",
        items: ["Working backwards, determine the simplest solution to each problem"],
    },
    {
        title: "Can this product ship?",
        items: ["Review the above deliverables and see if the product will ship"],
    },
    {
        title: "Repeat!",
        items: [],
    },
];

export default function BrainstormPage() {
    return (
        <>
            <AppAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
            >
                <Box>
                    <Typography variant="h1" gutterBottom>
                        Project Brainstorm
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        A structured process for evaluating and planning a new project from idea to
                        ship.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {steps.map((step, index) => (
                        <Accordion key={index} variant="outlined" defaultExpanded={index === 0}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                                    <Typography
                                        variant="h6"
                                        component="span"
                                        color="text.secondary"
                                        sx={{ minWidth: "2rem" }}
                                    >
                                        {index + 1}.
                                    </Typography>
                                    <Box>
                                        <Typography variant="h6" component="span">
                                            {step.title}
                                        </Typography>
                                        {step.subtitle && (
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mt: 0.25 }}
                                            >
                                                {step.subtitle}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            </AccordionSummary>
                            {(step.items.length > 0 || !step.subtitle) && (
                                <AccordionDetails>
                                    {step.items.length > 0 ? (
                                        <List dense disablePadding>
                                            {step.items.map((item, i) => (
                                                <ListItem key={i} sx={{ pl: 2 }}>
                                                    <ListItemText
                                                        primary={item}
                                                        slotProps={{
                                                            primary: { variant: "body2" },
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                        <Typography variant="body2" color="text.secondary">
                                            Go back to step 1 with what you&apos;ve learned.
                                        </Typography>
                                    )}
                                </AccordionDetails>
                            )}
                        </Accordion>
                    ))}
                </Box>
            </Container>
            <Footer />
        </>
    );
}
