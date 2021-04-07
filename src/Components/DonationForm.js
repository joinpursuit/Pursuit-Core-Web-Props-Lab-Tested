import React from "react";

const DonationForm = () => {
  return (
    <div>
      <form>
        <label for="name-label"> Name </label>
        <input id="name-label"></input>
        <label for="caption-label"> Caption</label>
        <input id="caption-label"></input>
        <label for="amount-label">Amount to Donate</label>
        <input type="range" id="amount-label" min="0" max="1000"></input>
        <button>Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
