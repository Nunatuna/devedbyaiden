import { Link } from '@tanstack/react-router';
import React from 'react';
import '../css/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, imageSrc, projectLink }) => {
  return (
    <div style={projectCard}>
        <div>
            <img src={imageSrc} alt={title} style={projectImage} />
            <div>
                <h3 style={projectCardTitle}>{title}</h3>
                <p style={projectCardDescription}>{description}</p>
            </div>
        </div>
        <Link to={projectLink} className='project-card-link-hover'>View Project <FontAwesomeIcon style={{ marginLeft: '0.2rem' }} icon={faEye} /></Link>
    </div>
  );
};

const projectCard = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'var(--heading)',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    color: 'var(--bg)',
    boxShadow: 'var(--shadow)',
    border: '2px solid var(--hover)',
    padding: '1rem',
}

const projectImage = {
    width: '100%',
}

const projectCardTitle = {
    fontSize: '1.5rem',
    marginBottom: '0',
}

const projectCardDescription = {
    fontWeight: '400',
}

export default ProjectCard;
