import React, { useState, useEffect } from 'react';
import './Products.css';

function Products() {
    //create a state to hold data
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    //shuffle products on reload
    const smartShuffle = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    //fetch products from json file
    useEffect(() => {
        fetch('/product.json') //looks directly into the public folder
            .then((response) => response.json())
            .then((data) =>
                {
                    const shuffledData = smartShuffle(data);
                    setProducts(shuffledData);
                })//save JSON data into our state
            .catch((error) => console.error('Error:', error));
    }, []);

    //function to get image from public folder
    const getImagePath = (imagePath) => {
        if (!imagePath) return '/image/placeholder.png';

        //already has right prefix
        if (imagePath.startsWith('/image/')) {
            return imagePath;
        }
        // else add /image/ prefix
        return `/image/${imagePath}`;
    };
    //unique categories from products
    const categories = ['All', ...new Set(products.map(p => p.category))];

    //search based on name and description
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="products-container">
            <h2 className="products-title">Our Product Catalog</h2>
            <p className="products-subtitle">
                Discover our range of IoT solutions designed for the modern homes worldwide.
            </p>
            {/* Search and Filter Section */}
            <div className="filter-section">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <div className="results-info">
                <p>Showing {filteredProducts.length} of {products.length} products</p>
            </div>
            <div className="products-grid">
                {/*if the data is still loading, show a message */}
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : filteredProducts.length === 0 ? (
                    <div className="no-results">
                        <p>No products found matching your search.</p>
                    </div>
                ) : (
                    filteredProducts.map(product => (
                        <div key={product.product_id} className="product-card">
                            <div className="product-image-container">
                                <img
                                    src={getImagePath(product.image)}
                                    alt={product.product_name}
                                        className="product-image"
                                        onError={(e) => {
                                            e.target.src = '/image/placeholder.png';
                                        }}
                                    />
                            </div>
                            <div className="product-info">
                                <h3>{product.product_name}</h3>
                                <p className="product-category">{product.category}</p>
                                <p className="product-desc">{product.description}</p>
                                <p className="product-price">{product.price_rm}</p>
                                <button className="product-button">
                                    View Details
                                </button>
                                <button className="add-to-cart-button">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Products;