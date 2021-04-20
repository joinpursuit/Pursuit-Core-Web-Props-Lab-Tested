import React from "react";
// import TopBar from "./TopBar"

const DonationForm = () => {

  return (
    
   <div>
     <form action="">
       name:
       <input type="text" placeholder="John Doe"/>
       caption :
       <input type="text" placeholder="..."/>
       Amount to Donate :
       <input type="range" id="moneySlider" min="5" max="1000"/>
       <button>Donate</button>
     </form>
   </div>
    
  );
};

export default DonationForm;
