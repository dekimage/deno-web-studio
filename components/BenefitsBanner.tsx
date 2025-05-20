"use client";
import React from "react";

// const benefits = [
//   "Get Clients",
//   "Google Friendly",
//   "Look Professional",
//   "Attract Customers",
//   "Increase Sales",
//   "Wow Customers",
// ];
const benefits = [
  "Unlimited Website Edits",
  "Direct Personal Support",
  "Custom Coded for Speed",
  "SEO Optimized for Google",
  "Monthly Analytics Reports",
  "Get More Clients",
  "Professional Website Design",
  "Fast Loading Times",
  "Mobile First Design",
  "Real Human Support (Me!)",
  "Ongoing Growth Advice",
  "Attract More Customers",
  "Increase Your Sales",
  "Beat Competitors Online",
  "Look Trustworthy and Reliable",
  "100% Custom Design (No Templates)",
  "Hosting & Domain Included",
  "SSL Certificate Included",
  "Conversion Focused Pages",
];

// Duplicate the benefits array for a seamless loop
const doubledBenefits = [...benefits, ...benefits];

export const BenefitsBanner = () => {
  return (
    <section className="bg-background py-4 overflow-hidden whitespace-nowrap relative border-y border-border">
      <div className="animate-marquee inline-block">
        {doubledBenefits.map((benefit, index) => (
          <span
            key={`benefit-${index}`}
            className="inline-block mx-4 px-5 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-sm"
          >
            {benefit}
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
          animation: marquee 60s linear infinite; /* Slower duration for readability */
          will-change: transform;
        }
        /* Optional: Pause on hover */
        /* .animate-marquee:hover {
          animation-play-state: paused;
        } */
      `}</style>
    </section>
  );
};

export default BenefitsBanner;
