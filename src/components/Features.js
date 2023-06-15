import React from "react";
import FastTransaction from "../assets/images/card-tick-1 1.svg";

function Features() {
  return (
    <div className="bg-slate-50 flex md:flex-row flex-col 2xl:px-[120px]  lg:px-12  px-6 py-28">
      <h2 className="text-3xl font-bhSans md:mr-16 mb-10 md:mb-0 uppercase text-center">
        The amazing NFT art of the world here
      </h2>
      <div className=" md:mr-16 mb-10 md:mb-0">
        <div className="flex items-start flex-row w-3/4 m-auto md:m-0 md:w-full">
          <img src={FastTransaction} alt="" className="mr-4" />
          <div className="flex flex-col">
            <h3 className="text-xl font-dmSans font-bold pb-3">
              Fast Transaction
            </h3>
            <p className=" font-normal font-dmSans text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-start flex-row w-3/4 m-auto md:m-0 md:w-full">
          <img src={FastTransaction} alt="" className="mr-4" />
          <div className="flex flex-col">
            <h3 className="text-xl font-dmSans font-bold pb-3">
              Fast Transaction
            </h3>
            <p className=" font-normal font-dmSans text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
