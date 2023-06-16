import React from "react";
import filter from "../assets/images/filter.svg";
import nft1 from "../assets/images/unsplash_E8Ufcyxz514.svg";
import human from "../assets/images/human.svg";
import human1 from "../assets/images/human2.svg";
import human2 from "../assets/images/human3.svg";
import human3 from "../assets/images/human4.svg";

import eth from "../assets/images/Vector.svg";

function List() {
  return (
    <div className="2xl:px-[120px]  lg:px-12  px-6 py-28 items-center bg-slate-50">
      <h2 className="text-4xl font-bhSans mb-9">Discover more NFTs</h2>
      <div>
        <div className="flex justify-between">
          <div className="flex gap-3 text-center">
            <a
              href=""
              className="py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              All Categories
            </a>
            <a
              href=""
              className="py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              Art
            </a>
            <a
              href=""
              className="py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              Celebrities
            </a>
            <a
              href=""
              className="py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              Gaming
            </a>
            <a
              href=""
              className="py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              Sport
            </a>
            <a
              href=""
              className="py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              Music
            </a>
            <a
              href=""
              className="py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              Crypto
            </a>
          </div>
          <div className="">
            <a
              href=""
              className="flex items-center py-3 px-5 border-2 border-transparent bg-gray-100 rounded-full"
            >
              <img src={filter} alt="" className="pr-3" /> All Filters
            </a>
          </div>
        </div>
        <div>
          <div className="mt-10 grid grid-cols-4 gap-10">
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
            <div className="flex flex-col border-2 border-transparent rounded-xl p-3 bg-white">
              <div className="flex items-end relative mb-5">
                <img src={nft1} alt="" className="w-64" />
                <div>
                  <img
                    src={human}
                    alt=""
                    className="absolute left-6 -bottom-4"
                  />
                  <img
                    src={human1}
                    alt=""
                    className="absolute left-11 -bottom-4"
                  />
                  <img
                    src={human2}
                    alt=""
                    className="absolute left-16 -bottom-4"
                  />
                  <img
                    src={human3}
                    alt=""
                    className="absolute left-[84px] -bottom-4"
                  />
                </div>
              </div>
              <h4 className="text-xl font-dmSans font-bold px-3 mb-2">
                ArtCrypto
              </h4>
              <div className="px-3 flex justify-between border-b-2 border-slate-50 pb-4">
                <span className="flex font-dmSans font-bold text-xs items-center text-teal-500">
                  <img src={eth} alt="" className="pr-1 w-3 " />
                  0.25 ETH
                </span>
                <span className="font-dmSans font-medium text-gray-500">
                  1 of 321
                </span>
              </div>
              <div className="px-3 pt-3 flex justify-between">
                <span className="py-1 px-2 text-xs font-dmSans font-normal border-2 text-custom-purple border-transparent rounded-full bg-slate-50">
                  <b>3</b>h <b>50</b>m <b>2</b>s <b>left</b>
                </span>
                <a
                  href=""
                  className="text-custom-purple text-base font-dmSans font-medium"
                >
                  Place a bid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <a
          href=""
          className="py-5 px-10 border-2 font-dmSans font-medium text-xl border-custom-purple rounded-full text-custom-purple hover:bg-custom-purple hover:text-white"
        >
          More NFTs
        </a>
      </div>
    </div>
  );
}

export default List;
