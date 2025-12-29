import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const backgroundLayer = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundImage: 'linear-gradient(rgba(45, 13, 82, 0.6), rgba(20, 5, 40, 0.8)), url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const contentLayer = {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
    };

    return (
        <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
            {/* 1. The Background */}
            <div style={backgroundLayer} />

            {/* 2. Content */}
            <div style={contentLayer}>
                <h1 className="home-title fade-in-title">CATech</h1>
                <p className="home-tagline fade-in-tagline">Smart Life, Better Home</p>

                {/* Video Placeholder */}
                <div className="fade-in-button" style={{ margin: '20px 0' }}>
                    <iframe
                        width="350"
                        height="200"
                        src="https://www.youtube.com/embed/QUDYbuuHv2w?si=SEItwPVVw0GgFoka"
                        title="CATech Company Introduction"
                        style={{ borderRadius: '12px', border: '2px solid #9d72ff' }}
                    />
                </div>
                <button
                    className="home-button fade-in-button"
                    onClick={() => navigate('/products')}
                >
                    Explore Our Products
                </button>
            </div>
        </div>
    );
}

export default Home;