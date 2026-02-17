"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundBlob } from "@/components/BackgroundBlob";

const experiences = [
  {
    id: 1,
    role: "AI Engineer",
    description: "Architecting full-stack AI platforms at Neural Nest, designing LLM routing and autonomous agents that reduced manual setup time by 70%.", //
    image: "https://framerusercontent.com/images/mXpNx6sbxYcNpJohmULbiHVEQM.svg",
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    description: "Focused on Computer Vision and Deep Learning implementations (CNNs), optimizing model performance for real-time applications.", //
    image: "https://framerusercontent.com/images/uGCVeTllttr6Gv1j7RRrZGJ2E0U.png",
  },
  {
    id: 3,
    role: "Freelance App Developer",
    description: "Built and deployed custom full-stack solutions for global clients, managing the end-to-end pipeline from system architecture to store deployment.", //
    image: "https://framerusercontent.com/images/2MBT84Op80p536c8U3p4VpnSI4.png",
  },
  {
    id: 4,
    role: "Automation Engineer",
    description: "Engineered automation scripts for international infrastructure at Servionics, improving monitoring efficiency across EMEA and APAC.", //
    image: "https://framerusercontent.com/images/h5S4cHbEkBxW8KbQex97u9lyNis.svg",
  },
];

export function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8 lg:px-0 overflow-x-clip overflow-y-visible">
      {/* Organic Background Blob - Top Left (bleeding from Testimonials) */}
      <BackgroundBlob
        position="top-left"
        size="lg"
        rotation={-45}
        offsetX="0%"
        offsetY="-15%"
        opacity={0.33}
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
            My <span className="bg-gradient-to-r from-[#b794f6] to-[#f472b6] bg-clip-text text-transparent">work</span> experience
          </h2>
        </motion.div>

        {/* Experience Cards Grid - 2x2 Rectangle Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
              className="group rounded-3xl border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-white/[0.12]"
              style={{
                background: "linear-gradient(103.397deg, rgb(4, 7, 29) 0%, rgb(12, 14, 35) 100%)",
              }}
            >
              {/* Horizontal Rectangle Layout */}
              <div className="flex flex-col sm:flex-row items-center">
                {/* Image/Icon Container */}
                <div className="relative w-full sm:w-40 h-32 sm:h-full flex items-center justify-center bg-white/[0.02] border-b sm:border-b-0 sm:border-r border-white/[0.08] flex-shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.role}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1">
                  {/* Role Title */}
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors line-clamp-2">
                    {exp.role}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#c0c2d3] leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
