import React from 'react';
import './layout.css'; // Import custom styles for layout

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1 className="logo">HouseIL</h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#listings">Listings</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {children} // Render child components here
      </main>
      <footer className="footer">
        <p>&copy; 2023 HouseIL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;