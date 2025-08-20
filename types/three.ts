import React from 'react';

interface ThreeTypesProps {
  title: string;
  description: string;
}

const ThreeTypes: React.FC<ThreeTypesProps> = ({ title, description }) => {
  return (
    <div className="three-types-container" style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}>
      <h2 style={{ color: '#ff69b4' }}>{title}</h2> {/* Pink color for title */}
      <p>{description}</p>
      <div className="types-grid" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="type-item" style={{ flex: 1, margin: '10px', backgroundColor: '#222', padding: '15px' }}>
          <h3 style={{ color: '#ff69b4' }}>Type 1</h3>
          <p>Luxury accommodation with all amenities.</p>
        </div>
        <div className="type-item" style={{ flex: 1, margin: '10px', backgroundColor: '#222', padding: '15px' }}>
          <h3 style={{ color: '#ff69b4' }}>Type 2</h3>
          <p>Elegant spaces designed for comfort.</p>
        </div>
        <div className="type-item" style={{ flex: 1, margin: '10px', backgroundColor: '#222', padding: '15px' }}>
          <h3 style={{ color: '#ff69b4' }}>Type 3</h3>
          <p>Exclusive locations with breathtaking views.</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeTypes;