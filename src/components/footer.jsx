import React from "react";
import "../../src/style.css";

const Footer = () => {
    return (
        <div style={styles.container}>
            <p style={styles.text}>Deved By Aiden &copy; Aiden Schnegelsberg 2025</p>
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
        marginBottom: -16,
    },
    text: {
        color: "#94A3B8",
        margin: 0,
        padding: 0,
    },
};

export default Footer;