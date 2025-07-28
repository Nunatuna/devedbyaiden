import React, { useState } from "react";
import "../../src/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);

const ProjectSection = ({ projectName, projectDescription, date, content, tooltipText }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div style={styles.bodyContainer}>
            {/* Left Column - Title & Description */}
            <div style={styles.titleContainer}>
                <h2 style={styles.title}>{projectName}</h2>
                <p style={styles.description}>{projectDescription}</p>
                <p style={styles.date}>
                    <FontAwesomeIcon icon="fa-solid fa-calendar-days" style={{ marginRight: "6px" }} />
                    {date}
                </p>
            </div>

            {/* Right Column - Content */}
            <div style={styles.contentContainer}>
                {/* Hoverable Icon with Tooltip */}
                <div
                    style={styles.iconWrapper}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <FontAwesomeIcon style={styles.extraInfo} icon="fa-solid fa-circle-nodes" />
                    {showTooltip && (
                        <div style={styles.tooltip}>
                            <p>{tooltipText}</p>
                        </div>
                    )}
                </div>

                {/* Dynamic Project Content */}
                <div style={styles.projectContent}>{content}</div>
            </div>
        </div>
    );
};

const styles = {
    bodyContainer: {
        display: "grid",
        gridTemplateColumns: "30% 70%",
        margin: "9rem 0",
    },
    titleContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#0D1E26",
        padding: "1rem",
        borderRadius: "0.8rem 0 0 0.8rem",
        borderRight: "4px dotted var(--bg)",
    },
    title: {
        color: "var(--heading)",
        fontSize: "1.5rem",
        fontWeight: "700",
        marginBottom: "1rem",
    },
    description: {
        color: "var(--text)",
        fontSize: "1rem",
        marginBottom: "1rem",
    },
    date: {
        fontFamily: "Doto",
        color: "var(--accent-text)",
        fontSize: "1rem",
        marginTop: "auto",
    },
    contentContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0D1E26",
        padding: "1rem",
        borderRadius: "0 0.8rem 0.8rem 0",
    },
    iconWrapper: {
        position: "absolute",
        top: "1rem",
        right: "1rem",
    },
    extraInfo: {
        color: "var(--accent-text)",
        fontSize: "1.5rem",
        cursor: "pointer",
    },
    tooltip: {
        position: "absolute",
        top: "2rem",
        right: 0,
        backgroundColor: "#1B2A33",
        color: "var(--text)",
        padding: "0.5rem 0.7rem",
        borderRadius: "0.4rem",
        fontSize: "0.85rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        whiteSpace: "nowrap",
        zIndex: 20,
    },
    projectContent: {
        display: "grid",
        gridTemplateColumns: "40% 60%",
        gap: "1rem",
        padding: "2.5rem 1rem 0rem 0rem",
        color: "var(--text)",
        fontSize: "1rem",
    }
};

export default ProjectSection;
