import React from "react";
import "./Compra.css";

const Compra = () => {
  const items = [
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 20 },
    { id: 3, nombre: "Producto 3", precio: 15 },
  ];

  const subtotal = items.reduce((total, item) => total + item.precio, 0);
  const impuesto = subtotal * 0.1;
  const total = subtotal + impuesto;

  return (
    <div className="factura-container">
      <h2 className="titulo">Factura de Compra</h2>
      <table className="tabla-factura">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>1</td>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="totales">
        <p className="subtotal">Subtotal: ${subtotal}</p>
        <p className="impuesto">Impuesto (10%): ${impuesto}</p>
        <h3 className="total">Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Compra;

