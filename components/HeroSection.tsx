import React from 'react';
import './HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section" style={{ backgroundColor: '#000', color: '#FFC0CB' }}>
            <div className="hero-content">
                <h1>Welcome to HouseIL</h1>
                <p>Your luxurious escape awaits</p>
                <button className="btn-book-now">Book Now</button>
            </div>
        </div>
    );
};

export default HeroSection;