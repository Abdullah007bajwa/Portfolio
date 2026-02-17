"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DroneCanvas } from "@/components/3d/DroneCanvas";
import { BackgroundBlob } from "@/components/BackgroundBlob";

// Background elements with gradient orbs and floating shapes
function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-[120px]"
      />

      {/* Floating Shapes */}
      <motion.svg
        className="absolute top-20 left-10 w-24 h-24 text-white/[0.02]"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="currentColor" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-20 right-10 w-32 h-32 text-white/[0.02]"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        viewBox="0 0 100 100"
      >
        <rect x="25" y="25" width="50" height="50" fill="currentColor" />
      </motion.svg>

      <motion.svg
        className="absolute top-1/3 right-1/4 w-16 h-16 text-white/[0.015]"
        animate={{
          y: [0, 8, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        viewBox="0 0 100 100"
      >
        <polygon points="50,10 90,90 10,90" fill="currentColor" />
      </motion.svg>
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Split eyebrow text for word-by-word animation
  const eyebrowWords = "FULL STACK DEVELOPER & AI ENGINEER".split(" ");
  const headlineWhite = "Engineering intelligent";
  const headlineGradient = "Multi-Platform Apps";

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-x-clip overflow-y-visible"
    >
      <DroneCanvas className="absolute inset-0 -z-20 hidden md:block" />

      {/* Background Elements */}
      <BackgroundElements />

      {/* Organic Background Blob - Bottom Left crossing into About */}
      <BackgroundBlob
        position="bottom-right"
        size="xl"
        rotation={-15}
        offsetX="0%"
        offsetY="-15%"
        opacity={0.4}
      />
      <BackgroundBlob
        position="top-left"
        size="sm"
        rotation={-15}
        offsetX="-20%"
        offsetY="-35%"
        opacity={0.4}
      />
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Eyebrow Text - Word by Word Animation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {eyebrowWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.08,
                ease: [0.33, 0.66, 0.66, 1],
              }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8892a6]"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Main Headline - Split Animation */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-[-0.02em] mb-2"
          >
            <span className="text-white">Engineering </span>
            <span className="bg-gradient-to-r from-[#b794f6] to-[#f472b6] bg-clip-text text-transparent">intelligent</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            <span className="bg-gradient-to-r from-[#b794f6] to-[#f472b6] bg-clip-text text-transparent">Multi-Platform</span>
            <span className="text-white"> Apps</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#8892a6] mb-10 max-w-2xl mx-auto"
        >
          Hi! I'm Abdullah, a passionate FULL Stack Developer and AI engineer based in The Pakistan.
        </motion.p>

        {/* CTA Button - Navy style matching Framer reference */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            y: -3,
            boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToProjects}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1a2332] text-white font-semibold text-lg rounded-full border border-white/[0.06] hover:bg-[#222d3f] hover:border-white/10 transition-all"
        >
          See my work
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </section>
  );
}
