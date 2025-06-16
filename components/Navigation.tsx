'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    href: string;
    label: string;
    section: string;
}

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems: NavItem[] = useMemo(() => [
        { href: '#hero', label: 'Home', section: 'hero' },
        { href: '#about', label: 'About', section: 'about' },
        { href: '#experience', label: 'Experience', section: 'experience' },
        { href: '#projects', label: 'Projects', section: 'projects' },
        { href: '#skills', label: 'Skills', section: 'skills' },
        { href: '#articles', label: 'Articles', section: 'articles' },
        { href: '#education', label: 'Education', section: 'education' },
        { href: '#contact', label: 'Contact', section: 'contact' },
    ], []);

    const handleScroll = useCallback(() => {
        const sections = navItems.map(item => document.querySelector(item.href));
        const scrollPosition = window.scrollY + 100;

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i] as HTMLElement;
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(navItems[i].section);
                    break;
                }
            }
        }
    }, [navItems]);

    useEffect(() => {
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, [handleScroll]);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMenuOpen(false); // Close menu on mobile after click
    }, []);

    return (
        <>
            {/* Hamburger for mobile */}
            <button
                className="fixed top-5 right-5 z-[1100] flex flex-col justify-center items-center w-12 h-12 bg-dark/80 rounded-full border border-white/10 md:hidden"
                aria-label="Open navigation menu"
                onClick={() => setMenuOpen((v) => !v)}
            >
                <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
                <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
                <span className="block w-6 h-0.5 bg-white rounded transition-all" />
            </button>

            {/* Desktop nav */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed top-5 right-5 z-[1000] bg-dark/80 backdrop-blur-xl rounded-full p-2.5 border border-white/10 transition-all duration-300 hidden md:block"
                role="navigation"
                aria-label="Main navigation"
            >
                <ul className="flex list-none gap-1.5" role="list">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.section}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            role="listitem"
                        >
                            <a
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`nav-link text-light no-underline py-3 px-5 rounded-3xl transition-all duration-300 font-medium text-sm relative hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                                    activeSection === item.section ? 'bg-primary/20 text-primary' : ''
                                }`}
                                aria-current={activeSection === item.section ? 'page' : undefined}
                                tabIndex={0}
                            >
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.nav>

            {/* Mobile nav menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-[1100] md:hidden"
                            onClick={() => setMenuOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 w-64 h-screen z-[1200] bg-dark/95 backdrop-blur-xl p-8 flex flex-col gap-4 shadow-2xl md:hidden overflow-y-auto"
                            role="navigation"
                            aria-label="Mobile navigation"
                        >
                            <button
                                className="absolute top-4 right-4 text-white text-2xl"
                                aria-label="Close navigation menu"
                                onClick={() => setMenuOpen(false)}
                            >
                                &times;
                            </button>
                            <ul className="flex flex-col gap-4 mt-8" role="list">
                                {navItems.map((item) => (
                                    <li key={item.section} role="listitem">
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className={`block text-light no-underline py-3 px-5 rounded-2xl transition-all duration-300 font-medium text-lg hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                                                activeSection === item.section ? 'bg-primary/20 text-primary' : ''
                                            }`}
                                            aria-current={activeSection === item.section ? 'page' : undefined}
                                            tabIndex={0}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;