export default function OurTechnologyExpert() {
  return (
    <div className="flex flex-col items-start justify-between min-h-screen px-8 py-16 text-white md:flex-row md:items-center md:px-32 lg:px-40 bg-[linear-gradient(to_bottom_right,_#6D28D9,_#334155,_#000000,_#075985,_#0C4A6E)] lg:space-x-5">
    
      <div className="space-y-6 md:w-3/5">
        <h1 className="hidden text-4xl font-semibold leading-tight lg:block lg:text-4xl md:text-5xl">
          Our Technology <br /> Experts Are Change <br /> Catalysts
        </h1>
        <h1 className="text-4xl font-semibold leading-tight lg:hidden lg:text-4xl md:text-5xl">
          Our Technology  Experts Are Change  Catalysts
        </h1>
        <p className="text-base">
          Book A Free Consultation Call With Our Experts Today
        </p>
      </div>

      {/* Right  (Form) */}
      <div className="p-8 mt-10 space-y-6 rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.24)] border border-gray-700 bg-formBackground lg:px-10 md:w-2/5 md:mt-0">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-1 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="E-mail ID*"
          className="w-full px-1 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Contact Number*"
          className="w-full px-1 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
        />
        <select className="w-full px-1 py-2 bg-transparent border-b border-gray-500 focus:outline-none">
          <option>Select a Budget Range</option>
          <option>$5,000 - $10,000</option>
          <option>$10,000 - $25,000</option>
          <option>$25,000 - $50,000</option>
          <option>$50,000+</option>
        </select>
        <textarea
          placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)*"
          className="w-full px-1 py-2 bg-transparent border-b border-gray-500 focus:outline-none"
        />
       <div className="flex justify-between">
       <div className="flex items-center space-x-2">
          <input type="checkbox"  />
          <label className="text-[10px]">
            Include Copy of a Non-Disclosure Agreement
          </label>
        </div>

        <div className="flex items-center space-x-2 text-[10px]">
          <span>2 + 6 =</span>
          <input
            type="text"
            className="w-1 px-2 py-1 text-white bg-transparent border border-gray-500 focus:outline-none"
          />
        </div>
       </div>

        <button className="w-full py-3 mt-4 text-white bg-gray-700 rounded hover:bg-gray-600">
          Request Proposal
        </button>

        <div className="mt-2 space-y-1 text-xs text-gray-400">
          <p>
            • In just <span className="font-semibold">2 mins</span> you will get
            a response
          </p>
          <p>
            • Your idea is 100% protected by our{" "}
            <span className="underline">Non Disclosure Agreement</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
