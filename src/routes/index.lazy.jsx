import React from "react";
import "../../src/style.css";
import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import ProjectSection from "../components/projectSection";
import Footer from "../components/footer";

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
            <img src="./public/img/me.png" alt="Me" />
          </div>
        </div>
        <h1 id="projects" style={{ textAlign: "center" }}><FontAwesomeIcon icon="fa-solid fa-caret-down" /> Projects <FontAwesomeIcon icon="fa-solid fa-caret-down" /></h1>
        
        <ProjectSection
          projectName="Portfolio Website"
          projectDescription="My Internship as a UX-designer at NOCA. I was there for 3 months and helped with the desgin of the new user dashboard for their users."
          date="26.07.2025"
          tooltipText="Designed in Figma"
          content={
            <>
              <p>This project demonstrates my skills in frontend development.This project demonstrates my skills in frontend development.This project demonstrates my skills in frontend development.</p>
              <img style={{ width: "100%" }} src="./public/img/nocaDashboard.png" alt=""></img>
            </>
          }
        />
        <ProjectSection
          projectName="Portfolio Website"
          projectDescription="A React-based personal portfolio showcasing my work."
          date="26.07.2025"
          tooltipText="Built with React"
          content={
            <p>This project demonstrates my skills in frontend development.</p>
          }
        />
        <ProjectSection
          projectName="Portfolio Website"
          projectDescription="A React-based personal portfolio showcasing my work."
          date="26.07.2025"
          tooltipText="Built with React"
          content={
            <p>This project demonstrates my skills in frontend development.</p>
          }
        />

      </div>
      <Footer />
    </>
  );
}
