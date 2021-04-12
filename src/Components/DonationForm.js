import React from "react";

const DonationForm = () => {
  return (

    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" id="nameInput" placeholder="John Doe" />
      </div>
    
      <div class="form-group">
        <label>Caption</label>
        <input type="text" class="form-control" id="captionInput" placeholder="..." />
      </div>
    
      <div class="form-group">
        <label>Amount to Donate</label>
        <input type="range" class="custom-range" id="amountInput" min="5" max="1000" />
        <blockquote class="blockquote text-right">
          <p class="h3 mb-0">$ 5</p>
          <button type="button" class="btn btn-lg btn-success my-4">Donate</button>
        </blockquote>
      </div>
  
    </form>

  );
};

export default DonationForm;
