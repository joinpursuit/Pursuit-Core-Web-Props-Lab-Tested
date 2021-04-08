import React from "react";
import RecentDonation from "./RecentDonation";

const RecentDonations = (props) => {
  const {donations} = props
  const money = donations.map(donation => {
    return (<RecentDonation name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>)
  })
  return (
    <div className="listitem">
      <h2>Recent Donations</h2>
      <ul>
        {money}
      </ul>
    </div>
  )
};

export default RecentDonations;
