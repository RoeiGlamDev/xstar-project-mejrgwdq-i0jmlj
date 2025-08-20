'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation starts from the bottom
      distance: '50px', // Distance of the reveal
      duration: 1000, // Duration of the animation
      delay: 200, // Delay before the animation starts
      easing: 'ease-in-out', // Easing function for the animation
      reset: true, // Reset animation on scroll
    });

    sr.reveal('.reveal', {}); // Apply reveal to elements with class 'reveal'
  }, []);

  return <div>{children}</div>; // Render children
};

export default ScrollRevealComponent;