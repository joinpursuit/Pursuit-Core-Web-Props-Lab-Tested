import React from "react";

const RecentDonations = (props) => {
  const { name, caption, amount, id} = props;
  return (
    <div className="DonationsContainer">
      <h6>{name} donated ${amount}</h6>
      <p>{caption}</p>
    </div>
  );
};

export default RecentDonations;
