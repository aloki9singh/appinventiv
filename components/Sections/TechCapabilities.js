"use client";

import { useState } from "react";
import {
  FaBrain,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const categories = [
  { label: "Artificial Intelligence", icon: <FaBrain /> },
  { label: "Frontend Programming Languages", icon: <FaCode /> },
  { label: "Backend Programming Languages", icon: <FaCode /> },
  { label: "Mobile", icon: <FaMobileAlt /> },
  { label: "Big Data", icon: <FaDatabase /> },
  { label: "Databases / Data Storages", icon: <SiGoogleanalytics /> },
  { label: "Cloud DB, Warehouses And Storage", icon: <FaCloud /> },
];

const techData = {
  "Artificial Intelligence": {
    "Models & APIs": [
      "OpenAI",
      "Meta",
      "Mistral AI",
      "Google",
      "Hugging Face",
      "Grok",
    ],
    "Vector Databases": ["MongoDB Atlas", "Chroma"],
  },
  "Frontend Programming Languages": {
    Languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
    Frameworks: ["React", "Vue.js", "Angular", "Svelte"],
  },
  "Backend Programming Languages": {
    Languages: [".NET", "Java", "Python", "PHP", "Node.js", "GO"],
  },
  Mobile: {
    Platforms: ["iOS", "Android"],
    Frameworks: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  "Big Data": {
    Technologies: [
      "Hadoop",
      "Spark",
      "Kafka",
      "Hive",
      "Apache Storm",
      "Presto",
    ],
  },
  "Databases / Data Storages": {
    Services: [
      "Amazon DocumentDB",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon REDSHIFT",
      "AWS ElastiCache",
      "Azure Blob Storage",
      "Azure Cosmos DB",
      "Azure Data Lake",
      "Azure SQL Database",
      "Azure Synapse Analytics",
      // "Google Cloud Datastore",
      // "Google Cloud SQL",
    ],
  },
  "Cloud DB, Warehouses And Storage": {
    Vendors: [
      "Google Cloud",
      "AWS",
      "Azure",
      "Snowflake",
      "BigQuery",
      "Databricks",
    ],
  },
};

export default function TechCapabilities() {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence");
  const [openAccordion, setOpenAccordion] = useState(null); // for mobile

  const toggleAccordion = (label) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
    setActiveTab(label);
  };

  return (
    <section className="bg-black text-white px-4 py-16 md:px-12">
      <div className="max-w-[76rem] mx-auto">
        <h2 className="text-4xl font-semibold mb-12">
          Tech Capabilities Driving Digital <br /> Transformation For Our
          Clients
        </h2>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
     
          <div className="bg-blue-600 w-full md:w-1/2 p-6 space-y-2 overflow-y-auto max-h-max">
            {categories.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleAccordion(item.label)}
                  className={`w-full flex items-center justify-between gap-4 text-left px-4 py-3 rounded-lg transition-all ${
                    openAccordion === item.label
                      ? "bg-blue-500 text-white font-semibold"
                      : "text-white hover:bg-blue-500"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </div>
                  <span className="text-xl">
                    {openAccordion === item.label ? <FaArrowRight/> : ""  }
                  </span>
                </button>

                {/* Mobile */}
                <div
                  className={`block md:hidden transition-all duration-300 ease-in-out ${
                    openAccordion === item.label ? "max-h-screen mt-3" : "max-h-0 overflow-hidden"
                  }`}
                >
                
                  {Object.entries(techData[item.label] || {}).map(
                    ([section, items], idx) => (
                      <div key={idx} className="mb-6 px-2">
                        <h4 className="font-semibold text-lg mb-3 text-white">
                          {section}
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {items.map((tech, i) => (
                            <div
                              key={i}
                              className="bg-gray-100 hover:bg-gray-200 transition rounded-lg py-2 px-3 text-sm font-medium text-black"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:block w-full md:w-1/2 p-8 bg-white text-black">
            {Object.entries(techData[activeTab] || {}).map(
              ([section, items], idx) => (
                <div key={idx} className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">{section}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {items.map((tech, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 hover:bg-gray-200 transition rounded-lg py-3 px-4 text-sm font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
