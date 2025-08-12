import React from "react";

export const Offices = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-b from-black to-slate-900">
      <div className="lg:px-[130px] px-[20px] mx-auto">
        <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-center sm:items-center lg:flex-row lg:justify-between lg:items-center">
          {/* Logo */}
          <img
            src="/images/Offices/WhiteAppInventiv.svg"
            alt="Company Logo"
            className="h-10 sm:h-12 lg:h-14"
          />

          {/* Clutch badge */}
          <div className="flex items-center px-3 py-2 text-blue-200 rounded-md bg-slate-800">
            <img
              src="/images/Offices/clutch.svg"
              alt="Clutch Logo"
              className="w-5 h-5"
            />
            <span className="pl-2 text-xs text-white sm:text-sm lg:text-base">
              Most trusted Mobile App Consulting Company on Clutch
            </span>
          </div>
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
              <div className="pb-3 transition-colors duration-300 group-hover:border-white">
                <img
                  src={`/images/Offices/${office.img}`}
                  alt={`${office.name} Skyline`}
                  className=" pb-5 mx-auto transition-all duration-300 border-b-2 filter brightness-75 group-hover:brightness-0 group-hover:invert border-slate-600 lg:w-[400px] lg:h-[150px]"
                />
              </div>

              <h3 className="text-lg font-semibold transition-colors duration-300 text-slate-400 group-hover:text-white">
                {office.name}
              </h3>

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

// "use client"
// import React from "react";
// import Image from "next/image";

// export const Offices = () => {
//   return (
//     <section className="py-16 text-center bg-gradient-to-b from-black to-slate-900">
//       <div className="lg:px-[130px] px-[20px] mx-auto">
//         <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-center sm:items-center lg:flex-row lg:justify-between lg:items-center">
//           {/* Logo */}
//           <Image
//             src="/images/Offices/WhiteAppInventiv.svg"
//             alt="Company Logo"
//             height={56}
//             width={100}
//             className="h-10 sm:h-12 lg:h-14"
//           />

//           {/* Clutch badge */}
//           <div className="flex items-center px-3 py-2 text-blue-200 rounded-md bg-slate-800">
//             <Image
//               src="/images/Offices/clutch.svg"
//               alt="Clutch Logo"
//               width={20}
//               height={20}
//               className="w-5 h-5"
//             />
//             <span className="pl-2 text-xs text-white sm:text-sm lg:text-base">
//               Most trusted Mobile App Consulting Company on Clutch
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-6">
//           {[
//             {
//               img: "India.svg",
//               name: "INDIA",
//               address: "B-25, Sector 58, Noida-201301, Delhi-NCR, India",
//             },
//             {
//               img: "USA.svg",
//               name: "USA",
//               address: "79, Madison Ave, Manhattan, NY 10001, USA",
//             },
//             {
//               img: "Australia.svg",
//               name: "Australia",
//               address:
//                 "Appinventiv Australia, 3rd Floor, East Brisbane, QLD 4169, Australia",
//             },
//             {
//               img: "UK.svg",
//               name: "UK",
//               address: "3rd Floor, 86-90 Paul Street EC2A 4NE London, UK",
//             },
//             {
//               img: "UAE.svg",
//               name: "UAE",
//               address:
//                 "Tiger Alamoook Building, 13th floor B-block Al Nahda St - Sharjah",
//             },
//             {
//               img: "CANADA.svg",
//               name: "CANADA",
//               address:
//                 "Suite 3810, Bankers Hall West, 888 - 3rd Street SW Calgary Alberta",
//             },
//           ].map((office, i) => (
//             <div
//               key={i}
//               className="space-y-4 transition-colors duration-300 hover:text-white group"
//             >
//               {/* Image with border bottom */}
//               <div className="pb-3 transition-colors duration-300 group-hover:border-white">
//                 <Image
//                   src={`/images/Offices/${office.img}`}
//                   alt={`${office.name} Skyline`}
//                   width={400}
//                   height={150}
//                   className="pb-5 mx-auto transition-all duration-300 border-b-2 filter brightness-75 group-hover:brightness-0 group-hover:invert border-slate-600"
//                   priority={false} // lazy loading default
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="text-lg font-semibold transition-colors duration-300 text-slate-400 group-hover:text-white">
//                 {office.name}
//               </h3>

//               {/* Address */}
//               <p className="text-[16px] transition-colors duration-300 text-slate-400 group-hover:text-white">
//                 {office.address}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
