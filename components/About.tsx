import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const highlights = [
    {
        icon: '⚙️',
        label: 'Production Contract',
        text: 'Architected a 14-service platform (ERP, CRM, and document management), owning every layer from gRPC Protobuf contracts to Terraform + Helm on Kubernetes.',
    },
    {
        icon: '🔄',
        label: 'Open Source',
        text: 'Built Cartwright: a polyglot saga implementation in Go / C# / Python proving distributed checkout can recover cleanly from mid-flight failures.',
    },
    {
        icon: '📈',
        label: 'Academia',
        text: 'GPA 3.92 / 4.0 (Dean\'s List), final-year Computer Science with a focus on systems programming and distributed computing.',
    },
    {
        icon: '🎮',
        label: 'Game Infrastructure',
        text: 'Shipped 15+ Spigot plugins for a 500+ concurrent-player game server, cutting crash rate by 60% and response time by 40%.',
    },
    {
        icon: '🤝',
        label: 'Upstream Contribution',
        text: 'Patched two out-of-bounds RPC memory bugs in llama.cpp, validated and merged into the main repository.',
    },
];

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="min-h-screen py-24 px-5 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-on-scroll">
                    About Me
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Bio + contact - self-stretches to match highlights top */}
                    <div className="lg:col-span-1 bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 animate-left self-start">
                        <p className="text-sm leading-relaxed mb-6 text-foreground/70">
                            Final-year CS student building production-grade backend systems.
                            I care about correctness under failure, whether that&apos;s
                            compensating transactions in a distributed checkout or
                            idempotency keys that survive network retries.
                            My work lives at the intersection of reliable architecture
                            and clean, deployable code.
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
                        </div>
                    </div>

                    {/* Highlights list */}
                    <div className="lg:col-span-2 animate-right">
                        <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-5">
                            Key Highlights
                        </p>
                        <ul className="flex flex-col gap-3">
                            {highlights.map((item, i) => (
                                <li
                                    key={i}
                                    className={`flex items-start gap-4 bg-white/[0.04] border border-white/[0.07] rounded-xl p-4
                                        transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]
                                        animate-scale stagger-delay-${i + 1}`}
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
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;