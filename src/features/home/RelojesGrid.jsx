import React, { useEffect, useState } from "react";
import '../../shared/style/RelojesGrid.css'; 

function RelojesGrid({ addToCart }) {
  const [productos, setProductos] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setQuantities(Array(data.length).fill(1));
      })
      .catch(error => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  return (
    <div className="cards-container">
      {productos.map((producto, idx) => (
        <div className="card" key={producto.id}>
          <img src={producto.image} alt={producto.title} className="card-image" />
          <div className="card-content">
            <h3>{producto.title}</h3>
            <p>Precio: ${producto.price.toLocaleString()}</p>
            <div className="quantity-controls">
              <button type="button" onClick={() => decreaseQuantity(idx)}>-</button>
              <span>{quantities[idx]}</span>
              <button type="button" onClick={() => increaseQuantity(idx)}>+</button>
            </div>
            <button
              className="comprar-btn"
              onClick={() => addToCart(producto, quantities[idx])}
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelojesGrid;

