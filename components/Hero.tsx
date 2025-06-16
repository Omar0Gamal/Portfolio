import React from 'react';

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
                    className="text-2xl md:text-4xl font-semibold mb-8 text-gray animate-fade-in-up"
                    style={{ animationDelay: '0.5s' }}
                >
                    Software Engineer & Game Engine Developer
                </h2>
                <p
                    className="text-lg md:text-xl mb-10 text-light animate-fade-in-up"
                    style={{ animationDelay: '1s' }}
                >
                    Building next-generation solutions from enterprise web apps
                    to custom game engines
                </p>
                <div
                    className="flex gap-5 justify-center flex-wrap animate-fade-in-up"
                    style={{ animationDelay: '1.5s' }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 border-none rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-dark hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,245,255,0.3)]"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border-none rounded-full font-semibold no-underline transition-all duration-300 cursor-pointer relative overflow-hidden bg-transparent text-light border-2 border-primary hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,245,255,0.3)]"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;