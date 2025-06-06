"use client";
import React from "react";
import MyButton from "../MyButton";
import { ListIcon } from "@phosphor-icons/react";
import {
  ShoppingCartIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useStore } from "@/providers/datastore";

const NavBar = () => {
  const toggleCart = useStore((s) => s.toggleCart);

  return (
    <nav className="w-fit p-2 rounded-full bg-white flex gap-2">
      <i className="p-2 text-black">
        <ListIcon size={24} />
      </i>
      <i className="p-2 text-black">
        <UserCircleIcon size={24} />
      </i>
      <i className="p-2 cursor-pointer text-black" onClick={toggleCart}>
        <ShoppingCartIcon size={24} />
      </i>
      <MyButton link="/menu" title="Menu" state="selected" />
      <MyButton link="/restaurant" title="restaurants" state="selected" />
      <MyButton link="/book" title="Book a table" state="black" />
    </nav>
  );
};

export default NavBar;
