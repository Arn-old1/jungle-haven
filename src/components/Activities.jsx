import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const activities = [
  {
    title: "Gorilla Trekking",
    img: "/assets/go.jpg",
    desc: "Experience a lifetime adventure with Uganda’s mountain gorillas in Bwindi.",
  },
  {
    title: "Birding Safaris",
    img: "/assets/bird.webp",
    desc: "Discover Uganda’s 1,000+ bird species across lush forests and wetlands.",
  },
  {
    title: "White Water Rafting",
    img: "/assets/water.jpg",
    desc: "Conquer the rapids of the mighty Nile River for an adrenaline rush.",
  },
  {
    title: "Cultural Tours",
    img: "/assets/ndere.jpg",
    desc: "Engage with Uganda’s rich cultural heritage and vibrant communities.",
  },
  {
    title: "Mountain Hiking",
    img: "/assets/mou.jpg",
    desc: "Challenge yourself with Rwenzori and Kilimanjaro hiking adventures.",
  },
  {
    title: "Wildlife Safaris",
    img: "/assets/safari.webp",
    desc: "Explore Uganda’s national parks and witness the Big Five up close.",
  },
];

// Framer Motion variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Activities = () => {
  return (
    <section className="py-16 bg-gray-100" id="activities">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Activities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore exciting experiences from Gorilla Trekking to Cultural Tours.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            variants={cardVariants}
          >
            <div className="overflow-hidden">
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-gray-600 mb-4">{activity.desc}</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Activities;