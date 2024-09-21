import React, { useState } from 'react';
import './HomePage.css';
import logo from '../assests/icons/QM.png'; // Ensure this path is correct
import centerImage from '../assests/images/question-mark.png'; // Import the image for the center
import plusSign from '../assests/icons/plus-sign.png'; // Plus sign image

const HomePage = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle the form
  const [retweetLink, setRetweetLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleLogoClick = () => {
    setShowForm(true); // Show the form when the logo is clicked
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Retweet Link:", retweetLink);
    console.log("Wallet Address:", walletAddress);
  };

  return (
    <div className="home-container">
      <div className="glitch-lines">
        {/* Add glitch lines for the background effect */}
        <div className="glitch-line"></div>
        <div className="glitch-line"></div>
        <div className="glitch-line"></div>
      </div>

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
        <img
          src={centerImage}
          alt="Center Image"
          className="center-image"
          onClick={handleLogoClick} // Trigger form display
        />
        <p className="center-text">Click the question mark to discover the mystery</p>
      </div>

      {/* Conditionally render the form */}
      {showForm && (
        <div className="form-container glitch-form"> {/* Add glitch form transition */}
          <div className="form-heading">5X Entries to discover the mystery<br/>ending in 23:23:32</div>
          <div className="form-body">
            <div className="form-section">
              <a href="https://x.com/parabellu_m?s=21" target="_blank" rel="noopener noreferrer" className="form-button">FOLLOW</a>
              <div className="checkbox-plus">
                <input type="checkbox" className="checkbox" />
                <img src={plusSign} alt="Plus Sign" className="plus-sign" />
              </div>
              <a href="https://x.com/parabellu_m?s=21" target="_blank" rel="noopener noreferrer" className="form-button">RT</a>
            </div>

            <input
              type="text"
              placeholder="RETWEET LINK"
              value={retweetLink}
              onChange={(e) => setRetweetLink(e.target.value)}
              className="form-input"
            />

            <input
              type="text"
              placeholder="SOLANA WALLET ADDRESS"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="form-input"
            />

            <div className="form-submit" onClick={handleSubmit}>SUBMIT</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
