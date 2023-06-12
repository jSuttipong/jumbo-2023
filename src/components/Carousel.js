import React, { useState } from "react";
import "../assets/scss/Carousel.scss";

const Carousel = ({ objects, objSize }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % objects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + objects.length) % objects.length
    );
  };

  const visibleObjects = objects.slice(currentIndex, currentIndex + objSize);
  let nextActive = true;
  let prevActive = false;

  if (objects.length - currentIndex === objSize) {
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
    <div className="carousel">
      <div className="container">
        <div className="row">
          {visibleObjects.map((object, index) => (
            <div
              key={index}
              className="slide crs-obj col-6 col-sm-4 col-lg-3 col-xl"
            >
              {object.name ? object.name : ""}
            </div>
          ))}
        </div>
      </div>
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
