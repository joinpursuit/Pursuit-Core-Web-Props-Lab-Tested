import React from "react";

const RecentDonations = props => {
  const donated = props.donations.map((props,i) => {
    return (
      <li key={i}>
        <p>{props.name} donated ${props.amount}</p>
        <p>{props.caption}</p>
      </li>
    )
  })

  return (
    <ul>
      <h5>Recent Donations</h5>
      <p>{donated}</p>
    </ul>
  )
}


// const RecentDonations = (props, i) => {
//   const {amount,caption,name} = props
//   console.log(props)

//   return (
//     <ul>
//       <li>id: {i}</li>
//       <li>{name} donated ${amount}</li>
//       <li>{caption}</li>
//     </ul>
//   )
// };

export default RecentDonations;
