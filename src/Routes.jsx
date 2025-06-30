import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage.jsx';
import Navbar from './shared/components/navbar/Navbar.jsx';
import Footer from './shared/components/footer/Footer.jsx';
import ContactPage from './features/contact/pages/ContactPage.jsx';
import MiniCarousel from './shared/components/miniCarosel/MiniCarousel.jsx';
import WhatsAppButton from './shared/components/buttons/WhatsAppButton.jsx';
import LoginPage from './features/auth/pages/LoginPage.jsx';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <>
              <MiniCarousel />
              <HomePage />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <MiniCarousel />
              <ContactPage />
            </>
          }
        />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;


