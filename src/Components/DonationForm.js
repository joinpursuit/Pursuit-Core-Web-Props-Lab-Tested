import React from "react";

const DonationForm = () => {
  return (
    <div>
      <form>
        <label > Name </label>
        <input type="text" placeholder="John Doe" id="name-label"/>
        <label> Caption</label>
        <input type="text" placeholder="..." id="caption-label"/>
        <label>Amount to Donate</label>
        <input type="range" id="amount-label" min="5" max="1000"/>
        <button>Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
