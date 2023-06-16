import React from "react";
import nft1 from "../assets/images/unsplash_E8Ufcyxz514.svg";
import nft2 from "../assets/images/unsplash_pVoEPpLw818.svg";
import nft3 from "../assets/images/unsplash_tZCrFpSNiIQ.svg";
import woman from "../assets/images/woman.svg";
import human from "../assets/images/Ellipse 95.svg";

function Info() {
  return (
    <div className="  2xl:px-[120px]  lg:px-12  px-6 p-28 grid 2xl:grid-cols-2 xl:grid-rows-2 gap-20">
      <div className="relative flex">
        <div className="flex justify-end items-end absolute w-[280px] bottom-20">
          <img src={nft1} alt="" />
          <img
            src={human}
            alt=""
            className="w-20 h-20 -right-7 -bottom-7 absolute border-2 rounded-full bg-white"
          />
        </div>
        <div className="flex justify-end items-end absolute right-0 w-[240px]">
          <img src={nft2} alt="" />
          <img
            src={woman}
            alt=""
            className="w-20 h-20 -right-7 -bottom-7 absolute"
          />
        </div>
        <div className="flex justify-end items-end absolute w-[200px] top-52 left-24">
          <img src={nft3} alt="" />
          <img
            src={woman}
            alt=""
            className="w-20 h-20 -right-7 -bottom-7 absolute"
          />
        </div>
      </div>
      <div>
        <h3 className="uppercase font-bhSans text-3xl">
          Create and sell your NFTs
        </h3>
        <p className="font-dmSans font-normal text-lg text-gray-600 mt-10 my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <a
          href=""
          className="font-normal text-xl border-2 py-2 px-4 text-white rounded-full border-custom-purple bg-custom-purple"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
}

export default Info;
