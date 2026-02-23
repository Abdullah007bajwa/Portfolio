"use client";

import { motion } from "framer-motion";

interface GradientCharRevealProps {
    children: string;
    className?: string;
    delay?: number;
    isInView: boolean;
}

/**
 * Animates gradient-highlighted words character by character.
 * Each letter slides up from below with stagger timing.
 */
export function GradientCharReveal({
    children,
    className = "",
    delay = 0,
    isInView,
}: GradientCharRevealProps) {
    const chars = children.split("");

    return (
        <span className={`inline-flex ${className}`}>
            {chars.map((char, i) => (
                <motion.span
                    key={`${char}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.4,
                        delay: delay + i * 0.03,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="bg-gradient-to-r from-[#b794f6] to-[#f472b6] bg-clip-text text-transparent"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
