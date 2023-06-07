import React, { useState } from "react";
import "../assets/css/Carousel.css";

const Carousel = ({ objects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % objects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + objects.length) % objects.length
    );
  };

  const visibleObjects = objects.slice(currentIndex, currentIndex + 5);
  let nextActive = true;
  let prevActive = false;

  if (objects.length - currentIndex == 5) {
    nextActive = false;
  } else {
    nextActive = true;
  }
  if (currentIndex === 0) {
    prevActive = false;
  } else {
    prevActive = true;
  }

  return (
    <div className="carousel ctn-carousel">
      {visibleObjects.map((object, index) => (
        <div key={index} className="slide crs-obj">
          {object}
        </div>
      ))}
      <button
        disabled={!prevActive}
        className="btn btn-prev"
        onClick={prevSlide}
      >
        {`<`}
      </button>
      <button
        disabled={!nextActive}
        className="btn btn-next"
        onClick={nextSlide}
      >
        {`>`}
      </button>
    </div>
  );
};

export default Carousel;
