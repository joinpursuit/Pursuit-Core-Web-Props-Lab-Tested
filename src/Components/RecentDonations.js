import React from "react";

const RecentDonations = (props) => {
  const { name,amount,caption } = props
  return (
    <div className="recentDonations">
      <h5>Recent Donations</h5>
    <ul>
      <li>

      <h2>{name} donated ${amount}</h2>
      <p>{caption}</p>


      </li>
    </ul>
    </div>
  )
};

export default RecentDonations;
