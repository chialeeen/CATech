import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    //define specific style objects
    const headerContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 5%',
        background: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        background: 'linear-gradient(to right, #8227ff, #6200ea, #4500ab)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: '#6200ea',
        display: 'inline-block',
    };

    /*
    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#6200ea', // USM Purple
        textDecoration: 'none',
    }; */

    const navLinksStyle = {
        display: 'flex',
        gap: '20px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500',
        fontSize: '1rem',
    };

    const cartTextStyle = {
        position: 'relative',
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500',
        fontSize: '1rem',
    };

    //apply the specific variables to the elements below
    return (
        <nav style={headerContainerStyle}>
            <Link to="/" style={logoStyle}>
                CATech
            </Link>

            <div className="nav-links-container" style={navLinksStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/products" style={linkStyle}>Products</Link>
                <div style={cartTextStyle}>
                    View Cart
                </div>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/team" style={linkStyle}>Team</Link>
            </div>
        </nav>
    );
}

export default Header;