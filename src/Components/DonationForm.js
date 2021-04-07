import React from "react";

const DonationForm = () => {

  return (<form>
    <div><label>Name</label><input placeholder="John Doe"></input></div>
    <div><label>Caption</label><input placeholder="..."></input></div>
    <div><label>Amount to Donate</label><input type="range" id="donation"  min="5" max="1000"></input></div>
  </form>
  );
};

export default DonationForm;
