import React from "react";
import Human from "../assets/images/Ellipse 95.svg";
import Bignft from "../assets/images/unsplash_F56Y7dgrAkc.svg";
import eth from "../assets/images/Vector.svg";
import greeneth from "../assets/images/greeneth.svg";
import profile from "../assets/images/unsplash_k0rVudBoB4c.svg";
import check from "../assets/images/check.svg";

function Offer() {
  return (
    <div className="flex xl:flex-row flex-col 2xl:px-[120px]  lg:px-12  px-6 py-28 items-center 2xl:justify-center">
      <div className="flex flex-col m-auto 2xl:m-0 xl:mb-0 mb-20 cmd:flex-row">
        <div className="cmd:mr-14 mb-12 cmd:mb-0">
          <img src={Bignft} alt="" className="cmd:pb-8 pb-4" />
          <div className="flex ">
            <div className="flex w-full">
              <img src={Human} alt="" className="w-12 h-12 pr-3 box-content	" />
              <div className="flex flex-col ">
                <h4 className="font-dmSans font-bold text-xl">
                  The Futr Abstr
                </h4>
                <span className="font-dmSans font-normal text-sm">
                  10 in the stock
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full items-end">
              <h5 className="font-dmSans font-medium text-xs">Highest Bid</h5>
              <div className="flex">
                <img src={eth} alt="" className="pr-3" />
                <span className="font-dmSans font-bold text-base">
                  0.25 ETH
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between xl:border-r-2 cmd:pr-12 items-center cmd:items-start ">
          <div className="flex ">
            <img src={Bignft} alt="" className="w-36 h-36 pr-5" />
            <div className="flex flex-col items-start">
              <h5 className="font-dmSans font-bold text-xl">The Futr Abstr</h5>
              <div className="flex items-center">
                <img src={Human} alt="" />
                <div className="flex items-center p-2 mx-2  border-2 border-green-500 text-green-500 rounded-md">
                  <img src={greeneth} alt="" className="pr-1 w-3" />
                  <span className="text-xs font-dmSans font-bold">
                    0.25 ETH
                  </span>
                </div>
                <span className="font-dmSans text-sm text-gray-500">
                  1 of 8
                </span>
              </div>
              <a
                href=""
                className="font-medium border-2 border-custom-purple text-violet-950 px-3 py-2 mt-4 rounded-full hover:bg-custom-purple hover:text-white"
              >
                Place a bid
              </a>
            </div>
          </div>
          <div className="flex ">
            <img src={Bignft} alt="" className="w-36 h-36 pr-5" />
            <div className="flex flex-col items-start">
              <h5 className="font-dmSans font-bold text-xl">The Futr Abstr</h5>
              <div className="flex items-center">
                <img src={Human} alt="" />
                <div className="flex items-center p-2 mx-2  border-2 border-green-500 text-green-500 rounded-md">
                  <img src={greeneth} alt="" className="pr-1 w-3" />
                  <span className="text-xs font-dmSans font-bold">
                    0.25 ETH
                  </span>
                </div>
                <span className="font-dmSans text-sm text-gray-500">
                  1 of 8
                </span>
              </div>
              <a
                href=""
                className="font-medium border-2 border-custom-purple text-violet-950 px-3 py-2 mt-4 rounded-full hover:bg-custom-purple hover:text-white"
              >
                Place a bid
              </a>
            </div>
          </div>
          <div className="flex">
            <img src={Bignft} alt="" className="w-36 h-36 pr-5" />
            <div className="flex flex-col items-start">
              <h5 className="font-dmSans font-bold text-xl">The Futr Abstr</h5>
              <div className="flex items-center">
                <img src={Human} alt="" />
                <div className="flex items-center p-2 mx-2  border-2 border-green-500 text-green-500 rounded-md">
                  <img src={greeneth} alt="" className="pr-1 w-3" />
                  <span className="text-xs font-dmSans font-bold">
                    0.25 ETH
                  </span>
                </div>
                <span className="font-dmSans text-sm text-gray-500">
                  1 of 8
                </span>
              </div>
              <a
                href=""
                className="font-medium border-2 border-custom-purple text-violet-950 px-3 py-2 mt-4 rounded-full hover:bg-custom-purple hover:text-white"
              >
                Place a bid
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:pl-9  xl:w-auto text-center xl:text-left">
        <h4 className="uppercase font-bhSans text-xl">Top Collections over </h4>
        <p className="font-dmSans font-bold text-lg text-custom-purple mb-5">
          Last 7 days
        </p>
        <div className="flex flex-row justify-between items-center gap-6 border-b-2 py-4">
          <span className="font-dmSans font-bold text-2xl">1</span>
          <div className="relative flex justify-end ">
            <img src={profile} alt="" className="max-w-none" />
            <img src={check} alt="" className="absolute -top-1" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-dmSans font-medium text-base">CryptoFunks</h5>
            <div className="flex flex-row">
              <img src={eth} alt="" className="pr-1" />
              <span className="text-sm text-gray-600 font-medium">
                19,769.39
              </span>
            </div>
          </div>
          <div>
            <span className="text-teal-500 font-semibold text-xl">+26.52%</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-6 border-b-2 py-4">
          <span className="font-dmSans font-bold text-2xl">2</span>
          <div className="relative flex justify-end ">
            <img src={profile} alt="" className="max-w-none" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-dmSans font-medium text-base">CryptoFunks</h5>
            <div className="flex flex-row">
              <img src={eth} alt="" className="pr-1" />
              <span className="text-sm text-gray-600 font-medium">
                2,769.39
              </span>
            </div>
          </div>
          <div>
            <span className="text-red-500 font-semibold text-xl">+10.52%</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-6 border-b-2 py-4">
          <span className="font-dmSans font-bold text-2xl">1</span>
          <div className="relative flex justify-end ">
            <img src={profile} alt="" className="max-w-none" />
            <img src={check} alt="" className="absolute -top-1" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-dmSans font-medium text-base">CryptoFunks</h5>
            <div className="flex flex-row">
              <img src={eth} alt="" className="pr-1" />
              <span className="text-sm text-gray-600 font-medium">
                19,769.39
              </span>
            </div>
          </div>
          <div>
            <span className="text-teal-500 font-semibold text-xl">+26.52%</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-6 border-b-2 py-4">
          <span className="font-dmSans font-bold text-2xl">1</span>
          <div className="relative flex justify-end ">
            <img src={profile} alt="" className="max-w-none" />
            <img src={check} alt="" className="absolute -top-1" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-dmSans font-medium text-base">CryptoFunks</h5>
            <div className="flex flex-row">
              <img src={eth} alt="" className="pr-1" />
              <span className="text-sm text-gray-600 font-medium">
                19,769.39
              </span>
            </div>
          </div>
          <div>
            <span className="text-teal-500 font-semibold text-xl">+26.52%</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-6">
          <span className="font-dmSans font-bold text-2xl">1</span>
          <div className="relative flex justify-end ">
            <img src={profile} alt="" className="max-w-none" />
            <img src={check} alt="" className="absolute -top-1" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-dmSans font-medium text-base">CryptoFunks</h5>
            <div className="flex flex-row">
              <img src={eth} alt="" className="pr-1" />
              <span className="text-sm text-gray-600 font-medium">
                19,769.39
              </span>
            </div>
          </div>
          <div>
            <span className="text-teal-500 font-semibold text-xl">+26.52%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
