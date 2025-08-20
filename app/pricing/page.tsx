import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1>Luxury Stays at HouseIL</h1>
                <p>Experience elegance and comfort in every stay.</p>
            </header>
            <section className="pricing-options">
                <div className="pricing-card">
                    <h2>Standard Suite</h2>
                    <p>$200/night</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Complimentary Breakfast</li>
                        <li>Free Wi-Fi</li>
                    </ul>
                    <button>Book Now</button>
                </div>
                <div className="pricing-card">
                    <h2>Deluxe Suite</h2>
                    <p>$350/night</p>
                    <ul>
                        <li>1 King Bed</li>
                        <li>Ocean View</li>
                        <li>Private Balcony</li>
                    </ul>
                    <button>Book Now</button>
                </div>
                <div className="pricing-card">
                    <h2>Presidential Suite</h2>
                    <p>$600/night</p>
                    <ul>
                        <li>2 King Beds</li>
                        <li>Personal Concierge</li>
                        <li>Luxury Spa Access</li>
                    </ul>
                    <button>Book Now</button>
                </div>
            </section>
            <footer className="pricing-footer">
                <p>© 2023 HouseIL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;