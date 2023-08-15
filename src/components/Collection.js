import React from "react";
import Bignft from "../assets/images/unsplash_F56Y7dgrAkc.svg";
import collection1 from "../assets/images/unsplash_LpbyDENbQQg.svg";
import offer1 from "../assets/images/offer1.svg";
import offer2 from "../assets/images/offer2.svg";
import offer3 from "../assets/images/offer3.svg";
import Human from "../assets/images/Ellipse 95.svg";

function Collection() {
  return (
    <div className=" 2xl:px-[120px]  lg:px-12  px-6 py-28 bg-slate-50">
      <h2 className="font-bhSans text-3xl uppercase mb-14">
        Collection Featured NFTs
      </h2>
      <div className="grid lg:grid-cols-3 grid-rows-1 lg:gap-8 gap-20 justify-items-center">
        <div className="flex flex-col w-3/5 lg:w-full">
          <div className="flex flex-row">
            <img src={Bignft} alt="" className="w-[75%]" />
            <div className="flex flex-col justify-between pl-2 w-[25%] ">
              <img src={offer3} alt="" />
              <img src={offer1} alt="" />
              <img src={offer2} alt="" />
            </div>
          </div>
          <div className="pt-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="pb-3 font-dmSans font-bold xsm:text-xl text-xs ">
                  Amazing Collection
                </h3>
                <div className="flex items-center">
                  <img src={Human} alt="" className="pr-2 w-7 h-7" />
                  <p className="text-sm font-medium font-dmSans">by Arkhan</p>
                </div>
              </div>
              <div className="flex text-center items-center">
                <a
                  href=""
                  className="font-dmSans font-bold text-blue-700 text-xs border-2 border-blue-700 p-2 rounded-3xl hover:bg-blue-700 hover:text-white"
                >
                  Total 54 Items
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5 lg:w-full ">
          <div className="flex flex-row">
            <img src={Bignft} alt="" className="w-[75%]" />
            <div className="flex flex-col justify-between pl-2 w-[25%] ">
              <img src={offer2} alt="" />
              <img src={offer3} alt="" />
              <img src={offer1} alt="" />
            </div>
          </div>
          <div className="pt-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="pb-3 font-dmSans font-bold xsm:text-xl text-xs ">
                  Amazing Collection
                </h3>
                <div className="flex items-center">
                  <img src={Human} alt="" className="pr-2 w-7 h-7" />
                  <p className="text-sm font-medium font-dmSans">by Arkhan</p>
                </div>
              </div>
              <div className="flex text-center items-center">
                <a
                  href=""
                  className="font-dmSans font-bold text-blue-700 text-xs border-2 border-blue-700 p-2 rounded-3xl hover:bg-blue-700 hover:text-white"
                >
                  Total 54 Items
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5 lg:w-full">
          <div className="flex flex-row">
            <img src={Bignft} alt="" className="w-[75%]" />
            <div className="flex flex-col justify-between pl-2 w-[25%] ">
              <img src={Bignft} alt="" />
              <img src={Bignft} alt="" />
              <img src={Bignft} alt="" />
            </div>
          </div>
          <div className="pt-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="pb-3 font-dmSans font-bold xsm:text-xl text-xs ">
                  Amazing Collection
                </h3>
                <div className="flex items-center">
                  <img src={Human} alt="" className="pr-2 w-7 h-7" />
                  <p className="text-sm font-medium font-dmSans">by Arkhan</p>
                </div>
              </div>
              <div className="flex text-center items-center">
                <a
                  href=""
                  className="font-dmSans font-bold text-blue-700 text-xs border-2 border-blue-700 p-2 rounded-3xl hover:bg-blue-700 hover:text-white"
                >
                  Total 54 Items
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
