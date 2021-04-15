import React from 'react'

const RecentDonations = (props) => {
  
  const listItem = props.donations.map((donation, i) => {
    return (
      <li key={i}>
        <p>{donation.name} donated ${donation.amount}</p>
        <p>{donation.caption}</p>
      </li>
      
    )
  })

  return (
    <ul>
      <h1>Recent Donations</h1>
      {listItem}
    </ul>
  )
}

export default RecentDonations
