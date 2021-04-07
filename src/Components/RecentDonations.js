import React from "react";

const RecentDonations = (props) => {
  let { amount, caption, name } = props;

  return (<ul>
    <li>
      <h5>Recent Donations</h5>
      <h5>{name} donated {amount}</h5>
      <p>{caption}</p>
    </li>
  </ul>)
};

export default RecentDonations;
