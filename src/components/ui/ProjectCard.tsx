"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import StackIcon from "tech-stack-icons";
import { GlowCard } from "./GlowCard";
import type { Project } from "@/data/projects";

// Map tag names to tech stack icon names
const getIconName = (tag: string): string => {
  const iconMap: { [key: string]: string } = {
    React: "react",
    TypeScript: "typescript",
    FastAPI: "python",
    WebSocket: "nodejs",
    Redis: "redis",
    PostgreSQL: "postgresql",
    LLM: "openai",
    "AI Agent": "openai",
    "Express.js": "expressjs",
    Agents: "openai",
    LangGraph: "python",
    "Event-Driven": "nodejs",
    Python: "python",
    Desktop: "python",
    Monitoring: "python",
    "Real-time": "nodejs",
    "Computer Vision": "python",
    TensorFlow: "python",
    OpenCV: "python",
    "Deep Learning": "python",
    LSTM: "python",
    "Time Series": "python",
    PyTorch: "pytorch",
    "Technical Analysis": "python",
  };
  return iconMap[tag] || tag.toLowerCase().replace(/[^a-z0-9]/g, "");
};

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <GlowCard className="group relative overflow-hidden rounded-3xl bg-[#1a1f2e] shadow-lg border border-white/[0.06] cursor-default">
      <motion.div
        ref={ref}
        whileHover="hover"
        variants={{
          hover: {
            y: -12,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
          },
        }}
        style={{ position: "relative" }}
        className="h-full"
      >
      <div className="relative aspect-video overflow-hidden bg-[#0f1419]">
        <motion.div
          style={{ y: imageY }}
          className="relative w-full h-full"
          variants={{
            hover: {
              scale: 1.05,
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
        >
          <Image
            src={project.image}
            alt={project.altText || project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized={project.image.startsWith("/images/") && !project.image.endsWith(".png")}
          />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#b794f6] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#8892a6] mb-6 line-clamp-2">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[#0f1419] border border-white/10 text-white rounded-full hover:border-white/20 transition-colors"
              >
                <StackIcon name={getIconName(tag)} className="w-4 h-4" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#b794f6] font-semibold group/btn hover:text-[#f472b6] transition-colors"
          variants={{
            hover: { transition: { staggerChildren: 0.05 } },
          }}
        >
          Check Live Site
          <motion.span
            variants={{
              hover: { x: 4, transition: { duration: 0.2 } },
            }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.span>
        </motion.a>
      </div>
      </motion.div>
    </GlowCard>
  );
}
