import logo from "../assets/img/banner.jpg";
import React from "react";
import Titulo from "../Components/Titulo/Tittle";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="justify-center flex items-center pt-44 ">
      <div className="flex w-full items-center h-[350px] rounded-3xl  ">
        <div className="  w-1/2 flex flex-col items-center justify-center gap-10">
          <div className=" flex flex-col text-start w-2/3">
            <h1 className="text-dtext-100 font-semibold text-[40px] text-start">
              Encontra los mejores precios en nuestra pagina
            </h1>
          </div>
          <Link
            to="/Store"
            className="bg-dPrimary-200 text-dtext-100 text-center py-2 px-8 justify-center rounded-3xl flex items-center shadow-lg "
          >
            Ir a la Tienda
            <IoIosArrowRoundForward className="text-dtext-100 h-9 w-9" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
