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
        <div className="project-body">
            <div className="project-title-container">
                <div className="project-title-wrapper">
                <h2 style={styles.title}>{projectName}</h2>
                </div>
                <p className="project-description">{projectDescription}</p>

                <div className="project-date-info">
                <p className="project-date">
                    <FontAwesomeIcon icon="fa-solid fa-calendar-days" style={{ marginRight: "6px" }} />
                    {date}
                </p>

                <div
                    className="project-icon"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
                    {showTooltip && (
                    <div className="project-tooltip">
                        <p>{tooltipText}</p>
                    </div>
                    )}
                </div>
                </div>
            </div>

            <div className="project-content-container">
                <div className="project-content">{content}</div>
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
        borderRadius: "0.8rem 0 0 0.8rem",
        borderRight: "4px dotted var(--bg)",
        paddingBottom: "1rem",
    },
    title: {
        color: "var(--heading)",
        fontSize: "1.5rem",
        fontWeight: "700",
    },
    titleWrapper: {
        display: "flex",
        backgroundColor: "#1B2A33",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "0.8rem 0 0 0",
    },
    description: {
        color: "var(--text)",
        fontSize: "1rem",
        marginBottom: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
    },
    date: {
        fontFamily: "Doto",
        color: "var(--accent-text)",
        fontSize: "1rem",
        marginTop: "auto",
        marginLeft: "1rem",
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
        position: "relative", 
        marginLeft: "auto",
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
        paddingRight: "1rem",
        color: "var(--text)",
        fontSize: "1rem",
    },
    dateInfoContainer: {
        display: "flex",
        marginRight: "1rem",
    },
};

export default ProjectSection;
