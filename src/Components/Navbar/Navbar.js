import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo192.png"
import "./Navbar.css"
import Comando from "./Comandos/Comando.js";
import { useState } from "react";



const Navbar = () => {
   return (
    <>
      <nav className="navbar">
      <img src={logo} alt="logo" />
        <Link to="/" className="navbar-logo">
          Tienda Electrónica
        </Link>
        <li>
          <Comando Link="/" texto="INICIO"/>
        </li>
        <li>
          <Comando Link="/About" texto="INFORMACIÓN"/>
        </li>
        <li>
          <Comando Link="/Store" texto="Tienda"/>
        </li>
        <li>
          <Comando Link="/Contact" texto="CONTACTO"/>
        </li>

      
      </nav>
    </>
  );
};

export default Navbar;
