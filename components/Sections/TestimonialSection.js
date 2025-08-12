"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight, FaPlay } from "react-icons/fa";

export default function TestimonialSection() {
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      name: "Edgar",
      title: "CEO, Street Smart 242",
      image: "/images/testimonials/edgar.webp",
    },
    {
      name: "Tushar Patel",
      title: "CEO, DoList App",
      image: "/images/testimonials/tushar.webp",
    },
    {
      name: "Daniel Zukich",
      title: "Co-Founder, Plandid",
      image: "/images/testimonials/daniel.webp",
    },
    {
      name: "Fred McCaw",
      title: "CEO, McCaw Digital LLC",
      image: "/images/testimonials/fred.webp",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / maxScroll) * 100;
      setProgress(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="overflow-x-hidden bg-gradient-to-br from-slate-900 to-purple-600 text-white py-16">
      <div className="max-w-[82rem] mx-auto px-6 sm:px-8 lg:px-12 space-y-5">
        <div className="mb-12 relative">
          <h1 className="text-3xl py-5 sm:text-4xl lg:text-5xl  leading-tight text-gray-400">
            Our Clients Are Our Superheroes. We Prioritize Delivering Excellent
            Products, Thorough Training, And Optimal Execution
          </h1>

          <h1
            className="absolute top-0 left-0 text-3xl py-5 sm:text-4xl lg:text-5xl  leading-tight text-white overflow-hidden whitespace-nowrap"
            style={{
              clipPath: `inset(0 ${100 - progress}% 0 0)`, // Animates from left to right
              transition: "clip-path 0.2s linear",
            }}
          >
            Our Clients Are Our Superheroes. We Prioritize Delivering Excellent
            Products, Thorough Training, And Optimal Execution
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-shadow duration-300
                ${index % 2 === 0 ? "lg:-mt-6" : "lg:mt-6"}`}
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover shadow-xl rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white text-3xl sm:text-4xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all" />
                </div>
              </div>

              <div className="p-4 text-center">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        <center>
          <button className="flex items-center px-6 py-3 mt-8 font-medium  hover:bg-blue-600 shadow-lg  text-white transition-all duration-300 border hover:border-none border-white rounded-lg  group">
            View All Testimonials
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 ">
              <FaChevronRight className="w-4 h-4 group-hover:animate-moveRight" />
            </span>
          </button>
        </center>
      </div>
    </section>
  );
}
