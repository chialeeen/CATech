import React, { useState, useEffect } from 'react'; // Added hooks
import './Products.css';

function Products() {
    // 1. Create a state to hold the data
    const [products, setProducts] = useState([]);

    // 2. Load the data from the public folder when the page opens
    useEffect(() => {
        fetch('/product.json') // Looks directly into the public folder
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load product data');
                }
                return response.json();
            })
            .then((data) => setProducts(data)) // Save the JSON data into our state
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="products-container">
            <h2 className="products-title">Our Product Catalog</h2>
            <p className="products-subtitle">
                Discover our range of IoT solutions designed for the modern Malaysian home.
            </p>

            <div className="products-grid">
                {/* 3. If the data is still loading, show a message */}
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p className="product-desc">{product.description}</p>
                            <p className="product-price">{product.price}</p>
                            <button className="product-button">
                                View Details
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Products;