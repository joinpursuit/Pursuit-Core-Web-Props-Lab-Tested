import React from "react";

const DonationForm = () => {
  return (
    <section>
      <form>
        <div>
          <label>Name:</label>
          <br></br>
          <input type="text" placeholder="Enter name here ..."></input>
        </div>

        <div>
          <br></br>
          <label>Caption:</label>
          <br></br>
          <input type="text" placeholder="..."></input>
        </div>
        
        <div>
          <br></br>
          <label>Amount to donate:</label>
          <br></br>
          <input type="range" min="0" max="500" ></input>
        </div>
        
        <div>
          <p>$ 5</p>
          <button>Donate Now!</button>
        </div>

      </form>
    </section>
  )
};

export default DonationForm;
