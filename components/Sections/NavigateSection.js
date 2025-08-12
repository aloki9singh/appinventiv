import NavigateCard from "../common/NavigateCard";
import GradientButton from "../common/GradientButton";

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
    <section className="px-4 py-12 bg-transparent sm:px-6 lg:px-12 space-y-12">
      <div
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        style={{ maxWidth: "76rem", margin: "0 auto" }}
      >
        <div>
          <span className="hidden lg:block text-white text-5xl leading-tight">
            Navigate the Digital Frontier with <br />
            <span>Our Engineering Excellence</span>
          </span>

          <span className="block lg:hidden text-white text-2xl">
            Navigate the Digital Frontier with Our Engineering Excellence
          </span>
        </div>

        <div className="hidden lg:block">
          <GradientButton label="Our Services" />
        </div>
      </div>

      <div
        className="grid gap-6 mx-auto sm:grid-cols-1 lg:grid-cols-4"
        style={{ maxWidth: "76rem" }}
      >
        {cards.map((card, id) => (
          <NavigateCard key={id} {...card} />
        ))}
      </div>
    </section>
  );
}
