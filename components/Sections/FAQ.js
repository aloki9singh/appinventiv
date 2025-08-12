"use client";
import { useState } from "react";
import FAQItem from "../common/FAQItem";
import faqData from "../Data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-white md:px-20">
      <h1 className="mb-10 text-3xl font-bold text-center text-purple-700">
        Frequently Asked Questions
      </h1>
      <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
