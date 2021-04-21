import React from "react";

const DonationForm = () => {
  return (
    <div>
      <form>
        name
        <br/>
        <input type="text" placeholder="John Doe" />
        <br/>
        <br/>
        caption
        <br/>
        <input type="text" placeholder="..." />
        <br/>
        <br/>
        Amount to Donate
        <br/>
        <input type="range" min="5" max="1000"/>

      </form>
      <button>Donate</button>
    </div>
  )
};

export default DonationForm;
