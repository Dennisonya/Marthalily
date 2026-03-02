import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function Navbar(){

    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                <img src="/images/MARTHALLY_LogoWhite.webp" alt="" id="logo-img" />
                </Link>
            </div>

            <ul className="links">
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li id="contact-us-btn"><Link to="/contact">Contact Us</Link></li>
            </ul>

            <div className="burger-wrapper">
                 <BurgerMenu/>
            </div>
           
        </div>
    )
}