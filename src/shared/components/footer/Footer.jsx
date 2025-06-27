// src/shared/components/footer/Footer.jsx
import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo.jsx';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <p>© 2025 O-CLOCK. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
