import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { FaCheckCircle, FaBoxOpen, FaUserShield, FaUsers } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 data-aos="fade-up">About Jungle Haven</h2>
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src="/assets/about.jpg" alt="About Jungle Haven" />
          </div>
          <div className="about-text" data-aos="fade-left">
            <p>
              Jungle Haven Safaris is your ultimate gateway to explore the
              breathtaking beauty and wildlife of Uganda and East Africa.
              Whether you’re looking for gorilla trekking, game drives, or
              adrenaline adventures, we’ve got the perfect package for you.
            </p>
            <h3 className="benefit-heading">Our Benefits</h3>
          <p>
            Our knowledgeable and experienced team will leave no stone unturned to
            make your stay in East Africa a memorable one.
          </p>

          <div className="benefits-grid">
            <div className="benefit-item">
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h4><em>Personal Schedule</em></h4>
                <p>Tell us where you want to go, and we’ll take you there.</p>
              </div>
            </div>

            <div className="benefit-item">
              <FaBoxOpen className="benefit-icon" />
              <div>
                <h4><em>Imaginable Products</em></h4>
                <p>
                  Best itineraries with expert insights about hidden safari
                  destinations and customized experiences.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <FaUserShield className="benefit-icon" />
              <div>
                <h4><em>Safe & Confidential</em></h4>
                <p>Your safety and privacy are our top priorities throughout the journey.</p>
              </div>
            </div>

            <div className="benefit-item">
              <FaUsers className="benefit-icon" />
              <div>
                <h4><em>Professional Crew</em></h4>
                <p>Our experienced team ensures a smooth and enjoyable safari experience.</p>
              </div>
            </div>
          </div>
            <button className="btn-primary" data-aos="zoom-in" onClick={() =>
             document.getElementById("packages").scrollIntoView({ behavior: "smooth" })
             }
             >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;