import React from 'react';

const RecentDonations = ({donations}) =>{
  console.log(donations)
  const donationList = donations.map(donation=>{
    return (
      <li key={donation.id}>
        <h3>{donation.name} donated ${donation.amount}</h3>
        <p>{donation.caption}</p>
      </li>
    )
  })
  return (
    <aside>
      <h3>Recent Donations</h3>
      <ul>
        {donationList}
      </ul>
    </aside>
  )
}


export default RecentDonations;
