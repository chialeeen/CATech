import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <h2>About CATech</h2>
            <div className="about-content-section">
                <h3>Our Mission</h3>
                <p>To empower every Malaysian home with affordable, intelligent IoT solutions that simplify daily life.</p>
            </div>
            <div className="about-content-section">
                <h3>Our Vision</h3>
                <p>To be the leading innovator in smart home technology within Southeast Asia by 2030.</p>
            </div>
        </div>
    );
}

export default About;