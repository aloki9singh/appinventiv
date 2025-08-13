"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const baseAwards = [
  {
    title: "Entrepreneur",
    year: "2020",
    description: "App Development Company Of The Year",
    image: "/images/awards/entrepreneur.svg",
  },
  {
    title: "Clutch 100",
    year: "2025",
    description: "Fastest-Growing Company",
    image: "images/awards/clutch.svg",
  },
  {
    title: "Clutch Global",
    year: "2025",
    description: "Top Android & Chatbot Development Company",
    image: "/images/awards/clutch.svg",
  },
  {
    title: "Deloitte 50",
    year: "2024-2023",
    description: "Fastest Growing Technology Company",
    image: "/images/awards/deloitte.svg",
  },
  {
    title: "Entrepreneur",
    year: "2020",
    description: "App Development Company Of The Year",
    image: "/images/awards/entrepreneur.svg",
  },
  {
    title: "Clutch 100",
    year: "2025",
    description: "Fastest-Growing Company",
    image: "images/awards/clutch.svg",
  },
  {
    title: "Clutch Global",
    year: "2025",
    description: "Top Android & Chatbot Development Company",
    image: "/images/awards/clutch.svg",
  },
  {
    title: "Deloitte 50",
    year: "2024-2023",
    description: "Fastest Growing Technology Company",
    image: "/images/awards/deloitte.svg",
  },
  {
    title: "Entrepreneur",
    year: "2020",
    description: "App Development Company Of The Year",
    image: "/images/awards/entrepreneur.svg",
  },
  {
    title: "Clutch 100",
    year: "2025",
    description: "Fastest-Growing Company",
    image: "images/awards/clutch.svg",
  },
  {
    title: "Clutch Global",
    year: "2025",
    description: "Top Android & Chatbot Development Company",
    image: "/images/awards/clutch.svg",
  },
  {
    title: "Deloitte 50",
    year: "2024-2023",
    description: "Fastest Growing Technology Company",
    image: "/images/awards/deloitte.svg",
  },
];

const awards = [...baseAwards, ...baseAwards, ...baseAwards];

export default function AwardsCarousel() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollSpeed = 1;
  const scrollInterval = 20;

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    function scrollContent() {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }

    intervalRef.current = setInterval(scrollContent, scrollInterval);
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      className="mx-auto w-[78rem] max-w-full py-12 px-4 overflow-hidden space-y-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h2 className="lg:text-[2.7rem] text-2xl md:text-4xl  leading-tight  lg:leading-relaxed text-white max-w-[85%] mb-7">
          Our Growth Journey As A Mobile App Development Company Has Bagged A
          Few Reputed Accolades As Well
        </h2>

        <div className="lg:flex gap-3 hidden space-x-5 ">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full  border  text-white hover:bg-blue-700 flex items-center justify-center  transition text-2xl "
            aria-label="Scroll Left"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full  border  text-white hover:bg-blue-700 flex items-center justify-center  transition text-2xl "
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 px-2 no-scrollbar"
      >
        {awards.map((award, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-[#1e1e1e] text-white p-6 rounded-xl flex-shrink-0 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-lg font-semibold">{award.title}</div>
            <div className="text-sm text-gray-400">{award.year}</div>
            <div className="mt-2 text-sm">{award.description}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-center lg:hidden  space-x-5 ">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full  border  text-white hover:bg-blue-700   flex items-center justify-center  transition text-2xl "
          aria-label="Scroll Left"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full  border  text-white hover:bg-blue-700 flex items-center justify-center  transition text-2xl "
          aria-label="Scroll Right"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
