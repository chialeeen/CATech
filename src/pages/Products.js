import React, { useState, useEffect } from 'react'; // Added hooks
import './Products.css';

function Products() {
    // 1. Create a state to hold the data
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const smartShuffle = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // 2. Load the data from the public folder when the page opens
    useEffect(() => {
        fetch('/product.json') // Looks directly into the public folder
            .then((response) => response.json())
            .then((data) =>
                {
                    const shuffledData = smartShuffle(data);
                    setProducts(shuffledData);
                })// Save the JSON data into our state
            .catch((error) => console.error('Error:', error));
    }, []);

    //function to get image from public folder
    const getImagePath = (imagePath) => {
        if (!imagePath) return '/image/placeholder.png';

        // If path already starts with /image/, use as is
        if (imagePath.startsWith('/image/')) {
            return imagePath;
        }
        // Otherwise, add /image/ prefix
        return `/image/${imagePath}`;
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