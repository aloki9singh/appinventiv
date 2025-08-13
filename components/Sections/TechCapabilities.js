"use client";

import { useState } from "react";
import {
  FaBrain,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
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
      "Google Cloud Datastore",
      "Google Cloud SQL",
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
  DevOps: {
    Tools: [
      "Apache Mesos",
      "Docker",
      "Kubernetes",
      "Openshift",
      "Terraform",
      "Packer",
      "Ansible",
      "Chef",
      "Saltstack",
      "Puppet",
      "AWS Developer Tools",
      "Azure DevOps",
    ],
  },
  "Architecture Designs And Patterns": {
    Types: [
      "Traditional 3-Layer Architecture",
      "Cloud-Native Architecture",
      "Microservices-Based Architecture",
      "Service-Oriented Architecture (SOA)",
      "Reactive Architecture",
      "Computer Vision",
      "Various approaches to enterprise Application Integration",
      "PWA",
    ],
  },
};

export default function TechCapabilities() {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence");

  return (
    <section className="bg-black text-white px-4 py-16 md:px-12">
      <div className="max-w-[76rem] mx-auto">
        <h2 className="text-4xl font-semibold mb-12">
          Tech Capabilities Driving Digital <br /> Transformation For Our
          Clients
        </h2>

        <div className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg">
          {/* Left Tabs */}
          <div className="bg-blue-600 w-full md:w-1/2 p-6 space-y-2 overflow-y-auto max-h-[500px]">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center justify-between gap-4 text-left px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.label
                    ? "bg-blue-500 text-white font-semibold"
                    : "text-white hover:bg-blue-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm sm:text-base">{item.label}</span>
                </div>
                {activeTab === item.label && (
                  <span className="text-xl">&#8594;</span>
                )}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-8 bg-white text-black">
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
