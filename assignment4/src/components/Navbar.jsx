import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#buy">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#services">Support</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
