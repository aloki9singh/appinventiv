"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonWithIcon from "./common/ButtonWithIcon";
import RingingCallIcon from "./Callicon/Callicon";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/appinventivlogo.svg"
            alt="App inventiv Logo"
            height={50}
            width={170}
            className="h-8"
          />
        </Link>

        <div className="inline-flex space-x-5">
          <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-700 rounded-lg md:hidden">
            <RingingCallIcon className="w-5 h-5" />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center h-10 p-2 text-sm text-gray-500 ldw-10 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            aria-controls="mega-menu-full"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          id="mega-menu-full"
          className={`${
            menuOpen ? "flex" : "hidden"
          } items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Let's Talk AI
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                About
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Industries
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Portfolio
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                Resources
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown Content */}
      {dropdownOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 border-gray-200 shadow-xs bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            {[1, 2].map((_, idx) => (
              <ul key={idx}>
                {["Online Stores", "Segmentation", "Marketing CRM"].map(
                  (title, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="font-semibold">{title}</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
