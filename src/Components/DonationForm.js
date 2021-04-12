import React from "react";

const DonationForm = () => {
  return (
    <div>
      <label>Name</label>
      <input type="text" placeholder="John Doe"></input>
      <label>Caption</label>
      <input type="text" placeholder="..."></input>
      <p>Amount to Donate</p>
      <input type="range" min="5" max="1000"></input>
      <h4>$5</h4>
      <button type="submit">Donate</button>
    </div>

  )
};

export default DonationForm;
