"use client";

import React from "react";
import Image from "next/image"; // Import Next.js Image component for optimization

// Example approximate pin locations (percentage-based top/left for responsiveness)
const pinLocations = [
  { top: "35%", left: "20%" }, // Approx North America West
  { top: "40%", left: "28%" }, // Approx North America East
  { top: "30%", left: "50%" }, // Approx Europe West
  { top: "33%", left: "55%" }, // Approx Europe Central
  { top: "60%", left: "30%" }, // Approx South America
];

const WorldMapPins = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container text-center">
        {/* Testimonials Section Heading */}
        <div className="container text-center pt-12 pb-6 md:pt-16 md:pb-8">
          <h2 className="text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl font-oswald">
            25+ Happy Clients Across USA, Canada & EU
          </h2>
        </div>
        <p className="mx-auto mb-12 text-lg text-dark-gray/80 max-w-2xl">
          From local startups to international businesses, we provide web
          solutions that work, everywhere.
        </p>

        {/* Map Container - Increased max-width */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] overflow-hidden">
          {/* World Map Image Background - Increased opacity */}
          <Image
            src="/worldmap.svg" // Path relative to the public folder
            alt="World map outline"
            layout="fill" // Fill the container
            objectFit="contain" // Scale the image while preserving aspect ratio
            className="opacity-40 pointer-events-none" // Changed opacity-20 to opacity-40
          />

          {/* Pulsating Pins */}
          {pinLocations.map((loc, index) => (
            <div
              key={index}
              className="absolute w-3 h-3 rounded-full bg-primary-blue animate-pulse-map shadow-lg"
              style={{
                top: loc.top,
                left: loc.left,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Define custom animation */}
      <style jsx global>{`
        @keyframes pulse-map {
          0%,
          100% {
            opacity: 1;
            transform: scale(1) translate(-50%, -50%);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.6) translate(-50%, -50%);
          }
        }
        .animate-pulse-map {
          animation: pulse-map 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default WorldMapPins;
