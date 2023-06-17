import React from "react";
import nft1 from "../assets/images/unsplash_E8Ufcyxz514.svg";
import nft2 from "../assets/images/unsplash_pVoEPpLw818.svg";
import nft3 from "../assets/images/unsplash_tZCrFpSNiIQ.svg";
import woman from "../assets/images/woman.svg";
import human from "../assets/images/Ellipse 95.svg";

function Info() {
  return (
    <div className="xl:pt-8 xl:pb-24 cmd:py-0  2xl:px-[120px] lg:px-12 px-6 py-[120px] ">
      <div className="cmd:grid cmd:grid-cols-12 xl:grid-rows-6 cmd:grid-rows-5 cmd:gap-0">
        <div className="xl:w-[300px] w-[250px] col-span-3 xl:row-span-3 row-span-2 row-start-2 cmd:flex xl:items-end relative hidden ">
          <img src={nft1} alt="" className=" " />
          <img src={human} alt="" className="absolute lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] lg:-bottom-5 bottom-8 -right-7 " />
        </div>
        <div className="col-span-2 row-span-2 xl:row-start-5 row-start-4 col-start-2 xl:w-[195px] w-[160px] relative cmd:flex hidden ">
          <img src={nft3} alt="" className="" />
          <img src={woman} alt="" className="absolute lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] xl:bottom-0 lg:bottom-8 bottom-20 -right-7 " />
        </div>
        <div className="col-span-5 row-span-2 row-start-3 col-start-5 xl:w-[240px] w-[200px] cmd:flex relative hidden ">
          <img src={nft2} alt="" className="" />
          <img src={woman} alt="" className="absolute lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] xl:-bottom-6 lg:bottom-6 bottom-16 lg:-right-7 -right-4 " />

        </div>
        <div className="col-span-5 row-span-2 row-start-3 col-start-8 ml-5 lg:ml-0">
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
    </div>
  );
}

export default Info;
