"use client";
import { MapPin, Pin } from "lucide-react";
import React from "react";

const locations = [
  "New York, USA",
  "Los Angeles, USA",
  "London, UK",
  "Paris, France",
  "Toronto, Canada",
  "Chicago, USA",
  "Berlin, Germany",
  "Vancouver, Canada",
  "San Francisco, USA",
  "Rome, Italy",
  "Miami, USA",
  "Madrid, Spain",
  "Montreal, Canada",
  "Austin, USA",
  "Amsterdam, Netherlands",
  "Seattle, USA",
  "Dublin, Ireland",
  "Calgary, Canada",
  "Boston, USA",
  "Vienna, Austria",
  "Denver, USA",
  "Stockholm, Sweden",
  "Zurich, Switzerland",
  "Ottawa, Canada",
  "Portland, USA",
];

// Duplicate the locations array for a seamless loop
const doubledLocations = [...locations, ...locations];

export const LocationsBanner = () => {
  return (
    <section className="bg-background py-4 overflow-hidden whitespace-nowrap relative border-y border-border">
      <div className="animate-marquee-slow inline-block">
        {doubledLocations.map((location, index) => (
          <span
            key={`location-${index}`}
            className="inline-block mx-4 px-5 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-sm"
          >
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {location}
            </div>
          </span>
        ))}
      </div>
      {/* CSS for animation - Define a slightly different animation name/speed */}
      <style jsx global>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-slow {
          animation: marquee-slow 80s linear infinite; /* Slower animation */
          will-change: transform;
        }
        /* Optional: Pause on hover */
        /* .animate-marquee-slow:hover {
          animation-play-state: paused;
        } */
      `}</style>
    </section>
  );
};

export default LocationsBanner;
