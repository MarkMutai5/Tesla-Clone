import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed z-40">
        <div className="bg-transparent flex justify-between text-black h-14 items-center ">
          <div className="uppercase pl-8 cursor-pointer "> 
          <p className="hover:bg-gray">Tesla</p>
          </div>
          <div className="flex justify-evenly space-x-6 cursor-pointer">
            <p className="hover:bg-gray">Model S</p>
            <p className="hover:bg-gray">Model 3</p>
            <p className="hover:bg-gray">Model X</p>
            <p className="hover:bg-gray">Model Y</p>
            <p className="hover:bg-gray">Solar Roof</p>
            <p className="hover:bg-gray">Solar Panel</p>
            <p className="hover:bg-gray">PowerWall</p>
          </div>
          <div className="flex justify-evenly space-x-8 pr-8 cursor-pointer">
            <p className="hover:bg-gray">Shop</p>
            <p className="hover:bg-gray">Account</p>
            <p className="hover:bg-gray">Menu</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
