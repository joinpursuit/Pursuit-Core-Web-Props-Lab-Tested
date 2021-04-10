import React from "react";
import Donation from "./Donation";

import "./RecentDonations.css";

const RecentDonations = (props) => {
  const { donations } = props;
  const funding = donations.map((donation) => {
    return (
      <Donation
        name={donation.name}
        amount={donation.amount}
        caption={donation.caption}
      />
    );
  });
  return (
    <>
      <ul className="col-4 list-unstyled recent-donations">
      <h5 className="my-4">Recent Donations</h5>
        {funding}
      </ul>
    </>
  );
};

export default RecentDonations;
