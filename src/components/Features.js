import React from "react";
import FastTransaction from "../assets/images/card-tick-1 1.svg";

function Features() {
  return (
    <div className="bg-slate-50 flex flex-row 2xl:px-[120px]  lg:px-12  px-6 py-28">
      <h2 className="text-3xl font-bhSans mr-16 uppercase">
        The amazing NFT art of the world here
      </h2>
      <div className=" mr-16">
        <div className="flex">
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
        <div className="flex">
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
