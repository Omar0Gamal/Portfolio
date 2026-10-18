export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Go", "TypeScript", "C++", "Java", "Python", "C#", "SQL", "CUDA"]
    },
    {
        title: "Backend & APIs",
        skills: ["REST", "OpenAPI", "gRPC", "Protocol Buffers", "Gin", "sqlc", "Auth.js", "ASP.NET", "Microservices", "Distributed Systems", "Role-Based Access Control", "Multi-Tenancy"]
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"]
    },
    {
        title: "Testing",
        skills: ["Vitest", "Playwright", "Chaos Engineering"]
    },
    {
        title: "Messaging & Data",
        skills: ["PostgreSQL", "Redis", "Prisma", "SQLite", "NATS JetStream"]
    },
    {
        title: "Cloud & Infrastructure",
        skills: ["Docker", "Kubernetes", "Helm", "Terraform", "Cloudflare Workers", "Cloudflare KV", "Cloudflare R2", "Linux", "Caddy", "CI/CD", "GitHub Actions"]
    },
    {
        title: "Observability",
        skills: ["Prometheus", "Grafana", "Loki", "Promtail", "Request Tracing"]
    },
    {
        title: "Systems",
        skills: ["Multithreading", "Idempotency & Retry Design", "CMake", "Vector Search (HNSW)"]
    }
];