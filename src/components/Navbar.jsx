import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiX } from "react-icons/hi";
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white px-4 py-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/images/logo.svg" alt="Logo" className="h-16" />
        </div>

        {/* Toggle Button */}
        <button
          className="block lg:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMiniBars3 />}
        </button>

        {/* Navigation Links and Search */}
        <div
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white z-50 shadow-md lg:shadow-none lg:flex items-center justify-between transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-8 items-center">
            <ul className="flex flex-col lg:flex-row lg:space-x-8 items-center space-y-4 lg:space-y-0 px-4 py-2 lg:px-0 lg:py-0">
              <li>
                <a
                  href="#home"
                  className="text-lg lg:text-base font-medium text-gray-800 hover:text-lightBlue transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg lg:text-base font-medium text-gray-800 hover:text-lightBlue transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="text-lg lg:text-base font-medium text-gray-800 hover:text-lightBlue transition-all"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-lg lg:text-base font-medium text-gray-800 hover:text-lightBlue transition-all"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-lg lg:text-base font-medium text-gray-800 hover:text-lightBlue transition-all"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg lg:text-base font-medium text-gray-800 hover:text-lightBlue transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <div
              className={`relative flex justify-end mt-4 lg:mt-0 lg:ml-6 ${
                menuOpen ? "w-11/12 mx-auto" : "w-full lg:w-80"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-4/6 p-2 pl-10 pr-4 rounded-lg text-gray-800 focus:outline-none border-2 border-gray-300 focus:border-lightBlue shadow-sm"
              />
              <span className="absolute cursor-pointer right-[22%] lg:right-[8%] top-1/2 transform -translate-y-1/2 text-gray-400">
                <GoSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
