import React from 'react';
import logo from '../assets/waterwise-logo.png'; // Your exported logo: map pin + WATERWISE text
import backgroundShape from '../assets/background-shape.png'; // Background shapes from Figma

const SplashScreen = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${backgroundShape})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img
      src={logo}
      alt="WaterWise Logo"
      style={{
        width: 220, // Adjust as needed for Figma-like size
        maxWidth: '80vw',
        margin: 0,
        boxShadow: 'none',
        background: 'transparent'
      }}
    />
    {/* Do NOT add any separate large WATERWISE text here */}
  </div>
);

export default SplashScreen;
