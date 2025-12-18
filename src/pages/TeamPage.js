import React from 'react';
import './TeamPage.css';

const teamMembers = [
    {
        name: "CHIA LEE EN",
        abbreviation: "CEO",
        role: "Vision and Strategy",
        description: "Sets the company's overall direction and defines the mission. Manages external relations.",
        image: "/teampic/CHIA LEE EN.jpg"
    },
    {
        name: "OOI WAN TING",
        abbreviation: "CTO",
        role: "Tech & Development",
        description: "Oversees R&D strategy. Ensures use of appropriate tech like React.js and Node.js.",
        image: "/teampic/OOI WAN TING.jpg"
    },
    {
        name: "LING XIN QI",
        abbreviation: "CMO",
        role: "Customers & Brand",
        description: "Oversees marketing and branding. Responsible for attracting leads and business visibility.",
        image: "/teampic/LING XIN QI.JPG"
    },
    {
        name: "CHENG XIN YI",
        abbreviation: "COO",
        role: "Day-to-Day Operations",
        description: "Manages internal processes. Ensures projects are delivered efficiently and on time.",
        image: "/teampic/CHENG XIN YI.jpg"
    }
];

function TeamPage() {
    return (
        <div className="team-container">
            <header className="team-header">
                <h1 className="gradient-title">Our Founders</h1>
                <p className="team-tagline">Leadership for a Smarter Future</p>
            </header>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="member-image-box">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="member-info-box">
                            <span className="badge">{member.abbreviation}</span>
                            <h2 className="member-name">{member.name}</h2>
                            <h3 className="member-core-role">{member.role}</h3>
                            <p className="member-desc">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamPage;