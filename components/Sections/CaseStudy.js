"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const CaseStudy = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="max-w-[76rem] mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-blue-500 text-sm uppercase mb-2">Case Study</p>
          <h2 className="text-3xl font-bold mb-4">Adidas</h2>
          <p className="text-gray-300 mb-6 max-w-md">
            Crafting innovation for the consumer markets with Adidas
          </p>

          <div className="flex space-x-8 mb-6">
            <div>
              <p className="text-2xl font-bold">5M+</p>
              <p className="text-sm text-gray-400">App downloads</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5M+</p>
              <p className="text-sm text-gray-400">App downloads</p>
            </div>
          </div>

          <button className="flex items-center gap-x-2 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition group">
            View case study
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaChevronRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        <div className="flex-1 w-full max-w-xl rounded overflow-hidden">
          <div className="relative w-full h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/Slider/adidas.webp"
              alt="Adidas Store"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
