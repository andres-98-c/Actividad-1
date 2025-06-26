import React, { useState } from 'react';
import Navbar from './shared/components/Navbar.jsx';
import Footer from './shared/components/Footer.jsx';
import Carousel from './features/home/Carousel.jsx';
import RelojesGrid from './features/home/RelojesGrid.jsx';
import Contact from './features/home/Contact.jsx';
import WhatsAppButton from './shared/components/WhatsAppButton.jsx';

function Routes() {
  // Estado global del carrito
  const [cart, setCart] = useState([]);

  // Agregar al carrito
  const addToCart = (producto, cantidad = 1) => {
  setCart(prev => {
    const idx = prev.findIndex(item => item.id === producto.id);
    if (idx !== -1) {
      const updated = [...prev];
      updated[idx].cantidad += cantidad;
      return updated;
    }
    return [...prev, { ...producto, cantidad }];
  });
};
// Actualizar cantidad desde el carrito
const updateQuantity = (id, cantidad) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, cantidad: cantidad > 0 ? cantidad : 1 }
        : item
    )
  );
};

  // Eliminar del carrito
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar 
        cart={cart} 
        removeFromCart={removeFromCart}      
        updateQuantity={updateQuantity}
      />
      <Carousel />
      <RelojesGrid addToCart={addToCart} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Routes;
