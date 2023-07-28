import React from "react";
import logo2 from "../../assets/img/logo512.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dbg-200 px-4 ">
      <div className="flex flex-col sm:flex-row items-center ">
        <div className="flex">
        <img src={logo2} alt="logo" className="m-auto flex w-40 h-40" />
        </div>
        <div className="sm:flex grid items-center justify-center py-5 gap-10 m-auto ">
          <div>
            <h5 className="font-semibold text-lg text-dtext-100">
              Información útil
            </h5>
            <ul className="gap-1 text-dtext-200">
              <li>Misiotrónica</li>
              <li>Avenida SiempreViva 123</li>
              <li>Buenos Aires</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-dtext-100">
              Información útil
            </h5>
            <ul className="gap-1 text-dtext-200">
              <li>Misiotrónica</li>
              <li>Avenida SiempreViva 123</li>
              <li>Buenos Aires</li>
            </ul>
          </div>
          <div>
              <h5 className="font-semibold text-lg text-dtext-100">
                Información útil
              </h5>
            <ul className="gap-1 text-dtext-200">
              <li>Misiotrónica</li>
              <li>Avenida SiempreViva 123</li>
              <li>Buenos Aires</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
