import React from 'react';
import './FeaturesSection.css'; // Assuming you have a CSS file for styling

const features = [
  {
    title: 'Luxury Accommodations',
    description: 'Experience the finest stays with our handpicked luxury homes.',
    icon: '🏡',
  },
  {
    title: 'Exclusive Locations',
    description: 'Stay in the most sought-after neighborhoods and hidden gems.',
    icon: '🌆',
  },
  {
    title: 'Personalized Services',
    description: 'Enjoy tailored services to enhance your stay with us.',
    icon: '✨',
  },
  {
    title: 'Gourmet Dining',
    description: 'Savor exquisite dining experiences curated by top chefs.',
    icon: '🍽️',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Exclusive Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;