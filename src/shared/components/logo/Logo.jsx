import React from 'react';
import './Logo.css'; 
import logoImg from '/src/assets/imagenes/icono5.png'; 

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="Logo" />
    </div>
  );
}

export default Logo;