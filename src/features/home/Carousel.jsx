import React, { useState, useEffect } from 'react';

import { carousel } from '../../imageData/ImageData.jsx';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {carousel.map((image, index) => (
          <div
            key={index}
            className={`carousel-item${index === currentIndex ? ' active' : ''}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPrev} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNext} aria-label="Next slide">
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
