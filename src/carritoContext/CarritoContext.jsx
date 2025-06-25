// CarritoContext.js
import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const productIndex = prev.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        const updatedCart = [...prev];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      }
      // Si no está, agrega el producto con cantidad 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CarritoContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CarritoContext.Provider>
  );
};
