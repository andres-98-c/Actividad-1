import React, { useState } from 'react';

// Importamos las imágenes directamente
import descargas from '../assets/descarga.jpg'; 
import herramientas from '../assets/herramientas.jpg'; 

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

 const slides = [
  { url: descargas, alt: 'descargas' },
  { url: herramientas, alt: 'herramients' },
  
];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px', margin: 'auto' }}>
      <div style={{ position: 'relative' }}>
        <img
          src={slides[currentIndex].url}
          alt={slides[currentIndex].alt}
          style={{ width: '100%', borderRadius: '10px' }}
        />
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: 'none',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%'
          }}
          aria-label="Anterior"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: 'none',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%'
          }}
          aria-label="Siguiente"
        >
          &#8250;
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', color: '#555' }}>
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
}

export default Carousel;
