import React from "react";
import Title from "./Title";
import Button from "./Button";

const Services = () => {
  // Card data with different styles and images
  const cards = [
    {
      id: 1,
      title: "Web Development",
      content: "Build responsive and user-friendly web applications.",
      image: "/assets/images/service-icon1.png",
      style: "bg-white text-maingray border border-mainBlue",
    },
    {
      id: 2,
      title: "Mobile App",
      content: "Create engaging mobile experiences for both Android and iOS.",
      image: "/assets/images/service-icon2.png",
      style: "bg-mainBlue text-white border border-mainBlue",
    },
    {
      id: 3,
      title: "AI & ML Solutions",
      content: "Leverage the power of AI to enhance your business operations.",
      image: "/assets/images/service-icon3.png",
      style: "bg-white text-maingray border border-mainBlue",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col">
      <Title text="Our Best Services" />
      <p className="mx-auto w-5/6 my-5 text-center leading-8 md:w-1/2">
        Separated they live in. A small river named Duden flows by their place
        and supplies it with the necessary regelialia. It is a paradisematic
        country.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-4 w-4/6 mx-auto rounded-lg shadow-md min-h-[320px] flex flex-col justify-between md:w-full ${card.style}`}
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-25 mx-auto object-cover mt-10 rounded-t-lg"
            />
            {/* Title */}
            <h3 className="text-lg font-bold mt-4 text-center">{card.title}</h3>
            {/* Content */}
            <p className="text-center">{card.content}</p>
          </div>
        ))}
      </div>
      <Button
        text="View All Services"
        containerClass="bg-mainBlue text-white"
      />
    </div>
  );
};

export default Services;
