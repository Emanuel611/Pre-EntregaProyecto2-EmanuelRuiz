import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardContainer">
      <img className="img" src={img} alt={nombre} />
      <h3>Nombre: {nombre} </h3>
      <p>Costo: {precio} </p>
      <p>ID: {id} </p>
      <Link className="masDetalles" to={`/item/${id}`}>
        MAS DETALLES
      </Link>

      <Link className="masDetalles" to={`/Compra`}>
        COMPRAR
      </Link>
    </div>
  );
};

export default Item;