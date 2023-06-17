import React from "react";

function HamburgerMenu(props) {
  return (
    <div
      className={`md:hidden absolute right-0 z-50 ${
        props.hamburger ? "block" : "hidden"
      }`}
    >
      <div className="border-2 border-custom-purple px-10 py-20 bg-white rounded-xl">
        <div className="flex flex-col text-center ">
          <span className="mb-10 font-dmSans font-bold text-2xl  border-2 border-custom-purple py-1 px-2 rounded-2xl bg-white text-custom-purple ml-1 lg:rounded-3xl lg:py-2 lg:px-4 2xl:px-8 2xl:ml-3 hover:bg-custom-purple hover:text-white">
            <a href=""> Connect Wallet</a>
          </span>
          <span className=" font-dmSans font-bold text-2xl  border-2 border-custom-purple py-1 px-2 rounded-2xl bg-custom-purple text-white mr-1 lg:rounded-3xl lg:py-2 lg:px-4 2xl:px-8 2xl:mr-3 hover:bg-white hover:text-custom-purple">
            <a href="">Upload</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
