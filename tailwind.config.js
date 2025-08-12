/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        "app-blue": "#0D47A1", // Appinventiv blue
        "app-gray": "#F5F5F5", // Light gray background
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) rotate(20deg)" },
          "100%": { transform: "translateX(200%) rotate(20deg)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        gradientMove: "gradientMove 6s ease infinite",
        shine: "shine 5s linear infinite",
        "fade-in": "fadeIn 0.3s ease-out",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
