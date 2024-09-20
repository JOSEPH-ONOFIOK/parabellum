import React from 'react';
import './HomePage.css';
import logo from '../assests/icons/QM.png';
import centerImage from '../assests/images/question-mark.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="heading-container">
        <h1 className="heading-text">PARABELLUM</h1>
        <img src={logo} alt="Logo" className="heading-logo" />
      </div>

      {/* Logos in the 4 corners */}
      <img src={logo} alt="Top Left Logo" className="corner-logo top-left" />
      <img src={logo} alt="Top Right Logo" className="corner-logo top-right" />
      <img src={logo} alt="Bottom Left Logo" className="corner-logo bottom-left" />
      <img src={logo} alt="Bottom Right Logo" className="corner-logo bottom-right" />

      {/* Centered image with text underneath */}
      <div className="center-content">
        <img src={centerImage} alt="Center Image" className="center-image" />
        <p className="center-text">Click the question mark to discover the mystery</p>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <form className="mystery-form">
          <label htmlFor="email" className="form-label">Enter your email to unlock the mystery:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="form-input"
            required
          />
          <button type="submit" className="form-button">Unlock</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
