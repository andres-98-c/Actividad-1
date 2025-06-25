import React from 'react'
import Navbar from './shared/components/Navbar.jsx'
import Footer from './shared/components/Footer.jsx'
import Carousel from './features/home/Carousel.jsx'
import RelojesGrid from './features/home/RelojesGrid.jsx'
import Contact from './features/home/Contact.jsx'

function Routes() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <RelojesGrid/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Routes
