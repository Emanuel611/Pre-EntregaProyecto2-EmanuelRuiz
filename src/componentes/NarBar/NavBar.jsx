import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="imgBanner">
      <h1 className="navmoto">Motorepuesto</h1>
      <nav>
        <ul>
          <li>
            <NavLink className="menu" to={"/"}>INICIO</NavLink>
          </li>
          <li>
            <NavLink className="menu" to={"/categoria/1"}>CACHAS</NavLink>
          </li>
          <li>
            <NavLink className="menu" to={"/categoria/2"}>GUARDABARROS</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
