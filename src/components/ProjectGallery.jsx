import React from "react";

const ProjectGallery = ({ children }) => {
    return (
        <div style={containerStyle}>
            {children}
        </div>
    )
}

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
}

export default ProjectGallery;