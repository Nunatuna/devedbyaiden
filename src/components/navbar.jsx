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
        <a className="contact-link" href="https://www.linkedin.com/in/aidenschnegelsberg/" target="_blank">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
