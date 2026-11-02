export interface ExperienceItem {
    id: string;
    period: string;
    position: string;
    company: string;
    description?: string;
    bullets?: string[];
    technologies: string[];
    isRight?: boolean;
}

export const experiences: ExperienceItem[] = [
    {
        id: "attila-gaming",
        period: "Jan 2022 – Mar 2026",
        position: "Software & Cloud Infrastructure Engineer (Backend, Full-Stack & DevOps)",
        company: "Attila Gaming · United States (Remote)",
        bullets: [
            "Engineered and scaled 15+ production microservices, low-latency APIs, and real-time React/TypeScript/Next.js operations dashboards across Go, Python (FastAPI/Django), TypeScript/Node.js, and Java for a distributed multi-server platform serving 500+ concurrent clients (cutting latency by 40%).",
            "Owned cloud and Linux production infrastructure across AWS, GCP, Docker, Kubernetes (k8s), Terraform, Ansible, and GitHub Actions CI/CD, backed by PostgreSQL, Redis, and Prometheus/Grafana/Loki observability (reducing crashes by 60% and maintaining 99.95% uptime)."
        ],
        technologies: [
            "Go",
            "Python (FastAPI/Django)",
            "TypeScript",
            "React",
            "Next.js",
            "Java",
            "Docker",
            "Kubernetes",
            "AWS",
            "GCP",
            "Terraform",
            "Ansible",
            "PostgreSQL",
            "Redis",
            "Prometheus/Grafana/Loki",
            "CI/CD"
        ],
        isRight: false
    },
    {
        id: "ayist-group",
        period: "Sep 2025 – Nov 2025",
        position: "Lead Backend, Full-Stack & Cloud Architect (Contract)",
        company: "Ayist Group · Poland (Remote)",
        bullets: [
            "Architected a 14-service distributed enterprise platform (ERP, CRM, Document Management) across a 6-engineer Go, Python (FastAPI/Django), and React/TypeScript team using gRPC/Protobuf, REST, GraphQL, PostgreSQL, Redis, and async event streams (NATS/Kafka) with idempotent failure recovery.",
            "Built automated Terraform, Helm, and Kubernetes deployment pipelines for multi-node cloud production clusters."
        ],
        technologies: [
            "Go",
            "Python (FastAPI)",
            "React",
            "TypeScript",
            "gRPC",
            "GraphQL",
            "REST",
            "PostgreSQL",
            "Redis",
            "NATS / Kafka",
            "Kubernetes",
            "Helm",
            "Terraform",
            "Hetzner Cloud"
        ],
        isRight: true
    }
];
