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
        degree: "B.Sc. Computer Science",
        institution: "Capital University",
        location: "Cairo, Egypt",
        expectedGraduation: "2027",
        currentYear: "Final Year",
        gpa: "3.92/4.0",
        specialization: "Computer Science",
        description: "Dean's List. Final-year Computer Science student with a focus on systems and backend engineering."
    }
];

export const certifications: Certification[] = [
    // TODO: Add certifications here
];

export const courses: Course[] = [
    { name: "Operating Systems", provider: "Capital University", date: "" },
    { name: "Distributed Systems", provider: "Capital University", date: "" },
    { name: "Database Systems", provider: "Capital University", date: "" },
    { name: "Algorithms & Data Structures", provider: "Capital University", date: "" },
    { name: "Computer Networks", provider: "Capital University", date: "" },
    { name: "Compiler Design", provider: "Capital University", date: "" },
];

export const getEducationData = () => ({
    education,
    certifications,
    courses
});
