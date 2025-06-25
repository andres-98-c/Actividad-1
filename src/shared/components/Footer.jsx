import React from 'react';
import './Footer.css'; 
import Logo from './Logo'; // Asegúrate de que la ruta sea correcta

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Información de contacto */}
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>Dirección: 123 Calle Principal</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@tienda.com</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="quick-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Marcas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="social-media">
          <h3>Síguenos</h3>
          <a href="https://wa.me/1234567890" target="_blank" rel="whatsapp">
            <img src="/src/assets/imagenes/whatsapp.webp" alt="WhatsApp" />
          </a>
          
        </div>

        
      </div>

      {/* Derechos de autor */}
      <div className="copyright">
        <Logo />
        <p>&copy; O_CLOCK 2023 Tienda de Relojes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
