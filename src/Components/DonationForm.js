import React from "react";

const DonationForm = () => {
  return(
    <form>
      <label>Name</label>
      <input type='text' placeholder="John Doe"></input>
      <label>Caption</label>
      <input type='text' placeholder='...'></input>
      <label>Amount to Donate</label>
      <input type="range" id="amount" name="amount" min="5" max="1000"></input>
      <h3>$5</h3>
      <button type='submit'>Donate</button>
    </form>

  );
};

export default DonationForm;