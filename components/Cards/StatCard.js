// components/ProductCard.js
"use client";

export default function StatCard({ title, description, number }) {
  return (
    <div className="flex flex-col gap-2 p-4 border border-r-0 shadow-md border-l-1 border-y-0 border-zinc-800 ">
      <span className="mt-2 text-2xl font-medium tracking-tight text-[#1163fb]">
        {number}
      </span>
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
