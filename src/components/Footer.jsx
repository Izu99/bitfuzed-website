import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mx-auto bg-[#001833]">
      <ul className="flex my-10 gap-5 text-white font-lg">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="follow flex justify-start space-x-4">
        <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
        <FaInstagram className="text-blue-600 text-2xl cursor-pointer" />
        <FaTwitter className="text-blue-600 text-2xl cursor-pointer" />
        <FaLinkedin className="text-blue-600 text-2xl cursor-pointer" />
      </div>
      <p className="text-white my-10 font-lg">© 2024 Bitfuzed. All rights reserved</p>
    </div>
  );
};

export default Footer;
