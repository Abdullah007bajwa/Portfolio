"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlowCard } from "./GlowCard";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlowCard className="bg-[#1a1f2e] rounded-3xl border border-white/[0.06] h-full cursor-default">
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        }}
        className="h-full flex flex-col min-w-[340px] max-w-[400px] p-6 shadow-lg">
        <p className="text-[#8892a6] leading-relaxed mb-6 flex-1">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#0f1419] flex-shrink-0 border border-white/10">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-sm text-[#8892a6]">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    </GlowCard>
  );
}
