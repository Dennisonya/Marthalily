import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
}, [isOpen]);

    return (
        <div className="burger-container">
            <button className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-links ${isOpen ? "visible" : ""}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About us</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
        </div>
    );
}