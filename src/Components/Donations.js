import React from "react";
import "../Styles/Donations.css";

class Donations extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <>
        <li>
          <h6> {props} donated $251</h6>
          <p>do you luv me</p>
        </li>
        <li>
          <h6>Jo donated $251</h6>
          <p>do you luv me</p>
        </li>
        <li>
          <h6>Jo donated $251</h6>
          <p>do you luv me</p>
        </li>
      </>
    );
  }
};

export default Donations;
