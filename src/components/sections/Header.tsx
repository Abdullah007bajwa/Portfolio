"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const sectionIds = navLinks.map((l) => l.id);

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const activeSection = useScrollSpy(sectionIds, 40);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (href: string) => {
    // Use Lenis scrollTo to avoid conflicts with smooth scroll
    if (window.__lenis) {
      window.__lenis.scrollTo(href, { offset: -80 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // The pill follows hover if hovering, otherwise follows the active scroll section
  const pillTarget = hoveredLink || (activeSection ? `#${activeSection}` : null);

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        initial={false}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className="flex items-center gap-1 px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] shadow-2xl"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              onMouseEnter={() => setHoveredLink(link.href)}
              className="relative px-5 py-2 text-[15px] font-medium rounded-full transition-colors z-10"
              style={{
                color: pillTarget === link.href ? "#ffffff" : "#8892a6",
              }}
            >
              {/* Sliding pill background */}
              <AnimatePresence>
                {pillTarget === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    style={{ zIndex: -1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </AnimatePresence>
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile nav */}
      <motion.nav
        initial={false}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 inset-x-0 z-50 md:hidden flex justify-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-1 px-3 py-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] shadow-2xl w-fit">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-3 py-2 text-[13px] font-medium rounded-full transition-colors"
                style={{
                  color: isActive ? "#ffffff" : "#8892a6",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill-mobile"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    style={{ zIndex: -1 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {link.label}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
