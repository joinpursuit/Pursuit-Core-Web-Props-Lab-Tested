import React from "react";

const DonationForm = () => {
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="John Doe" />
        <label>Caption:</label>
        <input type="text" placeholder="..." />
        <input type="range" id="level" min="5" max="1000" />
        <button>Donate</button>
      </form>
    </div>
  )
};

export default DonationForm;
