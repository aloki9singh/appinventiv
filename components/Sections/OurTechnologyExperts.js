export default function OurTechnologyExpert() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-12 text-white md:flex-row md:items-center md:px-20 lg:px-32 bg-[linear-gradient(to_bottom_right,#6D28D9,#334155,#000000,#075985,#0C4A6E)] gap-10">
      
      {/* Left Content */}
      <div className="space-y-6 md:w-3/5 text-left md:text-left">
        <h1 className="hidden lg:block text-4xl md:text-5xl font-semibold leading-tight">
          Our Technology <br /> Experts Are Change <br /> Catalysts
        </h1>
        <h1 className="lg:hidden text-3xl sm:text-4xl font-semibold leading-tight">
          Our Technology Experts Are Change Catalysts
        </h1>
        <p className="text-sm sm:text-base max-w-md mx-auto md:mx-0">
          Book a free consultation call with our experts today.
        </p>
      </div>

      {/* Right - Form */}
      <div className="p-6 sm:p-8 rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.24)] border border-gray-700 bg-formBackground md:w-2/5">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-2 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail ID*"
            className="w-full px-2 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Contact Number*"
            className="w-full px-2 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
          />
          <select className="w-full px-2 py-2 bg-transparent border-b border-gray-500 focus:outline-none">
            <option>Select a Budget Range</option>
            <option>$5,000 - $10,000</option>
            <option>$10,000 - $25,000</option>
            <option>$25,000 - $50,000</option>
            <option>$50,000+</option>
          </select>
          <textarea
            placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)*"
            rows="3"
            className="w-full px-2 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
          />

          {/* Checkbox & Captcha */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <label className="flex items-center gap-2 text-[10px] sm:text-xs">
              <input type="checkbox" />
              Include Copy of a Non-Disclosure Agreement
            </label>

            <div className="flex items-center gap-2 text-[10px] sm:text-xs">
              <span>2 + 6 =</span>
              <input
                type="text"
                className="w-12 px-2 py-1 text-white bg-transparent border border-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full py-3 mt-4 text-white bg-gray-700 rounded hover:bg-gray-600 transition">
            Request Proposal
          </button>

          {/* Info Text */}
          <div className="mt-2 space-y-1 text-xs text-gray-400">
            <p>
              • In just <span className="font-semibold">2 mins</span> you will get a response
            </p>
            <p>
              • Your idea is 100% protected by our{" "}
              <span className="underline">Non-Disclosure Agreement</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
