export interface ExperienceItem {
    id: string;
    period: string;
    position: string;
    company: string;
    description: string;
    isRight?: boolean;
}

export const experiences: ExperienceItem[] = [
    {
        id: "attila-gaming",
        period: "January 2022 - Present",
        position: "Senior Spigot Plugin Developer",
        company: "ATTILA GAMING (Part-time)",
        description: "Lead development of custom Minecraft plugins using Java and Spigot API. Architected scalable solutions for high-traffic gaming servers, implementing performance optimizations that improved server response times by 40%.",
        isRight: false
    },
    {
        id: "lead-developer",
        period: "2018 - 2022",
        position: "Lead Developer",
        company: "Minecraft Gaming Servers",
        description: "Promoted to Lead Developer role on major Minecraft server networks. Managed development team and technical architecture decisions. Implemented monetization features that increased revenue and player retention.",
        isRight: true
    },
    {
        id: "freelance-developer",
        period: "May 2018 - January 2022",
        position: "Freelance Full-Stack Developer",
        company: "Self-Employed",
        description: "Delivered 20+ web applications and AI chatbots for diverse clients across multiple industries. Specialized in React.js, Node.js, and MongoDB stack with 100% client satisfaction rate.",
        isRight: false
    }
];