import React from "react";
import "./styles/DonationForm.css"

const DonationForm = () => {
 
  return (
<form className="form">
 <label for="name">Name</label>
 <input type="text" id="name" placeholder="John Doe"></input> 
 <label for="caption">Caption</label>
 <input type="text" id="caption" placeholder="..."></input>
<label for="amount">Amount to Donate</label>
<input type="range" id="amount" min="5" max="1000"/> 
      {/* //  oninput="output.value=amount.value"                                                      */}

<output id="output" for="amount">$5</output>

<button type="submit">Donate</button>
</form>
  );
};

export default DonationForm;
