"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";
import { GradientCharReveal } from "@/components/ui/GradientCharReveal";
import { BackgroundBlob } from "@/components/BackgroundBlob";

const EMAIL = "abdullah.bajwa.co@gmail.com";

// Particle component for the burst effect
function Particle({ x, y, color, delay }: { x: number; y: number; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 6,
        height: 6,
        backgroundColor: color,
        left: "50%",
        top: "50%",
        zIndex: 50,
      }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x,
        y,
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    />
  );
}

export function Contact() {
  const ref = useRef(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Magnetic button spring values
  const magnetX = useSpring(0, { stiffness: 200, damping: 20 });
  const magnetY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    const threshold = 150;

    if (distance < threshold) {
      const strength = (1 - distance / threshold) * 8;
      magnetX.set(distX * (strength / distance) * 2);
      magnetY.set(distY * (strength / distance) * 2);
    } else {
      magnetX.set(0);
      magnetY.set(0);
    }
  }, [magnetX, magnetY]);

  const handleMouseLeave = useCallback(() => {
    magnetX.set(0);
    magnetY.set(0);
  }, [magnetX, magnetY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const spawnParticles = () => {
    const colors = ["#b794f6", "#f472b6", "#a78bfa", "#ec4899", "#c084fc", "#f9a8d4"];
    const newParticles = Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 24) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const radius = 40 + Math.random() * 60;
      return {
        id: Date.now() + i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.1,
      };
    });
    setParticles(newParticles);
    // Clean up particles after animation
    setTimeout(() => setParticles([]), 1000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      spawnParticles();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      spawnParticles();
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 overflow-x-clip overflow-y-visible">
      {/* Organic Background Blob - Top Right (bleeding from MyApproach) */}
      <BackgroundBlob
        position="top-right"
        size="xl"
        rotation={-30}
        flip={false}
        offsetX="0%"
        offsetY="-20%"
        opacity={0.38}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl"
        >
          <p className="text-sm text-[#8892a6] uppercase tracking-wider mb-4">
            Have a project in mind?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Let&apos;s <GradientCharReveal isInView={isInView} delay={0.2}>build</GradientCharReveal> something together.
          </h2>
          <p className="text-[#8892a6] text-base md:text-lg mb-8">
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
          </p>

          {/* Magnetic button wrapper */}
          <div className="relative inline-block" onMouseLeave={handleMouseLeave}>
            <motion.button
              ref={buttonRef}
              type="button"
              onClick={copyEmail}
              style={{
                x: magnetX,
                y: magnetY,
              }}
              whileHover={{
                boxShadow: "0 16px 40px rgba(183, 148, 246, 0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1a2332] text-white font-semibold text-lg rounded-full border border-white/[0.06] hover:bg-[#222d3f] hover:border-white/10 transition-all btn-shine"
            >
              {/* Particles */}
              {particles.map((p) => (
                <Particle key={p.id} x={p.x} y={p.y} color={p.color} delay={p.delay} />
              ))}

              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy my email address
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
