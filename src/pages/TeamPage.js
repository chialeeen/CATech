import React from 'react';

const teamMembers = [
    { name: 'Member 1', position: 'CEO', description: 'Leads strategy and content.', img: 'https://via.placeholder.com/150' },
    { name: 'Member 2', position: 'CMO', description: 'Responsible for brand and design.', img: 'https://via.placeholder.com/150' },
    { name: 'Member 3', position: 'CTO', description: 'Lead technical developer.', img: 'https://via.placeholder.com/150' },
    { name: 'Member 4', position: 'COO', description: 'Manages operations and deployment.', img: 'https://via.placeholder.com/150' }
];

function Team() {
    return (
        <section id="team" style={{ padding: '2rem' }}>
            <h2 style={{ textAlign: 'center' }}>Our Founders</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={{ textAlign: 'center', margin: '1rem', maxWidth: '200px' }}>
                        <img src={member.img} alt={member.name} style={{ borderRadius: '50%', width: '100px' }} />
                        <h3>{member.name}</h3>
                        <p><strong>{member.position}</strong></p>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;