import logo from "../assets/img/banner.jpg";
import React from "react";
import Titulo from "../Components/Titulo/Tittle";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="justify-center flex mt-3 px-4">
      <div className="flex w-full  bg-dbg-200 h-[350px] rounded-3xl">
        <div className="  w-1/2 flex flex-col items-center justify-center gap-10">
          <div className=" flex flex-col text-start w-2/3">
            <h1 className="text-dtext-100 font-semibold text-[40px] text-start">
              Encontra los mejores precios en nuestra pagina
            </h1>
            <p className="text-dtext-200 text-lg">
              Hasta un 60% de descuento usando tarjetas de credito y los sabados
              2x1
            </p>
          </div>
          <Link
            to="/Store"
            className="bg-dPrimary-200 text-dtext-100 text-center py-2 px-8 justify-center rounded-3xl flex items-center shadow-lg "
          >
            Ir a la Tienda
            <IoIosArrowRoundForward className="text-dtext-100 h-9 w-9" />
          </Link>
        </div>
        <div className=" w-1/2">
          <img className="h-full w-full " src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
