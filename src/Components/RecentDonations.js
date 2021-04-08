import React from "react";

const RecentDonations = (props) => {
  const listDonations = props.donations.map(donation => {
    return (
      <div role='listitem'key={donation.id}>
        <p>
          {donation.name} donated ${donation.amount}
        </p>
        <p>{donation.caption}</p>
      </div>
    );
  })
  return (
    <div>
      <h6 role='heading'>
        Recent Donations
      </h6>
      {listDonations}
    </div>
  );
};

export default RecentDonations;
