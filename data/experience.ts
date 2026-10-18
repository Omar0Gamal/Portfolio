export interface ExperienceItem {
    id: string;
    period: string;
    position: string;
    company: string;
    description?: string;
    bullets?: string[];
    note?: string;
    technologies: string[];
    isRight?: boolean;
}

export const experiences: ExperienceItem[] = [
    {
        id: "attila-gaming",
        period: "Jan 2022 – Mar 2026",
        position: "Backend & DevOps Engineer",
        company: "Attila Gaming · United States (Remote)",
        bullets: [
            "Managed production Linux infrastructure and backend services for a real-time platform serving 500+ concurrent users, cutting server crashes by 60% and response latency by 40% under peak load; developed 15+ Java backend services.",
            "Built GitHub Actions CI/CD pipelines, Dockerized deployments, zero-downtime backup recovery, and Prometheus/Grafana/Loki observability across multi-node Linux hosts."
        ],
        technologies: ["Java", "Linux", "Docker", "CI/CD", "GitHub Actions", "Prometheus", "Grafana", "Loki"],
        isRight: false
    },
    {
        id: "ayist-group",
        period: "Sep 2025 – Nov 2025",
        position: "Backend & Cloud Architect (Contract)",
        company: "Ayist Group · Poland (Remote)",
        bullets: [
            "Designed the architecture for a 14-service ERP, CRM, and Document Management platform; defined Protocol Buffers/API schemas, auth flows, and retry policies across a 6-person Go, Python, and React team.",
            "Built the Terraform and Helm pipeline for Kubernetes on Hetzner Cloud, enabling one-command environment provisioning."
        ],
        note: "Platform was not released following client withdrawal.",
        technologies: ["Go", "Python", "React", "gRPC", "Protobuf", "Kubernetes", "Helm", "Terraform", "Hetzner Cloud"],
        isRight: true
    },
    {
        id: "freelance-developer",
        period: "2018 – 2022",
        position: "Freelance Software Developer",
        company: "Self-Employed · Remote",
        bullets: [
            "Delivered 20+ projects for international clients, ranging from Discord bots and landing pages (2018) to full-stack web applications, REST APIs, and AI-powered chatbot integrations."
        ],
        technologies: ["Python", "JavaScript", "TypeScript", "REST APIs", "Discord.py", "React"],
        isRight: false
    }
];