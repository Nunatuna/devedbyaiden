import React from "react";
import "../../src/style.css";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        DEVED BY AIDEN
      </Link>
      <div className="navbar-links">
        {/* ✅ Works with TanStack Router, scrolls to #projects */}
        <Link to="/" hash="projects">PROJECTS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact" className="contact-link">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
