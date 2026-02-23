"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { GradientCharReveal } from "@/components/ui/GradientCharReveal";
import { BackgroundBlob } from "@/components/BackgroundBlob";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 overflow-x-clip overflow-y-visible">
      {/* Organic Background Blob - Top Right (bleeding from CurrentWork) */}
      <BackgroundBlob
        position="top-right"
        size="md"
        rotation={15}
        flip={true}
        offsetX="0%"
        offsetY="50%"
        opacity={0.28}
      />

      {/* Organic Background Blob - Bottom Right crossing into Testimonials */}
      <BackgroundBlob
        position="bottom-right"
        size="xl"
        rotation={25}
        flip={true}
        offsetX="0%"
        offsetY="-20%"
        opacity={0.42}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-[#8892a6] mb-3 uppercase tracking-wider">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            A <GradientCharReveal isInView={isInView} delay={0.15}>small</GradientCharReveal> selection of recent <GradientCharReveal isInView={isInView} delay={0.3}>projects</GradientCharReveal>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
