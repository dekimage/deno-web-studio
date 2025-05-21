"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const businessTypes = [
  "Yoga Studio",
  "Nail Salon",
  "Pizza Shop",
  "Barber Shop",
  "Mobile Repair",
  "Wedding Photographer",
  "Real Estate",
  "Fitness Coach",
  "Gym",
  "Dentist",
  "Jewelry Store",
  "Law Firm",
  "Restaurant",
  "Coffee Shop",
  "Boutique",
  "Auto Repair",
  "Plumber",
  "Electrician",
  "HVAC Service",
  "Landscaping",
];

// Duplicate the business types array for a seamless loop
const doubledBusinessTypes = [...businessTypes, ...businessTypes];

export default function BusinessTypesBanner() {
  return (
    <section className="bg-background py-4 overflow-hidden whitespace-nowrap relative border-y border-border">
      <div className="animate-marquee inline-block">
        {doubledBusinessTypes.map((type, index) => (
          <span
            key={`type-${index}`}
            className="inline-flex items-center mx-4 px-5 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-sm"
          >
            <Check className="w-4 h-4 mr-2" />
            {type}
          </span>
        ))}
      </div>
      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
