'use client';

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { FadeIn } from "@/components/Motion";

const defaultEase = [0.21, 0.47, 0.32, 0.98] as const;

const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="min-h-screen py-24 px-5 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full">
                <FadeIn direction="up">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Experience
                    </h2>
                </FadeIn>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-primary/5 transform -translate-x-1/2 hidden md:block" />

                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className={`relative w-full md:w-1/2 py-8 mb-10 ${
                                experience.isRight
                                    ? "md:pl-8 md:ml-auto"
                                    : "md:pr-8 md:text-right"
                            }`}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.4, ease: defaultEase }}
                                className={`absolute top-12 w-3.5 h-3.5 bg-primary rounded-full border-4 border-dark shadow-[0_0_12px_rgba(56,189,248,0.7)] z-10 hidden md:block ${
                                    experience.isRight ? "-left-[7px]" : "-right-[7px]"
                                }`}
                            />

                            <motion.div
                                initial={{ opacity: 0, x: experience.isRight ? 35 : -35 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-30px", amount: 0.1 }}
                                transition={{ duration: 0.55, ease: defaultEase }}
                                className="bg-white/5 p-7 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(56,189,248,0.12)] hover:border-primary/25 text-left"
                            >
                                <div className={`flex flex-col mb-3 ${experience.isRight ? "items-start" : "md:items-end text-left md:text-right"}`}>
                                    <span className="text-primary font-semibold text-xs mb-1 tracking-wider uppercase">
                                        {experience.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-light mb-0.5">
                                        {experience.position}
                                    </h3>
                                    <div className="text-accent font-medium text-sm">
                                        {experience.company}
                                    </div>
                                </div>

                                {experience.bullets && experience.bullets.length > 0 ? (
                                    <ul className="space-y-2.5 mb-4 text-foreground/75 text-sm leading-relaxed">
                                        {experience.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5">
                                                <span className="text-primary text-base leading-none mt-1 shrink-0">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : experience.description ? (
                                    <p className="text-foreground/70 leading-relaxed text-sm mb-4">
                                        {experience.description}
                                    </p>
                                ) : null}

                                {experience.note && (
                                    <p className="text-xs text-foreground/50 italic mb-4 border-l-2 border-white/10 pl-2.5">
                                        {experience.note}
                                    </p>
                                )}

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
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
