'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import './ParallaxSection.css'; // Assuming you have a CSS file for styling

const ParallaxSection: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.5}px)`, // Adjust parallax effect
    };

    return (
        <section className="parallax-section">
            <div className="parallax-bg" style={parallaxStyle} />
            <div className="content">
                <h1 className="title">Welcome to HouseIL</h1>
                <p className="description">Experience luxury living in style.</p>
            </div>
        </section>
    );
};

export default ParallaxSection;