import React from "react";
import RecentDonation from "./RecentDonation"



const RecentDonations = (props) => {
  const { donations } = props;

  const showDonations = donations.map(donation=>{
    return <RecentDonation name={donation.name}  amount={donation.amount}  caption={donation.caption} key={donation.id}/>
  })
  return (
    <div className="DonationsDiv">
      
        <h5>Recent Donations</h5>
        <ul>
         {showDonations}
        </ul>
      
    </div>
  );
};

export default RecentDonations;
