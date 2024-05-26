import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[999]">
      <div className="navbar w-full p-3">
        <img src={logo} alt="logo" className="w-[45px]" />
      </div>
    </div>
  );
};

export default Navbar;
