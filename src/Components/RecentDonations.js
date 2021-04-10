import React from "react";
import RecentDonation from "./RecentDonation"
import "./styles/RecentDonations.css"

const RecentDonations = ({donations}) => {
  // const {amount, caption, name} = props;

  return (
    <>
    <h3>Recent Donations</h3>
   {donations.map((donation) => {
      return (
        <RecentDonation
          name={donation.name}
          amount={donation.amount}
          caption={donation.caption}
          key={donation.id}
        />
      );
    })}
    </>
  );
};

export default RecentDonations;
