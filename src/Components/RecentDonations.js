import React from 'react'

const RecentDonations = props => {
  let donators = props.donations.map((donation, i) => {
    return (
      <li className='media my-2' key={i}>
        <div className='media-body'>
          <h5 className='mt-0 mb-1'>
            {donation.name} donated ${donation.amount}
          </h5>
          {donation.caption}
        </div>
      </li>
    )
  })

  return (
    <ul className='col-4 list-unstyled recent-donations'>
      <h5 className='my-4'>Recent Donations</h5>
      {donators}
    </ul>
  )
}

export default RecentDonations
