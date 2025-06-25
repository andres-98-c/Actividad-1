import React, { useState } from "react";
import { imageData } from '../../imageData/ImageData.jsx'; 
import './RelojesGrid.css'; 

const relojes = [
  { nombre: "Rolex Submariner", precio: 25000000, foto: imageData[1].src },
  { nombre: "Casio Vintage", precio: 120000, foto: imageData[2].src },
  { nombre: "Technomarine", precio: 25000000, foto: imageData[3].src },
  { nombre: "ROLEX Oyster", precio: 120000, foto: imageData[4].src },
  { nombre: "Hublot Classic", precio: 18000000, foto: imageData[5].src },
  { nombre: "Rolex Cosmograph", precio: 18000000, foto: imageData[6].src },
  { nombre: "Hublot Fusion", precio: 16500000, foto: imageData[7].src },
  { nombre: "Casio a500", precio: 1100000, foto: imageData[8].src },
  { nombre: "Casio Clasico", precio: 1000000, foto: imageData[9].src },
  { nombre: "Fossil BQ1009", precio: 22000000, foto: imageData[10].src },
  { nombre: "Fossil BQ2643", precio: 21600000, foto: imageData[11].src },
  { nombre: "Technomarine Cruise", precio: 17400000, foto: imageData[12].src },
];

function RelojesGrid() {
  const [quantities, setQuantities] = useState(relojes.map(() => 1));

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
      {relojes.map((reloj, idx) => (
        <div className="card" key={idx}>
          <img src={reloj.foto} alt={reloj.nombre} className="card-image" />
          <div className="card-content">
            <h3>{reloj.nombre}</h3>
            <p>Precio: ${reloj.precio.toLocaleString()}</p>
            <div className="quantity-controls">
              <button type="button" onClick={() => decreaseQuantity(idx)}>-</button>
              <span>{quantities[idx]}</span>
              <button type="button" onClick={() => increaseQuantity(idx)}>+</button>
            </div>
            <button className="comprar-btn">Comprar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelojesGrid;
