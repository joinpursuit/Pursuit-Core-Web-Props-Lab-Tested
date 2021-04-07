import React from "react";

const RecentDonations = (props) => {
  let {amount, caption, name} = props;

  return (<ul>
    <h5>Recent Donations</h5>
    <h5>{name} gave {amount}</h5>
    <p>{caption}</p>
  
  </ul>)
};

export default RecentDonations;
