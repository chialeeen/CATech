import React from 'react';

function Products() {
    const products = [
        {
            id: 1,
            name: "Sejahtera Smart Hub",
            description: "The brain of your smart home. Connects all devices seamlessly.",
            price: "RM 399",
            image: "https://via.placeholder.com/200" // Replace with your edited graphic
        },
        {
            id: 2,
            name: "Sains Eco-Sensor",
            description: "Intelligent climate control that saves energy while you sleep.",
            price: "RM 149",
            image: "https://via.placeholder.com/200" // Replace with your edited graphic
        },
        {
            id: 3,
            name: "Harmony Home Camera",
            description: "AI-powered security that recognizes your family and pets.",
            price: "RM 299",
            image: "https://via.placeholder.com/200" // Replace with your edited graphic
        }
    ];

    return (
        <div style={{ padding: '40px 5%' }}>
            <h2 style={{ textAlign: 'center', color: '#6200ea' }}>Our Product Catalog</h2>
            <p style={{ textAlign: 'center', marginBottom: '40px' }}>
                Discover our range of IoT solutions designed for the modern Malaysian home.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px'
            }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '20px',
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                    }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '5px' }} />
                        <h3 style={{ marginTop: '15px' }}>{product.name}</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{product.description}</p>
                        <p style={{ fontWeight: 'bold', color: '#6200ea', fontSize: '1.2rem' }}>{product.price}</p>
                        <button style={{
                            backgroundColor: '#6200ea',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;