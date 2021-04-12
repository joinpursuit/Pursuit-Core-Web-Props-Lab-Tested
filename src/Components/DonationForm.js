import React from "react";

const DonationForm = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" placeholder="John Doe"></input>
      </div>
      <div>
        <label>Caption</label>
        <input type="text" placeholder="..."></input>
      </div>
      <div>
        <label>Amount to Donate</label>
        <input type="range" min="5" max="1000"></input>
        <p>$5</p>
        <button type="submit">Donate</button>
      </div>
    </form>

  )
};

export default DonationForm;
