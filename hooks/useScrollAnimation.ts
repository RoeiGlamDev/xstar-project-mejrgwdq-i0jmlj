import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY); // Update scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return scrollY; // Return current scroll position
};

export default useScrollAnimation;