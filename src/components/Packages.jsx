import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Packages.css";
import BookingForm from "./BookingForm";
const packagesData = [
  {
    title: "Murchison Falls Safari",
    price: "$500",
    days: "3 Days",
    image: "assets/mak.jpg",
    description: "Discover the stunning Murchison Falls and wildlife on game drives."
  },
  {
    title: "Queen Elizabeth Adventure",
    price: "$650",
    days: "4 Days",
    image: "assets/qu.jpg",
    description: "Explore Queen Elizabeth National Park and its diverse ecosystems."
  },
  {
    title: "Bwindi Gorilla Trek",
    price: "$800",
    days: "5 Days",
    image: "assets/go.jpg",
    description: "Track mountain gorillas in the lush Bwindi Impenetrable Forest."
  },
  {
    title: "Nile River Jinja",
    price: "$450",
    days: "2 Days",
    image: "assets/nil.jpg",
    description: "Experience thrilling white-water rafting and scenic views on the Nile."
  },
  {
    title: "Kidepo Valley Safari",
    price: "$900",
    days: "6 Days",
    image: "assets/kide.webp",
    description: "Visit the remote Kidepo Valley for authentic wilderness experiences."
  },
  {
    title: "Lake Bunyonyi Tour",
    price: "$400",
    days: "2 Days",
    image: "assets/lake.jpg",
    description: "Relax on the beautiful islands of Lake Bunyonyi with scenic views."
  },
  {
    title: "Rwenzori Mountain Hike",
    price: "$1200",
    days: "7 Days",
    image: "assets/rwenzori.webp",
    description: "Challenge yourself with a hike to the legendary Rwenzori Mountains."
  },
  {
    title: "3 Days Gorilla Trekking Uganda",
    price: "$1200",
    days: "3 Days",
    image: "assets/lia.avif",
    description: "Experience gorilla trekking in Bwindi Impenetrable Forest."
  },
  {
    title: "5 Days Uganda Wildlife Safari",
    price: "$2000",
    days: "5 Days",
    image: "assets/wild.jpeg",
    description: "Explore Uganda's top national parks and wildlife."
  },
  {
    title: "7 Days Big Five & Primates Safari",
    price: "$3500",
    days: "7 Days",
    image: "assets/safa.jpg",
    description: "See the Big Five and mountain gorillas in one unforgettable trip."
  },
  {
    title: "10 Days Uganda Safari Adventure",
    price: "$4500",
    days: "10 Days",
    image: "assets/naka.webp",
    description: "This safari explores the amazing Nakayima heritage tree in Mubende which is a traditional harmony to the people of central Uganda, visit the legendary Amabere g’ Nnyinamwiru Caves which are breast like things believed to be attached to the Bachwezi era in the 15th century, visit the Fort Portal Crater lake fields led by the local guide, also head to the Nshenyi Cultural village in western Uganda exploring the Banyankole ."
  },
  {
    title: "3 Days Cultural Experience Tour",
    price: "$1000",
    days: "3 Days",
    image: "assets/tombs.jpg",
    description: "Besides wildlife and nature, Uganda is also blessed with rich diverse culture, the country being a heterogeneous national it has a wide range of cultural segments based on various ethnic tribes which are about 56 tribes distributed countrywide. This safari will introduce to the undiscovered authentic culture experience in Kampala where you visit the legendary kasubi tombs which is the UNESCO heritage site managed by the Buganda kingdom."
  },
  {
    title: "6 Days Uganda Cultural Tour(ii) ",
    price: "$3000",
    days: "6 Days",
    image: "assets/kasu.jpg",
    description: "On this safari you will have a chance to visit one of the most popular cultural tourist sites in Uganda- the martyrs shrine in Namugongo which is 5 kilometers away from Kampala city,."
  },
  {
    title: "4 Days to karamoja cultural festival",
    price: "$2200",
    days: "4 Days",
    image: "assets/kara.jpg",
    description: "Uganda comprises over 50 tribes that are worth experiencing not to miss the Buganda Cultural trail which is the largest and the most popular kingdom due to its strategic location in the central region where you will visit the kabaka’s palace."
  },
  {
    title: "2 Days Cultural Tour in Uganda",
    price: "$600",
    days: "2 Days",
    image: "assets/ndere.jpg",
    description: "Uganda is a heterogeneous nation that is blessed with over 56 ethnic tribal communities with highly diverse religious affiliations among citizens and this shapes the cultural and historical background of Uganda, the country occupies over 250000 square kilometers with over 45 million people."
  }
];
  
  const Packages = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState("");
  
    const openBooking = (tourName) => {
      setSelectedTour(tourName);
      setIsBookingOpen(true);
    };
  
    const closeBooking = () => {
      setIsBookingOpen(false);
      setSelectedTour("");
    };
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        easing: "ease-in-out",
        once: true, 
      });
    }, []);    

    return (
      <section className="packages-section" id="packages">
    <div className="container">

      <h2 data-aos="fade-up">Our Safari Packages</h2>
      <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
        Choose from our exciting safari packages for your next adventure
      </p>
        <div className="packages-grid">
          {packagesData.map((pkg, index) => (
            <div className="package-card" key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} 
          >
              <img src={pkg.image} alt={pkg.title} />
              <div className="package-info">
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <span>{pkg.days}</span>
                <strong>{pkg.price}</strong>
                <button onClick={() => openBooking(pkg.title)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
  </div>
        {isBookingOpen && (
          <BookingForm tourName={selectedTour} onClose={closeBooking} />
        )}
      </section>
    );
  };
  
  export default Packages;            
