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
    <div className="min-h-screen px-4 py-10 bg-white md:px-10">
      <h1 className="p-10 mb-10 text-xl font-normal text-center text-black lg:text-5xl ">
        Frequently Asked Questions
      </h1>
      <div className="grid gap-6 mx-auto max-w-7xl md:grid-cols-2">
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
