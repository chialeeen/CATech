import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#333',
        color: 'white',
        padding: '40px 5%',
        marginTop: '50px',
        textAlign: 'center',
    };

    const contactStyle = {
        marginBottom: '20px',
    };

    return (
        <footer style={footerStyle}>
            <div style={contactStyle}>
                <h3>CATech</h3>
                <p><i>"Smart Life, Better Home"</i></p>
                <p>Email: enquiry@catech.com.my</p>
                <p>Location: George Town, Penang</p>
            </div>
            <div style={{ borderTop: '1px solid #555', paddingTop: '20px', fontSize: '0.8rem' }}>
                <p>&copy; {new Date().getFullYear()} CATech. All Rights Reserved.</p>
                <p>Founded by USM Computer Science Graduates</p>
            </div>
        </footer>
    );
}

export default Footer;