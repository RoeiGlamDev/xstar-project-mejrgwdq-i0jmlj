import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ background: 'black' }}> {/* Set background color to black */}
      <ambientLight intensity={0.5} color="pink" /> {/* Ambient light in pink */}
      <pointLight position={[10, 10, 10]} intensity={1} color="pink" /> {/* Point light */}
      <OrbitControls /> {/* Allow user to control the camera */}
      {/* Add 3D objects here */}
    </Canvas>
  );
};

export default Scene3D;