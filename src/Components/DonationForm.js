import React from "react";
import "./donationForm.css"


// const donation = {
//   total: 441,
//   goal: 1000
// }
const DonationForm = () => {
  // const {total, goal} = props
  return (
    <form>
      {/* <h2>Rased ${total} of ${goal}</h2>
      <h2>Raised $441 of $1000</h2>
      <label for="goal"></label>
      <progress id="goal" value="441" max="1000">44.10%</progress> */}
      
      <label>Name</label>
      <input type="text" placeholder="John Doe" />

      <label for="name">Caption</label>
      <input id="name" type="text" placeholder="..."/>

      <label for="slider">Amount to Donate</label>
      <input id="slider" type="range" min="5" max="1000"/>
      <p className="amount">$5</p>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
