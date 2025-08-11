"use client";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
export const Readytoinnovate = () => {
  return (
    <div className="px-6 mx-auto max-w-7xl lg:px-4">
      <div className="flex flex-col items-center justify-between p-6 mt-10 rounded-lg bg-neutral-900 sm:flex-row sm:p-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-md">
            <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-lg font-medium text-white sm:text-xl">
            Ready to innovate and drive an impact?
          </h4>
        </div>
        <button className="px-5 py-3 mt-4 text-white transition-all bg-blue-600 rounded-lg sm:mt-0 hover:bg-blue-700">
          Partner With Us
        </button>
      </div>
    </div>
  );
};
