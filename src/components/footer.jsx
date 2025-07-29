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

const Footer = () => {
    return (
        <div style={styles.container}>
            <p style={styles.text}>Deved By Aiden &copy; Aiden Schnegelsberg 2025</p>
            <a href="https://www.linkedin.com/in/aidenschnegelsberg/" target="_blank"><FontAwesomeIcon style={styles.social} icon="fa-brands fa-linkedin" /></a>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "var(--card-bg)",
        padding: "2rem 1.5rem",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -20,
    },
    text: {
        color: "#94A3B8",
        margin: 0,
        padding: 0,
    },
    divider: {
        height: "100%",
        width: "1px",
        padding: "1px",
        backgroundColor: "var(--bg)",
    },
    social: {
        color: "#94A3B8",
        fontSize: "1.5rem",
        margin: "0 0.5rem",
    },
};

export default Footer;