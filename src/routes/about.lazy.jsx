import React from "react";
import "../../src/style.css";
import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import Footer from "../components/footer";
import ProfileCard from "../components/profileCard";
import ExperienceCard from "../components/experienceCard";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const context = useRouteContext({ from: "/about" });
  console.log(context);

 return (
    <>
      <div style={styles.container}>
        <ProfileCard />
        <ExperienceCard />
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "35% 65%",
    gap: "1rem",
    margin: "4rem 10% 4rem 9%",
    marginBottom: "4rem",
  }
};