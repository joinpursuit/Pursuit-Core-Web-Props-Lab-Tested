import React from "react";

class DonationForm extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control" id="nameInput" placeholder="John Doe" type="text"/>
        </div>
        <div className="form-group">
          <label>Caption</label>
          <input className="form-control" id="captionInput" placeholder="..." type="text"/>
        </div>
        <div className="form-group">
          <label>Amount to Donate</label>
          <input className="custom-range" id="amountInput" min="5"max="1000"type="range"/>
            <p>$5</p>
            <button type="button" className="btn btn-lg btn-success my-4">
              Donate
            </button>
        </div>
      </form>
    );
  }
}

export default DonationForm;
