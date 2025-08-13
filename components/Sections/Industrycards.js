"use client";
import { useState } from "react";
import {
  FaHeartbeat,
  FaMoneyBill,
  FaUtensils,
  FaShoppingCart,
  FaCarBattery,
  FaCloud,
  FaPlane,
  FaMusic,
} from "react-icons/fa";

const industries = [
  {
    title: "Healthcare",
    icon: <FaHeartbeat size={32} />,
    description: "Innovative digital solutions for modern healthcare systems.",
  },
  {
    title: "Finance",
    icon: <FaMoneyBill size={32} />,
    description:
      "Secure and scalable fintech applications built for performance.",
  },
  {
    title: "Restaurant",
    icon: <FaUtensils size={32} />,
    description: "Smart digital tools for efficient restaurant operations.",
  },
  {
    title: "eCommerce",
    icon: <FaShoppingCart size={32} />,
    description: "Tailored platforms for seamless shopping experiences.",
  },
  {
    title: "Electric Vehicle (EV)",
    icon: <FaCarBattery size={32} />,
    description: "Advanced software for the next-gen EV ecosystem.",
  },
  {
    title: "SaaS",
    icon: <FaCloud size={32} />,
    description: "Robust and scalable SaaS apps designed for growth.",
  },
  {
    title: "Travel",
    icon: <FaPlane size={32} />,
    description: "Transforming travel with intuitive and immersive apps.",
  },
  {
    title: "Entertainment",
    icon: <FaMusic size={32} />,
    description: "Engaging experiences for music, video & streaming.",
  },
];

export default function IndustryCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-black text-white px-4 py-16 md:px-12 max-w-[82rem] m-auto">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative bg-[#090909] border border-gray-700 rounded-xl min-h-[300px] p-6 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:bg-blue-600"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
              <div
                className={`flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out transform ${
                  activeIndex === index
                    ? "-translate-y-12 opacity-80"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <div className="text-white mb-2">{industry.icon}</div>
                <h3 className="text-lg font-semibold">{industry.title}</h3>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out transform text-sm text-gray-300 mt-4 px-2 ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {industry.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
