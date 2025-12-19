import React from 'react';
import './Products.css';

function Products() {
    const products = [
        {
            id: 1,
            name: "Sejahtera Smart Hub",
            description: "The brain of your smart home. Connects all devices seamlessly.",
            price: "RM 399",
            image: "https://via.placeholder.com/200"
        },
        {
            id: 2,
            name: "Sains Eco-Sensor",
            description: "Intelligent climate control that saves energy while you sleep.",
            price: "RM 149",
            image: "https://via.placeholder.com/200"
        },
        {
            id: 3,
            name: "Harmony Home Camera",
            description: "AI-powered security that recognizes your family and pets.",
            price: "RM 299",
            image: "https://via.placeholder.com/200"
        }
    ];

    return (
        <div className="products-container">
            <h2 className="products-title">Our Product Catalog</h2>
            <p className="products-subtitle">
                Discover our range of IoT solutions designed for the modern Malaysian home.
            </p>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p className="product-desc">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <button className="product-button">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;