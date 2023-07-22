import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header_middle_logo">
            <NavLink exact activeClassName='is-active' to='/'>
              <img src={logo} alt="logo"/>
            </NavLink>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Navbar;
