import React from 'react';
import './Logo.css'; 

function Logo() {
  return (
    <div className="logo">
      <a href="http://localhost:5174/#" className="logo-link">
        <img src="/imagenes/icono5.png" alt="Logo" className="logo-img" />
        <h1 className="logo-title">O-CLOCK</h1>
      </a>
    </div>
  );
}

export default Logo;