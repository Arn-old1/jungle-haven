import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Jungle Haven</div>
      <ul className="nav-links">
        <li>
          <Link to="hero" smooth={true} duration={600} spy={true} offset={-70} activeClass="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600} spy={true} offset={-70} activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="packages" smooth={true} duration={600} spy={true} offset={-70} activeClass="active">
            Packages
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600} spy={true} offset={-70} activeClass="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;