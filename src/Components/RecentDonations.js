import React from "react";
import Donation from "./Donation";





const RecentDonations  = (props) => {
  
  return (
    <ul>
      <h5>Recent Donations</h5>
      
      {props.donations.map((user) => (
        <Donation
          amount={user.amount}
          caption={user.caption}
          name={user.name}
          key={user.id}
        />
      ))}

    </ul>
  );
};

export default RecentDonations;


