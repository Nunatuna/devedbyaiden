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
    <div className="profile-card">
        <div className="image-wrapper">
            <img src={Aiden} alt="" />
        </div>
        <div className="info">
            <h2 className="name">Aiden Terp Schnegelsberg <span className="pronoun">They/Them</span></h2>
            <p className="title">Multimedia Designer</p>
            <p className="work">I focus on front-end development and love creating user-friendly
            interfaces with simplistic styles.</p>
            <div className="contact-container">
                <a className="contact" href="https://www.linkedin.com/in/aidenschnegelsberg/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" /> Get in touch
                </a>
            </div>
        </div>
    </div>

  );
};

export default ProfileCard;
