"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * A thin horizontal line that grows from center outward when it scrolls into view.
 * Used between sections for visual rhythm.
 */
export function SectionDivider() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="flex justify-center py-2">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-[60%] max-w-3xl h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent origin-center"
            />
        </div>
    );
}
