"use client";
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

// Sample shortened testimonials (Updated based on the expanded list)
const shortTestimonials = [
  {
    quote: "Looks amazing, brings in customers, conversion rate doubled!",
    name: "Sarah Johnson",
    title: "Owner, Mountain View Cafe",
  },
  {
    quote: "Breath of fresh air, listened, exceeded expectations.",
    name: "Michael Chen",
    title: "CEO, Coastal Properties",
  },
  {
    quote: "Incredibly fast, Google rankings improved dramatically.",
    name: "Emma Rodriguez",
    title: "Director, Fitness Studio",
  },
  {
    quote: "Monthly payment perfect, website quality top-notch.",
    name: "David Wilson",
    title: "Owner, Wilson Plumbing",
  },
  {
    quote: "Old site slow, new custom site lightning fast, no issues.",
    name: "Jennifer Lee",
    title: "Marketing Director, Lee's Bakery",
  },
  {
    quote: "Attention to detail sets them apart, thought of everything.",
    name: "Robert Garcia",
    title: "Founder, Garcia Law Firm",
  },
  {
    quote: "More inquiries in first month than 6 months prior!",
    name: "Amanda Taylor",
    title: "Owner, Taylor Photography",
  },
  {
    quote: "Understood our business, truly represents our brand.",
    name: "Thomas Brown",
    title: "CEO, Brown Construction",
  },
  {
    quote: "Mobile experience flawless, customers love it.",
    name: "Sophia Martinez",
    title: "Owner, Sophia's Salon",
  },
  {
    quote: "Best quality and service compared to previous designers.",
    name: "Daniel Kim",
    title: "Director, Kim's Auto Shop",
  },
  {
    quote: "Loads under 2s, bounce rate decreased significantly.",
    name: "Olivia White",
    title: "Marketing Manager, White Dental",
  },
  {
    quote: "$0 down made professional website possible starting out.",
    name: "James Miller",
    title: "Founder, Miller Fitness",
  },
];

// Duplicate for seamless loop
const doubledTestimonials = [...shortTestimonials, ...shortTestimonials];

export const ScrollingTestimonials = () => {
  return (
    <section className="bg-muted py-6 overflow-hidden whitespace-nowrap relative border-y border-border">
      <div className="animate-marquee-testimonial inline-block">
        {doubledTestimonials.map((testimonial, index) => (
          <div
            key={`scroll-testimonial-${index}`}
            className="inline-flex flex-col items-start mx-4 p-4 w-80 min-h-[10rem] bg-white rounded-lg shadow-md border border-light-gray align-top"
          >
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current mr-1"
                />
              ))}
            </div>
            <p className="text-xs italic mb-3 text-muted-foreground whitespace-normal flex-grow">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center mt-auto pt-2 border-t border-light-gray w-full">
              <Image
                src="/placeholder.svg?width=32&height=32"
                alt={testimonial.name}
                width={32}
                height={32}
                className="rounded-full mr-3 object-cover flex-shrink-0 bg-secondary"
              />
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes marquee-testimonial {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-testimonial {
          animation: marquee-testimonial 120s linear infinite; /* Adjust duration as needed */
          will-change: transform;
        }
        /* Optional: Pause on hover */
        /* .animate-marquee-testimonial:hover {
          animation-play-state: paused;
        } */
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
