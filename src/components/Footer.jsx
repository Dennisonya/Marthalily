import React from "react";
import { Link } from "react-router-dom"; 
import {Routes ,Route, useNavigate } from 'react-router-dom';
import './App.css';

export default function Footer (){
 const navigate = useNavigate(); // Hook for navigation
const handleReadMoreClick = () => {
    navigate('/about');
  };

    return(
        <footer className="footer">
      <div className="footer-top">
        {/* Corporate Brief */}
        <div className="footer-section brief">
          <h2>Corporate Brief</h2>
          <h3>Marthalily Cleaning & Facility Management</h3>
          <p>
            Delivering specialized industrial, commercial and high-rise cleaning
            solutions tailored to the needs of modern infrastructure. Our
            mission is to uphold operational excellence through safety,
            integrity, and cutting-edge service delivery.
          </p>
          <button className="read-more" onClick={handleReadMoreClick}>
            Read more <span className="arrow">→</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Janitorial & Cleaning Services</li>
            <li>Security Services</li>
            <li>Waste Management</li>
            <li>LandScaping & GroundsKeeping</li>
            <li>Building, Elevators & Generator Maintenance</li>
            <li>Streetlight & infasctructure Maintenance</li>
            <li>Integrated Pest Management System</li>
          </ul>
        </div>

        {/* Logo (optional placeholder) */}
        <div className="footer-logo">
          {/* Replace with actual image path */}
          <img src="/images/MARTHALLY_LogoWhite.webp" alt="Marthalily Logo" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 MARTHALILY FACILITY MANAGEMENT. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Site Credit</a>
        </div>
      </div>
    </footer>
    );
};