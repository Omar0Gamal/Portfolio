export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Go", "C++", "Java", "Python", "C#", "SQL"]
    },
    {
        title: "Backend & APIs",
        skills: ["REST", "OpenAPI", "gRPC", "Protocol Buffers", "Gin", "sqlc", "ASP.NET", "Microservices", "Distributed Systems"]
    },
    {
        title: "Messaging & Data",
        skills: ["NATS JetStream", "PostgreSQL", "Redis", "SQLite", "MongoDB", "MySQL"]
    },
    {
        title: "Infrastructure",
        skills: ["Docker", "Kubernetes", "Helm", "Terraform", "Linux", "Caddy", "Git", "GitHub Actions", "CI/CD"]
    },
    {
        title: "Observability",
        skills: ["Prometheus", "Grafana", "Loki", "Promtail", "Request Tracing"]
    },
    {
        title: "Systems",
        skills: ["Multithreading", "Idempotency & Retry Design", "CMake"]
    }
];