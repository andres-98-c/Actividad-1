import React from 'react';
import Carousel from '../components/carousel/Carousel.jsx';
import RelojesGrid from '../components/cardsRelojes/RelojesGrid.jsx';
import WhatsAppButton from '../../../shared/components/buttons/WhatsAppButton.jsx';
import Contact from '../../contact/components/Contact.jsx';

function HomePage() {
  return (
    <div>
      
      <Carousel />
      <RelojesGrid />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default HomePage;
