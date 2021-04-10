import React from "react";

const RecentDonations = (props) => {
  const { name, caption, amount } = props;
  return (
    <div className="DonationsContainer">
      <h4>Recent Donations</h4>
      <p>
        {name} donated $ {amount}
      </p>
      <p> {caption} </p>
    </div>
  );
};

export default RecentDonations;
