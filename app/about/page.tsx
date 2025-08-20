import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '50px', textAlign: 'center' }}>
            <h1 style={{ color: '#ff69b4' }}>About HouseIL</h1>
            <p style={{ fontSize: '18px', maxWidth: '600px', margin: 'auto' }}>
                Welcome to HouseIL, your luxurious escape in the world of high-end living. 
                We specialize in providing exquisite accommodations that cater to your every desire.
            </p>
            <h2 style={{ color: '#ff69b4' }}>Our Vision</h2>
            <p style={{ fontSize: '16px', maxWidth: '600px', margin: 'auto' }}>
                At HouseIL, we believe in creating unforgettable experiences through elegant design 
                and personalized service. Our properties are curated to reflect sophistication and comfort.
            </p>
            <h2 style={{ color: '#ff69b4' }}>Join Us</h2>
            <p style={{ fontSize: '16px', maxWidth: '600px', margin: 'auto' }}>
                Explore our luxury listings and discover the perfect getaway that suits your style.
                Experience the ultimate in comfort and elegance with HouseIL.
            </p>
        </div>
    );
};

export default AboutPage;