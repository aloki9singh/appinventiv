// components/ProductCard.js
"use client";

export default function StatCard({ title, description, number }) {
  return (
    <div className="container flex-col gap-2 p-4 border border-r-0 shadow-md px-flex border-l-1 border-y-0 border-zinc-800 ">
      <span className="mt-2 text-[36px] font-medium tracking-tight text-[#1163fb]">
        {number}
      </span>

      <h2 className="text-[20px] font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h2>

   
      <p className="text-[16px] text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
