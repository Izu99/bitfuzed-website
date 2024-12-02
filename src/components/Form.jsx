import React from "react";
import Title from "./Title";
import Button from "./Button";

const Form = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Title text="Send Us Your Resume" />
      <form className="max-w-lg mx-auto py-6 px-16 space-y-6 bg-[rgba(196,196,196,0.31)] md:p-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-lg font-base text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your Name"
            className="mt-2 block ps-2 py-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-base text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="mt-2 block ps-2 py-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Position */}
        <div>
          <label
            htmlFor="position"
            className="block text-lg font-base text-gray-700"
          >
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Select Position"
            className="mt-2 block ps-2 py-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-base text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about yourself"
            rows="4"
            className="mt-2 block ps-2 py-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        {/* Upload CV */}
        <div>
          <label htmlFor="cv" className="block text-lg font-base text-gray-700">
            Upload CV
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            className="mt-2 block ps-2 py-1 w-full text-gray-700 border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-base file:bg-blue-200 file:text-gray-800 hover:file:bg-blue-100"
          />
        </div>

        {/* Upload Cover Letter */}
        <div>
          <label
            htmlFor="coverLetter"
            className="block text-lg font-base text-gray-700"
          >
            Upload Cover Letter
          </label>
          <input
            type="file"
            id="coverLetter"
            name="coverLetter"
            className="mt-2 block ps-2 py-1 w-full text-gray-700 border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-base file:bg-blue-200 file:text-gray-800 hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <div className="flex">
          <Button
            text="Submit Application"
            containerClass="bg-mainBlue text-white -mt-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
