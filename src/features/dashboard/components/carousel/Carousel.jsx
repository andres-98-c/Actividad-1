import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'imagenes/logotech.png',
    'imagenes/icono3.png',
    'imagenes/rolex2-removebg.png',
    'imagenes/hublot1.png',  
    'imagenes/casio.svg',
  ];
    
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
