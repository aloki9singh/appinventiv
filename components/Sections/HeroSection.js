import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {" "}
      <div className="overflow-hidden whitespace-nowrap bg-[#1163fb] text-[#fff] flex justify-evenly sm:m-0 lg:m-[80%]">
        <div className="inline-block animate-marquee">
          <span className="text-sm md:text-base text-blue-300 mr-8">
            Uncover proof of Appinventiv's impact across 3000+ digital
            deliveries for 35+ industries.
            <a href="#" className="underline hover:text-white ml-2">
              EXPLORE NOW!
            </a>
          </span>
        </div>
        <button className="bg-white text-app-blue px-4 py-2 rounded-full hover:bg-gray-200 text-sm md:text-base">
          <span className="mr-2">📞</span> Contact Us
        </button>
      </div>
      <section className="relative bg-gradient-to-b from-app-blue to-gray-900 text-white overflow-hidden">
        {/* Background Image (Placeholder - Replace with actual image URL) */}
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/images/videoimg.webp" // Replace with actual image URL from Appinventiv
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={75}
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Top Bar */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-sm md:text-base text-blue-300 mb-2 md:mb-0">
            Uncover proof of Appinventiv's impact across 3000+ digital
            deliveries for 35+ industries.{" "}
            <a href="#" className="underline hover:text-white">
              EXPLORE NOW!
            </a>
          </div>
         
        </div> */}

          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Engineering Global Digital Disruption with AI-Native Solutions
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-gray-200">
              We are a Deloitte Technology Fast 50 company and a Clutch Global
              Award 2025 winner for unmatched customer excellence. Our mission
              is to leverage AI-driven automation and strategic innovation to
              craft digital solutions that not only meet but anticipate your
              business needs, ensuring sustainable market leadership.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-sm md:text-base">
              Consult Our Experts <span className="ml-2">→</span>
            </button>
          </div>

          {/* Footer Badges */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="bg-yellow-500 text-black px-2 py-1 text-xs md:text-sm">
              Clutch
            </div>
            <div className="bg-gray-800 text-white px-2 py-1 text-xs md:text-sm">
              Deloitte
            </div>
            <div className="bg-orange-500 text-white px-2 py-1 text-xs md:text-sm">
              The Economic Times
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
