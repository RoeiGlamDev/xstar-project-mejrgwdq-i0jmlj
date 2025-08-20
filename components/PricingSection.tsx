import React from 'react';
import './PricingSection.css'; // Assuming a CSS file for styles

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Luxurious Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Standard Suite</h3>
                        <p className="card-price">$200/night</p>
                        <ul className="card-features">
                            <li>Elegant furnishings</li>
                            <li>Complimentary breakfast</li>
                            <li>Free Wi-Fi</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe Suite</h3>
                        <p className="card-price">$350/night</p>
                        <ul className="card-features">
                            <li>Luxury amenities</li>
                            <li>Private balcony</li>
                            <li>24/7 room service</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Presidential Suite</h3>
                        <p className="card-price">$600/night</p>
                        <ul className="card-features">
                            <li>Panoramic views</li>
                            <li>Personal concierge</li>
                            <li>Spa access</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;