import React from "react";

const DonationForm = () => {
  return (
    <section>
      <form>
        <div>
          <label>Name:</label>
          <br></br>
          <input type="text" placeholder="John Doe" className="formInput"></input>
        </div>

        <div>
          <br></br>
          <label>Caption:</label>
          <br></br>
          <input type="text" placeholder="..." className="formInput"></input>
        </div>
        
        <div>
          <br></br>
          <label>Amount to donate:</label>
          <br></br>
          <input type="range" min="5" max="1000" className="formInput"></input>
        </div>
        
        <div>
          <p>$ 5</p>
          <button className="button">Donate Now!</button>
        </div>

      </form>
    </section>
  )
};

export default DonationForm;
