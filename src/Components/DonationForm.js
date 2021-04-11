import React from "react";
import"../Styles/DonationForm.css"

const DonationForm = () => {
  return (
    <div>
      <form>
        Name:
        <input type="text" placeholder="John Doe"/>
        Caption:
        <input type="text" placeholder="..."/>
        <label>Amount to Donate</label>
        <input type="range" id="points" name="points" min="5" max="1000" />
        <p>5</p>
        <button>Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
