"use client";

import { useEffect, ReactNode } from "react";

// Extend window to hold the lenis instance
declare global {
  interface Window {
    __lenis?: { scrollTo: (target: string | HTMLElement, options?: Record<string, unknown>) => void; raf: (time: number) => void; destroy: () => void };
  }
}

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: { scrollTo: (target: string | HTMLElement, options?: Record<string, unknown>) => void; raf: (time: number) => void; destroy: () => void } | null = null;

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical" as const,
        smoothWheel: true,
      });

      // Expose globally for nav scrolling
      window.__lenis = lenis;

      function raf(time: number) {
        if (lenis) lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };

    init();

    return () => {
      if (lenis) lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
