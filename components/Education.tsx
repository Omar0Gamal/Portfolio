import { education, certifications, courses, Education as EducationType } from '../data/education';

export default function Education() {
    return (
        <section
            id="education"
            className="min-h-screen py-24 px-5 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-on-scroll">
                    Education
                </h2>

                {education.map((edu: EducationType, index: number) => (
                    <div
                        key={index}
                        className="bg-white/5 p-10 rounded-2xl backdrop-blur-xl border border-white/10 max-w-3xl mx-auto animate-scale mb-8"
                    >
                        {/* Header row */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">
                                    {edu.degree}
                                </h3>
                                <div className="text-accent font-medium">
                                    {edu.institution}, {edu.location}
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                                <span className="text-sm text-foreground/60">
                                    {edu.currentYear}
                                </span>
                                <span className="text-sm text-foreground/60">
                                    {edu.expectedGraduation
                                        ? `Expected ${edu.expectedGraduation}`
                                        : `Graduated ${edu.graduationDate}`}
                                </span>
                                {edu.gpa && (
                                    <span className="text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-0.5 rounded-full mt-1">
                                        GPA {edu.gpa}
                                    </span>
                                )}
                            </div>
                        </div>

                        <p className="text-foreground/70 leading-relaxed mb-6">{edu.description}</p>

                        {/* Relevant Courses */}
                        {courses && courses.length > 0 && (
                            <div>
                                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-3">
                                    Relevant Coursework
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {courses.map((course, courseIndex) => (
                                        <span
                                            key={courseIndex}
                                            className="bg-sky-950/60 text-sky-200 py-1.5 px-3 rounded-full text-xs border border-sky-700/30"
                                        >
                                            {course.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Certifications */}
                        {certifications && certifications.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-3">
                                    Certifications
                                </h4>
                                <ul className="space-y-2">
                                    {certifications.map((cert, certIndex) => (
                                        <li key={certIndex} className="text-sm text-foreground/70">
                                            {cert.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}