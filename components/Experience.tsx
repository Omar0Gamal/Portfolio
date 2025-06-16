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
                    {/* Timeline line - hidden on mobile */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 hidden md:block"></div>

                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className={`relative w-full md:w-1/2 py-8 mb-10 ${
                                experience.isRight
                                    ? "md:pl-8 md:ml-auto animate-right"
                                    : "md:pr-8 md:text-right animate-left"
                            } stagger-delay-${index + 1}`}
                        >
                            {/* Timeline point - hidden on mobile */}
                            <div
                                className={`absolute top-12 w-4 h-4 bg-primary rounded-full border-4 border-dark shadow-lg z-10 hidden md:block ${
                                    experience.isRight ? "-left-2" : "-right-2"
                                }`}
                            ></div>

                            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,245,255,0.2)] hover:border-primary/30">
                                <div className="text-primary font-semibold text-lg mb-2">
                                    {experience.period}
                                </div>
                                <h3 className="text-2xl font-bold text-light mb-2">
                                    {experience.position}
                                </h3>
                                <div className="text-accent font-medium mb-4 text-lg">
                                    {experience.company}
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
