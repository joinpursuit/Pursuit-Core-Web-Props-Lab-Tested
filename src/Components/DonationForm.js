import React from 'react'

const DonationForm = props => {
  let donations = []
  for (let el in props) {
    donations.push(props[el])
  }

  let donators = donations.map(donator => {
    return (
      <li className='media my-2'>
        <div className='media-body'>
          <h5 className='mt-0 mb-1'>
            {donator.name} donated ${donator.amount}
          </h5>
          {donator.caption}
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

export default DonationForm
