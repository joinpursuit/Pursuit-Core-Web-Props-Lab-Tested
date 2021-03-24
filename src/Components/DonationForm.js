import React from "react";

export default class DonationForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" id="nameInput" placeholder="John Doe" type="text" />
        </div>
        <div className="form-group">
          <label>Caption</label>
          <input className="form-control" id="captionInput" placeholder="..." type="text" />
        </div>
        <div className="form-group">
          <label>Amount to Donate</label>
          <input className="custom-range" id="amountInput" min="5" max="1000" type="range" />
          <blockquote className="blockquote text-right">
            <p className="h3 mb-0">$5</p>
            <button type="button" className="btn btn-lg btn-success my-4">
              Donate
            </button>
          </blockquote>
        </div>
      </form>
    );
  }
}