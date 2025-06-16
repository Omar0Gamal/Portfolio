import React from 'react';

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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    <div className="lg:col-span-1 bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 animate-left">
                        <p className="text-lg leading-relaxed mb-6">
                            Passionate Software Engineer with{' '}
                            <strong>7+ years of experience</strong> in full-stack development,
                            game engine architecture, and plugin development. Started
                            programming at age 10 and evolved into a senior developer
                            specializing in systems programming, 3D graphics, and enterprise
                            web applications.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:omar.gamal.m@gmail.com"
                                className="flex items-center gap-3 text-light no-underline transition-colors duration-300 hover:text-primary text-sm"
                            >
                                <span>✉</span>
                                <span>omar.gamal.m@gmail.com</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/omar-gamal-091044168/"
                                className="flex items-center gap-3 text-light no-underline transition-colors duration-300 hover:text-primary text-sm"
                            >
                                <span>🔗</span>
                                <span>LinkedIn Profile</span>
                            </a>
                            <a
                                href="https://github.com/Omar0Gamal"
                                className="flex items-center gap-3 text-light no-underline transition-colors duration-300 hover:text-primary text-sm"
                            >
                                <span>💻</span>
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-2 gap-6 animate-right">
                        <div className="text-center p-6 md:p-10 bg-primary/10 rounded-2xl border border-primary/20 transition-transform duration-300 hover:-translate-y-1 animate-scale stagger-delay-1">
                            <span className="text-4xl md:text-6xl font-black text-primary block">7+</span>
                            <span className="text-gray mt-3 block text-sm md:text-lg">Years Experience</span>
                        </div>
                        <div className="text-center p-6 md:p-10 bg-primary/10 rounded-2xl border border-primary/20 transition-transform duration-300 hover:-translate-y-1 animate-scale stagger-delay-2">
                            <span className="text-4xl md:text-6xl font-black text-primary block">20+</span>
                            <span className="text-gray mt-3 block text-sm md:text-lg">Projects Delivered</span>
                        </div>
                        <div className="text-center p-6 md:p-10 bg-primary/10 rounded-2xl border border-primary/20 transition-transform duration-300 hover:-translate-y-1 animate-scale stagger-delay-3">
                            <span className="text-4xl md:text-6xl font-black text-primary block">1000+</span>
                            <span className="text-gray mt-3 block text-sm md:text-lg">Users Served</span>
                        </div>
                        <div className="text-center p-6 md:p-10 bg-primary/10 rounded-2xl border border-primary/20 transition-transform duration-300 hover:-translate-y-1 animate-scale stagger-delay-4">
                            <span className="text-4xl md:text-6xl font-black text-primary block">3.93</span>
                            <span className="text-gray mt-3 block text-sm md:text-lg">GPA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;