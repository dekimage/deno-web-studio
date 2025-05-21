"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolioData"; // Import all projects
import { Type, Palette, MapPin } from "lucide-react";
import BusinessTypesBanner from "@/components/BusinessTypesBanner";
import ImageViewer from "@/components/ImageViewer";
import { useState } from "react";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleImageClick = (projectIndex: number, imageIndex: number) => {
    setSelectedProject(projectIndex);
    setSelectedImageIndex(imageIndex);
  };

  return (
    <>
      {/* Hero Section - Similar to Testimonials */}
      <section className="py-16 bg-light-gray">
        <div className="container text-center">
          <h1 className="text-4xl font-black tracking-tight text-dark-gray sm:text-5xl md:text-6xl font-oswald">
            {/* OUR WORK */}
            PORTFOLIO
          </h1>

          <p className="mx-auto mt-6 text-xl text-dark-gray/80 max-w-3xl">
            Browse through some of the projects we&apos;ve successfully
            delivered for our clients.
          </p>
        </div>
      </section>

      <BusinessTypesBanner />

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Grid for detailed project cards */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
            {" "}
            {/* Single column for larger cards */}
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="relative overflow-hidden rounded-lg shadow-lg border border-light-gray flex flex-col md:flex-row group"
              >
                {/* Background with color palette shapes */}
                {/* <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md " />
                  <div className="absolute inset-0">
                    
                    <div
                      className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-70 blur-md"
                      style={{ backgroundColor: project.colors[0] }}
                    />
                    <div
                      className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-70 blur-md"
                      style={{ backgroundColor: project.colors[1] }}
                    />
                    <div
                      className="absolute top-1/2 right-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-70 blur-md"
                      style={{ backgroundColor: project.colors[2] }}
                    />
                    <div
                      className="absolute top-1/4 right-1/6 w-[400px] h-[400px] rounded-full opacity-70 blur-md"
                      style={{ backgroundColor: project.colors[3] }}
                    />
                  </div>
                </div> */}

                {/* Content with glass matte effect */}
                <div className="relative z-10 flex flex-col md:flex-row w-full">
                  {/* Image Grid (2x2) */}
                  <div className="grid grid-cols-2 grid-rows-2 w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
                    {project.images.slice(0, 4).map((imgSrc, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-square overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(projectIndex, imgIndex)}
                      >
                        <Image
                          src={imgSrc || "/placeholder.svg"}
                          alt={`${project.name} screenshot ${imgIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        />
                      </div>
                    ))}
                    {/* Fill remaining grid cells if less than 4 images */}
                    {[...Array(Math.max(0, 4 - project.images.length))].map(
                      (_, i) => (
                        <div
                          key={`placeholder-${i}`}
                          className="bg-light-gray/50 aspect-square"
                        ></div>
                      )
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col p-6 w-full md:w-1/2 lg:w-3/5 xl:w-2/3 bg-white/70 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-dark-gray font-oswald mb-2">
                      {project.name}
                    </h3>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium text-primary-blue bg-primary-blue/10 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* --- Added Project Details --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm text-dark-gray">
                      {/* Typography */}
                      <div className="flex items-start">
                        <Type className="w-4 h-4 mr-2 mt-0.5 text-primary-blue flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Typography:</span>
                          <span className="ml-1 text-dark-gray/80">
                            {project.typography.join(", ")}
                          </span>
                        </div>
                      </div>

                      {/* Color Palette */}
                      <div className="flex items-start">
                        <Palette className="w-4 h-4 mr-2 mt-0.5 text-primary-blue flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Colors:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {project.colors.map((color, idx) => (
                              <div
                                key={idx}
                                className="w-4 h-4 rounded-full border border-black/10"
                                style={{ backgroundColor: color }}
                                title={color}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary-blue flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Location:</span>
                          <span className="ml-1 text-dark-gray/80">
                            {project.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* --- End Added Project Details --- */}

                    {/* Details Text */}
                    <p className="text-dark-gray/80 mb-4 flex-grow">
                      {project.details}
                    </p>
                    {/* Visit Website Button */}
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto text-center primary-button font-oswald mt-auto"
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedProject !== null && (
        <ImageViewer
          images={projects[selectedProject].images}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
