import React from "react";
import Title from "./Title";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Title text="Contact" />
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Left Side - Form */}
        <div className="md:w-1/2 w-full px-4">
          <form className="bg-[rgba(196,196,196,0.31)] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl my-4 mb-4 font-medium">Get in Touch</h3>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block !p-1  font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-2 block w-full py-2 ps-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block !p-1  font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full py-2 ps-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block !p-1  font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="mt-2 block w-full py-2 ps-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium p-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Address and Contact Icons */}
        <div className="md:w-1/2 w-full px-4 flex flex-col justify-between bg-[rgba(196,196,196,0.31)] p-6 rounded-lg shadow-md">
          {/* Address Section */}
          <div className="address  flex-grow">
            <h3 className="my-4 mb-4 font-medium">Our Office</h3>
            <p className="text-gray-800">
              123 Software Lane, Colombo, Sri Lanka
            </p>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
                <FaPhoneAlt className="text-white text-sm" />
              </div>
              <p className="text-gray-800 ml-4">+94 123 456 789</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <p className="text-gray-800 ml-4">info@bitfuzed.com</p>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="bottom mt-6">
            <h3 className="font-bold my-2">Follow Us</h3>
            <div className="follow flex justify-start space-x-4">
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
              <FaInstagram className="text-blue-600 text-2xl cursor-pointer" />
              <FaTwitter className="text-blue-600 text-2xl cursor-pointer" />
              <FaLinkedin className="text-blue-600 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
