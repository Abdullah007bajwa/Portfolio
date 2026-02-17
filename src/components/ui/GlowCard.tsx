"use client";

import React, { useRef, useEffect } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
  borderWidth?: number;
  radius?: number;
  hoverOnly?: boolean;
  glowOpacity?: number;
  falloff?: number;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "rgba(183, 176, 249, 0.8)",
  glowSize = 150,
  borderWidth = 2,
  radius = 24,
  hoverOnly = true,
  glowOpacity = 1,
  falloff = 70,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glowRef.current.style.setProperty("--glow-x", `${x}px`);
      glowRef.current.style.setProperty("--glow-y", `${y}px`);
      glowRef.current.style.setProperty("--glow-opacity", String(glowOpacity));
    };

    const handleMouseEnter = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current && hoverOnly) {
        glowRef.current.style.opacity = "0.1";
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [glowOpacity, hoverOnly]);

  const glowStyle = {
    "--glow-x": "0px",
    "--glow-y": "0px",
    "--glow-color": glowColor,
    "--glow-size": `${glowSize}px`,
    "--glow-opacity": String(glowOpacity),
    "--glow-falloff": `${falloff}%`,
    "--border-width": `${borderWidth}px`,
    "--radius": `${radius}px`,
  } as React.CSSProperties;

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        position: "relative",
        borderRadius: `${radius}px`,
        overflow: "hidden",
      }}
    >
      {/* Glow effect layer */}
      <div
        ref={glowRef}
        style={{
          ...glowStyle,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: `${radius}px`,
          background: `radial-gradient(${glowSize}px circle at var(--glow-x) var(--glow-y), 
            ${glowColor}, transparent ${falloff}%)`,
          pointerEvents: "none",
          opacity: hoverOnly ? 0.1 : glowOpacity,
          transition: "opacity 0.3s ease",
          mixBlendMode: "screen",
          zIndex: 1,
        } as React.CSSProperties}
      />

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
