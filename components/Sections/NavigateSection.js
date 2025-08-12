import NavigateCard from "../common/NavigateCard";

export default function NavigateSection() {
  const cards = [
    {
      icon: "/images/Navigate/AI.svg",
      title: "AI Development Services",
      description:
        "We engineer bespoke AI solutions, from LLMs to ML apps, helping you explore new opportunities for automation, insights, and innovation.",
    },
    {
      icon: "/images/Navigate/Mobile.svg",
      title: "Mobile App Development",
      description:
        "We build intelligent mobile apps with Generative UX Design and AI-Powered Personalization to enhance user engagement.",
    },
    {
      icon: "/images/Navigate/Software.svg",
      title: "Software Development",
      description:
        "From custom development to upgrades, we craft software that enhances efficiency and drives innovation.",
    },
    {
      icon: "/images/Navigate/Digital.svg",
      title: "Digital Transformation",
      description:
        "We help businesses stay competitive with AI-driven automation, modern digital-first solutions, and process automation.",
    },
    {
      icon: "/images/Navigate/Ideation.svg",
      title: "Ideation And Design Strategy",
      description:
        "Our AI-driven design processes ensure your digital products are functional and resonate deeply with users.",
    },
    {
      icon: "/images/Navigate/IT.svg",
      title: "IT Consulting",
      description:
        "We help you navigate complex technology decisions and align IT strategies with business objectives.",
    },
    {
      icon: "/images/Navigate/DevOps.svg",
      title: "DevOps",
      description:
        "Our DevOps services streamline operations, improve quality, and accelerate project timelines.",
    },
    {
      icon: "/images/Navigate/Cloud.svg",
      title: "Cloud Managed Services",
      description:
        "We manage your cloud infrastructure end-to-end, ensuring it's optimized, secure, and cost-effective.",
    },
  ];

  return (
    <section className="px-4 py-12 bg-transparent sm:px-6 lg:px-12">
      <div className="grid gap-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, id) => (
          <NavigateCard key={id} {...card} />
        ))}
      </div>
    </section>
  );
}
