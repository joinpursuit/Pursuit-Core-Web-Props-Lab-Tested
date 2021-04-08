import React from "react";
import RecentDonation from "./RecentDonation.js"


const RecentDonations = (props) => {
  const {donations} = props;
  const posts = donations.map((donos) => {
    return <RecentDonation amount={donos.amount} caption={donos.caption} name={donos.name} key={donos.id}/>
  
  })
  return (
    <div>
      <h5>Recent Donations</h5>
      <ul> {posts}</ul>
    </div>
  );
};

export default RecentDonations;
