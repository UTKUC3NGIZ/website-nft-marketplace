import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="flex mx-6 my-2 justify-between items-center">
      <h1 className="uppercase text-custom-purple font-black text-2xl	">
        NFters
      </h1>
      <div className="hidden md:block">
        <a href="" className="px-2 text-black font-dmSans font-medium text-sm">
          Marketplace
        </a>
        <a href="" className="px-2 text-black font-dmSans font-medium text-sm">
          Resource
        </a>
        <a href="" className="px-2 text-black font-dmSans font-medium text-sm">
          About
        </a>
      </div>
      <div className="relative flex justify-end items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 py-1 pl-2 rounded-2xl text-sm placeholder:text-gray-500 "
        />
        <CiSearch className="absolute right-2 text-gray-600" />
      </div>
      <div className="hidden md:flex">
        <span className="font-dmSans font-bold text-xs border border-transparent py-1 px-2 rounded-2xl bg-custom-purple text-white mr-1">
          Upload
        </span>
        <span className="font-dmSans font-bold text-xs border border-transparent py-1 px-2 rounded-2xl bg-custom-purple text-white ml-1">
          Connect Wallet
        </span>
      </div>
      <div className="flex items-center text-custom-purple md:hidden">
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default App;
