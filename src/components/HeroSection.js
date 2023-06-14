import React from "react";
import Dot from "../assets/images/Dot.svg";
import Human from "../assets/images/Ellipse 95.svg";
import Nft1 from "../assets/images/unsplash_E8Ufcyxz514.svg";
import Nft2 from "../assets/images/unsplash_pVoEPpLw818.svg";
import Nft3 from "../assets/images/unsplash_tZCrFpSNiIQ.svg";

import { FaEthereum } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="md:px-[120px] grid grid-cols-2 gap-24 md:pt-[72px]">
      <div className="flex flex-col ">
        <h1 className="uppercase font-bhSans md:text-4xl mb-6">
          Discover, and collect Digital Art NFTs
        </h1>
        <p className="md:text-xl font-dmSans text-zinc-700 mb-10">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <div className="flex flex-col relative">
          <a
            href=""
            className="bg-custom-purple text-white md:py-5 md:px-10 md:rounded-full text-xl w-fit mb-8"
          >
            Explore Now
          </a>
          <div className="flex">
            <div className="flex flex-col md:pr-6">
              <span className="font-bhSans md:text-4xl uppercase">98k+</span>
              <span className=" md:text-xl font-dmSans">Artwork</span>
            </div>
            <div className="flex flex-col md:pr-6">
              <span className="font-bhSans md:text-4xl uppercase">12k+</span>
              <span className=" md:text-xl font-dmSans">Auction</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bhSans md:text-4xl uppercase">15k+</span>
              <span className=" md:text-xl font-dmSans">Artist</span>
            </div>
          </div>
          <img
            src={Dot}
            alt="dot"
            className="w-fit absolute top-0 -left-10 -z-10"
          />
        </div>
      </div>
      <div className=" relative flex items-center bg-nft bg-no-repeat w-[400px] h-[440px]">
        <div className="h-full w-full flex flex-col justify-between md:px-7 md: pt-6">
          <div>
            <span className="md:text-3xl md:mb-2 block text-white">
              Abstr Gradient NFT
            </span>
            <div className="flex flex-row items-center">
              <img src={Human} alt="" className="md:pr-4" />
              <span className="text-white md:text-xl">Arkhan17</span>
            </div>
          </div>
          <div className="flex w-full justify-between mb-6 border-2 border-transparent backdrop-blur-xl	 rounded-lg bg-white/20">
            <div className="md:pl-7 md:py-3">
              <span className="text-white text-xs">Current Bid</span>
              <div className="flex items-center">
                <FaEthereum className="text-white md:mr-3 md:text-xl" />
                <span className="text-white md:text-base">0.25 ETH</span>
              </div>
            </div>
            <div className="md:pr-7 md:py-3">
              <span className="text-white text-xs">Ends in</span>
              <div className="flex items-center">
                <span className="text-white md:text-base">12h 43m 42s</span>
              </div>
            </div>
          </div>
        </div>
        <img src={Nft2} alt="nft" className="-z-20 absolute -right-9" />
        <img src={Nft3} alt="nft" className="-z-30 absolute -right-16" />
      </div>
    </div>
  );
}

export default HeroSection;
