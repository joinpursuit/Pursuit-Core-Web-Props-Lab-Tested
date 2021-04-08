import React from "react";
import "./styles/RecentDonations.css"

const RecentDonations = (props) => {
  const {amount, caption, name} = props;

  return (
    <li>
      <h3>{name} donated ${amount}</h3>
      <p>{caption}</p>

    </li>
  );
};

export default RecentDonations;
