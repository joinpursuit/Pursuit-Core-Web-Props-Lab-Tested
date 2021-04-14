import React from "react";

const RecentDonations = props => {
  const donated = props.donations.map((props,i) => {
    return (
      <li key={i}>
        <p><strong>{props.name} donated ${props.amount}</strong></p>
        <p className="captions">{props.caption}</p>
      </li>
    )
  })

  return (
    <ul className="uList">
      <h5>Recent Donations</h5>
      <br></br>
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
