import React from "react";
import RecentDonation from "./RecentDonation"

 const RecentDonations = (props) => {
 const {donations} = props;

  return (
       <div id="donations">
       <h4>Recent Donations</h4>
        <ul className="">
        {donations.map((donation) => {
          return <RecentDonation name={donation.name} amount={donation.amount} caption={donation.caption} />
        })}
        </ul>
      </div>
    
  )
};

export default RecentDonations;
