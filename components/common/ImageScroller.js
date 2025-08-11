"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageScroller({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const index = Math.floor((x / width) * images.length);
    setActiveIndex(index);
  };

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden rounded-lg cursor-pointer"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <Image
        src={images[activeIndex]}
        alt={`Image ${activeIndex + 1}`}
        fill
        className="object-cover transition-all duration-500 ease-in-out"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <button className="px-4 py-2 text-black transition bg-gray-200 rounded-full hover:bg-white">
          View Case Study
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
