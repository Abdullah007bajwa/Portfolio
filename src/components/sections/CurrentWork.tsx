"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { BackgroundBlob } from "@/components/BackgroundBlob";

export function CurrentWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.3 });
  
  // Card glow states
  const [card1Glow, setCard1Glow] = useState({ x: 150, y: 50 });
  const [card2Glow, setCard2Glow] = useState({ x: 150, y: 50 });
  const [card3Glow, setCard3Glow] = useState({ x: 150, y: 50 });
  
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setter({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative py-20 px-6 overflow-x-clip overflow-y-visible"
    >
      {/* Organic Background Blob - Center Right */}
      <BackgroundBlob
        position="bottom-right"
        size="md"
        rotation={15}
        flip={true}
        offsetX="0%"
        offsetY="50%"
        opacity={0.3}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[2fr,3fr] gap-8 items-stretch">
          {/* Left column (40%) */}
          <div className="flex flex-col gap-8">
            <div
              ref={card1Ref}
              className="relative rounded-3xl bg-[#101727] border border-white/[0.06] p-8 md:p-10 overflow-hidden"
              style={{
                "--glow-x": `${card1Glow.x}px`,
                "--glow-y": `${card1Glow.y}px`,
                "--glow-color": "rgba(183, 176, 249, 0.8)",
              } as React.CSSProperties & { "--glow-x": string; "--glow-y": string; "--glow-color": string }}
              onMouseMove={(e) => handleMouseMove(e, setCard1Glow, card1Ref)}
            >
              {/* Background Image - Rotated 180 degrees */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-10"
                style={{
                  backgroundImage: "url('https://framerusercontent.com/images/dpoJOeX03laSuoHqAUlsXGg18.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "rotate(180deg)",
                  zIndex: 0,
                }}
              />

              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-10 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(150px circle at var(--glow-x) var(--glow-y), var(--glow-color), transparent 70%)",
                  mixBlendMode: "screen",
                  zIndex: 1,
                }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, x: -100, y: -100 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Tech enthusiast with a passion for development.
                </h3>
                <div className="mt-6 h-16 w-32 rounded-2xl bg-white/[0.03] border border-white/[0.06]" />
              </motion.div>
            </div>

            <div
              ref={card2Ref}
              className="relative rounded-3xl border border-white/[0.06] p-8 md:p-10 overflow-hidden"
              style={{
                backgroundImage: "url('https://framerusercontent.com/images/dpoJOeX03laSuoHqAUlsXGg18.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#1a1f2e",
                "--glow-x": `${card2Glow.x}px`,
                "--glow-y": `${card2Glow.y}px`,
                "--glow-color": "rgba(183, 176, 249, 0.8)",
              } as React.CSSProperties & { "--glow-x": string; "--glow-y": string; "--glow-color": string }}
              onMouseMove={(e) => handleMouseMove(e, setCard2Glow, card2Ref)}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-10 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(150px circle at var(--glow-x) var(--glow-y), var(--glow-color), transparent 70%)",
                  mixBlendMode: "screen",
                  zIndex: 1,
                }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, x: -100, y: 100 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Do you want to start a project together?
                </h3>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a2332] px-5 py-2.5 text-sm font-semibold text-white border border-white/[0.08] hover:bg-[#222d3f] transition-colors"
                >
                  Copy my email address
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right column (60%) */}
          <div className="flex flex-col gap-8">
            <div
              ref={card3Ref}
              className="relative rounded-3xl bg-[#101727] border border-white/[0.06] overflow-hidden min-h-[500px]"
              style={{
                "--glow-x": `${card3Glow.x}px`,
                "--glow-y": `${card3Glow.y}px`,
                "--glow-color": "rgba(183, 176, 249, 0.8)",
              } as React.CSSProperties & { "--glow-x": string; "--glow-y": string; "--glow-color": string }}
              onMouseMove={(e) => handleMouseMove(e, setCard3Glow, card3Ref)}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-10 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(150px circle at var(--glow-x) var(--glow-y), var(--glow-color), transparent 70%)",
                  mixBlendMode: "screen",
                  zIndex: 2,
                }}
              />
              
              <motion.div
                className="relative z-20 h-full flex flex-col p-8 md:p-10"
                initial={{ opacity: 0, x: 100, y: -100 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Text Content - Top Left */}
                <div className="max-w-xs">
                  <p className="text-xs uppercase tracking-widest text-[#8892a6] mb-4 font-medium">
                    THE INSIDE SCOOP
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Currently building a JS Animation library
                  </h3>
                </div>

                {/* Background Image - Layer 1 - Full Coverage */}
                <motion.div
                  className="absolute top-4 left-4 w-[110%] h-[110%] pointer-events-none"
                  style={{
                    zIndex: 5,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src="https://framerusercontent.com/images/GL64lGkKIadIoYv9vAaAzJMPew.png"
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    srcSet="https://framerusercontent.com/images/GL64lGkKIadIoYv9vAaAzJMPew.png?scale-down-to=512 512w,https://framerusercontent.com/images/GL64lGkKIadIoYv9vAaAzJMPew.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/GL64lGkKIadIoYv9vAaAzJMPew.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/GL64lGkKIadIoYv9vAaAzJMPew.png 2549w"
                  />
                </motion.div>

                {/* Foreground Image - Layer 2 (Below Text with Fade) */}
                <motion.div
                  className="absolute w-[110%] h-[80%] pointer-events-none flex items-center justify-center"
                  style={{
                    zIndex: 6,
                    bottom: '-20px',
                    right: '-100px',
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src="https://framerusercontent.com/images/2qBNqqHkWFzcHd8szGo5rZF3UQ.png"
                    alt=""
                    className="w-full h-full object-contain"
                    loading="lazy"
                    srcSet="https://framerusercontent.com/images/2qBNqqHkWFzcHd8szGo5rZF3UQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/2qBNqqHkWFzcHd8szGo5rZF3UQ.png 860w"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
