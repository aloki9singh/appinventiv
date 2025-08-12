'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

const caseStudies = [
  {
    title: 'Adidas',
    subtitle: 'Case Study',
    description: 'Crafting innovation for the consumer markets with Adidas',
    stats: [
      { value: '5M+', label: 'App downloads' },
      { value: '2M+', label: 'Active users' },
    ],
    image: '/images/Slider/adidas.webp',
  },
  {
    title: 'Nike',
    subtitle: 'Case Study',
    description: 'Reimagining sports retail experience with Nike',
    stats: [
      { value: '3M+', label: 'App downloads' },
      { value: '1.5M+', label: 'Active users' },
    ],
    image: '/images/Slider/ikea.webp',
  },
  {
    title: 'Puma',
    subtitle: 'Case Study',
    description: 'Digitally transforming Puma’s consumer experience',
    stats: [
      { value: '4M+', label: 'App downloads' },
      { value: '2.3M+', label: 'Active users' },
    ],
    image: '/images/Slider/pizzahut.webp',
  },
  {
    title: 'Reebok',
    subtitle: 'Case Study',
    description: 'Empowering Reebok with cutting-edge solutions',
    stats: [
      { value: '6M+', label: 'App downloads' },
      { value: '3.2M+', label: 'Active users' },
    ],
    image: '/images/Slider/americana.webp',
  },
]

export default function CaseStudy2() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Mobile View: Details above each card */}
      <div className="space-y-12 lg:hidden">
        {caseStudies.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-6"
            >
              <p className="text-blue-500 text-sm uppercase mb-2">{item.subtitle}</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">{item.description}</p>
              <div className="flex justify-center space-x-8 mb-6">
                {item.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-x-2 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition group mx-auto">
                View case study
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <FaChevronRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>
            <Card imageUrl={item.image} i={i} onHover={() => setActiveIndex(i)} />
          </div>
        ))}
      </div>

      {/* Desktop View: Sticky text on left, vertical cards on right */}
      <div className="hidden lg:flex lg:flex-row lg:items-start lg:gap-10">
        {/* Left: Sticky Text */}
        <div className="flex-1 sticky top-20 self-start pt-20 h-fit">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-blue-500 text-sm uppercase mb-2">{caseStudies[activeIndex].subtitle}</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{caseStudies[activeIndex].title}</h2>
            <p className="text-gray-300 mb-6 max-w-md">{caseStudies[activeIndex].description}</p>
            <div className="flex space-x-8 mb-6">
              {caseStudies[activeIndex].stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-x-2 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition group">
              View case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <FaChevronRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right: Vertical Cards */}
        <div className="flex-1 flex flex-col items-center gap-12">
          {caseStudies.map((item, i) => (
            <Card
              key={i}
              imageUrl={item.image}
              i={i}
              onHover={() => setActiveIndex(i)}
              isLarge={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Card({ imageUrl, i, onHover, isLarge = false }) {
  const background = `linear-gradient(306deg, hsl(200, 100%, 50%), hsl(240, 100%, 50%))`

  return (
    <motion.div
      className={`relative flex justify-center items-center overflow-hidden pt-5 -mb-28 z-[${10 - i}]`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      onMouseEnter={onHover}
    >
      <div
        className="absolute inset-0"
        style={{
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
        }}
      />
      <motion.div
        className={`${
          isLarge ? 'w-[400px] h-[500px]' : 'w-[300px] h-[430px]'
        } flex justify-center items-center rounded-[20px] bg-gray-100 shadow-lg [transform-origin:10%_60%]`}
        variants={cardVariants}
      >
        <img
          src={imageUrl}
          alt={`Image ${i + 1}`}
          className="w-full h-full object-cover rounded-[20px]"
        />
      </motion.div>
    </motion.div>
  )
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}