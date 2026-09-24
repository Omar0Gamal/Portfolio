export interface ExperienceItem {
    id: string;
    period: string;
    position: string;
    company: string;
    description: string;
    technologies: string[];
    isRight?: boolean;
}

export const experiences: ExperienceItem[] = [
    {
        id: "project-lead",
        period: "Sep 2025 – Nov 2025",
        position: "Project Lead · Contract",
        company: "Software Company (NDA)",
        description: "Designed the full architecture of a 14-service platform spanning ERP, CRM, and document management. Led a team of 6, authored all Protocol Buffers service contracts, documented cross-service failure recovery, and wrote the Terraform + Helm configuration for Kubernetes on Hetzner. The engagement concluded when the client withdrew.",
        technologies: ["Go", "gRPC", "Protobuf", "Kubernetes", "Helm", "Terraform", "NATS JetStream", "Hetzner"],
        isRight: false
    },
    {
        id: "attila-gaming",
        period: "2022 – Mar 2026",
        position: "Backend Developer & Server Administrator",
        company: "Attila Gaming · Remote",
        description: "Shipped 15+ Java/Spigot plugins powering matchmaking, game-instance lifecycle management, and anti-cheat on a server averaging 500+ concurrent players. Administered the Linux infrastructure (CI/CD pipelines, containerised services, and automated backups), reducing crash rate by 60% and cutting average response time by 40%.",
        technologies: ["Java", "Spigot", "Linux", "Docker", "CI/CD", "GitHub Actions"],
        isRight: true
    },
    {
        id: "freelance-developer",
        period: "2018 – 2022",
        position: "Freelance Software Developer",
        company: "Self-Employed",
        description: "Delivered 20+ projects for international clients, ranging from Discord bots and landing pages (2018) to full-stack web applications, REST APIs, and AI-powered chatbot integrations.",
        technologies: ["Python", "JavaScript", "REST APIs", "Discord.py", "React"],
        isRight: false
    }
];