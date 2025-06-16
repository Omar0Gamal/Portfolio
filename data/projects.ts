export interface ProjectDetail {
    title: string;
    description: string;
    image: string;
    features: string[];
    technologies: string[];
    links?: Record<string, string>;
    status?: ProjectStatus;
}

export type ProjectKey = 'nexuscommerce' | 'nebulaengine' | 'darkfire' | 'aiml';
export type ProjectStatus = "In Development" | "Completed" | "Research";

const projectDetails: Record<ProjectKey, ProjectDetail> = {
    nexuscommerce: {
        title: "🛒 NexusCommerce - Enterprise E-Commerce Platform",
        description:
            "A scalable, enterprise-grade e-commerce platform built with modern microservices architecture. 🚀",
        image: "/images/nexuscommerce.png",
        features: [
            "🔄 Dual backend architecture (Express.js + Go/Gin)",
            "☸️ Kubernetes orchestration with auto-scaling",
            "⚡ Redis caching for improved performance",
            "🗄️ PostgreSQL with optimized indexing",
            "⚛️ React.js frontend with TypeScript",
            "🔧 Comprehensive CI/CD pipeline",
            "📦 Real-time inventory management",
            "📊 Advanced analytics dashboard",
            "💳 Multi-payment gateway integration",
            "👥 Admin panel with role-based access",
        ],
        technologies: [
            "React.js",
            "TypeScript",
            "Express.js",
            "Go",
            "PostgreSQL",
            "Redis",
            "Kubernetes",
            "Docker",
            "GitHub Actions",
        ],
        links: {
            "View Source": "https://github.com/Omar0Gamal/Nexus-Commerce",
        },
        status: "In Development",
    },
    nebulaengine: {
        title: "🌌 NebulaEngine - Next-Gen Game Engine",
        description:
            "A modern, cross-platform game engine with advanced graphics capabilities and ECS architecture. ✨",
        image: "/images/nebula-engine.jpg",
        features: [
            "🖥️ Cross-platform support (Windows, Linux, macOS)",
            "🎮 DirectX11/12 and Vulkan renderer",
            "🏗️ Advanced Entity Component System",
            "🔍 NebulaSync C++ reflection library",
            "⚛️ Built-in physics engine integration",
            "🎨 Visual scripting system",
            "🔥 Real-time asset hot-reloading",
            "🧠 Memory-optimized resource management",
            "🔌 Modular plugin architecture",
            "🐛 Comprehensive debugging tools",
        ],
        technologies: [
            "C++",
            "DirectX11/12",
            "Vulkan",
            "OpenGL",
            "CMake",
            "Python",
            "Lua",
        ],
        links: {
            "View Source": "https://github.com/Omar0Gamal/NebulaEngine"
        },
        status: "In Development",
    },
    darkfire: {
        title: "🔥 DarkFire - 3D Game Engine",
        description:
            "A complete 3D game engine built from scratch with DirectX11, featuring ECS architecture and a space shooter demo. 🚀",
        image: "/images/darkfire-engine.jpeg",
        features: [
            "🎨 Custom DirectX11 renderer",
            "🏗️ Entity Component System architecture",
            "💾 Memory pool allocation system",
            "🎭 3D model loading and animation",
            "⚡ Shader compilation and management",
            "🔊 Audio system integration",
            "🎮 Input handling framework",
            "🚀 Space shooter demo game",
            "📈 Performance profiling tools",
            "🧮 Custom math library",
        ],
        technologies: [
            "C++",
            "DirectX11",
            "HLSL",
            "Windows API",
            "Visual Studio",
        ],
        links: {
            "View Source": "https://github.com/Omar0Gamal/DarkFire"
        },
        status: "Completed",
    },
    aiml: {
        title: "🤖 AI & Machine Learning Research",
        description:
            "Research and implementation of various AI models for game development and intelligent system applications. 🧠",
        image: "/images/ai-ml-models.png",
        features: [
            "🧬 Neural network implementations from scratch",
            "🌳 Game AI behavior trees",
            "🗺️ Pathfinding algorithms (A*, Dijkstra)",
            "🎯 Decision-making systems",
            "🎮 Reinforcement learning for NPCs",
            "👁️ Computer vision for gameplay",
            "💬 Natural language processing",
            "🧬 Genetic algorithms for optimization",
            "🌫️ Fuzzy logic systems",
            "⚡ Machine learning model optimization",
        ],
        technologies: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "NumPy",
            "OpenCV",
            "Scikit-learn",
        ],
        status: "Research",
    },
};

export default projectDetails;