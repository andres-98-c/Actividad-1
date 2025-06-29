import React, { useState } from 'react';
import './MiniCarousel.css';
import imagedata from '../../contexts/ImageData.js'; // Ajusta la ruta si es necesario

const VISIBLE = 3; // Número de imágenes visibles

function MiniCarousel() {
  if (!Array.isArray(imagedata) || imagedata.length === 0) {
    return (
      <div className="mini-carousel">
        <p>No hay imágenes para mostrar.</p>
      </div>
    );
  }

  const [start, setStart] = useState(0);

  const prev = () => setStart((prev) => (prev - 1 + imagedata.length) % imagedata.length);
  const next = () => setStart((prev) => (prev + 1) % imagedata.length);

  // Calcula las imágenes visibles
  const visibleImages = [];
  for (let i = 0; i < VISIBLE; i++) {
    visibleImages.push(imagedata[(start + i) % imagedata.length]);
  }

  return (
    <div className="mini-carousel">
      <button className="mini-carousel-btn" onClick={prev}>&lt;</button>
      <div className="mini-carousel-track">
        {visibleImages.map((img, idx) => (
          <img
            key={img.src + idx}
            src={img.src}
            alt={img.alt || `Imagen ${idx + 1}`}
            className="mini-carousel-img"
            loading="lazy"
          />
        ))}
      </div>
      <button className="mini-carousel-btn" onClick={next}>&gt;</button>
    </div>
  );
}

export default MiniCarousel;