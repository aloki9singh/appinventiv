"use client";
import Link from "next/link";
import RingingCallIcon from "../Callicon/Callicon";
import ButtonWithIcon from "../common/ButtonWithIcon";

export default function MarqueeBanner() {
  return (
    <div className="bg-[#1163fb] text-white py-2 text-sm">
      <div className="max-w-[1400px] mx-auto flex items-center px-4 lg:px-6">
        
        {/* Marquee */}
        <div className="flex-1 overflow-hidden group shrink-0">
          <div
            className="flex animate-marquee group-hover:[animation-play-state:paused]"
            style={{ minWidth: "max-content" }}
          >
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex items-center whitespace-nowrap">
                Uncover proof of Appinventiv's impact across 3000+ digital
                deliveries for 35+ industries.&nbsp;
                <Link
                  href="#"
                  className="flex items-center underline hover:text-white"
                >
                  EXPLORE NOW!
                  <svg
                    className="ml-1"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
                  </svg>
                </Link>
                &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex-shrink-0 pl-4">
          <ButtonWithIcon
            icon={RingingCallIcon}
            label="Contact Us"
            onClick={() => alert("Calling...")}
            className="hidden lg:inline-flex"
          />
        </div>
      </div>
    </div>
  );
}
