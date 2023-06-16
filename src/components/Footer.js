import React from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";

function Footer() {
  return (
    <div className="2xl:px-[120px]  lg:px-12  px-6 py-28 flex xl:gap-12 lg:gap-8 gap-2 sm:items-start flex-col md:flex-row items-center">
      <div className="flex flex-col sm:w-1/2 w-full mb-10 sm:mb-0 text-left items-start ">
        <h3 className="font-bhSans text-2xl pb-7">NFTERS</h3>
        <p className="font-normal text-sm text-gray-600  text-left">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <span className="flex gap-4 pt-8 m-auto xsm:m-0">
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
        </span>
      </div>
      <div className="flex justify-between sm:flex-row flex-col items-start text-left">
        <ul className="font-dmSans font-medium mb-10 sm:mb-0">
          <h3 className="font-bold pb-6">Market Place</h3>
          <li className="mb-2">
            <a href="">All NFTs</a>
          </li>
          <li className="mb-2">
            <a href="">New</a>
          </li>
          <li className="mb-2">
            <a href="">Art</a>
          </li>
          <li className="mb-2">
            <a href="">Sports</a>
          </li>
          <li className="mb-2">
            <a href="">Utility</a>
          </li>
          <li className="mb-2">
            <a href="">Music</a>
          </li>
          <li className="mb-2">
            <a href="">Domain Name</a>
          </li>
        </ul>
        <ul className="font-dmSans font-medium mb-10 sm:mb-0">
          <h3 className="font-bold pb-6">My Account</h3>
          <li className="mb-2">
            <a href="">Profile</a>
          </li>
          <li className="mb-2">
            <a href="">Favorite</a>
          </li>
          <li className="mb-2">
            <a href="">My Collections</a>
          </li>
          <li className="mb-2">
            <a href="">Settings</a>
          </li>
        </ul>
        <ul className="font-dmSans font-medium mb-10 sm:mb-0 sm:w-3/5 w-full">
          <h3 className="font-bold pb-6 ">Stay in the loop</h3>
          <p className="mb-6">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <form action="" className="flex items-center justify-end relative">
            <input
              type="mail"
              placeholder="Enter your email address.."
              className="border-2 w-full border-gray-100 py-5 px-6 rounded-full placeholder:text-gray-400 placeholder:font-dmSans placeholder:font-normal placeholder:text-xs lg:text-base  text-xs"
            />
            <button
              type="submit"
              className="absolute border-2 bg-custom-purple text-white xl:py-4 sm:py-3 py-2 xl:px-7 sm:px-5 px-3 text-sm lg:text-lg rounded-full right-2"
            >
              Subscibe Now
            </button>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
