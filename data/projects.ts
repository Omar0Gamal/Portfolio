export interface ProjectDetail {
    title: string;
    description: string;
    image: string;
    features: string[];
    technologies: string[];
    links?: Record<string, string>;
    status?: ProjectStatus;
}

export type ProjectKey = 'nexuscommerce' | 'jobtrack' | 'cartwright' | 'axiomgraph' | 'llamacpp' | 'darkfire';
export type ProjectStatus = "In Development" | "Completed" | "Research" | "Open Source";

const projectDetails: Record<ProjectKey, ProjectDetail> = {
    nexuscommerce: {
        title: "Nexus Commerce",
        description:
            "A multi-tenant e-commerce platform with a 25-module Go modular monolith API, Cloudflare Worker edge tenant routing via KV, Redis distributed inventory locks and job queue, merchant operations console, and Next.js 16 customer storefront.",
        image: "/images/nexuscommerce.png",
        features: [
            "Multi-tenant architecture with edge routing via Cloudflare Worker + KV and Caddy custom domains",
            "25-module Go modular monolith API with Gin and sqlc for type-safe SQL queries",
            "Distributed Redis mutex locks preventing inventory overselling under high concurrency",
            "Redis-backed asynchronous job queue for order lifecycle and transactional events",
            "Next.js 16 App Router customer storefront with React 19, TanStack Query, and Tailwind CSS 4",
            "Merchant admin console for product variant pricing, inventory tracking, and order fulfillment",
            "Paymob payment gateway integration with signature-verified webhooks",
            "End-to-end observability via Prometheus metrics, Promtail, and Grafana",
        ],
        technologies: [
            "Go", "Next.js 16", "TypeScript",
            "Cloudflare Workers", "PostgreSQL", "Redis",
            "sqlc", "Tailwind CSS", "Docker", "Caddy"
        ],
        links: {
            "View Source": "https://github.com/Omar0Gamal/Nexus-Commerce",
        },
        status: "Completed",
    },
    jobtrack: {
        title: "JobTrack",
        description:
            "A production-grade job application tracker and career pipeline command center featuring zero-signup guest evaluation with signed sessions, SSRF-hardened URL autofill, and comprehensive test coverage.",
        image: "/images/jobtrack.png",
        features: [
            "207 Vitest unit & integration tests plus 5 Playwright E2E suites enforcing regression-free CI",
            "Zero-signup demo mode with HMAC-SHA256 signed guest sessions and pre-seeded realistic workflows",
            "SSRF-hardened company metadata auto-fetcher validating IP ranges at the network boundary",
            "Auth.js v5 authentication with Google/GitHub OAuth and strict private allowlist enforcement",
            "Analytics funnel with stage conversion rates, weekly velocity, and resume A/B callback metrics",
            "TanStack Table with URL-persisted search facets, multi-column sorting, and sticky company headers",
            "Timezone-normalized calendar month grid and chronological mobile agenda for interview rounds",
            "PostgreSQL (Neon) persistence with Prisma ORM, optimistic UI updates, and autosaving drawers",
        ],
        technologies: [
            "Next.js 15", "TypeScript", "Prisma",
            "PostgreSQL", "Auth.js", "Vitest",
            "Playwright", "Tailwind CSS", "Neon"
        ],
        links: {
            "Live Demo": "https://jobtrack-demo.vercel.app",
            "View Source": "https://github.com/Omar0Gamal/JobTrack",
        },
        status: "Completed",
    },
    cartwright: {
        title: "Cartwright",
        description:
            "A polyglot saga implementation proving that distributed checkout can recover cleanly from mid-flight failures. Built as an open-source reference for production patterns.",
        image: "/images/cartwright.svg",
        features: [
            "Saga orchestrator in Go; billing in C#/ASP.NET; notifier in Python",
            "gRPC + Protocol Buffers for typed inter-service contracts",
            "Transactional outbox to NATS JetStream for at-least-once delivery",
            "Compensating transactions roll back partial failures automatically",
            "Idempotency keys prevent duplicate charges on retry",
            "Exponential backoff with lease-based saga recovery",
            "Scripted chaos tests kill services mid-request to verify correctness",
            "Helm chart deployed to k3s provisioned with Terraform",
        ],
        technologies: [
            "Go", "C#", "ASP.NET", "Python",
            "gRPC", "NATS JetStream",
            "Kubernetes", "Helm", "Terraform"
        ],
        links: {
            "View Source": "https://github.com/Omar0Gamal/cartwright-saga",
        },
        status: "Completed",
    },
    axiomgraph: {
        title: "AxiomGraph",
        description:
            "A hybrid graph-vector database in C++17 for GraphRAG with concurrent graph mutations, GPU-accelerated nearest-neighbour search, an HTTP server, and a Python SDK.",
        image: "/images/axiomgraph.svg",
        features: [
            "Adjacency-list graph with CSR consolidation for cache efficiency",
            "KNN search via HNSW (CPU) and NVIDIA cuVS (GPU)",
            "Lock-striped concurrent writes for high-throughput mutations",
            "68.4% All-Gold-Found@10 on HotpotQA bridge questions (vs. 45.8% dense + rerank)",
            "~8,600 QPS (CPU) / 33,000+ QPS (GPU); 1M nodes in ~2 GB RAM",
            "nanobind Python SDK (zero-copy interop) & HTTP server",
            "CMake build with pre-built wheels published on GitHub Releases",
        ],
        technologies: ["C++17", "Python", "SQLite", "CMake", "CUDA"],
        links: {
            "View Source": "https://github.com/Omar0Gamal/AxiomGraph"
        },
        status: "Completed",
    },
    llamacpp: {
        title: "llama.cpp",
        description:
            "Open-source contribution to the widely-used llama.cpp inference engine. Patched two RPC server out-of-bounds memory bugs reported in production.",
        image: "/images/cover-llama-cpp-dark.svg",
        features: [
            "Fixed two out-of-bounds memory bugs in the RPC server",
            "Added tensor shape validation before graph execution",
            "Rejects malformed GET_ROWS / SET_ROWS requests at the boundary",
        ],
        technologies: ["C++"],
        links: {
            "View Pull Request": "https://github.com/ggml-org/llama.cpp/pull/26933"
        },
        status: "Open Source",
    },
    darkfire: {
        title: "DarkFire",
        description:
            "A 3D game engine written from scratch in C++ with a custom DirectX 11 renderer, ECS architecture, and a playable space-shooter demo.",
        image: "/images/darkfire-engine.jpeg",
        features: [
            "Custom DirectX 11 renderer with HLSL shaders",
            "Entity Component System for cache-friendly object management",
            "3D model loading and skeletal animation",
            "Shader hot-reloading and compilation pipeline",
            "Integrated audio system",
            "Raw input handling framework",
            "Playable space-shooter demo bundled with the engine",
            "Custom linear algebra math library",
        ],
        technologies: ["C++", "DirectX 11", "HLSL", "Windows API"],
        links: {
            "View Source": "https://github.com/Omar0Gamal/DarkFire"
        },
        status: "Completed",
    }
};

export default projectDetails;