import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-10 px-5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <span className="text-primary font-bold text-lg">Omar Gamal</span>
                    <p className="text-xs text-foreground/70 mt-1">Backend, Cloud &amp; Full-Stack Engineer</p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/Omar0Gamal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                        <FiGithub size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/omar-gamal-091044168/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                        <FiLinkedin size={18} />
                    </a>
                    <a
                        href="mailto:omargamal.dev@outlook.com"
                        aria-label="Email"
                        className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                        <FiMail size={18} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-foreground/70 text-center md:text-right">
                    &copy; {currentYear} Omar Gamal. Built with Next.js.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
