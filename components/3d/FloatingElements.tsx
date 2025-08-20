import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background-color: #000; // Black background
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 150px; // Width of the floating element
  height: 150px; // Height of the floating element
  border-radius: 50%; // Circular shape
  background-color: #ff69b4; // Pink color
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); // Elegant shadow
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translateY(0); // Start and end position
    }
    50% {
      transform: translateY(-20px); // Float up
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '10%', top: '20%' }} />
      <FloatingElement style={{ right: '10%', bottom: '30%' }} />
      <FloatingElement style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;