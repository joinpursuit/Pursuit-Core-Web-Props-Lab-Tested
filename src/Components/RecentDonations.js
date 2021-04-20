import React from "react";

const RecentDonations = (props) => {
  const {donations} = props
  const groupDonations = donations.map((dono, i) => {
    return (
      <li key={i}>
        <h3>{dono.name} donated ${dono.amount}</h3>
        <p>{dono.caption}</p>
      </li>
    )})
  return (
    <div>
      <h1>Recent Donations</h1>
      {groupDonations}
    </div>
  )
}

export default RecentDonations;
