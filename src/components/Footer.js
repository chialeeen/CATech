import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#e7ddff',
        padding: '20px 5%', // Reduced padding to save space
        textAlign: 'center',
        width: '100%',
    };

    const contactStyle = {
        marginBottom: '20px',
    };

    return (
        <footer style={footerStyle}>
            <div style={contactStyle}>
                <h3 style={{ color: '#6200ea', fontSize: '1.8rem' }}>CATech</h3>
                <p><i>"Smart Life, Better Home"</i></p>
                <p>Email: enquiry@catech.com.my</p>
                <p>Location: George Town, Penang</p>
            </div>
            <div style={{ borderTop: '1px solid #c2b2f0', paddingTop: '20px', fontSize: '0.8rem' }}>
                <p>&copy; {new Date().getFullYear()} CATech. All Rights Reserved.</p>
                <p>Founded by USM Computer Science Graduates</p>
            </div>
        </footer>
    );
}

export default Footer;