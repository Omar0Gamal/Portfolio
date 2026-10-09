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
        position: "Backend Engineer (Contract)",
        company: "Ayist Group · Remote",
        description: "Designed the full architecture of a 14-service microservice system (ERP, CRM, document management), including service boundaries and inter-service communication; worked with the project manager to assign services and tasks to a team of 6 developers (Go, Python, React). Wrote all Protocol Buffers definitions, documented cross-service call order and failure recovery, and built the Terraform and Helm deployment for Kubernetes on Hetzner. The project was not released after the end customer withdrew.",
        technologies: ["Go", "Python", "React", "gRPC", "Protobuf", "Kubernetes", "Helm", "Terraform", "Hetzner"],
        isRight: false
    },
    {
        id: "attila-gaming",
        period: "Jan 2022 – Mar 2026",
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