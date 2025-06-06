import React from 'react';
import './Navbar.css'; 
import Logo from '../logo/Logo';

function Navbar() {
  return (
    <nav className="navbar">
      
      <Logo />
      
      

      {/* /* Enlaces de navegación */ }
      <ul className="nav-links">       
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Marcas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>
    </nav>
  );
}

export default Navbar;
