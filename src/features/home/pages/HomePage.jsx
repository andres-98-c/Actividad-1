import React from 'react';
import Carousel from '../components/carousel/Carousel.jsx';
import RelojesGrid from '../components/cardsRelojes/RelojesGrid.jsx';
import WhatsAppButton from '../../../shared/components/buttons/WhatsAppButton.jsx';
import Contact from '../../contact/components/Contact.jsx';
import '../../../../src/index.css'; 

function HomePage() {
  return (
    <div>
      <Carousel />
      <RelojesGrid />
      <div className="home-contact-container">
        <div style={{textAlign: 'center', fontSize: '2em', marginBottom: '8px'}}>📩</div>
        <h2 className="home-contact-title">¿Tienes dudas? ¡Contáctanos!</h2>
        <Contact fields={['nombre', 'email', 'mensaje']} />
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default HomePage;
