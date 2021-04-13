import React from "react";




const RecentDonations = (props) => {

  const donationItem = props.donations.map((item) => {
    return (
      <li>{item.name} donated ${item.amount}<br/>{item.caption}</li>
    )
  })

  return (
    <div>
      <h2>Recent Donations</h2>
      <ul>
        {donationItem}
      </ul>
    </div>
  )

};


// Displays a list of each of the previous donations, including the amounts, names and captions. It should receive the list of donations as a donations prop.


export default RecentDonations;