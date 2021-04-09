import React from "react";
import RecentDonation from "./RecentDonation"
import "./RecentDonations.css";

const RecentDonations = (props) => {
  const {donations} = props
  const recents = donations.map((recent) => {
    return (
      <RecentDonation
        name={recent.name}
        amount={recent.amount}
        caption={recent.caption}
        key={recent.id}
      />
    );
  });
  return (
    <section className="Recent">
      <h5>Recent Donations</h5>
      <ul>
        {recents}
      </ul>
    </section>
  );
};

export default RecentDonations;
