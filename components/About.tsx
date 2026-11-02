'use client';

import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiFileText } from 'react-icons/fi';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Motion';

const highlights = [
    {
        icon: '⚙️',
        label: 'Lead Architect (Ayist Group)',
        text: 'Architected a 14-service distributed platform (ERP, CRM, Document Management) across a 6-engineer Go, Python (FastAPI/Django), and React/TypeScript team using gRPC/GraphQL, PostgreSQL, Redis, and event streams on Kubernetes with Terraform & Helm.',
    },
    {
        icon: '🎮',
        label: 'Cloud & Infrastructure (Attila Gaming)',
        text: 'Engineered 15+ microservices and Next.js/React dashboards in Go, Python, TypeScript, and Java for 500+ concurrent clients; owned cloud infrastructure across AWS, Docker, Kubernetes, Terraform, and Prometheus/Grafana/Loki (cutting crashes by 60% and latency by 40%).',
    },
    {
        icon: '🚀',
        label: 'Full-Stack Delivery',
        text: 'Shipped production full-stack systems: Nexus Commerce (25-module Go modular monolith + Next.js 16 storefront + Cloudflare edge routing) and JobTrack (Next.js + Prisma + PostgreSQL + 207 Vitest + 5 Playwright E2E tests).',
    },
    {
        icon: '🔄',
        label: 'Distributed Sagas & AI Systems',
        text: 'Built AxiomGraph (33,000+ QPS hybrid graph-vector database in C++17/CUDA with Python SDK) and Cartwright (polyglot distributed saga checkout engine in Go, C#, Python with chaos testing mid-flight recovery).',
    },
    {
        icon: '📈',
        label: 'Academia',
        text: 'GPA 3.92 / 4.0 (Dean\'s Honor List), B.Sc. in Computer Science with a focus on systems programming, distributed systems, and cloud infrastructure.',
    },
    {
        icon: '🤝',
        label: 'Upstream Contribution',
        text: 'Eliminated two critical out-of-bounds RPC memory vulnerabilities in llama.cpp upstream via pre-execution tensor shape validation.',
    },
];

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="min-h-screen py-24 px-5 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full">
                <FadeIn direction="up">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        About Me
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Bio + contact */}
                    <FadeIn direction="right" distance={30} className="lg:col-span-1 self-start">
                        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10">
                            <p className="text-sm leading-relaxed mb-6 text-foreground/75">
                                Software, Full-Stack &amp; Cloud Infrastructure Engineer with 4+ years of production experience architecting resilient distributed microservices, low-latency APIs, modern web platforms, and automated cloud infrastructure.
                            </p>
                            <p className="text-sm leading-relaxed mb-6 text-foreground/75">
                                From gRPC/GraphQL contracts and asynchronous event streaming in Go and Python (FastAPI/Django) to full-stack Next.js/React applications and multi-cloud Kubernetes deployments with Terraform, I focus on software correctness, observability, and systems that hold under high concurrency and failure.
                            </p>
                            <div className="flex flex-col gap-3 pt-4 border-t border-white/8">
                                <a
                                    href="mailto:omargamal.dev@outlook.com"
                                    className="flex items-center gap-3 text-foreground/60 no-underline transition-colors duration-300 hover:text-primary text-sm"
                                >
                                    <FiMail size={14} className="shrink-0" />
                                    <span>omargamal.dev@outlook.com</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/omar-gamal-091044168/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-foreground/60 no-underline transition-colors duration-300 hover:text-primary text-sm"
                                >
                                    <FiLinkedin size={14} className="shrink-0" />
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/Omar0Gamal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-foreground/60 no-underline transition-colors duration-300 hover:text-primary text-sm"
                                >
                                    <FiGithub size={14} className="shrink-0" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-foreground/60 no-underline transition-colors duration-300 hover:text-primary text-sm"
                                >
                                    <FiFileText size={14} className="shrink-0" />
                                    <span>Download Resume (PDF)</span>
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Highlights list */}
                    <div className="lg:col-span-2">
                        <FadeIn direction="left" distance={20}>
                            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-5">
                                Key Highlights
                            </p>
                        </FadeIn>
                        <StaggerContainer staggerDelay={0.07} className="flex flex-col gap-3">
                            {highlights.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div
                                        className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.07] rounded-xl p-4
                                            transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]"
                                    >
                                        <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                                        <div>
                                            <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wide block mb-0.5">
                                                {item.label}
                                            </span>
                                            <span className="text-sm leading-relaxed text-foreground/75">
                                                {item.text}
                                            </span>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
