"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import StackIcon, { IconName } from "tech-stack-icons";
import { DroneCanvas } from "@/components/3d/DroneCanvas";
import { FFMap } from "@/components/ui/FFMap";
import { IceButton } from "@/components/ui/IceButton";
import { GradientCharReveal } from "@/components/ui/GradientCharReveal";
import { BackgroundBlob } from "@/components/BackgroundBlob";

const techLogoColumns = {
  left: [
    { name: "ReactJS", icon: "react" as IconName },
    { name: "TypeScript", icon: "typescript" as IconName },
    { name: "NextJS", icon: "nextjs" as IconName },
    { name: "Tailwind", icon: "tailwindcss" as IconName },
    { name: "NodeJS", icon: "nodejs" as IconName },
    { name: "Git", icon: "git" as IconName },
  ],
  right: [
    { name: "Express", icon: "expressjs" as IconName },
    { name: "VueJS", icon: "vuejs" as IconName },
    { name: "NuxtJS", icon: "nuxtjs" as IconName },
    { name: "Postgres", icon: "postgresql" as IconName },
    { name: "Python", icon: "python" as IconName },
    { name: "Figma", icon: "figma" as IconName },
  ],
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 overflow-x-clip overflow-y-visible">
      {/* Organic Background Blob - Top Left (bleeding from Hero) */}
      <BackgroundBlob
        position="top-left"
        size="xl"
        rotation={-15}
        offsetX="0%"
        offsetY="-15%"
        opacity={0.38}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-[#8892a6] mb-3 uppercase tracking-wider">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <GradientCharReveal isInView={isInView} delay={0.2}>About</GradientCharReveal> me
          </h2>
        </motion.div>

        {/* About Content - Split Layout (60/40) */}
        <div className="grid lg:grid-cols-[3fr,2fr] gap-8 items-stretch">
          {/* LEFT - 3D Canvas Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] h-[420px] sm:h-[480px] lg:h-[600px]"
          >
            {/* 3D Drone Canvas */}
            <div className="absolute inset-0">
              <DroneCanvas className="z-0" />
            </div>

            {/* Floating Paper Plane Icon */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-8 left-8 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center border border-purple-500/40">
                <Send className="w-5 h-5 text-purple-300" />
              </div>
            </motion.div>

            {/* Text Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/50 to-transparent p-8 md:p-12 z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Combining creative thinking with technical expertise
              </h3>
            </div>
          </motion.div>

          {/* RIGHT - Stacked Cards (40/60) */}
          <div className="flex flex-col gap-8 lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className="rounded-3xl bg-[#1a1f2e] border border-white/[0.06] hover:border-white/[0.12] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 lg:flex-[2] overflow-hidden"
            >
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
                  Flexible with time zones, always responsive
                </h3>
              </div>

              {/* FF-Map Component */}
              <div className="space-y-4 mt-auto">
                <div className="w-full h-24 md:h-28 rounded-xl overflow-hidden bg-gradient-to-br from-[#0f1419] to-[#0a0f1e] border border-white/[0.06]">
                  <FFMap />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-3xl bg-[#1a1f2e] border border-white/[0.06] hover:border-white/[0.12] p-3 md:p-4 transition-all duration-300 lg:flex-[3] overflow-hidden"
            >
              <div className="relative h-[260px] sm:h-[300px] lg:flex-1 lg:min-h-0 overflow-hidden rounded-2xl bg-[#0f1419]">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />

                {/* Layout: Text on left (40%), Tech stack on right (60%) */}
                <div className="relative h-full flex items-center">
                  {/* Text on left side */}
                  <div className="w-[40%] pl-4 pr-2 z-10">
                    <p className="text-xs uppercase tracking-wider text-[#8892a6] mb-2">
                      I constantly try to improve
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      My tech stack
                    </h3>
                  </div>

                  {/* Tech stack on right side (60%) with scrolling */}
                  <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden marquee-container">
                    <div className="h-full grid grid-cols-2 gap-2 p-2">
                      <div className="h-full overflow-hidden">
                        <div className="flex flex-col gap-3 stack-scroll-up">
                          {[...techLogoColumns.left, ...techLogoColumns.left].map((tech, index) => (
                            <div
                              key={`left-${tech.name}-${index}`}
                              className="rounded-lg bg-[#151b2a]/60 px-4 py-2.5 backdrop-blur-sm"
                            >
                              <span className="text-sm font-semibold text-white/90">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="h-full overflow-hidden">
                        <div className="flex flex-col gap-3 stack-scroll-down">
                          {[...techLogoColumns.right, ...techLogoColumns.right].map((tech, index) => (
                            <div
                              key={`right-${tech.name}-${index}`}
                              className="rounded-lg bg-[#151b2a]/60 px-4 py-2.5 backdrop-blur-sm"
                            >
                              <span className="text-sm font-semibold text-white/90">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
