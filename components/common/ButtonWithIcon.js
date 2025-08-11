"use client";

export default function ButtonWithIcon({
  icon: Icon,
  label,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center space-x-2
        px-5 py-2.5 me-2 mb-2
        text-sm font-medium text-gray-900 text-center
        bg-gray-100 hover:bg-gray-200
        rounded-lg
        focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500
        ${className}
      `}
    >
      {Icon && <Icon />}
      <span>{label}</span>
    </button>
  );
}
