'use client';

import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

const defaultEase = [0.21, 0.47, 0.32, 0.98] as const;

interface FadeInProps extends HTMLMotionProps<'div'> {
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    delay?: number;
    duration?: number;
    className?: string;
    children: React.ReactNode;
}

export const FadeIn: React.FC<FadeInProps> = ({
    direction = 'up',
    distance = 24,
    delay = 0,
    duration = 0.5,
    className = '',
    children,
    ...props
}) => {
    const getInitialOffset = () => {
        switch (direction) {
            case 'up':
                return { y: distance, x: 0 };
            case 'down':
                return { y: -distance, x: 0 };
            case 'left':
                return { x: distance, y: 0 };
            case 'right':
                return { x: -distance, y: 0 };
            case 'none':
            default:
                return { x: 0, y: 0 };
        }
    };

    const offset = getInitialOffset();

    return (
        <motion.div
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-20px', amount: 0.05 }}
            transition={{
                duration,
                delay,
                ease: defaultEase,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
    staggerDelay?: number;
    delayChildren?: number;
    className?: string;
    children: React.ReactNode;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
    staggerDelay = 0.08,
    delayChildren = 0.05,
    className = '',
    children,
    ...props
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px', amount: 0.05 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

interface StaggerItemProps extends HTMLMotionProps<'div'> {
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    className?: string;
    children: React.ReactNode;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
    direction = 'up',
    distance = 20,
    className = '',
    children,
    ...props
}) => {
    const getOffset = () => {
        switch (direction) {
            case 'up':
                return { y: distance, x: 0 };
            case 'down':
                return { y: -distance, x: 0 };
            case 'left':
                return { x: distance, y: 0 };
            case 'right':
                return { x: -distance, y: 0 };
            case 'none':
            default:
                return { x: 0, y: 0 };
        }
    };

    const offset = getOffset();

    const itemVariants: Variants = {
        hidden: { opacity: 0, ...offset },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: defaultEase,
            },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

interface ScaleInProps extends HTMLMotionProps<'div'> {
    delay?: number;
    duration?: number;
    initialScale?: number;
    className?: string;
    children: React.ReactNode;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
    delay = 0,
    duration = 0.5,
    initialScale = 0.95,
    className = '',
    children,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: initialScale }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px', amount: 0.05 }}
            transition={{
                duration,
                delay,
                ease: defaultEase,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
