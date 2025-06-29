// src/shared/components/footer/Footer.jsx
import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo.jsx';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <Logo />
          <span>© 2025 O-CLOCK. Todos los derechos reservados.</span>
        </div>
        {/* Aquí puedes agregar otros bloques como .contact-info, .quick-links, .social-media si los necesitas */}
      </div>
    </footer>
  );
}

export default Footer;
