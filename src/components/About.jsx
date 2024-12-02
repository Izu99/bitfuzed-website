import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div className="container mx-auto">
      <Title text="About Us" />
      <div className="title flex flex-col md:flex-row">
        {/* Left side: Text */}
        <div className="left-side my-10 w-5/6 mx-auto order-2 md:order-1 md:w-1/2">
          <h3 className="text-4xl">Welcome to BitFuzed</h3>
          <p className="text-gray-800 mt-6 leading-10">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times <br /> and everything that was left from its origin would be
            the word "and" and the Little Blind Text should turn around and
            return to its own,
            <br /> safe country. But nothing the copy said could convince her
            and so it didn’t take long until a few insidious Copy Writers
            ambushed her,
            <br /> made her drunk with Longe and Parole and dragged her into
            their agency, where they abused her for their
          </p>
        </div>

        {/* Right side: Image */}
        <div className="right-side w-full md:w-1/2 pl-4 mt-8 md:mt-0 order-1 md:order-2">
          <img
            src="./assets/images/aboutus-img.png"
            alt="About Us"
            className="w-5/6 object-contain mx-auto"
          />
          <h3 className="text-gray-800 mt-4 leading-10 w-5/6 mx-auto hidden md:block ">
            At Bitfuzed, we specialize in providing innovative software
            solutions tailored to meet your unique business needs. Our team of
            experts is committed to delivering high-quality web applications,
            mobile apps, desktop software, and AI/ML solutions.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
