import React from "react";




const RecentDonations = props => {
  const donator = props.donations.map((props) => {
    return (
      <>
      <div >
      <li key={props.id}>
        {props.name} donated ${props.amount}
        <p>{props.caption}</p>
      </li>
      </div>
      </>
    )
  })

  return (
    <ul>
      <h3>Recent Donations</h3>
      <p>{donator}</p>
    </ul>
  )
}

export default RecentDonations;
