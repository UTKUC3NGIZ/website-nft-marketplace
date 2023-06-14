import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="flex mx-6 my-2 justify-between">
      <h1 className="uppercase text-custom-purple font-black text-2xl	">
        NFters
      </h1>
      <div className="hidden md:block">
        <a href="" className="px-2 text-black">
          Marketplace
        </a>
        <a href="" className="px-2 text-black">
          Resource
        </a>
        <a href="" className="px-2 text-black">
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
      <div className="hidden md:block">
        <span className="px-2">Upload</span>
        <span className="px-2">Connect Wallet</span>
      </div>
      <div className="flex items-center text-custom-purple md:hidden">
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default App;
