"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IceButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
}

export function IceButton({
  children,
  onClick,
  href,
  target,
  rel,
  className = "",
  size = "md",
  showArrow = false,
}: IceButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm gap-2",
    md: "px-8 py-3 text-base gap-2",
    lg: "px-12 py-4 text-lg gap-3",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold
    cursor-pointer text-white overflow-hidden
    transition-all duration-300
    rounded-[14px]
    border border-black/20
    ${sizeClasses[size]}
    ${className}
  `;

  const content = (
    <>
      {/* Main gradient background */}
      <div
        className="absolute inset-0 rounded-[14px]"
        style={{
          background: "linear-gradient(90deg, rgb(22, 26, 49) 0%, rgb(6, 9, 31) 100%)",
          zIndex: 0,
        }}
      />

      {/* Blur glow effect */}
      <motion.div
        className="absolute rounded-full"
        style={{
          backdropFilter: "blur(9px)",
          backgroundColor: "rgb(203, 172, 249)",
          filter: "blur(9px)",
          borderRadius: "50% / 10.9375%",
          opacity: 0,
          pointerEvents: "none",
          width: "60px",
          height: "40px",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%) rotate(27deg)",
        }}
        whileHover={{
          opacity: 0.6,
        }}
      />

      {/* Button text */}
      <span className="relative z-10 font-semibold flex items-center gap-2">
        {children}
        {showArrow && (
          <motion.svg
            viewBox="0 0 13 14"
            width="16"
            height="16"
            fill="currentColor"
            style={{
              transform: "rotate(45deg)",
            }}
            whileHover={{
              x: 2,
              y: -2,
            }}
            transition={{ duration: 0.3 }}
          >
            <path d="M1 7h11M7 1v11" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </motion.svg>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
