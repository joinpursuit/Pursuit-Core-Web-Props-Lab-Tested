import React from "react";

const DonationForm = () => {
  return (
    <div>
      <form>
        Name:
        <input type="text" placeholder="John Doe"/>
        Caption:
        <input type="text" placeholder="..."/>
        <input type="range" id="points" name="points" min="5" max="1000" />
        <button>Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
