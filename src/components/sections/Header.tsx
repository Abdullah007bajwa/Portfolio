"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Centered glass-morphic nav matching Framer reference */}
      {/* Desktop nav */}
      <motion.nav
        initial={false}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="flex items-center gap-1 px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] shadow-2xl">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              whileHover={{ color: "#ffffff" }}
              className="px-5 py-2 text-[15px] font-medium text-[#8892a6] hover:bg-white/[0.08] rounded-full transition-colors"
            >
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
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              whileHover={{ color: "#ffffff" }}
              className="px-3 py-2 text-[13px] font-medium text-[#8892a6] hover:bg-white/[0.08] rounded-full transition-colors"
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
