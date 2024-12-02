import React, { useState, useEffect } from "react";
import Title from "./Title";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Portfolio = () => {
  // Portfolio card data
  const portfolioCards = [
    {
      id: 1,
      title: "Branding & Illustration Design",
      description: "Web Design",
      image: "/assets/images/portfolio-img1.png",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description of project two.",
      image: "/assets/images/portfolio-img2.png",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description of project three.",
      image: "/assets/images/portfolio-img3.png",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Description of project four.",
      image: "/assets/images/portfolio-img4.png",
    },
    {
      id: 5,
      title: "Project Five",
      description: "Description of project five.",
      image: "/assets/images/portfolio-img5.png",
    },
    {
      id: 6,
      title: "Project Six",
      description: "Description of project six.",
      image: "/assets/images/portfolio-img6.png",
    },
    {
      id: 7,
      title: "Project Seven",
      description: "Description of project seven.",
      image: "/assets/images/portfolio-img1.png",
    },
    {
      id: 8,
      title: "Project Eight",
      description: "Description of project eight.",
      image: "/assets/images/portfolio-img6.png",
    },
    {
      id: 9,
      title: "Project Nine",
      description: "Description of project nine.",
      image: "/assets/images/portfolio-img5.png",
    },
    {
      id: 10,
      title: "Project Ten",
      description: "Description of project ten.",
      image: "/assets/images/portfolio-img4.png",
    },
    {
      id: 11,
      title: "Project Eleven",
      description: "Description of project eleven.",
      image: "/assets/images/portfolio-img3.png",
    },
    {
      id: 12,
      title: "Project Twelve",
      description: "Description of project twelve.",
      image: "/assets/images/portfolio-img2.png",
    },
  ];

  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);

  // State for responsive card per page
  const [cardsPerPage, setCardsPerPage] = useState(6);

  // Adjust cards per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(3); // For small screens, show 3 cards
      } else {
        setCardsPerPage(6); // For larger screens, show 6 cards
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = portfolioCards.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate total pages
  const totalPages = Math.ceil(portfolioCards.length / cardsPerPage);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto flex flex-col">
      <Title text="Our Portfolio" />
      <p className="mx-auto w-5/6 mb-10 text-center leading-8 md:w-1/2">
        Explore our latest projects showcasing our capabilities and expertise.
      </p>
      <div className="portfolio-cards w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className="relative group w-5/6 md:w-full mx-auto"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-mainBlue opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="mt-2">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination flex justify-center mt-6">
        {/* Previous Button */}
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

        {/* Page Number Buttons */}
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

        {/* Next Button */}
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

export default Portfolio;
