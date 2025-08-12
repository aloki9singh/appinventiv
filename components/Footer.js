"use client";
import React, { useState } from "react";

const footerData = {
  about: ["Our company", "Core Team", "Career", "CSR", "How We Work"],
  services: [
    "iOS App Development",
    "Android App Development",
    "Software Development",
    "Ideation & Design",
    "Mobile App Dev",
    "Research & Innovation",
    "Digital Transformation",
    "more...",
  ],
  technologies: [
    "Blockchain",
    "Artificial Intelligence",
    "AR and VR",
    "Cloud Computing",
    "Internet of Things",
    "Metaverse Development",
    "NFT Development",
    "more...",
  ],
  industries: [
    "Healthcare",
    "Education",
    "SaaS",
    "Finance",
    "On-Demand",
    "eCommerce",
    "Logistics",
    "more...",
  ],
  portfolio: [
    "KFC",
    "Adidas",
    "IKEA",
    "Hukoomi",
    "Domino's",
    "Pizza Hut",
    "YouCOMM",
    "more...",
  ],
  resources: ["Blog", "Press Release", "Guides", "Ebooks"],
};

const sections = [
  { key: "about", title: "About" },
  { key: "services", title: "Services" },
  { key: "technologies", title: "Technologies" },
  { key: "industries", title: "Industries" },
  { key: "portfolio", title: "Portfolio" },
  { key: "resources", title: "Resources" },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <footer className="text-white bg-zinc-900">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        {/* Desktop grid (hidden on small screens) */}
        <div className="hidden grid-cols-6 gap-8 lg:grid">
          {sections.map(({ key, title }) => (
            <div key={key}>
              <h3 className="mb-4 text-2xl font-bold">{title}</h3>
              <ul className="space-y-2">
                {footerData[key].map((item, idx) => (
                  <li
                    key={idx}
                    className={
                      key === "about" && item === "Career"
                        ? "flex items-center"
                        : ""
                    }
                  >
                    {key === "about" && item === "Career" ? (
                      <>
                        <span>{item}</span>
                        <span className="ml-2 text-xs bg-orange-500 rounded px-2 py-0.5 font-semibold">
                          CLICK HERE
                        </span>
                      </>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accordion for mobile/tablet (shown on smaller screens) */}
        <div className="lg:hidden">
          {sections.map(({ key, title }) => (
            <div key={key} className="border-b border-gray-700">
              <button
                onClick={() => toggleSection(key)}
                className="flex items-center justify-between w-full py-4 text-lg font-bold text-left"
                aria-expanded={openSection === key}
              >
                {title}
                <span
                  className={`transform transition-transform duration-300 ${
                    openSection === key ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {openSection === key && (
                <ul className="pb-4 space-y-2">
                  {footerData[key].map((item, idx) => (
                    <li
                      key={idx}
                      className={
                        key === "about" && item === "Career"
                          ? "flex items-center"
                          : ""
                      }
                    >
                      {key === "about" && item === "Career" ? (
                        <>
                          <span>{item}</span>
                          <span className="ml-2 text-xs bg-orange-500 rounded px-2 py-0.5 font-semibold">
                            CLICK HERE
                          </span>
                        </>
                      ) : (
                        <span>{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom footer section */}
        <div className="flex flex-col items-center pt-8 mt-16 text-sm text-gray-400 border-t border-gray-700 md:flex-row md:justify-between">
          <div className="flex items-center mb-4 space-x-4 md:mb-0">
            <img
              src="/images/Footer/DMCA.png"
              alt="DMCA Protected"
              className="w-auto h-10"
            />
            <p>
              Full stack mobile (iOS, Android) and web app design and
              development agency
            </p>
          </div>

          <div className="space-x-4">
            <span>2025-2026 (c) Appinventiv</span>
            <a href="#" className="hover:underline">
              SiteMap
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
