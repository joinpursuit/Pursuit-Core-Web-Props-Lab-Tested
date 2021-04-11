import React from "react";

const RecentDonations = ({ name, amount, caption}) => {
  return (
    <>
      <h1>Recent Donations</h1>
      <p>{name} donated ${amount}</p>
      <p>{caption}</p>
    </>
  )
};

export default RecentDonations;
