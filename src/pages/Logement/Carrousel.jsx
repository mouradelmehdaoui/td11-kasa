import React, { useState } from "react";

const Carrousel = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const pageNumber = activeIndex + 1;
  const totalPages = pictures.length;

  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={picture}
              className="d-block w-100"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <a
        className={`carousel-control-prev ${
          activeIndex === 0 ? "disabled" : ""
        }`}
        href="#carouselExampleIndicators"
        role="button"
        onClick={goToPrevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  
      </a>
      <a
        className={`carousel-control-next ${
          activeIndex === pictures.length - 1 ? "disabled" : ""
        }`}
        href="#carouselExampleIndicators"
        role="button"
        onClick={goToNextSlide}
      >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
   
      </a>
      <div className="carousel-page-number text-center">
        {pageNumber}/{totalPages}
      </div>
    </div>
  );
};

export default Carrousel;
