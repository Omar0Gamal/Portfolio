'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent z-[1001] origin-top rounded-r shadow-[0_0_20px_rgba(56,189,248,0.5)] pointer-events-none"
            style={{ scaleY }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/80 via-secondary/80 to-accent/80 blur-sm -z-10" />
            <div className="absolute top-full -left-0.5 w-2 h-2.5 bg-primary rounded-full shadow-[0_0_15px] shadow-primary opacity-90 -translate-y-full" />
        </motion.div>
    );
};

export default ScrollProgress;