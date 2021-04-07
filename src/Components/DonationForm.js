import React from "react";

const DonationForm = () => {
  return (
    <div>
    <form>
      <input id="NameInput" placeholder="John Doe" type="text"/>
      <input id="captionInput" placeholder="..." type="text"/>
      <label for="donationBar">Amount</label>
      <input type="range" id="donationBar" name="Amount" min="0" max="1000" value="5" step="10" />
      <button type="button">Donate</button>

    </form>
    </div>
  )
};

export default DonationForm;
