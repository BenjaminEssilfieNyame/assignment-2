import "./CarRentals.css"
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Inventory from "./Inventory";
import Contact from "./Contact";
import Footer from "./Footer";

const CarRentals = () => {
  return (
    <div className="Car-rentals">
      <Navbar />
      <Hero />
      <About />
      <Inventory />
      <Contact />
      <Footer />
    </div>
  );
};

export default CarRentals;
