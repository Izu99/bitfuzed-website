import React, { useEffect, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Blog = () => {
  const cards = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      content:
        "Discover how AI is transforming the software development landscape, from automation to enhanced coding capabilities.",
      image: "/assets/images/blog-img1.png",
      date: "30 OCT 2024",
      style: "bg-white text-maingray",
    },
    {
      id: 2,
      title: "Top 5 Mobile App Development Trends in 2024",
      content:
        "Explore the latest trends in mobile app development, including AI, 5G, and cross-platform solutions.",
      image: "/assets/images/blog-img2.png",
      date: "25 SEP 2024",
      style: "bg-white text-maingray",
    },
    {
      id: 3,
      title: "Why Web Apps Are the Future",
      content:
        "Web applications are becoming increasingly popular for their accessibility and user experience.",
      image: "/assets/images/blog-img3.png",
      date: "15 AUG 2024",
      style: "bg-white text-maingray",
    },
    {
      id: 4,
      title: "The Future of AI in Software Development",
      content:
        "Discover how AI is transforming the software development landscape, from automation to enhanced coding capabilities.",
      image: "/assets/images/blog-img3.png",
      date: "30 OCT 2024",
      style: "bg-white text-maingray",
    },
    {
      id: 5,
      title: "Top 5 Mobile App Development Trends in 2024",
      content:
        "Explore the latest trends in mobile app development, including AI, 5G, and cross-platform solutions.",
      image: "/assets/images/blog-img1.png",
      date: "25 SEP 2024",
      style: "bg-white text-maingray",
    },
    {
      id: 6,
      title: "Why Web Apps Are the Future",
      content:
        "Web applications are becoming increasingly popular for their accessibility and user experience.",
      image: "/assets/images/blog-img2.png",
      date: "15 AUG 2024",
      style: "bg-white text-maingray",
    },
    // Add more cards as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto">
      <Title text="Our Latest Blog" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className={`w-4/6 mx-auto rounded-lg shadow-md flex flex-col justify-between md:w-full ${card.style}`}
          >
            <div className="relative">
              <img src={card.image} alt={card.title} className="w-full" />
              <div className="absolute bottom-0 left-0 bg-[rgba(0,122,255,0.45)] text-white text-sm p-2 w-1/5">
                {card.date}
              </div>
            </div>
            <div className="card-content border-2 border-mainBlue rounded-b-lg p-4 text-left flex-grow">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="my-6">{card.content}</p>
              <div className="p-4 text-left">
                <Button
                  text="Read More"
                  containerClass="!text-sm -mt-4 !px-4 py-2 bg-mainBlue text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mx-2 p-3 rounded-full ${
            currentPage === 1
              ? "border border-maingray text-maingray"
              : "border border-mainBlue text-maingray"
          }`}
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-4 py-2 rounded-full ${
              currentPage === index + 1
                ? "border border-mainBlue text-maingray"
                : "border border-gray-200 text-maingray"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`mx-2 p-3 rounded-full ${
            currentPage === totalPages
              ? "border border-maingray text-maingray"
              : "border border-mainBlue text-mainBlue"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Blog;
