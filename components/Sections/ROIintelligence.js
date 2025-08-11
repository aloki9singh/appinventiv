"use client";
import { motion } from "framer-motion";
import { Rocket, BarChart3, Lightbulb } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

export default function ROISection() {
  const cards = [
    {
      icon: <Rocket size={18} />,
      tag: "EFFICIENCY",
      title: "Automate Processes",
      desc: "Cut operational costs by up to 30% with AI-driven workflow automation.",
    },
    {
      icon: <BarChart3 size={18} />,
      tag: "GROWTH",
      title: "Personalize Experiences",
      desc: "Increase customer LTV (lifetime value) by 25% through ML-powered personalization.",
    },
    {
      icon: <Lightbulb size={18} />,
      tag: "INNOVATION",
      title: "Accelerate Discovery",
      desc: "Reduce R&D cycles by 50% using Generative AI for prototyping and simulation.",
    },
  ];

  return (
    <section class="relative font-sans py-20 overflow-hidden bg-blue-600">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-20%] w-[300px] h-[150%] bg-white/10 rotate-[20deg] animate-move-right"
          style={{
            left: `-300px`,
            animationDelay: `0s`,
          }}
        />

        <div
          className="absolute top-[-20%] w-[70px] h-[150%] bg-white/10 rotate-[20deg] animate-move-right"
          style={{
            left: `100px`,
            animationDelay: `0s`,
          }}
        />
      </div>

      <div class="relative z-10 px-6 mx-auto text-center max-w-7xl">
        <h2 class="mb-12 text-4xl font-semibold text-white md:text-5xl">
          The ROI of Intelligence
        </h2>

        <div class="grid   grid-cols-1 gap-8 mb-10 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              class="p-6 bg-white rounded-lg shadow-lg transform skew-y-6 hover:shadow-xl hover:skew-y-0 transition-all duration-300"
            >
              <div class="inline-flex items-center gap-2 px-3 py-3 mb-4 text-[] font-semibold text-white bg-black rounded-xl">
                {card.icon} {card.tag}
              </div>
              <h3 class="mb-2 text-xl font-semibold text-black">{card.title}</h3>
              <p class="text-base text-black">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          class="px-6 py-3 font-semibold text-black transition bg-white rounded-lg shadow hover:bg-gray-100"
        >
          Talk to our Expert
        </motion.button>
      </div>
    </section>
  );
}
