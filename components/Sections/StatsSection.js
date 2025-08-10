// app/page.js (or wherever you want the section)

import StatCard from "../Cards/StatCard";

export default function StatsSection() {
  const stats = [
    {
      number: "35+",
      title: "Industries Mastered",
      description:
        "With our agility & engineering expertise, we equip your critical business functions with customized tech, and expand digital capabilities."
    },
    {
      number: "1600+",
      title: "Tech Evangelists",
      description:
        "We are a dynamic team of certified cloud architects, data scientists, and AI/ML specialists passionately driven to achieve the best results for our clients."
    },
    {
      number: "150+",
      title: "AI Models Deployed",
      description:
        "From predictive analytics to generative AI, we've implemented intelligent models that drive measurable ROI."
    },
    {
      number: "3000+",
      title: "Solutions Designed And Delivered",
      description:
        "We have empowered businesses with thousands of successful, futuristic, and AI-augmented solutions that have helped them grow and scale."
    },
    {
      number: "500+",
      title: "Legacy Processes Transformed",
      description:
        "We help businesses achieve their digital transformation goals by seamlessly integrating advanced technologies into their legacy systems."
    },
    {
      number: "05+",
      title: "Strategic Federal Partnerships",
      description:
        "We drive collaborative initiatives that address critical challenges and deliver impactful solutions."
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container grid grid-cols-1 gap-6 px-4 mx-auto lg:grid-cols-3">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
}
