import React from "react";
import RecentDonation from "./RecentDonation"
import "./styles/RecentDonations.css";

const RecentDonations = (props) => {
  const { donations } = props;

  const showDonations = donations.map(donation=>{
    return <RecentDonation name={donation.name}  amount={donation.amount}  caption={donation.caption} key={donation.id}/>
  })
  return (
    <div className="recentDonations">
      
        <h5>Recent Donations</h5>
        <ul>
         {showDonations}
        </ul>
      
    </div>
  );
};

export default RecentDonations;
