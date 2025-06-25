import React from 'react';
import '../style/Footer.css'; 
import Logo from './Logo'; // Asegúrate de que la ruta sea correcta

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Derechos de autor */}
        <div className="copyright">
          <Logo />
          <p>&copy; O_CLOCK 2023 Tienda de Relojes. Todos los derechos reservados.</p>
        </div>
        {/* Información de contacto */}
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>Dirección: 123 Calle Principal</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@tienda.com</p>
        </div>
        {/* Enlaces rápidos */}
        <div className="quick-links">
          
          <ul>
            <li><a href="http://localhost:5174/#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Marcas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
       
      </div>
      
    </footer>
  );
}

export default Footer;