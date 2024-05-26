import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { MainContext } from "../context/Context";

const MenuBtn = () => {
  const { isOpen, setOpen } = React.useContext(MainContext);
  return (
    <div className="w-full fixed z-[999]">
      <div className="menu-btn w-full p-3">
        <div className="w-full h-full rounded-full bg-secondary-1 flex-center">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default MenuBtn;
