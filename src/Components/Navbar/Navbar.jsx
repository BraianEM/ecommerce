import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/LOGO64.png";
import { IoMdPeople, IoMdHome } from "react-icons/io";
import { BiSolidShoppingBags, BiSolidContact } from "react-icons/bi";

const Navbar = () => {

  return (

    <nav className="bg-dbg-100  text-dtext-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-full mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-dtext-200">
            Misiotrónica
          </span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dtext-200 rounded-lg md:hidden hover:bg-dbg-100 focus:outline-none focus:ring-2 focus:ring-dbg-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className=" md:flex md:gap-5">
            <li className="flex items-center m-auto gap-1 p-1">
              <IoMdHome className="text-dtext-200 text-xl " />
              <Link
                to="/"
                className="block  text-dtext-200  rounded md:bg-transparent hover:text-blue-700 md:p-0 "
              >
                Home
              </Link>
            </li>
            <li className="flex items-center m-auto gap-1 p-1">
              <IoMdPeople className="text-dtext-200 text-xl " />
              <Link
                to="/about"
                className="block  text-dtext-200 rounded  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 "
              >
                About
              </Link>
            </li>
            <li className="flex items-center m-auto gap-1 p-1">
              <BiSolidShoppingBags className="text-dtext-200 text-xl " />
              <Link
                to="/store"
                className="block  text-dtext-200 rounded  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 "
              >
                Store
              </Link>
            </li>
            <li className="flex  items-center m-auto gap-1 p-1">
              <BiSolidContact className="text-dtext-200 text-xl" />
              <Link
                to="/contact"
                className="block  text-dtext-200 rounded  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 "
              >
                Contact
              </Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
