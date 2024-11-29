import React from "react";
import { Link, useMatch } from "@tanstack/react-router";
import '../css/global.css';
import Icon from "../assets/icon.png";

const Navbar = () => {
    return (
      <>
        <div className="navbar">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img style={{ width: "20px", height: "20px"}} src={Icon} alt="Logo" />
            <NavLink to="/" label="DEVED BY AIDEN" />
          </div>
          <div className="navbar-links">
            <NavLink to="/projects" label="PROJECTS" />
            <NavLink to="/about" label="ABOUT" />
            <NavLink to="/contact" label="CONTACT" />
          </div>
        </div>
        <div style={glow}></div>
      </>
    );
  };
  
  const NavLink = ({ to, label }) => {
    const match = useMatch({
      to,          // The path to match
      exact: true, // Ensures the match is for this exact path only
    });
  
    return (
      <Link className={'navbar-link'} to={to}>
        {label}
      </Link>
    );
  };

  const glow = {
    position: "fixed",
    width: "82%",
    height: "2px",
    borderRadius: "10px",
    background: "#dc143c",
    top: "92px",
    left: "0",
    marginLeft: "9%",
    marginRight: "9%",
  };
  
  export default Navbar;
