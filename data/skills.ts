export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: ["C++", "Java", "JavaScript", "Python", "C", "Go"]
    },
    {
        title: "Game Development",
        skills: ["DirectX11", "Unity", "Unreal Engine", "ECS Architecture", "3D Graphics", "Game Engines"]
    },
    {
        title: "Web Technologies",
        skills: ["React.js", "Next.js", "Node.js", "Express.js", "TypeScript"]
    },
    {
        title: "Databases & Caching",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
        title: "DevOps & Infrastructure",
        skills: ["Docker", "Kubernetes", "Linux", "Git"]        
    },
    {
        title: "Testing & QA",
        skills: ["Vitest", "Jest", "Cypress", "Unit Testing"]
    }
];