import React from "react";
import Title from "./Title";

const Work = () => {
  const cards = [
    {
      id: 1,
      icon: "/assets/images/work-icon1.png",
      title: "The Future of AI in Software Development",
      content:
        "Discover how AI is transforming the software development landscape, from automation to enhanced coding capabilities.",
      style: "bg-white text-gray-700", // Updated to match common Tailwind classes
    },
    {
      id: 2,
      icon: "/assets/images/work-icon2.png",
      title: "Top 5 Mobile App Development Trends in 2024",
      content:
        "Explore the latest trends in mobile app development, including AI, 5G, and cross-platform solutions.",
      style: "bg-white text-gray-700",
    },
    {
      id: 3,
      icon: "/assets/images/work-icon3.png",
      title: "Why Web Apps Are the Future",
      content:
        "Web applications are becoming increasingly popular for their accessibility and user experience.",
      style: "bg-white text-gray-700",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <Title text="Why Work with Us" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-lg w-2/3 shadow-lg p-6 flex mx-auto flex-col items-center text-center md:w-full ${card.style}`}
          >
            {/* Icon */}
            <img src={card.icon} alt={card.title} className="w-16 h-16 mb-4" />
            {/* Title */}
            <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
            {/* Content */}
            <p className="text-base">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
