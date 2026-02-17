"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LaserFlowProps {
  color?: string;
  wispDensity?: number;
  flowSpeed?: number;
  verticalSizing?: number;
  horizontalSizing?: number;
  fogIntensity?: number;
  fogScale?: number;
  wispSpeed?: number;
  wispIntensity?: number;
  flowStrength?: number;
  decay?: number;
  horizontalBeamOffset?: number;
  verticalBeamOffset?: number;
  width?: number;
  height?: number;
}

export function LaserFlow({
  color = "#7a83ff",
  wispDensity = 1.3,
  flowSpeed = 0.15,
  verticalSizing = 3.5,
  horizontalSizing = 2,
  fogIntensity = 0.2,
  fogScale = 0.3,
  wispSpeed = 15,
  wispIntensity = 5,
  flowStrength = 0.25,
  decay = 1.3,
  horizontalBeamOffset = 0,
  verticalBeamOffset = 0,
  width = 1080,
  height = 1080,
}: LaserFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const drawLaser = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw flowing wisps/particles
      time += flowSpeed;
      
      for (let i = 0; i < wispDensity * 50; i++) {
        const x = (Math.sin(time * 0.001 + i * horizontalSizing) + 1) * (width / 2) + horizontalBeamOffset * width;
        const y = (time * wispSpeed + i * verticalSizing) % height + verticalBeamOffset * height;
        
        const alpha = Math.sin(i * 0.1) * wispIntensity;
        
        ctx.fillStyle = `rgba(122, 131, 255, ${(fogIntensity * alpha) / 255})`;
        ctx.beginPath();
        ctx.arc(x, y, flowStrength * 10, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawLaser);
    };

    drawLaser();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    width,
    height,
    color,
    wispDensity,
    flowSpeed,
    verticalSizing,
    horizontalSizing,
    fogIntensity,
    wispSpeed,
    wispIntensity,
    flowStrength,
    horizontalBeamOffset,
    verticalBeamOffset,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        display: "block",
        filter: `drop-shadow(0 0 20px ${color})`,
      }}
    />
  );
}
