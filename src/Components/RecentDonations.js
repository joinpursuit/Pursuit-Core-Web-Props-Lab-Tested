import React from "react";
import Donation from "./Donation";

const RecentDonations = (props) => {
  const { donations } = props;
  return (
    <ul className="col-4 list-unstyled recent-donations">
      <h5 className="my-4">Recent Donations</h5>
      {donations.map((donation) => {
        return (
          <Donation
            name={donation.name}
            amount={donation.amount}
            caption={donation.caption}
            key={donation.id}
          />
        );
      })}
    </ul>
  );
};

export default RecentDonations;
