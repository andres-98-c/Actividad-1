import React from 'react';
import '../logo/Logo.css'; 
import logoImg from '/src/assets/imagenes/icono5.png'; 
function Logo() {
  return (
    <div className="logo">
        <a href="http://localhost:5176">
            <img src="/src/assets/imagenes/icono5.png" alt="Logo" />
            {/* <h1>O-CLOCK</h1> */}
        </a>
    </div>
  );
}
        

export default Logo;