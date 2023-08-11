import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/LOGO64.png";
import { IoMdPeople, IoMdHome } from "react-icons/io";
import { BiSolidShoppingBags, BiSolidContact } from "react-icons/bi";

const Navbar = () => {


  function menutoggle() {
    const menu = document.getElementById('menu')
    menu.click()
  }

  return (

    <nav className="bg-dbg-100  text-dtext-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-4 mx-auto ">
        <Link to="/" className="flex items-center ps-4">
          <img src={logo} className="h-full mr-3 transform hover:scale-110 hover:rotate-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-dtext-200">
            Misiotrónica
          </span>
        </Link>
        <button id="menu" data-collapse-toggle="navbar-default" type="button" className="me-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dtext-200 rounded-lg md:hidden hover:bg-dbg-100 focus:outline-none focus:ring-2 focus:ring-dbg-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto relative md:static z-50 " id="navbar-default">
          <ul className=" md:flex md:gap-5 absolute md:static py-4 justify-end w-full p-4 bg-dbg-100">
            <li onClick={menutoggle} className="flex items-center m-auto gap-1 p-1 py-2">
              <IoMdHome className="text-dtext-200 text-xl " />
              <Link
                to="/"
                className="block  text-dtext-200  rounded md:bg-transparent hover:text-blue-700 md:p-0 "
              >
                Home
              </Link>
            </li>
            <li onClick={menutoggle} className="flex items-center m-auto gap-1 p-1 py-2">
              <IoMdPeople className="text-dtext-200 text-xl " />
              <Link
                to="/about"
                className="block  text-dtext-200 rounded  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 "
              >
                About
              </Link>
            </li>
            <li onClick={menutoggle} className="flex items-center m-auto gap-1 p-1 py-2">
              <BiSolidShoppingBags className="text-dtext-200 text-xl " />
              <Link
                to="/store"
                className="block  text-dtext-200 rounded  md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 "
              >
                Store
              </Link>
            </li>
            <li onClick={menutoggle} className="flex  items-center m-auto gap-1 p-1 py-2">
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
