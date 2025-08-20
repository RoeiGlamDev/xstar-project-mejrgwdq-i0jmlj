'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  transition: opacity 0.5s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: pink;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index} active={index === currentIndex}>
          <SlideImage src={image} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}
      <NavigationButtons>
        <Button onClick={prevSlide}>&lt;</Button>
        <Button onClick={nextSlide}>&gt;</Button>
      </NavigationButtons>
    </SliderContainer>
  );
};

export default Slider;