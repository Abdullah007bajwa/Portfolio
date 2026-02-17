"use client";

import { useEffect, useRef, useState } from "react";
import { LaserFlow } from "@/components/LaserFlow";

export function LaserFlowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskGradient, setMaskGradient] = useState(
    "linear-gradient(to bottom, black 0%, black 25%, transparent 40%, transparent 60%, black 75%, black 100%)"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll percentage (0 to 1)
      const maxScroll = documentHeight - windowHeight;
      const scrollPercent = Math.max(0, Math.min(1, scrollY / maxScroll));

      // Animate mask gradient based on scroll
      // Hero (0-15%): Fully visible at top
      // Middle (40-60%): Fully transparent
      // Contact (75-100%): Fully visible at bottom

      const topStop = Math.max(0, 25 - scrollPercent * 30);
      const topTransparent = Math.max(25, 40 - scrollPercent * 20);
      const bottomTransparent = Math.min(60, 60 + scrollPercent * 20);
      const bottomStop = Math.min(100, 75 + scrollPercent * 30);

      const gradient = `linear-gradient(
        to bottom,
        black 0%,
        black ${topStop}%,
        transparent ${topTransparent}%,
        transparent ${bottomTransparent}%,
        black ${bottomStop}%,
        black 100%
      )`;

      setMaskGradient(gradient);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show on desktop/large screens
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none hidden lg:block"
      style={{
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        mixBlendMode: "screen",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <LaserFlow
          color="#7a83ff"
          wispDensity={1.3}
          flowSpeed={0.15}
          verticalSizing={3.5}
          horizontalSizing={1.5}
          fogIntensity={0.2}
          fogScale={0.3}
          wispSpeed={15}
          wispIntensity={5}
          flowStrength={0.25}
          decay={1.3}
          horizontalBeamOffset={0}
          verticalBeamOffset={-0.5}
          width={1080}
          height={1080}
        />
      </div>
    </div>
  );
}
