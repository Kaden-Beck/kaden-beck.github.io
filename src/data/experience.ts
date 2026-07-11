/**
 * Professional experience. Kept deliberately resume-level — no internal
 * system names, URLs, or credentials from proprietary work.
 */

export const lvtInternship = {
    role: "Software Development Engineer in Test (SDET) Intern",
    company: "LiveView Technologies (LVT)",
    companyBlurb:
        "LVT builds solar-powered mobile security and surveillance units deployed across thousands of sites nationwide.",
    location: "Utah",
    period: "2026",
    summary:
        "Embedded with the backend QA and platform team, writing automated tests for a distributed, event-driven system and prototyping internal tooling to make test results easier to trust and act on.",
    highlights: [
        {
            title: "End-to-end UI automation",
            body: "Built a Playwright + TypeScript suite for a video-library feature, covering table sorting and multi-column filtering, search and result counts, downloads and clipboard actions, a details drawer, and error states — structured with the Page Object Model and shared fixtures.",
        },
        {
            title: "Backend integration & smoke testing",
            body: "Wrote Python / pytest tests against a federated GraphQL API (Apollo Federation), authenticating with generated JWTs, testing subgraphs in isolation and stitched together, and validating that GraphQL mutations actually persisted across relational, document, and search datastores.",
        },
        {
            title: "Async & event-driven test coverage",
            body: "Validated event-driven flows beyond simple request/response — verifying messages placed on and consumed from queues (RabbitMQ), command-and-control flows over an MQTT broker using mocked edge devices, and real-time updates pushed over WebSockets via Redis pub/sub.",
        },
        {
            title: "Backend Test Dashboard (proof of concept)",
            body: "Researched and prototyped a dashboard to aggregate and visualize backend test results. Evaluated approaches from a static HTML report to a Vite SPA to a Report Portal deployment, then built a working proof of concept on Kubernetes with pytest integration, object storage, and Slack notifications.",
        },
    ],
    skills: [
        "Python",
        "pytest",
        "Playwright",
        "TypeScript",
        "GraphQL / Apollo Federation",
        "Kubernetes",
        "Docker",
        "ArgoCD",
        "Helm",
        "RabbitMQ",
        "MQTT",
        "Redis",
        "MongoDB",
        "MySQL",
        "Postman",
        "CI/CD",
    ],
};

export const education = {
    school: "Brigham Young University–Idaho (BYU-Pathway)",
    program: "B.S. Computer Science / Software Development",
    coursework: [
        "Software Testing & Test Automation",
        "Data Structures & Algorithms",
        "Web Services & REST APIs",
        "Backend Web Development",
        "Programming with Classes",
        "Databases",
    ],
};
