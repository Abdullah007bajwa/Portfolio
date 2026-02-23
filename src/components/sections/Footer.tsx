"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "https://x.com/MAbdullahBajwa", label: "Twitter" },
    { icon: Linkedin, href: "http://linkedin.com/in/abdullah--bajwa/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/m.abdullah_bajwa", label: "Instagram" },
    { icon: Github, href: "https://github.com/Abdullah007bajwa", label: "GitHub" },
  ];

  return (
    <footer className="border-t border-white/[0.06] py-8 bg-[#0a0f1e]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <p className="text-[#c0c2d3] text-sm">
              Copyright ©{new Date().getFullYear()}{" "}
              <a
                href="http://getneuralnest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b794f6] hover:text-[#f472b6] transition-colors"
              >
                Abdullah Bajwa
              </a>
            </p>
          </div>

          {/* Social Icons with gradient hover */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center transition-all duration-300 hover:border-[#b794f6]/40"
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect behind the icon */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b794f6]/0 to-[#f472b6]/0 group-hover:from-[#b794f6]/20 group-hover:to-[#f472b6]/20 transition-all duration-300 blur-sm" />
                <social.icon className="relative z-10 w-5 h-5 text-[#c0c2d3] group-hover:text-[#b794f6] transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
