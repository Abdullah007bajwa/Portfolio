"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StackIcon, { IconName } from "tech-stack-icons";
import { GlowCard } from "@/components/ui/GlowCard";

// Tech stacks with brand colors and official logos
const techStacks = [
  {
    id: 1,
    label: "Frontend & AI",
    technologies: [
      { name: "React", icon: "react" as IconName, bgColor: "from-cyan-500/20 to-blue-500/20", borderColor: "border-cyan-500/40", textColor: "text-cyan-300", gradient: "from-cyan-400 to-blue-500" },
      { name: "TypeScript", icon: "typescript" as IconName, bgColor: "from-blue-600/20 to-blue-500/20", borderColor: "border-blue-500/40", textColor: "text-blue-300", gradient: "from-blue-500 to-blue-600" },
      { name: "Next.js", icon: "nextjs" as IconName, bgColor: "from-gray-300/20 to-gray-100/20", borderColor: "border-gray-300/40", textColor: "text-gray-200", gradient: "from-gray-200 to-gray-300" },
      { name: "Tailwind", icon: "tailwindcss" as IconName, bgColor: "from-cyan-400/20 to-cyan-500/20", borderColor: "border-cyan-400/40", textColor: "text-cyan-300", gradient: "from-cyan-300 to-cyan-500" },
      { name: "Framer", icon: "framer" as IconName, bgColor: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-500/40", textColor: "text-purple-300", gradient: "from-purple-400 to-pink-500" },
      { name: "LangGraph", icon: "python" as IconName, bgColor: "from-orange-500/20 to-red-500/20", borderColor: "border-orange-500/40", textColor: "text-orange-300", gradient: "from-orange-400 to-red-500" },
    ],
  },
  {
    id: 2,
    label: "Backend & ML",
    technologies: [
      { name: "Python", icon: "python" as IconName, bgColor: "from-blue-500/20 to-yellow-500/20", borderColor: "border-blue-500/40", textColor: "text-blue-300", gradient: "from-blue-400 to-yellow-500" },
      { name: "FastAPI", icon: "fastapi" as IconName, bgColor: "from-emerald-500/20 to-teal-500/20", borderColor: "border-emerald-500/40", textColor: "text-emerald-300", gradient: "from-emerald-400 to-teal-500" },
      { name: "Node.js", icon: "nodejs" as IconName, bgColor: "from-green-600/20 to-green-500/20", borderColor: "border-green-500/40", textColor: "text-green-300", gradient: "from-green-500 to-green-600" },
      { name: "PostgreSQL", icon: "postgresql" as IconName, bgColor: "from-blue-700/20 to-blue-600/20", borderColor: "border-blue-600/40", textColor: "text-blue-300", gradient: "from-blue-600 to-blue-700" },
      { name: "PyTorch", icon: "pytorch" as IconName, bgColor: "from-red-600/20 to-orange-500/20", borderColor: "border-red-600/40", textColor: "text-red-300", gradient: "from-red-500 to-orange-600" },
      { name: "Git", icon: "git" as IconName, bgColor: "from-orange-600/20 to-red-500/20", borderColor: "border-orange-600/40", textColor: "text-orange-300", gradient: "from-orange-500 to-red-600" },
    ],
  },
];

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" ref={ref} className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#8892a6] mb-3 uppercase tracking-wider">
            Tools & Technologies
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            My Tech Arsenal
          </h2>
        </motion.div>

        {/* Tech Stack Cards with Logo Badges */}
        <div className="grid md:grid-cols-2 gap-8">
          {techStacks.map((stack, stackIndex) => (
            <GlowCard
              key={stack.id}
              className="rounded-3xl bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border border-white/[0.06] hover:border-white/[0.12] p-8 md:p-12 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: stackIndex * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  {stack.label}
                </h3>

                {/* Tech Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: stackIndex * 0.15 + techIndex * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -8,
                      }}
                      className="group"
                    >
                      <div
                        className={`h-24 rounded-2xl bg-gradient-to-br ${tech.bgColor} border ${tech.borderColor} p-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300`}
                      >
                        <StackIcon
                          name={tech.icon}
                          className="w-12 h-12 mb-1 group-hover:scale-110 transition-transform duration-300"
                        />
                        <p className={`text-xs font-bold text-center leading-tight group-hover:${tech.textColor}`}>
                          {tech.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
