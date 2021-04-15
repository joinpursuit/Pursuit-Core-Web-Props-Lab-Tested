import React from "react";

const DonationForm = () => {
  return( 
    <>
  <div className="form-group">
  <label>Name</label>
  <input type="text" className="form-control" id="nameInput" placeholder="John Doe"></input>
</div>
<div className="form-group">
  <label>Caption</label>
  <input type="text" className="form-control" id="captionInput" placeholder="..."></input>
</div>
<div className="form-group">
  <label>Amount to Donate</label>
  <input type="range" className="custom-range" id="amountInput" min="5" max="1000"></input>
  <blockquote className="blockquote text-right">
    <p className="h3 mb-0"></p>
    <button type="button" className="btn btn-lg btn-success my-4">Donate</button>
  </blockquote>
</div>
</>
  )
};


export default DonationForm;