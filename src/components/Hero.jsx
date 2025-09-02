import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1200">
        <h1 data-aos="fade-up">Explore the Pearl of Africa</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Unforgettable safaris, breathtaking landscapes, and unique wildlife
          experiences await you.
        </p>
          <p>Your ultimate safari adventure in East Africa</p>
          <button
            className="btn-primary"
            onClick={() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Now
          </button>
        </div>
        </div>
      
    </section>
  );
};

export default Hero;