import React from "react";
import "../../src/style.css";

import Aiden from "../img/pfp.jpg"

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const ProfileCard = () => {
  return (
    <div style={styles.container}>
        <div style={styles.imageWrapper}>
            <img style={styles.pfp} src={Aiden} alt="" />
        </div>
        <div style={styles.info}>
            <h2 style={styles.name}>Aiden Terp Schnegelsberg <span style={styles.pronoun}>They/Them</span></h2>
            <p style={styles.title}>Multimedia Designer</p>
            <p style={styles.work}>I focus on front-end development and love create user-friendly interfaces with simplistic styles.</p>
            <div style={styles.contactContainer}>
                <a className="contact" href="https://www.linkedin.com/in/aidenschnegelsberg/" target="_blank"><FontAwesomeIcon icon="fa-solid fa-envelope" /> Get in touch</a>
            </div>
        </div>
    </div>
  );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--card-bg)",
        borderRadius: "0.8rem",
        // maxWidth: "450px",
        // maxHeight: "700px",
        overflow: "hidden",
    },
    imageWrapper: {
        width: "100%",
        height: "350px",   // define how much of the image you want to show
        overflow: "hidden",
        borderTopLeftRadius: "0.8rem",
        borderTopRightRadius: "0.8rem",
    },
    pfp: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "50% 10%", // adjust crop focus
    },
    info: {
        padding: "1rem",
    },
    name: {
        color: "var(--text)",
        fontWeight: "700",
        marginBottom: "1rem",
    },
    pronoun: {
        fontWeight: "400",
        color: "var(--accent-text)",
    },
    title: {
        textAlign: "center",
        marginBottom: "3rem",
    },
    work: {
        marginBottom: "3rem",
    },
    contactContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        marginTop: "auto",
    },
    contact: {
        flex: 1,
        backgroundColor: "var(--accent)",
        color: "var(--heading)",
        fontWeight: "700",
        padding: "1rem 2rem",
        textAlign: "center",
        borderRadius: "0.4rem",
        textDecoration: "none",
        fontFamily: "Doto",
    }
}

export default ProfileCard;
