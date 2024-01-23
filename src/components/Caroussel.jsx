import React, { useState } from 'react';
import ArrowIcon from '../assets/arrow.svg';


const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIdx = isFirstImage ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIdx);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === pictures.length - 1;
    const newIdx = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIdx);
  };

  return (
    <div className="carousel">
    {pictures.length > 1 && (
      <>
        <button onClick={goToPrevious} id='previousArrow'>
          <img src={ArrowIcon} alt="Previous" />
        </button>
        <div className="carousel-position-indicator">
          {currentIndex + 1} / {pictures.length}
        </div>
        <button onClick={goToNext} id='nextArrow'>
          <img src={ArrowIcon} alt="Next" />
        </button>
      </>
    )}
    <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
  </div>
  );
};

export default Carousel;
