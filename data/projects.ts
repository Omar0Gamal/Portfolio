export interface ProjectDetail {
    title: string;
    description: string;
    image: string;
    features: string[];
    technologies: string[];
    links?: Record<string, string>;
    status?: ProjectStatus;
}

export type ProjectKey = 'cartwright' | 'axiomgraph' | 'llamacpp' | 'nexuscommerce' | 'darkfire';
export type ProjectStatus = "In Development" | "Completed" | "Research" | "Open Source";

const projectDetails: Record<ProjectKey, ProjectDetail> = {
    cartwright: {
        title: "Cartwright",
        description:
            "A polyglot saga implementation proving that distributed checkout can recover cleanly from mid-flight failures. Built as an open-source reference for production patterns.",
        image: "/images/cartwright.svg",
        features: [
            "🔄 Saga orchestrator in Go; billing in C#/ASP.NET; notifier in Python",
            "📡 gRPC + Protocol Buffers for typed inter-service contracts",
            "📦 Transactional outbox → NATS JetStream for at-least-once delivery",
            "🛡️ Compensating transactions roll back partial failures automatically",
            "🔑 Idempotency keys prevent duplicate charges on retry",
            "🔁 Exponential backoff with lease-based saga recovery",
            "💥 Scripted chaos tests kill services mid-request to verify correctness",
            "☸️ Helm chart deployed to k3s provisioned with Terraform",
        ],
        technologies: [
            "Go", "C#", "ASP.NET", "Python",
            "gRPC", "NATS JetStream",
            "Kubernetes", "Helm", "Terraform"
        ],
        links: {
            "View Source": "https://github.com/Omar0Gamal/cartwright",
        },
        status: "Completed",
    },
    axiomgraph: {
        title: "AxiomGraph",
        description:
            "A hybrid graph-vector database written in C++17 with concurrent graph mutations alongside GPU-accelerated nearest-neighbour search and a Python SDK.",
        image: "/images/axiomgraph.svg",
        features: [
            "📊 Adjacency-list graph with CSR consolidation for cache efficiency",
            "🔍 KNN search via hnswlib (CPU) and NVIDIA cuVS (GPU)",
            "🔒 Lock-striped concurrent writes for high-throughput mutations",
            "🐍 nanobind Python SDK (zero-copy interop)",
            "⚙️ CMake build with pre-built wheels published on GitHub Releases",
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
            "🐛 Fixed two out-of-bounds memory bugs in the RPC server",
            "🛡️ Added tensor shape validation before graph execution",
            "🚫 Rejects malformed GET_ROWS / SET_ROWS requests at the boundary",
        ],
        technologies: ["C++"],
        links: {
            "View Pull Request": "https://github.com/ggml-org/llama.cpp/pull/26933"
        },
        status: "Open Source",
    },
    nexuscommerce: {
        title: "NexusCommerce",
        description:
            "A multi-tenant e-commerce platform where each merchant gets an isolated storefront, custom domain, and full order pipeline. Backend and infrastructure are production-ready; new Next.js 15 frontend is in active development.",
        image: "/images/nexuscommerce.png",
        features: [
            "🏢 Tenant isolation via subdomain and custom domain routing with Caddy",
            "🔄 Event-driven services connected through RabbitMQ",
            "🔐 JWT auth with role-based access (Admin, Merchant, Customer)",
            "💳 Integrated Paymob payment processing",
            "⚡ Redis caching layer over PostgreSQL + GORM",
            "📦 Full Docker Compose deployment with Caddy reverse proxy",
            "📊 Per-tenant analytics, inventory tracking, and storefront branding",
            "⚛️ Next.js 15 frontend (currently under active development)",
        ],
        technologies: [
            "Go", "Next.js 15", "TypeScript",
            "PostgreSQL", "Redis", "RabbitMQ",
            "Docker", "Caddy"
        ],
        links: {
            "View Source": "https://github.com/Omar0Gamal/Nexus-Commerce",
        },
        status: "In Development",
    },
    darkfire: {
        title: "DarkFire",
        description:
            "A 3D game engine written from scratch in C++ with a custom DirectX 11 renderer, ECS architecture, and a playable space-shooter demo.",
        image: "/images/darkfire-engine.jpeg",
        features: [
            "🎨 Custom DirectX 11 renderer with HLSL shaders",
            "🏗️ Entity Component System for cache-friendly object management",
            "🎭 3D model loading and skeletal animation",
            "⚡ Shader hot-reloading and compilation pipeline",
            "🔊 Integrated audio system",
            "🎮 Raw input handling framework",
            "🚀 Playable space-shooter demo bundled with the engine",
            "🧮 Custom linear algebra math library",
        ],
        technologies: ["C++", "DirectX 11", "HLSL", "Windows API"],
        links: {
            "View Source": "https://github.com/Omar0Gamal/DarkFire"
        },
        status: "Completed",
    }
};

export default projectDetails;