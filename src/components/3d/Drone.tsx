"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { Group } from "three";

export default function DroneModel() {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF("/comic_drone.glb") as { scene: Group };

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
      ref.current.position.y = Math.sin(_.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return <primitive ref={ref} object={scene} />;
}
