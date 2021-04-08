import React from "react";

const DonationForm = () => {
  return (
    <div className="donation-form">
      <label>Name:</label>
      <input type="text" className="name" placeholder="John Doe"></input>
      <label>Caption:</label>
      <input type="text" className="caption-name" placeholder="..."></input>
      <label>Amount to Donate:</label>
      <div className="slider-container">
      <input type="range" min="5" max="1000" className="slider"/>
      </div>
      <h2>$5</h2>
      <button className="donate">Donate</button>
    </div>
  )
};

export default DonationForm;
