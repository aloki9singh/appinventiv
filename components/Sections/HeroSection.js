"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative text-white bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/videoimg.webp" // replace with your image path
          alt="Digital Disruption"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="max-w-2xl text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
          Engineering Global Digital Disruption with AI-Native Solutions
        </h1>

        <p className="max-w-2xl mt-6 text-base text-gray-200 sm:text-lg lg:text-xl">
          We are a Deloitte Technology Fast 50 company and a Clutch Global Award 2025 winner
          for unmatched customer excellence. Our mission is to leverage AI-driven automation and
          strategic innovation to craft digital solutions that not only meet but anticipate your
          business needs, ensuring sustainable market leadership.
        </p>

        <button className="px-6 py-3 mt-8 font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
          Consult Our Experts
        </button>
      </div>
    </section>
  );
}
