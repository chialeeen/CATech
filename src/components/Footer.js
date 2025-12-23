import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#110a24',
        color: '#ffffff',
        padding: '60px 5% 40px',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
    };

    const logoTextStyle = {
        fontSize: '2.2rem',
        fontWeight: '800',
        margin: '0 0 10px 0',
        /* The Gradient logic */
        background: 'linear-gradient(to right, #9d72ff, #6200ea, #4500ab)',
        /* These 3 lines below MUST be exactly like this to fix the "block" issue */
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        MozBackgroundClip: 'text',
        MozTextFillColor: 'transparent',
        display: 'inline-block',
        letterSpacing: '-1px'
    };

    return (
        <footer style={footerStyle}>
            <div style={{ marginBottom: '35px' }}>
                {/* Fixed Logo Text */}
                <h3 style={logoTextStyle}>CATech</h3>

                <p style={{
                    color: '#b3a1ff',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    marginBottom: '20px'
                }}>
                    "Smart Life, Better Home"
                </p>

                <div style={{ color: '#cbd5e0', fontSize: '1rem', lineHeight: '1.8' }}>
                    <p style={{ margin: '5px 0' }}>
                        Email: <span style={{ color: '#fff', fontWeight: '500' }}>enquiry@catech.com.my</span>
                    </p>
                    <p style={{ margin: '5px 0' }}>Location: George Town, Penang</p>
                </div>
            </div>

            {/* Bottom Border and Copyright */}
            <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '25px',
                marginTop: '30px'
            }}>
                <p style={{ fontSize: '0.85rem', color: '#718096', margin: '5px 0' }}>
                    &copy; {new Date().getFullYear()} CATech. All Rights Reserved.
                </p>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#9d72ff',
                    fontWeight: '700',
                    marginTop: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Founded by USM Computer Science Students
                </p>
            </div>
        </footer>
    );
}

export default Footer;