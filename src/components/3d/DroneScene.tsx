"use client";

import { Canvas } from "@react-three/fiber";
import DroneModel from "./Drone";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <DroneModel />
    </>
  );
}

export default function DroneScene() {
  return (
    <Canvas
      camera={{ position: [3, 1.5, 4], fov: 42 }}
      className="w-full h-full"
      gl={{ antialias: true }}
    >
      <Scene />
    </Canvas>
  );
}
