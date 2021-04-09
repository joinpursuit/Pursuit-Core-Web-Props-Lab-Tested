import React from "react";
import "../Styles/DonationForm.css"

const DonationForm = () => {
  return (
    <form>
      <label for="name"> Name </label>
        <input id="name" type="text" placeholder="John Doe"/>
      
      <label for="caption"> Caption </label>
        <input id="caption" type="text" placeholder="..."/>
      
      <label for="range" > Amount to Donate </label>
        <input id="range" type="range"min="5" max="1000"/>
        <p>$5</p>
        <button>Donate</button>
      
    </form>
  );
};

export default DonationForm;
