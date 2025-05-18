import React from 'react';

function Services() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Nuestros Servicios</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Mantenimiento de prevencion</h5>
                <p className="card-text">hacemos mantenimiento preventibo para que estes al dia -~</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cambio de baterías</h5>
                <p className="card-text">Cambio rápido y seguro para todo tipo de relojes.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cambio de piezas </h5>
                <p className="card-text">Cambiamos todo tipo de pieza o repuesto comfliable y seguro.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Ajuste de maquinaria</h5>
                <p className="card-text">Servicio técnico para garantizar precisión y durabilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

