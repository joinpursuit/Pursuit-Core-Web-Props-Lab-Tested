import React from "react";
import "./DonationForm.css";
const DonationForm = (props) => {
  return (
    <form>
      <p className="name">Name</p>
      <input placeholder="John Doe"></input>
      <p className="caption">caption</p>
      <input placeholder="..."></input>
      <p className="amount-header">Amount to Donate</p>
      <input type="range" min="5" max="1000"  className="slider"></input>
      <button className="make-donation" type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
