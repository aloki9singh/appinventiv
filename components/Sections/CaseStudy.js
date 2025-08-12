"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const caseStudies = [
  {
    title: "Adidas",
    subtitle: "Case Study",
    description: "Crafting innovation for the consumer markets with Adidas",
    stats: [
      { value: "5M+", label: "App downloads" },
      { value: "2M+", label: "Active users" },
    ],
    image: "/images/Slider/adidas.webp",
  },
  {
    title: "Nike",
    subtitle: "Case Study",
    description: "Reimagining sports retail experience with Nike",
    stats: [
      { value: "3M+", label: "App downloads" },
      { value: "1.5M+", label: "Active users" },
    ],
    image: "/images/Slider/ikea.webp",
  },
  {
    title: "Puma",
    subtitle: "Case Study",
    description: "Digitally transforming Puma’s consumer experience",
    stats: [
      { value: "4M+", label: "App downloads" },
      { value: "2.3M+", label: "Active users" },
    ],
    image: "/images/Slider/pizzahut.webp",
  },
  {
    title: "Reebok",
    subtitle: "Case Study",
    description: "Empowering Reebok with cutting-edge solutions",
    stats: [
      { value: "6M+", label: "App downloads" },
      { value: "3.2M+", label: "Active users" },
    ],
    image: "/images/Slider/americana.webp",
  },
];

export default function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndex((prev) => (prev + 1) % caseStudies.length),
    onSwipedRight: () =>
      setActiveIndex(
        (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
      ),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const current = caseStudies[activeIndex];
  const next = caseStudies[(activeIndex + 1) % caseStudies.length];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div
        className="max-w-[76rem] mx-auto flex flex-col md:flex-row items-center gap-10"
        {...handlers}
      >
        {/* LEFT SIDE: TEXT */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-blue-500 text-sm uppercase mb-2">
                {current.subtitle}
              </p>
              <h2 className="text-3xl font-bold mb-4">{current.title}</h2>
              <p className="text-gray-300 mb-6 max-w-md">
                {current.description}
              </p>

              <div className="flex space-x-8 mb-6">
                {current.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-x-2 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition group">
                View case study
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <FaChevronRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE: IMAGE STACK REVEAL */}
        <div className="flex-1 w-full max-w-xl relative h-80 rounded-lg overflow-hidden">
          {/* Background (Next image) */}
          <Image
            src={next.image}
            alt={next.title}
            fill
            className="object-cover rounded-lg"
          />

          {/* Foreground (Current image) with mask reveal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
