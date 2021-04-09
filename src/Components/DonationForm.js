import React from "react";

const DonationForm = () => {
  return (
    <div>
      <label>Name</label>
      <input type = "text" placeholder="John Doe"></input>
      <label>Caption</label>
      <input type = "text" placeholder="..."></input>
      <label>Amount to Donate</label>
      <input type="range" id="points" name="points" min="5" max="1000"></input>
      <button type="submit">Donate</button>
    </div>
  );
};

export default DonationForm;
