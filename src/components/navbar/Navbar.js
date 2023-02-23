import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center px-16 h-24 max-w-[1366px] mx-auto">
        <div>
          <img className="h-14 w-24" src="../../assets/gol-logo 1.jpg" />
        </div>
        <div>
          <ul className="hidden lg:flex">
            <li className="p-3">Find Reservations</li>
            <li className="p-3">Packages</li>
            <li className="p-3">About Lakshadweep</li>
            <li className="p-3">About Us</li>
            <li className="p-3">Gol</li>
            <li className="p-3">Support</li>
          </ul>
        </div>
        <div>
          <ul className="hidden lg:flex">
            <li className="p-3">Login</li>
            <li className="p-3">SIgn Up</li>
          </ul>
        </div>
        <div onClick={handleNav} className="block lg:hidden">
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-[-200%]"
              : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-100 p-4 ease-in-out duration-500"
          }
        >
          <div>
            <ul className="pt-24">
              <li className="p-3 border-b border-gray-300">
                Find Reservations
              </li>
              <li className="p-3 border-b border-gray-300">Packages</li>
              <li className="p-3 border-b border-gray-300">
                About Lakshadweep
              </li>
              <li className="p-3 border-b border-gray-300">About Us</li>
              <li className="p-3 border-b border-gray-300">Gol</li>
              <li className="p-3 border-b border-gray-300">Support</li>
            </ul>
          </div>
          <div>
            <ul className="">
              <li className="p-3 border-b border-gray-300">Login</li>
              <li className="p-3">SIgn Up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
