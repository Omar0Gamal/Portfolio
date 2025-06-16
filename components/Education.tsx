import { education,certifications,courses, Education as EducationType } from '../data/education';

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
                
                {education.map((education: EducationType, index: number) => (
                    <div
                        key={index}
                        className="bg-white/5 p-10 rounded-2xl backdrop-blur-xl border border-white/10 text-center max-w-2xl mx-auto animate-scale mb-8"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-2">
                            {education.degree}
                        </h3>
                        <div className="text-xl text-accent mb-5">
                            {education.institution}, {education.location}
                        </div>
                        <p className="mb-5">
                            {education.expectedGraduation ? 
                                `Expected Graduation: ${education.expectedGraduation}` : 
                                `Graduated: ${education.graduationDate}`
                            }
                            {education.currentYear && ` | Currently in ${education.currentYear}`}
                        </p>
                        
                        {education.gpa && (
                            <div className="text-4xl font-black text-secondary my-5">
                                GPA: {education.gpa}
                            </div>
                        )}
                        
                        <p>{education.description}</p>
                        
                        {certifications && certifications.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-xl font-semibold mb-3">Certifications</h4>
                                <ul className="space-y-2">
                                    {certifications.map((cert, certIndex) => (
                                        <li key={certIndex} className="text-sm">
                                            {cert.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        {courses && courses.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-xl font-semibold mb-3">Relevant Courses</h4>
                                <ul className="space-y-2">
                                    {courses.map((course, courseIndex) => (
                                        <li key={courseIndex} className="text-sm">
                                            {course.name}
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