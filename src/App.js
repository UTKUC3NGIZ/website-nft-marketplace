import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Features from "./components/Features";
import Offer from "./components/Offer";
import Collection from "./components/Collection";
import Info from "./components/Info";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Offer />
      {/* <Collection /> */}
      {/* <Info /> */}
      <List />
      <Footer />
    </>
  );
}

export default App;
