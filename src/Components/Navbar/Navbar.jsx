import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo192.png";
import "./Navbar.css";


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/Store">Tienda</Link>
          </li>
          <li>
            <Link to="/Contact">Contacto</Link>
          </li>

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
