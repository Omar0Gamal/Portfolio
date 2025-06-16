'use client';

import { useEffect, useState, useCallback } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        
        setScrollProgress(Math.min(Math.max(scrollPercentage, 0), 100));
    }, []);

    const handleScrollAnimations = useCallback(() => {
        const elements = document.querySelectorAll(
            '.animate-on-scroll, .animate-left, .animate-right, .animate-scale'
        );

        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-in');
            }
        });
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScrollEvents = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    handleScrollAnimations();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScrollEvents, { passive: true });
        handleScrollEvents(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScrollEvents);
        };
    }, [handleScroll, handleScrollAnimations]);

    return (
        <div
            className="scroll-progress fixed top-0 left-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent z-[1001] transition-all duration-100 ease-out rounded-r shadow-[0_0_20px_rgba(0,245,255,0.5)]"
            style={{ height: `${scrollProgress}%` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/80 via-secondary/80 to-accent/80 blur-sm -z-10" />
            <div className="absolute -top-1 -left-0.5 w-2 h-2.5 bg-primary rounded-full shadow-[0_0_15px] shadow-primary opacity-80 animate-pulse" />
        </div>
    );
};

export default ScrollProgress;