import React from "react";

const RecentDonations = (props) => {
  const { donations } = props;
  const listDonations = donations.map((donation, i) => {
    return (
      <>
        <li key={i}>
          <h3>
            {donation.name} donated ${donation.amount}
          </h3>
          <p>{donation.caption}</p>
        </li>
      </>
    );
  });

  return (
    <div>
      <h3>Recent Donations</h3>
      {listDonations}
    </div>
  );
};

export default RecentDonations;
