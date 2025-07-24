// src/components/Hero.tsx
"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, GroupProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group, Scene } from "three";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Sparkles } from "lucide-react";

// Preload the GLTF for better performance
useGLTF.preload("/comic_drone.glb");

// NobleModel: loads and renders the GLTF scene
const NobleModel = (props: GroupProps) => {
  useGLTF.preload(import.meta.env.BASE_URL + "comic_drone.glb");
  const { scene } = useGLTF(import.meta.env.BASE_URL + "comic_drone.glb") as unknown as { scene: Scene };
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });

  return <primitive object={scene} ref={ref} {...props} />;
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex flex-col items-center text-center space-y-6 animate-fade-in">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 gap-2 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            AI Specialist
          </Badge>
          <h1 className="text-3xl font-bold leading-tight">
            Crafting Digital Experiences at the{" "}
            <span className="gradient-text">intersection of AI & Design</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-sm">
            AI Specialist and Software Developer with 2+ years of experience in
            computer vision, machine learning, and automation. Building AI‑powered
            solutions that transform complex challenges into streamlined processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="default"
              onClick={scrollToProjects}
              className="bg-gradient-primary text-white font-semibold px-6 py-3"
            >
              Explore Work
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="default"
              className="px-6 py-3 border-primary/20 hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>
          <div className="w-full max-w-sm h-[300px]">
            <Canvas
              camera={{ position: [2, 1.5, 3], fov: 42 }}
              className="w-full h-full drop-shadow-2xl"
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={null}>
                <NobleModel scale={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} />
              </Suspense>
            </Canvas>
          </div>

        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* left */}
          <div className="space-y-8 lg:pl-8">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 gap-2 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              AI Specialist
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Crafting Digital Experiences at the{" "}
              <span className="gradient-text">intersection of AI & Design</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              AI Specialist and Software Developer with 2+ years of experience in
              computer vision, machine learning, and automation. Building AI‑powered
              solutions that transform complex challenges into streamlined processes.
            </p>

            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-primary text-white font-semibold px-8 py-6"
              >
                Explore Work
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 border-primary/20 hover:bg-primary/10"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* right: 3D canvas */}
          <div className="flex justify-end">
            <div className="relative w-[550px] h-[500px] animate-slide-up">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-150" />
              <Canvas
                camera={{ position: [3, 1.5, 4], fov: 42 }}
                className="relative z-10 w-full h-full drop-shadow-2xl"
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <NobleModel scale={[0.7, 0.7, 0.7]} position={[0, -1, 0]} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
