import React from 'react';
import { GoSearch } from "react-icons/go";

const Navbar = () => {
    return (
        <nav className="bg-white px-2 py-4 h-[6.4rem] ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-xl">
                    <img src="/assets/images/logo.svg" alt="Logo" className="h-16" />
                </div>

                {/* Navigation links */}
                <ul className="flex space-x-6 text-gray-800 font-medium">
                    <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="#project" className="hover:text-gray-300">Project</a></li>
                    <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>

                {/* Search bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-10 pr-4 rounded-lg text-gray-800 focus:outline-none border-2 !border-gray-400 focus:border-lightBlue"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <GoSearch />
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
