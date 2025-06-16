'use client'

import { useEffect, useRef } from 'react'

interface ParticleConfig {
    count: number
    minDuration: number
    maxDuration: number
    maxDelay: number
}

const Particles = ({ 
    count = 50, 
    minDuration = 10, 
    maxDuration = 20, 
    maxDelay = 15 
}: Partial<ParticleConfig> = {}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Clear existing particles
        container.innerHTML = ''

        const fragment = document.createDocumentFragment()

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'
            particle.style.cssText = `
                left: ${Math.random() * 100}vw;
                animation-delay: ${Math.random() * maxDelay}s;
                animation-duration: ${Math.random() * (maxDuration - minDuration) + minDuration}s;
            `
            fragment.appendChild(particle)
        }

        container.appendChild(fragment)

        // Cleanup function
        return () => {
            if (container) {
                container.innerHTML = ''
            }
        }
    }, [count, minDuration, maxDuration, maxDelay])

    return (
        <div
            ref={containerRef}
            className="particles fixed inset-0 pointer-events-none -z-10"
            aria-hidden="true"
        />
    )
}

export default Particles