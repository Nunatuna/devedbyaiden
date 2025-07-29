import React from "react";
import "../../src/style.css";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { list } from "postcss";

library.add(fas, far, fab)

const ExperienceCard = () => {
  return (
    <div style={styles.container}>

        <div style={styles.experienceWrapper}>
            <h2 style={{marginBottom: "1rem", marginTop: "1rem", textAlign: "center"}}><FontAwesomeIcon style={{color: "var(--accent-text)"}} icon="fa-solid fa-briefcase" /> Experience</h2>
            <div style={styles.divider}></div>
            <div>
                <h3 style={{marginBottom: "0.5rem"}}>UX-designer Internship | NOCA</h3>
                <p style={{marginBottom: "0.5rem", fontSize: "0.8rem"}}>2025 - 2025 (3 months)</p>
                <p style={{marginBottom: "0.5rem"}}>UX-designer internship at NOCA</p>
            </div>
            <div style={styles.divider}></div>
            <div>
                <h3 style={{marginBottom: "0.5rem"}}>Student Assistant, IT | Ambu</h3>
                <p style={{marginBottom: "0.5rem", fontSize: "0.8rem"}}>2019 - 2023</p>
                <p style={{marginBottom: "0.5rem"}}>Main responsibilities:</p>
                <ul style={styles.list}>
                    <li>IT help desk</li>
                    <li>IT knowledgebase management</li>
                    <li>PC/Hardware deployment</li>
                </ul>
            </div>
        </div>

        <div style={styles.educationWrapper}>
            <h2 style={{marginBottom: "1rem", marginTop: "1rem", textAlign: "center"}}><FontAwesomeIcon style={{color: "var(--accent-text)"}} icon="fa-solid fa-graduation-cap" /> Education</h2>
            <div style={styles.divider}></div>
            <div>
                <h3 style={{marginBottom: "0.5rem"}}>Web development | EK</h3>
                <p style={{marginBottom: "0.5rem", fontSize: "0.8rem"}}>Current</p>
                <p style={{marginBottom: "0.5rem"}}>Front-end development</p>
            </div>
            <div style={styles.divider}></div>
            <div>
                <h3 style={{marginBottom: "0.5rem"}}>Multimedia design | Cphbusiness</h3>
                <p style={{marginBottom: "0.5rem", fontSize: "0.8rem"}}>2023 - 2025</p>
                <p style={{marginBottom: "0.5rem"}}>Front-end + App development</p>
            </div>
            <div style={styles.divider}></div>
            <div>
                <h3 style={{marginBottom: "0.5rem"}}>TEC - Technical Education Copenhagen</h3>
                <p style={{marginBottom: "0.5rem", fontSize: "0.8rem"}}>2015 - 2018</p>
                <p style={{marginBottom: "0.5rem"}}>IT & Mathematics</p>
            </div>
            <div style={styles.divider}></div>
        </div>

    </div>
  );
};

const styles = {
    container: {
        display: "grid",
        flex: "1",
        gridTemplateColumns: "1fr 1fr",
        flexDirection: "row",
        backgroundColor: "var(--card-bg)",
        borderRadius: "0.8rem",
        overflow: "hidden",
    },
    divider: {
        width: "100%",
        height: "1px",
        backgroundColor: "var(--bg)",
        margin: "2rem 0",
    },
    list: {
        listStyleType: "disc",
        listStylePosition: "inside",
        color: "var(--text)",
        fontFamily: "IBM Plex Sans, sans-serif",
    },
    experienceWrapper: {
        borderRight: "4px dotted var(--bg)",
        padding: "1rem",
    },
    educationWrapper: {
        padding: "1rem",
    }
}

export default ExperienceCard;
