import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter,faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! (Feature coming soon)");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
       

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@junglehaven.com</p>
          <p>Phone: +256 700 123 456</p>
        </div>
      
        
        {/* Newsletter Section */}
        <div className="newsletter" data-aos="fade-up">
          <h3>Stay Updated</h3>
          <p>Subscribe to get the latest safari updates and offers.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Links with Icons */}
        <div className="social-links" data-aos="fade-up" data-aos-delay="200">
          <a href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" aria-label="Tiktok">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom" data-aos="fade-up" data-aos-delay="300">
          <p>&copy; {new Date().getFullYear()} Jungle Haven. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;