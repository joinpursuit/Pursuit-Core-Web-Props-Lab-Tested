import React from "react";
import "../Styles/Donations.css";

class Donations extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    const { name, amount, caption} = this.props;
    return (
      <>
        <li>
          <h6> {name} donated ${amount}</h6>
          <p>{caption}</p>
        </li>
      </>
    );
  }
};

export default Donations;
