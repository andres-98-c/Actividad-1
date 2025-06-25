import React, { useState } from 'react';
import './Navbar.css'; 
import Logo from './Logo'; 

function Navbar() {
  // Estado del carrito: array de productos {nombre, cantidad}
  const [cart, setCart] = useState([
    // Ejemplo de producto inicial, puedes dejarlo vacío: []
    // { nombre: "Rolex Submariner", cantidad: 1 }
  ]);
  const [showCart, setShowCart] = useState(false);

  // Simulación de agregar producto (en una app real, esto vendría de otro componente)
  const addToCart = (nombre) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.nombre === nombre);
      if (idx !== -1) {
        // Si ya está, suma cantidad
        const updated = [...prev];
        updated[idx].cantidad += 1;
        return updated;
      }
      // Si no está, agrega nuevo
      return [...prev, { nombre, cantidad: 1 }];
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (nombre) => {
    setCart(prev => prev.filter(item => item.nombre !== nombre));
  };

  // Cantidad total de productos
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <nav className="navbar">
      <Logo />

      {/* Enlaces de navegación */}
      <ul className="nav-links">       
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Marcas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>

      {/* Carrito */}
      <div className="cart-container">
        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
          🛒
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>
        {showCart && (
          <div className="cart-dropdown">
            <h4>Carrito</h4>
            {cart.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <ul>
                {cart.map((item, idx) => (
                  <li key={idx}>
                    {item.nombre} x{item.cantidad}
                    <button onClick={() => removeFromCart(item.nombre)}>Eliminar</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      
    </nav>
  );
}

export default Navbar;