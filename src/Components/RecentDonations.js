import React from "react";

const RecentDonations = (props) => {
  const {amount, caption, name } = props
  return (
    <div className='donations'>
      <p>Recent Donations</p>
      <p>{name} ${amount}</p>
      <p>{caption}</p>
    </div>
  )
};

export default RecentDonations;
