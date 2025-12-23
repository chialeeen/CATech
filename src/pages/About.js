import React, { useState } from 'react';
import './About.css';

function About() {
    const [activeSection, setActiveSection] = useState('mission');

    const sections = {
        mission: {
            title: "Our Mission",
            content: `At CATech, our mission is to transform the way people live through intelligent technology. We are committed to designing and manufacturing smart home devices that simplify daily routines, enhance security, and improve energy efficiency, making everyday life easier.

            We believe that technology should work for you, not the other way around. That's why we focus on creating intuitive, user-friendly devices that integrate seamlessly into everyday life, delivering practical solutions to real-world challenges.`
        },
        vision: {
            title: "Our Vision",
            content: `We envision a future where every home is a smart home, where technology serves as an invisible but indispensable assistant in daily life. By 2030, CATech aims to be a worldwide leading innovator in smart home technology, setting the standard for quality, reliability, and affordability in the IoT industry.

            Our goal is to create ecosystems where all home devices communicate intelligently, learning from user habits to automatically optimize comfort, security, and energy usage. We are building a world where smart living is the norm, not the exception.`
        },
        story: {
            title: "Our Story",
            content: `CATech was founded in 2023 by four USM Computer Science graduates with a vision to make smart home technology accessible, practical, and seamlessly integrated into daily life. It began with a simple smart plug prototype in their university lab, and months of testing confirmed that people wanted smart home solutions designed for real-life needs.

            Today, CATech designs, manufactures, and distributes a growing range of IoT devices from smart plugs and lighting systems to security cameras and energy monitors, making homes smarter, safer, and more efficient.`
        },
        values: {
            title: "Our Values",
            content: ""
        }
    };

    const valuesList = [
        {
            title: "Affordable Innovation",
            description: "We offer products at 20% lower prices without compromising on quality."
        },
        {
            title: "User Simplicity",
            description: "Our devices are intuitive, easy to install, and seamlessly integrate into daily life."
        },
        {
            title: "Quality Assurance",
            description: "Our devices undergo extensive testing before sale. We provide a 3-year warranty and lifetime technical support."
        },
        {
            title: "Sustainable Innovation",
            description: "Our devices reduce electricity consumption by 20-35%, and eco-friendly manufacturing and packaging contribute to global sustainability goals."
        }
    ];

    return (
        <div className="about-container">
            <div className="about-header">
                <h2>About CATech</h2>
                <p>Manufacturing and selling smart home devices that enhance everyday living through intelligent technology</p>
            </div>

            {/* Photo Section */}
            <div className="about-photo-section">
                <div className="about-photo-frame">
                    <img
                        src='/groupphoto.jpg'
                        alt="CATech Team - USM Graduates"
                        className="about-photo"
                    />
                </div>
                <p className="photo-caption">CATech - SMART LIFE, BETTER HOME</p>
            </div>

            {/* Navigation Buttons */}
            <div className="about-buttons">
                <button
                    className={`about-button ${activeSection === 'mission' ? 'active' : ''}`}
                    onClick={() => setActiveSection('mission')}
                >
                    Our Mission
                </button>
                <button
                    className={`about-button ${activeSection === 'vision' ? 'active' : ''}`}
                    onClick={() => setActiveSection('vision')}
                >
                    Our Vision
                </button>
                <button
                    className={`about-button ${activeSection === 'story' ? 'active' : ''}`}
                    onClick={() => setActiveSection('story')}
                >
                    Our Story
                </button>
                <button
                    className={`about-button ${activeSection === 'values' ? 'active' : ''}`}
                    onClick={() => setActiveSection('values')}
                >
                    Our Values
                </button>
            </div>

            {/* Dynamic Content Section */}
            <div className="about-content-section">
                <h3>{sections[activeSection].title}</h3>

                {activeSection === 'values' ? (
                    <ul className="values-list">
                        {valuesList.map((value, index) => (
                            <li key={index}>
                                <strong>{value.title}:</strong> {value.description}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ whiteSpace: 'pre-line' }}>{sections[activeSection].content}</p>
                )}
            </div>
        </div>
    );
}

export default About;