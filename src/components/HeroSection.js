import React from "react";
import Dot from "../assets/images/Dot.svg";
import Human from "../assets/images/Ellipse 95.svg";
import Nft2 from "../assets/images/unsplash_pVoEPpLw818.svg";
import Nft3 from "../assets/images/unsplash_tZCrFpSNiIQ.svg";
import eth from "../assets/images/Group 83.svg";

import { FaEthereum } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="2xl:px-[120px] grid lg:grid-cols-2 xsm:grid-rows-2 grid-rows-none lg:grid-rows-none lg:gap-24 gap-0 xsm:py-[72px] py-[42px] lg:px-12  px-6">
      <div className="flex flex-col text-center lg:text-left">
        <h1 className="uppercase font-bhSans xsm:text-4xl text-2xl mb-6">
          Discover, and collect Digital Art NFTs
        </h1>
        <p className="xsm:text-xl text-base font-dmSans text-zinc-700 mb-10">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <div className="flex flex-col relative items-center lg:items-start">
          <a
            href=""
            className="bg-custom-purple text-white py-5 px-10 rounded-full text-xl w-fit mb-8"
          >
            Explore Now
          </a>
          <div className="flex">
            <div className="flex flex-col pr-6">
              <span className="font-bhSans text-4xl uppercase">98k+</span>
              <span className=" text-xl font-dmSans">Artwork</span>
            </div>
            <div className="flex flex-col pr-6">
              <span className="font-bhSans text-4xl uppercase">12k+</span>
              <span className=" text-xl font-dmSans">Auction</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bhSans text-4xl uppercase">15k+</span>
              <span className=" text-xl font-dmSans">Artist</span>
            </div>
          </div>
          <img
            src={Dot}
            alt="dot"
            className="w-fit absolute top-0 lg:-left-10 -z-10"
          />
        </div>
      </div>
      <div className="m-auto lg:m-0">
        <div className=" relative xsm:flex items-center bg-nft bg-no-repeat w-[400px] h-[440px] hidden">
          <div className="h-full w-full flex flex-col justify-between px-7  pt-6">
            <div>
              <span className="text-3xl mb-2 block text-white">
                Abstr Gradient NFT
              </span>
              <div className="flex flex-row items-center">
                <img src={Human} alt="" className="pr-4" />
                <span className="text-white text-xl">Arkhan17</span>
              </div>
            </div>
            <div className="flex w-full justify-between mb-6 border-2 border-transparent backdrop-blur-xl	 rounded-lg bg-white/20">
              <div className="pl-7 py-3">
                <span className="text-white text-xs">Current Bid</span>
                <div className="flex items-center">
                  <FaEthereum className="text-white mr-3 text-xl" />
                  <span className="text-white text-base">0.25 ETH</span>
                </div>
              </div>
              <div className="pr-7 py-3">
                <span className="text-white text-xs">Ends in</span>
                <div className="flex items-center">
                  <span className="text-white text-base">12h 43m 42s</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Nft2}
            alt="nft"
            className="-z-20 absolute -right-9  hidden xsm:block"
          />
          <img
            src={Nft3}
            alt="nft"
            className="-z-30 absolute -right-16  hidden xsm:block"
          />
          <img
            src={eth}
            alt="nft"
            className=" absolute -left-[71px]  hidden xsm:block"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
