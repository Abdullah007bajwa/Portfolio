"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BackgroundBlobProps {
  position: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  size?: "sm" | "md" | "lg" | "xl";
  rotation?: number;
  flip?: boolean;
  offsetX?: string;
  offsetY?: string;
  opacity?: number;
}

const sizeClasses = {
  sm: "w-[500px] h-[500px] md:w-[600px] md:h-[600px]",
  md: "w-[600px] h-[600px] md:w-[750px] md:h-[750px]",
  lg: "w-[700px] h-[700px] md:w-[900px] md:h-[900px]",
  xl: "w-[800px] h-[800px] md:w-[1100px] md:h-[1100px]",
};

const positionClasses = {
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
};

export function BackgroundBlob({
  position,
  size = "md",
  rotation = 0,
  flip = false,
  offsetX = "0",
  offsetY = "0",
  opacity = 0.15,
}: BackgroundBlobProps) {
  const positionClass = positionClasses[position];
  const sizeClass = sizeClasses[size];

  // Calculate transform based on position and offsets
  const getTransform = () => {
    let transforms: string[] = [];
    
    if (flip) {
      transforms.push(`scaleX(-1)`);
    }
    
    if (rotation !== 0) {
      transforms.push(`rotate(${rotation}deg)`);
    }

    return transforms.length > 0 ? transforms.join(" ") : undefined;
  };

  // Calculate translation based on position
  const getTranslate = () => {
    const offset = { x: offsetX, y: offsetY };
    
    if (position === "bottom-left") {
      return `translate(-${offset.x}, ${offset.y})`;
    } else if (position === "bottom-right") {
      return `translate(${offset.x}, ${offset.y})`;
    } else if (position === "top-left") {
      return `translate(-${offset.x}, -${offset.y})`;
    } else if (position === "top-right") {
      return `translate(${offset.x}, -${offset.y})`;
    }
    return "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`absolute ${positionClass} ${sizeClass} pointer-events-none overflow-visible`}
      style={{
        zIndex: 1,
        transform: getTranslate(),
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transform: getTransform(),
          background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.25) 0%, rgba(168, 85, 247, 0.15) 35%, transparent 70%)",
          maskImage: "radial-gradient(circle, black 50%, rgba(0,0,0,0.7) 65%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle, black 50%, rgba(0,0,0,0.7) 65%, transparent 85%)",
        }}
      >
        <Image
          src="https://framerusercontent.com/images/GL64lGkKIadIoYv9vAaAzJMPew.png"
          alt=""
          fill
          className="object-cover mix-blend-plus-lighter"
          style={{ opacity: opacity * 0.7 }}
          priority={false}
          unoptimized
        />
      </div>
    </motion.div>
  );
}
