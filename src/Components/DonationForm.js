import React from "react";

const DonationForm = () => {
  return (
    <div>
      <div>
        <form>
          Name
          <input type="text" placeholder="John Doe" />
          Caption
          <input type="text" placeholder="..." />
          <input type="range" name="range" min="5" max="1000" />
          <button>Donate</button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
