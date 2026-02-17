"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  { name: "North America", coordinates: [-100, 40] as [number, number], isPrimary: true },
  { name: "Europe", coordinates: [10, 50] as [number, number], isPrimary: true },
  { name: "Asia", coordinates: [100, 35] as [number, number], isPrimary: true },
  { name: "South America", coordinates: [-60, -20] as [number, number] },
  { name: "Africa", coordinates: [20, 0] as [number, number] },
  { name: "Australia", coordinates: [135, -25] as [number, number] },
];

const connections = [
  { from: [-100, 40], to: [10, 50] },
  { from: [10, 50], to: [100, 35] },
  { from: [-100, 40], to: [-60, -20] },
  { from: [20, 0], to: [100, 35] },
];

export function FFMap() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0f1419]/50 to-[#0a0f1e]/50 rounded-lg overflow-hidden">
      <motion.div
        animate={{
          x: ["-35%", "35%"],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          scale: 3,
        }}
        className="w-full h-full"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 120,
            center: [0, 20],
          }}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#b794f6"
                  stroke="none"
                  opacity={0.15}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {connections.map((conn, index) => (
            <Line
              key={index}
              from={conn.from}
              to={conn.to}
              stroke="#b794f6"
              strokeWidth={1}
              strokeLinecap="round"
              opacity={0.3}
            />
          ))}

          {locations.map((location) => (
            <Marker key={location.name} coordinates={location.coordinates}>
              <circle r={location.isPrimary ? 4 : 3} fill="#f472b6" opacity={0.8} />
              {location.isPrimary && (
                <circle
                  r={8}
                  fill="none"
                  stroke="#f472b6"
                  strokeWidth={1}
                  opacity={0.4}
                />
              )}
            </Marker>
          ))}
        </ComposableMap>
      </motion.div>
    </div>
  );
}

