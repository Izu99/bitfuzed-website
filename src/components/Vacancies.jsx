import React from "react";
import Title from "./Title";
import Button from "./Button";

const Vacancies = () => {
  const cards = [
    {
      id: 1,
      title: "Frontend Developer",
      icon1: "/assets/images/location-icon.png",
      icons1Text: "Colombo, Sri Lanka",
      icon2: "/assets/images/contract-icon.png",
      icons2Text: "Full-Time",
      content:
        "Seeking an experienced frontend developer with proficiency in React, Tailwind CSS, and modern JavaScript.",
      style: "bg-white text-maingray",
    },
    {
      id: 2,
      title: "Backend Developer",
      icon1: "/assets/images/location-icon.png",
      icons1Text: "Remote",
      icon2: "/assets/images/contract-icon.png",
      icons2Text: "Part-Time",
      content:
        "We are looking for a backend developer skilled in Node.js, Express, and MongoDB for scalable web applications.",
      style: "bg-white text-maingray",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      icon1: "/assets/images/location-icon.png",
      icons1Text: "Colombo, Sri Lanka",
      icon2: "/assets/images/contract-icon.png",
      icons2Text: "Contract",
      content:
        "Web applications are becoming increasingly popular for their accessibility and user experience.",
      style: "bg-white text-maingray",
    },
  ];

  return (
    <div className="container mx-auto">
      <Title text="Join Our Team" />
      <h3 className="mx-auto w-5/6 mb-10 text-center leading-8 md:w-3/5">
        At Bitfuzed, we are committed to building innovative solutions. If you
        are passionate about technology and eager to make an impact, explore our
        open positions and apply today!
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-4/6 mx-auto shadow-md flex flex-col justify-between md:w-full ${card.style}`}
          >
            <div className="card-content  border border-mainBlue rounded-lg p-4 text-left flex-grow">
              <h3 className="text-2xl font-bold ps-4 my-4 text-gray-900">
                {card.title}
              </h3>
              <div className="flex ps-4 items-center mb-2">
                <img className="text-xl" src={card.icon1} />
                <span className="ml-2 text-sm">{card.icons1Text}</span>
              </div>
              <div className="flex ps-4 items-center mb-4">
                <img className="text-xl" src={card.icon2} />
                <span className="ml-2 text-sm">{card.icons2Text}</span>
              </div>
              <p className="my-4 ps-4">{card.content}</p>
              <Button
                text="Read More"
                containerClass="!text-sm mt-4 !px-4 py-2 bg-mainBlue text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
