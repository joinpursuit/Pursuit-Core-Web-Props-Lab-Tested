import React from "react";

const RecentDonations = props => {
  const Lists = props.donations.map(dona => {
    return (
      <li className="media my-2" key={dona.id}>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{dona.name} donated ${dona.amount}</h5>
          {dona.caption}
        </div>
      </li>
    )
  })
  return (
    <ul className="col-4 list-unstyled recent-donations">
      <h5 className='my-4'>Recent Donations</h5>
      {Lists}
    </ul>
  )
};

export default RecentDonations;
