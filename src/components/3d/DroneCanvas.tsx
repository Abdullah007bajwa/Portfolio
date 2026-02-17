"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DroneScene = dynamic(() => import("./DroneScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
  ),
});

export function DroneCanvas({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className ?? ""}`}>
      <Suspense fallback={null}>
        <DroneScene />
      </Suspense>
    </div>
  );
}
