"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Neeraj Tiwari",
    title: "Director – Digital Engineering",
    company: "Americana Group (Kuwait Food Co.)",
    avatar: "/images/testimonials/edgar.webp",
    logo: "/images/testimonials/jobget.svg",
  },
  {
    quote:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Eduardo Silva",
    title: "CEO",
    company: "edFundo",
    avatar: "/images/testimonials/fred.webp",
    logo: "/images/testimonials/jobget.svg",
  },
  {
    quote:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Neeraj Tiwari",
    title: "Director – Digital Engineering",
    company: "Americana Group (Kuwait Food Co.)",
    avatar: "/images/testimonials/edgar.webp",
    logo: "/images/testimonials/jobget.svg",
  },
  {
    quote:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Eduardo Silva",
    title: "CEO",
    company: "edFundo",
    avatar: "/images/testimonials/daniel.webp",
    logo: "/images/testimonials/jobget.svg",
  },
  {
    quote:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Neeraj Tiwari",
    title: "Director – Digital Engineering",
    company: "Americana Group (Kuwait Food Co.)",
    avatar: "/images/testimonials/edgar.webp",
    logo: "/images/testimonials/jobget.svg",
  },
  {
    quote:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Eduardo Silva",
    title: "CEO",
    company: "edFundo",
    avatar: "/images/testimonials/edgar.webp",
    logo: "/images/testimonials/jobget.svg",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState("right");

  const scrollLeft = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const scrollRight = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="mx-auto w-[78rem] max-w-full  px-4 overflow-hidden space-y-12">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4 pt-10">
          <h2 className="text-white text-3xl md:text-[2.6rem]  max-w-3xl leading-snug">
            First-Hand Opinions Of Clients On Their Partnership Experience
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            We are a software and mobile application development company that
            ensures its expertise extends to offer a seamlessly productive and
            growth-oriented partnership to its clients.{" "}
          </p>

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
      </div>

      <section className="bg-black text-white py-5 px-4 sm:px-6  lg:px-8">
        <div className="relative max-w-4xl mx-auto">
        <div
          key={currentIndex}
          className={`transition-transform duration-500 ease-in-out transform ${
            direction === "right"
              ? "animate-slide-in-right"
              : "animate-slide-in-left"
          }`}
        >
          <div className=" border border-gray-600 p-8 sm:p-12 rounded-xl shadow-xl">
            <p className="text-sm sm:text-lg mb-6 leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>

            <div className="flex items-center justify-between border-t border-t-slate-700 pt-5">
              <div className="flex items-center gap-4 space-x-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div >
                  <p className="font-semibold text-base">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].title},{" "}<br/>
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              <div className="w-24 h-10 relative flex-shrink-0 hidden sm:block">
                <Image
                  src={testimonials[currentIndex].logo}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>


          <div className="flex gap-3 justify-center lg:hidden  space-x-5  pt-10">
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
      </section>
    </>
  );
}
