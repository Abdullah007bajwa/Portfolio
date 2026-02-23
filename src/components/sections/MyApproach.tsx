"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BackgroundBlob } from "@/components/BackgroundBlob";
import { GradientCharReveal } from "@/components/ui/GradientCharReveal";

const phases = [
  {
    id: 1,
    label: "Phase 1",
    title: "Discovery & Direction",
    description: "I dive deep into understanding your vision and goals. Through detailed discussions, we map out requirements, user needs, and technical constraints to create a solid foundation.",
    accent: "text-[#cbb3ff]",
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    accent: "text-[#bfe3ff]",
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Delivery & Support",
    description: "After thorough testing, we launch your product. I provide documentation, training, and ongoing support to ensure smooth operation and continuous improvement.",
    accent: "text-[#f6f0a5]",
  },
];

// Orbital line component
function OrbitalLines({ color, accent }: { color: string; accent: string }) {
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    width: Math.random() * 250 + 200, // 150-350px width
    height: Math.random() * 150 + 110, // 60-160px height (creates oval)
    duration: Math.random() * 10 + 8, // 8-18s
    delay: Math.random() * 2,
    opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute"
          style={{
            borderRadius: "50%",
            border: `2px solid ${color}`,
            opacity: line.opacity,
            width: line.width,
            height: line.height,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "linear",
            delay: line.delay,
          }}
        />
      ))}
    </div>
  );
}

function PhaseCard({ phase, index, isInView }: { phase: typeof phases[0]; index: number; isInView: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const accentColors: Record<number, string> = {
    1: "rgb(203, 172, 249)", // Purple
    2: "rgb(172, 218, 250)", // Light Blue
    3: "rgb(250, 246, 172)", // Yellow
  };

  const accentColor = accentColors[phase.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ perspective: "1200px" }}
      className="h-full"
    >
      <div
        ref={cardRef}
        className="relative w-full h-[420px] md:h-[500px] rounded-3xl border border-white/[0.08] bg-[#101727] overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Front Face - Orbital Animation */}
          <div
            className="absolute w-full h-full flex flex-col items-center justify-center overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Subtle glow underneath */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${accentColor}22 0%, transparent 70%)`,
              }}
            />

            {/* Orbital Lines - Centered around text */}
            <OrbitalLines color={accentColor} accent={phase.accent} />

            {/* Phase Text Center - Above orbitals */}
            <div className="relative z-40 flex flex-col items-center justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-center" style={{ color: accentColor }}>
                {phase.label}
              </h3>
            </div>
          </div>

          {/* Back Face - Details */}
          <div
            className="absolute w-full h-full px-6 py-8 md:py-10 flex flex-col items-center justify-center overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, rgba(16, 23, 39, 1) 0%, rgba(8, 11, 25, 1) 100%)",
            }}
          >
            <motion.div
              className="relative z-50 flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: accentColor }}>
                {phase.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#b0b8c8]">
                {phase.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function MyApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8 lg:px-0 overflow-x-clip overflow-y-visible">
      {/* Organic Background Blob - Bottom Right crossing into Contact */}
      <BackgroundBlob
        position="bottom-right"
        size="xl"
        rotation={-30}
        flip={false}
        offsetX="0%"
        offsetY="-20%"
        opacity={0.4}
      />

      <div className="relative z-10 container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <GradientCharReveal isInView={isInView} delay={0.15}>My</GradientCharReveal> approach
          </h2>
        </motion.div>

        {/* Three Column Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
        >
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
