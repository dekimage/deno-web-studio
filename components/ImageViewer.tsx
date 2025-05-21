"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageViewer({
  images,
  initialIndex,
  onClose,
}: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the image or controls
    if (e.target === e.currentTarget) {
      e.preventDefault();
      onClose();
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors cursor-pointer z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors cursor-pointer z-10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors cursor-pointer z-10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Main image container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
        <div className="relative w-full h-full max-h-[90vh] max-w-[90vw]">
          <Image
            src={images[currentIndex]}
            alt="Project screenshot"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      </div>
    </div>
  );
}
