import React from "react";
import { BiLogoTwitter, BiLogoInstagram, BiLogoFacebookCircle } from "react-icons/bi";


const Footer = () => {
  return (
    <footer className="bg-dbg-100 px-4 ">
      <div className="flex flex-col sm:flex-row items-center ">
        <div className="sm:flex grid items-center justify-center py-5 gap-10 m-auto ">
          <div>
            <h5 className="font-semibold text-lg text-dtext-100">
              Ubicación
            </h5>
            <ul className="gap-1 text-dtext-200">
              <li>Argentina</li>
              <li>Buenos Aires</li>
              <li>9 de Julio 247</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-dtext-100">
              Horario
            </h5>
            <ul className="gap-1 text-dtext-200">
              <li>Lunes a Viernes 09:00-18:00 hs</li>
              <li>Sábado 09:00-13:00 hs</li>
              <li>Domingo 14:00-18:00 hs</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-dtext-100">
              Redes Sociales
            </h5>
            <ul className="gap-1 text-dtext-200 flex flex-col">
              <li><a href="https://twitter.com/" target="_blank" className="flex items-center gap-1 hover:text-blue-700"><BiLogoTwitter />Misiotrónica</a></li>
              <li><a href="https://www.instagram.com/" target="_blank" className="flex items-center gap-1 hover:text-blue-700"><BiLogoInstagram />Misiotrónica</a></li>
              <li><a href="https://es-la.facebook.com/" target="_blank" className="flex items-center gap-1 hover:text-blue-700"><BiLogoFacebookCircle />Misiotrónica</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
