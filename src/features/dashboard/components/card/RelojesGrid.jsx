import Card from "./Card";

const relojes = [
  { nombre: "Technomarine", precio: 25000000, foto: "/imagenes/tecno1.png" },
  { nombre: "ROLEX Oyster", precio: 120000, foto: "/products/ROyster.webp" },
  { nombre: "Hublot Classic", precio: 18000000, foto: "/products/HbBigBang.png" },
  { nombre: "Rolex Cosmograph", precio: 18000000, foto: "/products/RCosmograph.webp" },
  { nombre: "Hublot Fusion", precio: 16500000, foto: "/products/HbFusion.webp" }, 
  { nombre: "Casio a500", precio: 1100000, foto: "/products/Ca500.avif" },
  { nombre: "Casio Clasico", precio: 1000000, foto: "/products/Cclasico.avif" },
  { nombre: "Fossil BQ1009", precio: 22000000, foto: "/products/FoBQ1009.webp" },
  { nombre: "Fossil BQ2643", precio: 21600000, foto: "/products/FoBq2643.webp" },
  { nombre: "Technomarine Cruise", precio: 17400000, foto: "/products/TCruise.webp" },
];

function RelojesGrid() {
  return (
    <div className="cards-container">
      {relojes.map((reloj, idx) => (
        <Card
          key={idx}
          nombre={reloj.nombre}
          precio={reloj.precio}
          foto={reloj.foto}
        />
      ))}
    </div>
  );
}

export default RelojesGrid;