import React from "react";
import NavBar from "./NavBar";

const PageHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex relative min-h-screen">
      <div className="flex flex-col justify-center md:justify-between items-center w-0 md:w-full py-20 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),url('/home/eyangapp.webp')] bg-center">
        <h3 className="hidden md:block">Nique.</h3>
        <div className=" hidden md:flex flex-col gap-1 items-center">
          <h2>Check Out</h2>
          <h1>Our Menu</h1>
        </div>
        <div className="w-fit absolute bottom-[6%] left-[50%] -translate-x-[50%] md:static md:translate-none z-[100]">
          <NavBar />
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageHead;
