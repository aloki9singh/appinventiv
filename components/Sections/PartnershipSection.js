"use client";
import Image from "next/image";

export default function PartnershipsSection() {
  return (
    <section className="bg-black text-white px-4 py-16 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Strategic Partnerships to <br /> Unlock Greater Business Value
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              name: "Amazon Web Services",
              logo: "/images/partnerships/aws.svg",
              label: "aws",
            },
            {
              name: "MongoDB",
              logo: "/images/partnerships/mongodb.svg",
              label: "mongoDB",
            },
            {
              name: "Google Cloud Platform",
              logo: "/images/partnerships/googlecloud.svg",
              label: "Google Cloud",
            },
            {
              name: "Cloudinary",
              logo: "/images/partnerships/cloudinary.svg",
              label: "Cloudinary",
            },
          ].map(({ name, logo, label }) => (
            <div
              key={label}
              className="bg-[#111] space-y-5 rounded-lg border  border-gray-700 p-6 flex flex-col items-center justify-center text-center"
            >
              <Image
                src={logo}
                alt={name}
                width={60}
                height={60}
                className="mb-4"
              />
              <p className="text-base text-gray-300">{name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Our AI Partnerships:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "AWS Sagemaker",
              description:
                "We use SageMaker to build machine learning models that turn your data into predictions you can actually use for business decisions.",
              icon: "/images/partnerships/awssagemaker.svg",
            },
            {
              title: "AWS Bedrock",
              description:
                "We use Bedrock to create AI solutions that generate content, answer questions, and automate tasks that used to require human creativity.",
              icon: "/images/partnerships/awsbedrock.svg",
            },
          ].map(({ title, description, icon }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-[#111] p-6 rounded-lg border border-gray-700"
            >
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src={icon}
                  alt={title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">{title}</h4>
                <p className="text-sm text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
