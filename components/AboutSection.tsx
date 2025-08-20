import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">Welcome to HouseIL</h1>
        <p className="about-description">
          Experience luxury living in our exquisite properties designed for the discerning traveler. 
          At HouseIL, we redefine elegance and comfort.
        </p>
        <p className="about-description">
          Our curated selection of high-end accommodations offers a unique blend of style and sophistication, 
          ensuring an unforgettable stay.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;