import React from 'react';
import AppRoutes from './Routes.jsx';
import './shared/style/style.css';
import { CartProvider } from './shared/contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
