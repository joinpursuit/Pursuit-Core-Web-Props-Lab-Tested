import React from "react";

const DonationForm = () => {
  return (
    <section>
      <form>
        <label>Name:</label>
        <input type="text"></input>
        <label>Caption:</label>
        <input type="text"></input>
        <label>Amount to donate:</label>
        <input type="range" min="0" max="100" step="5"></input>
        <button>Donate Now!</button>
      </form>
    </section>
  )
};

export default DonationForm;
