import React from "react";
import "../Styles/Donations.css";

const Donations = (props) => {
  const {name, amount, caption} = props;
    return (
      <>
        <li>
          <h6>{name} donated ${amount}</h6>
          <p>{caption}</p>
        </li>
      </>
    );
};

export default Donations;
