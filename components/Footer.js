import React from "react";

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

export default function Footer() {
  return (
    <footer className="text-white bg-zinc-900">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-zinc-900">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About</h3>
            <ul className="space-y-2 ">
              {footerData.about.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  {item === "Career" ? (
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

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              {footerData.services.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Technologies</h3>
            <ul className="space-y-2">
              {footerData.technologies.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Industries</h3>
            <ul className="space-y-2">
              {footerData.industries.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Portfolio</h3>
            <ul className="space-y-2">
              {footerData.portfolio.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              {footerData.resources.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

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
