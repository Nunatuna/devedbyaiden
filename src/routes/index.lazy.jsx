import React from "react";
import "../../src/style.css";
import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import ProjectSection from "../components/projectSection";
import Footer from "../components/footer";

import Aiden from "../img/me.png"
import NocaDashboard from "../img/nocaDashboard.png"
import NocaDashboard2 from "../img/nocaDashboard2.png"
import NocaLogo from "../img/nocaLogo.png"

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <>
      <div className="body-container">
        <div className="home-container">
          <div className="welcome-container">
            <div>
              <h1 className="welcome">Hello</h1>
              <h3 className="name">- I'm Aiden <span className="pronunciation">ay * den</span></h3>
            </div>
          </div>
          <div className="image-container">
            <img src={Aiden} alt="Me" />
          </div>
        </div>
        <h1 id="projects" style={{ textAlign: "center" }}><FontAwesomeIcon icon="fa-solid fa-caret-down" /> Projects <FontAwesomeIcon icon="fa-solid fa-caret-down" /></h1>
        
        <ProjectSection
          projectName="NOCA"
          projectDescription={
            <>
              <p style={{ marginBottom: "1rem" }}>My internship exam project that I worked on as a student at Cphbusiness Lyngby</p>
              <p style={{ marginBottom: "1rem" }}>NOCA is a HR orginazation that shares research, gives webinars and sets up events for it's members</p>
              <a style={{ color: "var(--accent-text)" , textDecoration: "none"}} href="https://nunatuna.github.io/praktikrapport/" target="_blank"><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /> Visit full report (Danish)</a>
            </>
          }
          date="28.03.2025"
          tooltipText="Designed in Figma"
          content={
            <>
              <div>
                 <img style={{ width: "100%" }} src={NocaLogo} alt="" />
                <p style={{ marginBottom: "1rem" }}>NOCA had future plans to upgrade their website and give their users more personalised user experience.</p>
                <p style={{ marginBottom: "1rem" }}>They had a wish to give their users a dashboard style account panel, where they'd be able to see their events, webinars and relavant content.</p>
                <p>This gave me a lot of experience in communication and teamwork, as well as a being able to design for an existing userbase.</p>
              </div>
              <div>
                <img style={{ width: "100%", marginBottom: "1rem" }} src={NocaDashboard} alt=""></img>
                <img style={{ width: "100%" }} src={NocaDashboard2} alt="" />
              </div>
            </>
          }
        />
        <ProjectSection
            projectName="Hilfe - App"
            projectDescription={
              <>
                <p style={{ marginBottom: "1rem" }}>A exam project turned future company aspirations.</p>
                <p>Together with two of my good friends we set out to develop an app to help people navigate home safely from their night out.</p>
              </>
            }
            date="03.05.2025"
            tooltipText="Built with React Native"
            content={
              <p>This project demonstrates my skills in frontend development.</p>
            }
        />

      </div>
      <Footer />
    </>
  );
}
