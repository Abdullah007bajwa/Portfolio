"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";
import { BackgroundBlob } from "@/components/BackgroundBlob";

const EMAIL = "abdullah.bajwa.co@gmail.com";

export function Contact() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      setCopied(true);
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
            Let&apos;s <span className="bg-gradient-to-r from-[#b794f6] to-[#f472b6] bg-clip-text text-transparent">build</span> something together.
          </h2>
          <p className="text-[#8892a6] text-base md:text-lg mb-8">
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
          </p>
          
          <motion.button
            type="button"
            onClick={copyEmail}
            whileHover={{
              y: -2,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1a2332] text-white font-semibold text-lg rounded-full border border-white/[0.06] hover:bg-[#222d3f] hover:border-white/10 transition-all"
          >
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
        </motion.div>
      </div>
    </section>
  );
}
