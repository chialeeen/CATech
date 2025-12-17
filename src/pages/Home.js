import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // Used to redirect to products

    return (
        <div style={{
            backgroundImage: 'url("/smart-home-bg.jpg")', // Put your image in the public folder
            backgroundSize: 'cover',
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        }}>
            <h1 style={{ fontSize: '3rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>CATech</h1>
            <p style={{ fontSize: '1.5rem' }}>Smart Life, Better Home</p>
            <button
                onClick={() => navigate('/products')}
                style={{ padding: '15px 30px', fontSize: '1.2rem', cursor: 'pointer', backgroundColor: '#6200ea', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Explore Our Products
            </button>
        </div>
    );
}

export default Home;