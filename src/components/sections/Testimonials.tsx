"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { BackgroundBlob } from "@/components/BackgroundBlob";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollTo({
      left:
        dir === "left"
          ? scrollRef.current.scrollLeft - amount
          : scrollRef.current.scrollLeft + amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" ref={ref} className="relative py-24 px-6 overflow-x-clip overflow-y-visible">
      {/* Organic Background Blob - Top Right (bleeding from Projects) */}
      <BackgroundBlob
        position="top-right"
        size="xl"
        rotation={25}
        flip={true}
        offsetX="0%"
        offsetY="-20%"
        opacity={0.4}
      />

      {/* Organic Background Blob - Bottom Left crossing into WorkExperience */}
      <BackgroundBlob
        position="bottom-left"
        size="lg"
        rotation={-45}
        offsetX="0%"
        offsetY="-15%"
        opacity={0.35}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 text-center"
        >
          <p className="text-sm text-[#8892a6] mb-3 uppercase tracking-wider">
            What others say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Kind words from <span className="bg-gradient-to-r from-[#b794f6] to-[#f472b6] bg-clip-text text-transparent">satisfied</span> clients
          </h2>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1a1f2e] border border-white/[0.06] shadow-lg flex items-center justify-center disabled:opacity-30 hover:scale-110 hover:border-white/20 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#1a1f2e] border border-white/[0.06] shadow-lg flex items-center justify-center disabled:opacity-30 hover:scale-110 hover:border-white/20 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <motion.div
            ref={scrollRef}
            onScroll={checkScroll}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
