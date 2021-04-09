import React from "react";
import "./DonationForm.css";

const DonationForm = () => {
  return (
    <section>
      <form>
        <label>Name</label>
        <input type="text" placeholder="John Doe" />
        <label>Caption</label>
        <input type="text" placeholder="..." />
        <label>Amount to Donate</label>
        <input type="range" min="5" max="1000" />
        <div>
          <h2>$ 5</h2>
          <button type="button">Donate</button>
        </div>
      </form>
    </section>
  );
};

export default DonationForm;
