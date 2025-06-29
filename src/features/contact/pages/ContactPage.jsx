import React from 'react';
import Contact from '../components/Contact.jsx';
import './ContactPage.css';
import MiniCarousel from '../../../shared/components/miniCarosel/MiniCarousel.jsx';

function ContactPage() {
  return (
    <div className="contact-page">
      <MiniCarousel />
      <h1>Contacto</h1>
      <p className="contact-description">
        ¿Tienes alguna pregunta, sugerencia o necesitas ayuda? Completa el formulario o utiliza la información de contacto a continuación.
      </p>

      <div className="contact-main-row">
        {/* Izquierda: Ubicación */}
        <div className="contact-info-box">
          <h3>Ubicación principal</h3>
          <ul>
            <li><strong>Dirección:</strong> Calle Principal 123, Ciudad</li>
            <li><strong>Teléfono:</strong> (123) 456-7890</li>
            <li><strong>Email:</strong> info@oclock.com</li>
          </ul>
          <div className="contact-map">
            <iframe
              title="Ubicación O-CLOCK"
              src="https://www.google.com/maps?q=4.710989,-74.072090&z=15&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Derecha: Formulario y asesores */}
        <div className="contact-right-box">
          <div className="contact-form-box">
            <Contact />
          </div>
          <div className="advisors-box">
            <h3>Asesores de contacto</h3>
            <ul>
              <li>
                <strong>Andrea Pérez</strong><br />
                WhatsApp: <a href="https://wa.me/573001112233" target="_blank" rel="noopener noreferrer">+57 300 111 2233</a><br />
                Email: <a href="mailto:andrea@oclock.com">andrea@oclock.com</a>
              </li>
              <li>
                <strong>Carlos Gómez</strong><br />
                WhatsApp: <a href="https://wa.me/573002223344" target="_blank" rel="noopener noreferrer">+57 300 222 3344</a><br />
                Email: <a href="mailto:carlos@oclock.com">carlos@oclock.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;