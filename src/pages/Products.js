import React, { useState, useEffect } from 'react'; // Added hooks
import './Products.css';

function Products() {
    // 1. Create a state to hold the data
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Smart shuffle function - distributes categories evenly to avoid same categories side by side
    const smartShuffle = (array) => {
        // Group products by category
        const byCategory = {};
        array.forEach(item => {
            if (!byCategory[item.category]) {
                byCategory[item.category] = [];
            }
            byCategory[item.category].push(item);
        });

        // Shuffle each category's products
        Object.keys(byCategory).forEach(category => {
            const arr = byCategory[category];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        });

        // Interleave products from different categories
        const result = [];
        const categories = Object.keys(byCategory);
        let maxLength = Math.max(...categories.map(cat => byCategory[cat].length));

        for (let i = 0; i < maxLength; i++) {
            categories.forEach(category => {
                if (byCategory[category][i]) {
                    result.push(byCategory[category][i]);
                }
            });
        }

        return result;
    };

    // 2. Load the data from the public folder when the page opens
    useEffect(() => {
        fetch('/product.json') // Looks directly into the public folder
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load product data');
                }
                return response.json();
            })
            .then((data) =>
                {
                    const shuffledData = smartShuffle(data);
                    setProducts(shuffledData);
                })// Save the JSON data into our state
            .catch((error) => console.error('Error:', error));
    }, []);
    // Helper function to get the correct image path
    const getImagePath = (imagePath) => {
        if (!imagePath) {
            return null; // Return null if no image path provided
        }

        // Remove leading slash and "image/" if present
        const cleanPath = imagePath.replace(/^\/?(image\/)?/, '');

        try {
            return require(`../image/${cleanPath}`);
        } catch (error) {
            console.error(`Image not found: ${cleanPath}`);
            return null;
        }
    };
    // Get unique categories from products
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Filter products based on search and category
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
                Discover our range of IoT solutions designed for the modern Malaysian home.
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
                {/* 3. If the data is still loading, show a message */}
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
                                {getImagePath(product.image) ? (
                                    <img
                                        src={getImagePath(product.image)}
                                        alt={product.product_name}
                                        className="product-image"
                                    />
                                ) : (
                                    <div className="product-image-placeholder">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <div className="product-info">
                                <h3>{product.product_name}</h3>
                                <p className="product-category">{product.category}</p>
                                <p className="product-desc">{product.description}</p>
                                <p className="product-price">{product.price_rm}</p>
                                <button className="product-button">
                                    View Details
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