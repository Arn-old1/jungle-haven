import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ tourName, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    travelers: "",
    duration: "",
    date: "",
    plans: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, country, phone, travelers, duration, date, plans } = formData;

    const message = `Hello, I would like to book the tour: *${tourName}*\n\n
Full Name: ${fullName}\n
Email: ${email}\n
Country: ${country}\n
Phone: ${phone}\n
Number of Travelers: ${travelers}\n
Duration of Stay: ${duration}\n
Travel Date: ${date}\n
Travel Plans: ${plans}`;

    const whatsappNumber = "256707883114";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <h2>Book This Tour</h2>
        <p>{tourName}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="text" name="country" placeholder="Country of Residence" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input type="number" name="travelers" placeholder="Number of Travelers" required onChange={handleChange} />
          <input type="text" name="duration" placeholder="Duration of Stay" required onChange={handleChange} />
          <input type="date" name="date" required onChange={handleChange} />
          <textarea name="plans" placeholder="Your Travel Plans (optional)" onChange={handleChange}></textarea>
          <button type="submit">Submit Booking</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingForm;