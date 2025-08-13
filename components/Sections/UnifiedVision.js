import React from "react";
import GradientButton from "../common/GradientButton";

export const UnifiedVision = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-10 px-5"
      style={{ maxWidth: "76rem", margin: "0 auto" }}
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
        <GradientButton label="Explore More in Industries" />
      </div>
    </div>
  );
};
