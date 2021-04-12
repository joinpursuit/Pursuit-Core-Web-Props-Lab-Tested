import React from "react";
// import TopBar from "./TopBar"

const DonationForm = () => {

  return (
    <>
    <div>
      <label>Name</label>
      <input 
      type="text"
      placeholder="John Doe"

      ></input>
    </div>
    <div>
    <label>Caption</label>
    <input
    type= "text"
    placeholder="..."
    ></input>
    </div>
    <div>
      <label>Amount to Donate</label>
      <input type="range" min="5" max="1000"></input>
    </div>
    <button type="button">Donate</button>
    </>
  )
   
  
};

export default DonationForm;
