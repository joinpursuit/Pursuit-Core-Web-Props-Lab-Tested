import React from "react";

const DonationForm = () => {
  return (
    <div>
      <p>Name</p>
      <input type="text" placeholder="John Doe"></input>
      <p>Caption</p>
      <input type="text" placeholder="..."></input>
      <p>Amount to Donate</p>
      <input type="range" min="5" max="1000"></input>
      <button>Donate</button>
    </div>
  )
};

export default DonationForm;
