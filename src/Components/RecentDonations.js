import React from "react";


const RecentDonations = (props) => {
  const people = props.donation.map((donation, e) => {
    return (
      <>
        <h5 key={e}>{donation.name} donated  ${donation.amount}</h5>
        <p key={e}>{donation.caption}</p>
      </>
    )
  })
  return (
    <>
      <h1>Recent Donations</h1>
      <ul>{people}</ul>

    </>
  );
};

export default RecentDonations;
