import React from "react";

const DonationForm = () => {
  
  return(
    <div>
      <input type="text" placeholder="John Doe"></input>
      <input type="text" placeholder="..."></input>
      <input type="range" min="5" max="1000"></input>
    </div>
  )
};

export default DonationForm;