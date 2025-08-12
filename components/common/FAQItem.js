"use client";
import { FaChevronDown } from "react-icons/fa";

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-[#f4f7fe] transition-all duration-300">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-[#e8f0ff] transition-colors duration-200"
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <FaChevronDown
          className={`text-gray-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-sm text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
}
