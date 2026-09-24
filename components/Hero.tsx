import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="h-screen flex items-center justify-center text-center relative"
        >
            <div className="max-w-4xl px-5">
                <h1 className="text-gradient text-6xl md:text-8xl font-black mb-5">
                    Omar Gamal
                </h1>
                <h2
                    className="text-2xl md:text-4xl font-semibold mb-6 text-gray animate-fade-in-up"
                    style={{ animationDelay: '0.5s' }}
                >
                    Backend &amp; Infrastructure Engineer
                </h2>
                <p
                    className="text-lg md:text-xl mb-8 text-light/80 animate-fade-in-up max-w-2xl mx-auto leading-relaxed"
                    style={{ animationDelay: '1s' }}
                >
                    I design distributed systems that hold under failure, from service architecture
                    and gRPC contracts to Kubernetes deployments.
                </p>

                {/* Social quick-links */}
                <div
                    className="flex items-center justify-center gap-3 mb-10 animate-fade-in-up"
                    style={{ animationDelay: '1.2s' }}
                >
                    <a
                        href="https://github.com/Omar0Gamal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300"
                    >
                        <FiGithub size={15} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/omar-gamal-091044168/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300"
                    >
                        <FiLinkedin size={15} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="mailto:omargamal.dev@outlook.com"
                        aria-label="Email"
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300"
                    >
                        <FiMail size={15} />
                        <span>Email</span>
                    </a>
                </div>

                {/* CTA buttons */}
                <div
                    className="flex gap-4 justify-center flex-wrap animate-fade-in-up"
                    style={{ animationDelay: '1.5s' }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 border-none rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer bg-gradient-to-r from-primary to-accent text-dark hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer bg-transparent text-primary border-2 border-primary/60 hover:border-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.2)]"
                    >
                        Get In Touch
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer bg-white/5 text-foreground/70 border border-white/15 hover:bg-white/10 hover:text-foreground hover:-translate-y-1"
                    >
                        <FiDownload size={16} />
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;