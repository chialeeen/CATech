import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import TeamPage from './pages/TeamPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Header /> {/* Header stays on every page */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<TeamPage />} />
                </Routes>
                <Footer /> {/* Footer stays on every page */}
            </div>
        </Router>
    );
}

export default App;