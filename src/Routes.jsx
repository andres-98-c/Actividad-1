import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage.jsx';
import Navbar from './shared/components/navbar/Navbar.jsx';
import Footer from './shared/components/footer/Footer.jsx';
import ContactPage from './features/contact/pages/ContactPage.jsx';
function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default AppRoutes;


