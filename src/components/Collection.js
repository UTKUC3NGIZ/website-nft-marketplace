import React from "react";
import Bignft from "../assets/images/unsplash_F56Y7dgrAkc.svg";
import Human from "../assets/images/Ellipse 95.svg";

function Collection() {
  return (
    <div className="flex flex-col  2xl:px-[120px]  lg:px-12  px-6 py-28 ">
      <h2 className="font-bhSans text-3xl uppercase mb-14">
        Collection Featured NFTs
      </h2>
      <div className="grid grid-cols-3 ">
        <div className="flex flex-col mr-4 ">
          <div className="flex flex-row pb-8 ">
            <img src={Bignft} alt="" className="mr-3 w-72" />
            <div className="flex flex-col gap-2 justify-between">
              <img src={Bignft} alt="" className=" w-full " />
              <img src={Bignft} alt="" className=" w-full " />
              <img src={Bignft} alt="" className=" w-full " />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="pb-3 font-dmSans font-bold text-xl">
                Amazing Collection
              </h3>
              <div className="flex">
                <img src={Human} alt="" className="pr-2 w-7 h-7" />
                <p className="text-sm font-medium font-dmSans">by Arkhan</p>
              </div>
            </div>
            <div>
              <a
                href=""
                className="font-dmSans font-bold text-blue-700 border-2 border-blue-700 p-2 rounded-3xl"
              >
                Total 54 Items
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-4 ">
          <div className="flex flex-row pb-8 ">
            <img src={Bignft} alt="" className="mr-3 w-72" />
            <div className="flex flex-col gap-2 justify-between">
              <img src={Bignft} alt="" className=" w-full " />
              <img src={Bignft} alt="" className=" w-full " />
              <img src={Bignft} alt="" className=" w-full " />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="pb-3 font-dmSans font-bold text-xl">
                Amazing Collection
              </h3>
              <div className="flex">
                <img src={Human} alt="" className="pr-2 w-7 h-7" />
                <p className="text-sm font-medium font-dmSans">by Arkhan</p>
              </div>
            </div>
            <div>
              <a
                href=""
                className="font-dmSans font-bold text-blue-700 border-2 border-blue-700 p-2 rounded-3xl"
              >
                Total 54 Items
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-4 ">
          <div className="flex flex-row pb-8 ">
            <img src={Bignft} alt="" className="mr-3 w-72" />
            <div className="flex flex-col gap-2 justify-between">
              <img src={Bignft} alt="" className=" w-full " />
              <img src={Bignft} alt="" className=" w-full " />
              <img src={Bignft} alt="" className=" w-full " />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="pb-3 font-dmSans font-bold text-xl">
                Amazing Collection
              </h3>
              <div className="flex">
                <img src={Human} alt="" className="pr-2 w-7 h-7" />
                <p className="text-sm font-medium font-dmSans">by Arkhan</p>
              </div>
            </div>
            <div>
              <a
                href=""
                className="font-dmSans font-bold text-blue-700 border-2 border-blue-700 p-2 rounded-3xl"
              >
                Total 54 Items
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;