import React from "react";
import { FaChevronRight } from "react-icons/fa";
import GradientButton from "../common/GradientButton";

export const UnifiedVision = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-10 px-5"
      style={{ maxWidth: "79rem", margin: "0 auto" }}
    >
      <div>
        <span className="hidden lg:block text-white text-5xl leading-tight">
          A Unified Vision That Caters To <br />
          <span>Diverse Industry Demands</span>
        </span>

        <span className="block lg:hidden text-white text-2xl">
          A Unified Vision That Caters Diverse Industry Demands
        </span>
      </div>

      <div className="">
        <div
          className="flex lg:justify-end  w-full "
          style={{ maxWidth: "76rem", margin: "0 auto" }}
        >
          <button className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-white transition-all duration-300 border hover:border-none border-white rounded-lg hover:bg-blue-600  group">
            Explore More in Industries
            <FaChevronRight className="w-4 h-4 group-hover:animate-moveRight" />
          </button>
        </div>
      </div>
    </div>
  );
};
