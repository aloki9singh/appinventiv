
"use client";
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    { src: "/images/awards/deloitte.svg", alt: "Deloitte" },
    { src: "/images/awards/entrepreneur.svg", alt: "Entrepreneur" },
    { src: "/images/awards/economic-times.svg", alt: "Economic Times" },
    { src: "/images/awards/times-business.svg", alt: "Times Business Awards" },
    { src: "/images/awards/clutch.svg", alt: "Clutch 100" },
  ];

  return (
    <section className="px-4 py-12 text-white bg-black sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 pb-10 ">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`flex items-center justify-center pl-6 ${index !== 0 ? "border-l border-zinc-600" : ""}`}
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={200}
                height={40}
                style={{ height: "95px" }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="grid items-center grid-cols-1 gap-10 mt-12 lg:grid-cols-2 lg:px-10">
          <h2 className="text-xl font-bold leading-snug sm:text-3xl lg:text-4xl">
            Transforming Businesses with AI-Driven Technology That Transcends
            Geographies and Platforms
          </h2>
          <p className="text-sm text-gray-300 sm:text-lg">
            Appinventiv is one of the world’s largest AI-led IT service providers
            helping companies redefine their digital possibilities for nearly a
            decade now. With our team of 1600+ tech evangelists, we are building
            the digital infrastructure of our clients using intelligent, AI-native
            solutions, positioning them to be the market leaders of their
            respective industries.
          </p>
        </div>
      </div>
    </section>
  );
}