import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Swal from 'sweetalert2'
import Footer from "./Footer";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "aac67542-4337-458a-87ae-4c6047b6ebac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? Swal.fire({
      title: "Success!",
      text: "Message Sent Successfully!",
      icon: "success"
    }) : Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    }));
  };

  return (
    <div className="contact-page">
     <section className="contact-hero">
                   <nav><Navbar/></nav>
                   <div id="contact-hero-txt">
                     <h1>Contact Us</h1>
                   </div>
                 </section>

      <main className="contact-main">
        <section className="contact-header">
          <span className="contact-label">CONTACT</span>
          <h1>Get in Touch With Us</h1>
          <p>
            Let&apos;s discuss how Martha Lily Facility Management can support your
            organisation with reliable, professional facility services.
          </p>
        </section>

        <section className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon">
              <img src="/images/phone-call.png" alt="Phone" />
            </div>
            <h3>Phone</h3>
            <p>+234 813 613 6256</p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <img src="/images/email (2).png" alt="Email" />
            </div>
            <h3>Email</h3>
            <p>info@marthalilyfacilitymanagement.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <img src="/images/location.png" alt="Head Office" />
            </div>
            <h3>Head Office</h3>
            <p>17 Queen Elizabeth Street, Asokoro, Abuja, Nigeria</p>
          </div>
        </section>

        <section className="contact-map-section">
          <div className="map-container">
            <iframe
              title="Martha Lily Facility Management location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126746.25506107713!2d7.30538765!3d9.076478499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5027f5e0d1%3A0x36b9c7a509a68e2!2sAbuja!5e0!3m2!1sen!2sng!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="contact-lower">
          <div className="quote-form">
            <h2>Request a Quote</h2>
            <p>
              Share a few details about your facility and we&apos;ll get back to you
              with a tailored proposal.
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <input type="text" placeholder="Full Name" name="Full Name" required />
                <input type="email" placeholder="Email" name="Email" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone" name="Phone" required/>
                <input type="text" placeholder="Subject" name="Subject" required />
              </div>
              <div className="form-row">
                <textarea rows="4" placeholder="Message" name="Message" required></textarea>
              </div>
              <button type="submit" className="quote-button">
                Get a Quote
              </button>
            </form>
          </div>

          <div className="quote-side">
            <span className="quote-side-label">GET A QUOTE</span>
            <h3>Partner with Martha Lily for consistently clean, efficient spaces.</h3>
            <p>
              From office complexes to industrial sites, our team ensures your
              environment stays safe, well-maintained, and welcoming for everyone
              who uses it.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}