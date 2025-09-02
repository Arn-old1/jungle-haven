import React, { useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const form = useRef();


  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;