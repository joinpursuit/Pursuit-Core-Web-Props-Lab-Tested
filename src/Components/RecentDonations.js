import React from 'react'

const RecentDonations = (props) => {

  const {donations} = props
  
  const listItem = donations.map((donation, i) => {
    return (
      <li key={i}>
        <p>{donation.name} donated ${donation.amount}</p>
        <p>{donation.caption}</p>
      </li>
      
    )
  })

  return (
    <div>
      <h1>Recent Donations</h1>
      {listItem}
    </div>
  )
}

export default RecentDonations
