import React from 'react';
import { skillCategories } from '@/data/skills';

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="min-h-screen py-24 px-5 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-on-scroll">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {skillCategories.map((skillCategory, index) => (
                        <div
                            key={skillCategory.title}
                            className={`bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-transform duration-300 hover:scale-105 animate-scale stagger-delay-${index + 1}`}
                        >
                            <h3 className="text-primary text-xl mb-5 text-center">
                                {skillCategory.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {skillCategory.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-secondary/10 text-secondary py-2 px-4 rounded-2xl text-sm border border-secondary/30 transition-all duration-300 hover:bg-secondary/20 hover:-translate-y-0.5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;