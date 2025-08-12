"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import GradientButton from "../common/GradientButton";

export default function FeatureSection() {
  const features = [
    {
      title: "Artificial Intelligence",
      description:
        "We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.",
      icon: "/images/Features/ai.svg",
    },
    {
      title: "Generative AI",
      description:
        "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
      icon: "/images/Features/generativeai.svg",
    },
    {
      title: "Machine Learning",
      description:
        "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
      icon: "/images/Features/machine.svg",
    },
    {
      title: "Computer Vision",
      description:
        "We employ computer vision to analyze visual data, automate image processing tasks and enhance the accuracy and speed of visual recognition systems.",
      icon: "/images/Features/computer.svg",
    },
    {
      title: "Cloud",
      description:
        "We offer cloud solutions to improve scalability, enhance security, and ensure seamless collaboration across teams.",
      icon: "/images/Features/cloud.svg",
    },
    {
      title: "Data Science And Analytics",
      description:
        "We leverage data to extract actionable insights, helping your business make informed decisions and optimize operations.",
      icon: "/images/Features/datascience.svg",
    },
    {
      title: "IoT",
      description:
        "We create IoT apps that connect various devices seamlessly, boosting efficiency and opening new possibilities for enhanced automation and monitoring.",
      icon: "/images/Features/iot.svg",
    },
    {
      title: "AR/VR",
      description:
        "We design and develop immersive AR and VR applications that offer engaging and interactive user experiences.",
      icon: "/images/Features/arvr.svg",
    },
    {
      title: "Blockchain",
      description:
        "We develop blockchain solutions that enhance transparency and security across sectors like finance, retail, healthcare, and manufacturing.",
      icon: "/images/Features/blockchain.svg",
    },
    {
      title: "Business Intelligence",
      description:
        "We empower your business with BI tools that provide clear, concise data visualization, helping your team to understand trends and drive business performance.",
      icon: "/images/Features/business.svg",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-[82rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl  mb-8">
            We Create New Solutions and Transform Existing Ones with
            Technologies That Beat Industry-Best Timelines
          </h1>

          <div className="bg-neutral-900 p-6 rounded-xl shadow-lg max-w-sm">
            <div className="flex flex-grow items-center mb-4">
              <span className="text-2xl">
                {" "}
                <Image
                  height={20}
                  width={20}
                  src="/images/Features/plane.svg"
                ></Image>
              </span>
              <h2 className="ml-3 text-lg font-semibold">
                Fuel Your Digital-First Idea
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              With 1600+ Transformation Experts
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Innovate With Us
            </button>
          </div>
        </div>

   
        <div className="lg:h-[28rem] lg:overflow-y-auto pr-2 space-y-6 no-scrollbar ">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-800 pb-4">
              <div className="flex items-center mb-2 justify-between group">
                <div className="flex">
                  {" "}
                  <span className="text-2xl ">
                    <Image height={30} width={30} src={feature.icon } className="w-4 h-4 group-hover:animate-moveRight"></Image>
                  </span>
                  <h3 className="ml-3 text-lg font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <div className=" group">
                  <FaChevronRight className="w-4 h-4 group-hover:animate-moveRight" />
                </div>
              </div>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
