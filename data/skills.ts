export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Go", "Python", "TypeScript", "JavaScript", "C++17 / CUDA", "Java", "C# / .NET", "SQL"]
    },
    {
        title: "Backend & APIs",
        skills: ["FastAPI", "Django", "Node.js", "Gin", "gRPC / GraphQL", "REST & OpenAPI", "Protocol Buffers", "Microservices", "Distributed Systems", "Multi-Tenancy"]
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "TanStack Query", "State Management"]
    },
    {
        title: "Cloud & Infrastructure",
        skills: ["AWS / GCP", "Kubernetes / Helm", "Terraform / Ansible", "Docker / CI/CD", "GitHub Actions", "Linux System Admin", "Cloudflare Workers / KV"]
    },
    {
        title: "Data & Event Streaming",
        skills: ["PostgreSQL", "Redis", "Kafka / NATS", "Prisma ORM", "sqlc", "SQLite", "Vector Search (cuVS/HNSW)"]
    },
    {
        title: "Observability & Reliability",
        skills: ["Prometheus / Grafana", "Loki & Promtail", "OpenTelemetry / Tracing", "Chaos Engineering", "Vitest & Playwright", "Idempotency & Retry Design"]
    }
];
