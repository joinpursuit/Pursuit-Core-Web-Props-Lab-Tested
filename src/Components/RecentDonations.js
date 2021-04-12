import React from "react";



const RecentDonations = (props) => {

  // for (let item of props) {
  //   return (
  //     <li>{item.name}</li>
  //   )
  // }

  return (
    <>
    <h2>Recent Donations</h2>
    <li>
      {props.name}
    </li>
    </>
  )  
  // [`${donation.name} donated $${donation.amount}`, donation.caption]
};



export default RecentDonations;

// Displays a list of each of the previous donations, including the amounts, names and captions. It should receive the list of donations as a donations prop.