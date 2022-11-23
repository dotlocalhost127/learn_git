import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
    <nav className="navbar">
        <Link to ="/" className="logo">GoDev Project</Link>
        <div className="navLinks">
            <Link to ="/about">AboutUs</Link>
            <Link to ="/contact-us">Contact</Link>
            <Link to ="/blog">Blog</Link>
        </div>
    </nav>
    )

};

export default Navbar;

