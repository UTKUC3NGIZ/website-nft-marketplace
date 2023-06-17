import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import Hero from "./components/HeroSection";
import Features from "./components/Features";
import Offer from "./components/Offer";
import Collection from "./components/Collection";
import Info from "./components/Info";
import List from "./components/List";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [hamburger, setHamburger] = useState(false);
  console.log(hamburger)

  return (
    <div className="max-w-[2180px] 2xl:m-auto">
      <Navbar setHamburger={setHamburger} hamburger={hamburger} />
      <HamburgerMenu  hamburger={hamburger} />
      <Hero />
      <Features />
      <Offer />
      <Collection />
      <Info />
      <List />
      <Footer />
    </div>
  );
}

export default App;
