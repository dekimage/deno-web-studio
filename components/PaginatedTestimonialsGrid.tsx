"use client";

import React, { useState } from "react";
import { Quote, Star } from "lucide-react";

// Define the type for a single testimonial based on your data structure
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location: string;
}

interface PaginatedTestimonialsGridProps {
  testimonials: Testimonial[];
  initialCount?: number;
  loadMoreCount?: number;
}

const PaginatedTestimonialsGrid: React.FC<PaginatedTestimonialsGridProps> = ({
  testimonials,
  initialCount = 15,
  loadMoreCount = 6, // Although we only have 5 more in the current data
}) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const showMoreTestimonials = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + loadMoreCount, testimonials.length)
    );
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const canLoadMore = visibleCount < testimonials.length;

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-light-gray flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary-blue opacity-50" />
              <p className="mt-4 text-dark-gray/80 italic flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center my-4 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="flex items-center pt-4 border-t border-light-gray/50">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-semibold text-dark-gray">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-dark-gray/80">
                    {testimonial.title}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {canLoadMore && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreTestimonials}
              className="primary-button font-oswald"
            >
              See More Testimonials
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaginatedTestimonialsGrid;
