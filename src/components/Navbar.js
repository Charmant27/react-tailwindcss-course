import React from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => setShowMenu(!showMenu);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4x">Logo</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>
        {/* sign in and sign up buttons */}
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign in
          </button>
          <button className="px-5 p-y5">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!showMenu ? (
            <MenuIcon className="w-10 mr-8" />
          ) : (
            <XIcon className="w-10 mr-8" />
          )}
        </div>
      </div>
      <ul className={!showMenu ? "hidden" : "absolute bg-zinc-300 w-full px-8"}>
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-4 py-5 mb-4">
            Sign in
          </button>
          <button className="px-4 py-5">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
