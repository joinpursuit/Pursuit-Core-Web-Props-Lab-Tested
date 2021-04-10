import React from "react";
import "./styles/DonationForm.css";

const DonationForm = () => {
  return (
    <form className="form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="John Doe"></input>
      <label htmlFor="caption">Caption</label>
      <input type="text" id="caption" placeholder="..."></input>
      <label htmlFor="amount">Amount to Donate</label>
      <input type="range" id="amount" min="5" max="1000" />
      {/* //  oninput="output.value=amount.value"                                                      */}

      <output id="output" htmlFor="amount">
        $5
      </output>

      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
