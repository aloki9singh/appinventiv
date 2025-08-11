import React from "react";

export const Offices = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-b from-black to-slate-900">
      <div className="px-[130px] mx-auto">
        <div className="p-10 lg:flex lg:justify-between">
          <h1 className="mb-4 text-4xl font-bold">
            <img
              src="/images/Offices/WhiteAppInventiv.svg"
              alt="USA Skyline"
              className="mx-auto "
            />
          </h1>
          <p className="flex p-2 mb-8 text-blue-200 bg-slate-800">
            <img
              src="/images/Offices/clutch.svg"
              alt="USA Skyline"
              className="mx-auto w-[25px] "
            />
          <span className="pl-2 text-xs text-white lg:text-lg">  Most trusted Mobile App Consulting Company on Clutch</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-6">
          {[
            {
              img: "India.svg",
              name: "INDIA",
              address: "B-25, Sector 58, Noida-201301, Delhi-NCR, India",
            },
            {
              img: "USA.svg",
              name: "USA",
              address: "79, Madison Ave, Manhattan, NY 10001, USA",
            },
            {
              img: "Australia.svg",
              name: "Australia",
              address:
                "Appinventiv Australia, 3rd Floor, East Brisbane, QLD 4169, Australia",
            },
            {
              img: "UK.svg",
              name: "UK",
              address: "3rd Floor, 86-90 Paul Street EC2A 4NE London, UK",
            },
            {
              img: "UAE.svg",
              name: "UAE",
              address:
                "Tiger Alamoook Building, 13th floor B-block Al Nahda St - Sharjah",
            },
            {
              img: "CANADA.svg",
              name: "CANADA",
              address:
                "Suite 3810, Bankers Hall West, 888 - 3rd Street SW Calgary Alberta",
            },
          ].map((office, i) => (
            <div
              key={i}
              className="space-y-4 transition-colors duration-300 hover:text-white group"
            >
              {/* Image with border bottom */}
              <div className="pb-3 transition-colors duration-300 group-hover:border-white">
                <img
                  src={`/images/Offices/${office.img}`}
                  alt={`${office.name} Skyline`}
                  className=" pb-5 mx-auto transition-all duration-300 border-b-2 filter brightness-75 group-hover:brightness-0 group-hover:invert border-slate-600 w-[400px] h-[150px]"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold transition-colors duration-300 text-slate-400 group-hover:text-white">
                {office.name}
              </h3>

              {/* Address */}
              <p className="text-[16px] transition-colors duration-300 text-slate-400 group-hover:text-white">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
