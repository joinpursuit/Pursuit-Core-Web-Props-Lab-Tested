import React from "react";
import "./RecentDonations.css"

const RecentDonations = (props) => {
  const {amount, caption, name} = props
  return (
      <div className="donations">
        <h4>Recent Donations</h4>
          <ul>
            <h4>{name} donated ${amount}</h4>
            <p>{caption}</p>
          </ul>
      </div>
  );
};

export default RecentDonations;
