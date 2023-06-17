import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar(props) {
  const toggleMenu = () => {
    props.setHamburger(!props.hamburger);
  };
  return (
    <div className="flex px-6 py-2 justify-between items-center lg:px-12 lg:py-4 2xl:px-[120px] 2xl:py-10 border-b-2">
      <h1 className="uppercase text-custom-purple font-black text-2xl	lg:text-2xl">
        NFters
      </h1>
      <div className="hidden md:block">
        <a
          href=""
          className="px-2 text-black font-dmSans font-medium text-sm lg:text-lg 2xl:mr-10 hover:text-custom-purple"
        >
          Marketplace
        </a>
        <a
          href=""
          className="px-2 text-black font-dmSans font-medium text-sm lg:text-lg 2xl:mr-10 hover:text-custom-purple"
        >
          Resource
        </a>
        <a
          href=""
          className="px-2 text-black font-dmSans font-medium text-sm lg:text-lg hover:text-custom-purple "
        >
          About
        </a>
      </div>
      <div className="relative flex justify-end items-center">
        <input
          type="text"
          placeholder="Search"
          className=" border-2 border-gray-300 py-1 pl-2 lg:py-2 lg:pl-4 rounded-2xl lg:rounded-3xl text-sm placeholder:text-gray-500 placeholder:font-dmSans font-dmSans lg:text-lg 2xl:w-[300px] outline-none hover:border-custom-purple focus:border-custom-purple"
        />
        <CiSearch className="absolute right-2 text-gray-600 lg:text-2xl" />
      </div>
      <div className="hidden md:flex">
        <span className="font-dmSans font-bold text-xs  border-2 border-custom-purple py-1 px-2 rounded-2xl bg-custom-purple text-white mr-1 lg:text-lg lg:rounded-3xl lg:py-2 lg:px-4 2xl:px-8 2xl:mr-3 hover:bg-white hover:text-custom-purple">
          <a href="">Upload</a>
        </span>
        <span className="font-dmSans font-bold text-xs  border-2 border-custom-purple py-1 px-2 rounded-2xl bg-white text-custom-purple ml-1 lg:text-lg lg:rounded-3xl lg:py-2 lg:px-4 2xl:px-8 2xl:ml-3 hover:bg-custom-purple hover:text-white">
          <a href=""> Connect Wallet</a>
        </span>
      </div>
      <div
        className="flex items-center text-custom-purple md:hidden"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
