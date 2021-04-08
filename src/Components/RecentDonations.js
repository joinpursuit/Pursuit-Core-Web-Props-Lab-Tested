import React from "react";


export const DonationListItem = ({name, amount, caption}) => {
  return (
    <li>
      <p>{name} donated ${amount}</p> 
      <p>{caption}</p>
    </li>
  )
}

const RecentDonations = (props) => {
  const {donations} = props

  const donationS = donations.map((donation, i) => {
    return (
      <DonationListItem
      key = {i}
      name = {donation.name}
      amount = {donation.amount}
      caption = {donation.caption}
      />
    )
  })

  return (
    <div> 
    <h2>Recent Donations</h2>
   <ul>
     {donationS}
   </ul>
    </div>
  );

  
};

export default RecentDonations;
