'use client';

import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { motion } from 'framer-motion';

const defaultEase = [0.21, 0.47, 0.32, 0.98] as const;

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="min-h-screen py-24 flex items-center justify-center text-center relative"
        >
            <div className="max-w-4xl px-5">
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: defaultEase }}
                    className="text-gradient text-5xl md:text-7xl lg:text-8xl font-black mb-4"
                >
                    Omar Gamal
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12, ease: defaultEase }}
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 text-gray"
                >
                    Software, Full-Stack &amp; Cloud Infrastructure Engineer
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.18, ease: defaultEase }}
                    className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest mb-6"
                >
                    Backend · Distributed Systems · Full-Stack · DevOps &amp; Cloud Infrastructure
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.24, ease: defaultEase }}
                    className="text-base md:text-lg mb-8 text-light/80 max-w-3xl mx-auto leading-relaxed"
                >
                    Software, Full-Stack &amp; Cloud Infrastructure Engineer with 4+ years of production experience architecting resilient distributed systems and web platforms across <span className="text-primary font-medium">Go</span>, <span className="text-primary font-medium">Python (FastAPI, Django)</span>, <span className="text-primary font-medium">TypeScript</span>, <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Next.js</span>, <span className="text-primary font-medium">Node.js</span>, <span className="text-primary font-medium">C++ (C++17/CUDA)</span>, <span className="text-primary font-medium">AWS</span>, <span className="text-primary font-medium">GCP</span>, <span className="text-primary font-medium">Kubernetes (k8s/k3s)</span>, <span className="text-primary font-medium">Terraform</span>, <span className="text-primary font-medium">Docker</span>, <span className="text-primary font-medium">PostgreSQL</span>, <span className="text-primary font-medium">Redis</span>, <span className="text-primary font-medium">gRPC</span>, <span className="text-primary font-medium">GraphQL</span>, and <span className="text-primary font-medium">Kafka/NATS</span>.
                </motion.p>

                {/* Social quick-links */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.32, ease: defaultEase }}
                    className="flex items-center justify-center gap-3 mb-10 flex-wrap"
                >
                    <a
                        href="https://github.com/Omar0Gamal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <FiGithub size={15} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/omar-gamal-091044168/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <FiLinkedin size={15} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="mailto:omargamal.dev@outlook.com"
                        aria-label="Email"
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <FiMail size={15} />
                        <span>Email</span>
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume"
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <FiFileText size={15} />
                        <span>Resume</span>
                    </a>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.42, ease: defaultEase }}
                    className="flex gap-4 justify-center flex-wrap"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 border-none rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer bg-gradient-to-r from-primary to-accent text-dark hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
                    >
                        View My Work
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer bg-white/5 text-light border-2 border-white/20 hover:border-primary/60 hover:text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.2)]"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer bg-transparent text-primary border-2 border-primary/60 hover:border-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.2)]"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
