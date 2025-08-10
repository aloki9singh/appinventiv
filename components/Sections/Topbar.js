"use client"
import Link from "next/link";
import RingingCallIcon from "../Callicon/Callicon";

export default function TopBar() {
  return (
    <div className="bg-[#1163fb] text-white py-2 px-2 lg:px-2">
      <div className="container flex flex-col items-center justify-around sm:flex-row">
        <div className="w-full overflow-hidden whitespace-nowrap sm:w-auto">
          <div className="inline-block animate-marquee">
            <span className="text-sm sm:text-base text-[#fff] mr-8">
              Uncover proof of Appinventiv's impact across 3000+ digital
              deliveries for 35+ industries.{" "}
              <Link href="#" className="underline hover:text-white">
                EXPLORE NOW!
              </Link>
            </span>
          </div>
        </div>
        {/* <button className="hidden px-4 py-2 mt-2 text-sm bg-white rounded-full text-app-blue lg:block hover:bg-gray-200 sm:mt-0 sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          <span className="mr-2 ">📞</span> Contact Us
        </button> */}
        <button
          type="button"
          classname="text-gray-900 hidden inline:flex bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
         
          <RingingCallIcon/>
          Contact Us
        </button>
      </div>
    </div>
  );
}
