import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedDestinations from "./components/FeaturedDestinations";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // smooth animation speed
      easing: "ease-in-out",
      once: true, // only animate once
      offset: 100, // trigger point
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedDestinations />
      <Packages />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;