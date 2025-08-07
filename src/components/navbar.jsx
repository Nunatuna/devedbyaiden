import React from "react";
import "../../src/style.css";
import { Link } from "@tanstack/react-router";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-logo"><span className="logo-name">DEVED BY AIDEN</span><span className="logo-icon"><FontAwesomeIcon icon="fa-solid fa-house" /></span></Link>
      <div className="navbar-links">
        {/* ✅ Works with TanStack Router, scrolls to #projects */}
        <Link to="/" className="navbar-logo-phone"><span className="logo-icon"><FontAwesomeIcon icon="fa-solid fa-house" /></span></Link>
        <Link to="/" hash="projects"><span className="projects-text">PROJECTS</span><span className="projects-icon"></span></Link>
        <Link to="/about">ABOUT</Link>
        <a className="contact-link" href="https://www.linkedin.com/in/aidenschnegelsberg/" target="_blank"><span className="contact-text">CONTACT</span><span className="contact-icon"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></span></a>
      </div>
    </div>
  );
};

export default Navbar;
