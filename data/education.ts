export interface Education {
    degree: string;
    institution: string;
    location: string;
    expectedGraduation?: string;
    graduationDate?: string; // Optional for past education
    currentYear: string;
    gpa: string;
    specialization: string;
    description: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    url?: string;
}

export interface Course {
    name: string;
    provider: string;
    date: string;
    url?: string;
}

export const education: Education[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "Helwan University",
        location: "Cairo",
        expectedGraduation: "March 2026",
        currentYear: "Third Year",
        gpa: "3.93/4.0",
        specialization: "Software Engineering with focus on advanced algorithms, data structures, and software architecture patterns",
        description: "Consistently maintained Dean's List status while balancing full-time studies with professional development work."
    }
];

export const certifications: Certification[] = [
    // TODO: Add certifications here
];

export const courses: Course[] = [
    // TODO: Add courses here
];

export const getEducationData = () => ({
    education,
    certifications,
    courses
});
