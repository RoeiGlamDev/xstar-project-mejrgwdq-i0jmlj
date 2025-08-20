import { useEffect, useState } from 'react';

const useParallax = (scrollSpeed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        const newOffset = window.scrollY * scrollSpeed; // Calculate new offset based on scroll
        setOffset(newOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return offset; // Return the current offset
};

export default useParallax;