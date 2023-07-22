import React from "react";
import logo2 from "../../assets/img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="link-footer">
      <div className="containerF">
        <ul>
          <li>
            <img src={logo2} alt="logo" className="loguito" />
          </li>
          <li>Misiotrónica</li>
          <li>Avenida SiempreViva 123</li>
          <li>Buenos Aires</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
