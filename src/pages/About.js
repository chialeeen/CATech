import React, { useState } from 'react';
import './About.css';

function About() {
    const [activeSection, setActiveSection] = useState('mission');

    const sections = {
        mission: {
            title: "Our Mission",
            content: `At CATech, our mission is to revolutionize Malaysian homes through accessible, intelligent technology. We're committed to designing and manufacturing smart home devices that simplify daily routines, enhance security, and improve energy efficiency—all at prices that make advanced home automation attainable for every Malaysian family.

            We believe that technology should work for you, not the other way around. That's why we focus on creating intuitive, user-friendly devices that integrate seamlessly into your lifestyle, providing practical solutions to real-world challenges faced in Malaysian households.`
        },
        vision: {
            title: "Our Vision",
            content: `We envision a future where every home in Malaysia is a smart home—where technology serves as an invisible but indispensable assistant in daily life. By 2030, CATech aims to be Southeast Asia's leading innovator in smart home technology, setting the standard for quality, reliability, and affordability in the IoT industry.

            Our goal is to create ecosystems where all home devices communicate intelligently, learning from user habits to optimize comfort, security, and energy usage automatically. We're building toward a Malaysia where smart living is the norm, not the exception.`
        },
        story: {
            title: "Our Story",
            content: `CATech was founded in 2023 by four USM Computer Science graduates who shared a common frustration: smart home technology was either prohibitively expensive or disappointingly limited for Malaysian consumers. While working on their final-year project, they discovered that existing solutions failed to address Malaysia's unique climate, housing layouts, and lifestyle needs.

            Starting with a simple smart plug prototype built in their university lab in George Town, Penang, the team spent months testing and refining their designs with local families. The overwhelming positive response confirmed their hypothesis: Malaysians wanted smart home technology, but needed solutions designed specifically for them.

            Today, CATech operates from our Penang headquarters, where we design, manufacture, and distribute a growing range of IoT devices. From our initial smart plugs and lighting systems, we've expanded to include security cameras, climate controllers, and energy monitors—all engineered for Malaysian conditions and budgets.`
        },
        values: {
            title: "Our Values",
            content: ""
        }
    };

    const valuesList = [
        {
            title: "Malaysian-First Design",
            description: "Every CATech product is engineered specifically for Malaysia's climate, housing architecture, and lifestyle. We test extensively in local conditions to ensure reliability during power fluctuations, high humidity, and tropical weather."
        },
        {
            title: "Affordable Innovation",
            description: "We believe advanced technology should be accessible. By manufacturing locally and optimizing our supply chain, we offer products at 40-60% lower prices than imported alternatives without compromising on core features or quality."
        },
        {
            title: "User-Centric Simplicity",
            description: "Technology should simplify life, not complicate it. Our devices feature intuitive interfaces, straightforward installation, and seamless integration—no technical expertise required to transform your home."
        },
        {
            title: "Quality Assurance",
            description: "Every CATech device undergoes 200+ hours of testing in simulated Malaysian conditions. We back our products with a 3-year warranty and provide lifetime technical support through our local customer service team."
        },
        {
            title: "Sustainable Innovation",
            description: "Our smart energy devices help households reduce electricity consumption by 20-35%. We're committed to eco-friendly manufacturing practices and packaging, contributing to Malaysia's sustainability goals."
        },
        {
            title: "Community Partnership",
            description: "We collaborate with Malaysian universities for R&D, source components locally when possible, and hire talent from across the country to build Malaysia's IoT ecosystem from the ground up."
        }
    ];

    return (
        <div className="about-container">
            <div className="about-header">
                <h2>About CATech</h2>
                <p>Manufacturing smart home devices that transform Malaysian living through intelligent technology</p>
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
                <p className="photo-caption">CATech - START LIFE, BETTER HOME</p>
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