import React from "react";
import { experiences } from "@/data/experince";

const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="min-h-screen py-24 px-5 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-on-scroll">
                    Experience
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/10 transform -translate-x-1/2 hidden md:block" />

                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className={`relative w-full md:w-1/2 py-8 mb-10 ${
                                experience.isRight
                                    ? "md:pl-8 md:ml-auto animate-right"
                                    : "md:pr-8 md:text-right animate-left"
                            } stagger-delay-${index + 1}`}
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute top-12 w-3.5 h-3.5 bg-primary rounded-full border-4 border-dark shadow-[0_0_10px_rgba(56,189,248,0.5)] z-10 hidden md:block ${
                                    experience.isRight ? "-left-[7px]" : "-right-[7px]"
                                }`}
                            />

                            <div className="bg-white/5 p-7 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(56,189,248,0.12)] hover:border-primary/25">
                                <div className="text-primary font-semibold text-sm mb-1 tracking-wide uppercase">
                                    {experience.period}
                                </div>
                                <h3 className="text-xl font-bold text-light mb-1">
                                    {experience.position}
                                </h3>
                                <div className="text-accent font-medium mb-4 text-base">
                                    {experience.company}
                                </div>
                                <p className="text-foreground/70 leading-relaxed text-sm mb-4">
                                    {experience.description}
                                </p>
                                {/* Tech pills */}
                                {experience.technologies && experience.technologies.length > 0 && (
                                    <div className={`flex flex-wrap gap-1.5 ${experience.isRight ? "justify-start" : "md:justify-end"}`}>
                                        {experience.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-sky-950/60 text-sky-300 py-1 px-2.5 rounded-full text-xs border border-sky-700/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
