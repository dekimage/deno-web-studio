"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, apps } from "@/lib/portfolioData";
import { Type, Palette, MapPin, Code } from "lucide-react";
import BusinessTypesBanner from "@/components/BusinessTypesBanner";
import ImageViewer from "@/components/ImageViewer";
import { useState } from "react";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isApp, setIsApp] = useState<boolean>(false);

  const handleImageClick = (
    index: number,
    imageIndex: number,
    isAppView: boolean
  ) => {
    setSelectedProject(index);
    setSelectedImageIndex(imageIndex);
    setIsApp(isAppView);
  };

  const getStatusStyles = (status: string) => {
    const baseStyles =
      "flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm font-medium tracking-wide text-sm";
    switch (status.toLowerCase()) {
      case "live":
        return `${baseStyles} bg-green-50 border-green-200 text-green-700`;
      case "in development":
        return `${baseStyles} bg-yellow-50 border-yellow-200 text-yellow-700`;
      default:
        return `${baseStyles} bg-gray-50 border-gray-200 text-gray-700`;
    }
  };

  const getStatusDotStyles = (status: string) => {
    const baseStyles = "w-3 h-3 rounded-full border-2 shadow-sm animate-pulse";
    switch (status.toLowerCase()) {
      case "live":
        return `${baseStyles} bg-green-500 border-green-400`;
      case "in development":
        return `${baseStyles} bg-yellow-500 border-yellow-400`;
      default:
        return `${baseStyles} bg-gray-500 border-gray-400`;
    }
  };

  const renderProjectCard = (item: any, index: number, isAppView: boolean) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-lg shadow-lg border border-light-gray flex flex-col md:flex-row group"
    >
      {/* Image Grid (2x2) */}
      <div className="grid grid-cols-2 grid-rows-2 w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
        {item.images.slice(0, 4).map((imgSrc: string, imgIndex: number) => (
          <div
            key={imgIndex}
            className="relative aspect-square overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(index, imgIndex, isAppView)}
          >
            <Image
              src={imgSrc || "/placeholder.svg"}
              alt={`${item.name} screenshot ${imgIndex + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </div>
        ))}
        {[...Array(Math.max(0, 4 - item.images.length))].map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="bg-light-gray/50 aspect-square"
          ></div>
        ))}
      </div>

      {/* Project Details */}
      <div className="flex flex-col p-6 w-full md:w-1/2 lg:w-3/5 xl:w-2/3 bg-white/70 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-dark-gray font-oswald">
            {item.name}
          </h3>
          <div className={getStatusStyles(item.status)}>
            <div className={getStatusDotStyles(item.status)} />
            <span className="uppercase tracking-wider font-oswald">
              {item.status}
            </span>
          </div>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium text-primary-blue bg-primary-blue/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm text-dark-gray">
          {/* Typography */}
          <div className="flex items-start">
            <Type className="w-4 h-4 mr-2 mt-0.5 text-primary-blue flex-shrink-0" />
            <div>
              <span className="font-semibold">Typography:</span>
              <span className="ml-1 text-dark-gray/80">
                {item.typography.join(", ")}
              </span>
            </div>
          </div>

          {/* Color Palette */}
          <div className="flex items-start">
            <Palette className="w-4 h-4 mr-2 mt-0.5 text-primary-blue flex-shrink-0" />
            <div>
              <span className="font-semibold">Colors:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {item.colors.map((color: string, idx: number) => (
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
              <span className="ml-1 text-dark-gray/80">{item.location}</span>
            </div>
          </div>

          {/* Tech Stack for Apps */}
          {isAppView && (
            <div className="flex items-start col-span-1 sm:col-span-3">
              <Code className="w-4 h-4 mr-2 mt-0.5 text-primary-blue flex-shrink-0" />
              <div>
                <span className="font-semibold">Tech Stack:</span>
                <span className="ml-1 text-dark-gray/80">
                  {item.techStack.join(", ")}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Details Text */}
        <p className="text-dark-gray/80 mb-4 flex-grow">{item.details}</p>
        {/* Visit Website Button */}
        <Link
          href={item.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto text-center primary-button font-oswald mt-auto"
        >
          Visit {isAppView ? "App" : "Website"}
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-light-gray">
        <div className="container text-center">
          <h1 className="text-4xl font-black tracking-tight text-dark-gray sm:text-5xl md:text-6xl font-oswald">
            PORTFOLIO
          </h1>

          <p className="mx-auto mt-6 text-xl text-dark-gray/80 max-w-3xl">
            Browse through some of the projects we&apos;ve successfully
            delivered for our clients.
          </p>
        </div>
      </section>

      <BusinessTypesBanner />

      {/* Websites Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-gray font-oswald mb-12 text-center">
            BUSINESS WEBSITES
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
            {projects.map((project, index) =>
              renderProjectCard(project, index, false)
            )}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-gray font-oswald mb-12 text-center">
            APPS & PLATFORMS
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
            {apps.map((app, index) => renderProjectCard(app, index, true))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedProject !== null && (
        <ImageViewer
          images={
            isApp
              ? apps[selectedProject].images
              : projects[selectedProject].images
          }
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
