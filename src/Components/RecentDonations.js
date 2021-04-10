import React from "react";

const RecentDonations = (props) => {
  const donations = props.donations;
  const donationsInfo = donations.map(donation =>{
    <li key={donation.id}>
      {donation.name} {donation.amount} {donation.caption}
    </li>
    return ( 
      <ul>
        {donationsInfo}
      </ul>
    )
  })
  };
  debugger

// const RecentDonations = () => {
//   return (
//     <div>
//       <h3>Recent Donations</h3>
//       <h4>{persons.name} donated ${persons.donation}</h4>
//     </div>
//   )
// }

export default RecentDonations;
