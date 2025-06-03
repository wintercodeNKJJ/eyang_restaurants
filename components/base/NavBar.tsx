import React from "react";
import MyButton from "../MyButton";

const NavBar = () => {
  return (
    <nav className="w-fit p-2 rounded-full bg-white flex gap-2">
      <i className="p-2 text-black">bmenu</i>
      <i className="p-2 text-black">Accounr</i>
      <i className="p-2 text-black">cart</i>
      <MyButton title="Menu" state="selected" />
      <MyButton title="restaurants" state="selected" />
      <MyButton title="Book a table" state="black" />
    </nav>
  );
};

export default NavBar;
