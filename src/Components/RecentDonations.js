import React from "react";
import Donation from "./Donation"
const RecentDonations = ({donations}) => {
  
  const donationList = donations.map(({amount,caption,name,id}) => {
    
    return <Donation amount={amount} caption={caption} name={name} key={id} />
  })
  return (
    <>
    <h5 className="recentDonationsTittle">Recent Donations</h5>
    <ul>{donationList}</ul>
    </>
  );
};

export default RecentDonations;