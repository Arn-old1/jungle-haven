import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FeaturedDestinations.css";

const destinations = [
  {
    name: "Murchison Falls",
    img: "/assets/murchison.webp",
    desc: "Discover the roaring waterfalls and diverse wildlife.",
  },
  {
    name: "Bwindi Impenetrable Forest",
    img: "/assets/bwindi.jpg",
    desc: "Home to mountain gorillas and rich biodiversity.",
  },
  {
    name: "Queen Elizabeth NP",
    img: "/assets/queen.jpg",
    desc: "Famous for tree-climbing lions and boat safaris.",
  },
  {
    name: "Kibale Forest",
    img: "/assets/kibale.jpg",
    desc: "Primate capital of the world with chimpanzee trekking.",
  },
  {
    name: "Kidepo Valley",
    img: "/assets/kidepo.webp",
    desc: "Untamed wilderness and spectacular scenery.",
  },
  {
    name: "Jinja - Source of the Nile",
    img: "/assets/nile.jpg",
    desc: "Adventure capital for white-water rafting and more.",
  },
];

const FeaturedDestinations = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out", // smooth transition
      once: true, // animate only once
    });
  }, []);

  return (
    <section className="featured-section" id="destinations">
      <div className="container">
        {/* Section Heading */}
        <h2 data-aos="fade-up">Featured Destinations</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
          Explore the most iconic safari spots in East Africa
        </p>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <div
              className="destination-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // stagger effect
            >
              <img src={dest.img} alt={dest.name} />
              <div className="overlay">
                <h3 data-aos="fade-up">{dest.name}</h3>
                <p data-aos="fade-up" data-aos-delay="200">
                  {dest.desc}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;