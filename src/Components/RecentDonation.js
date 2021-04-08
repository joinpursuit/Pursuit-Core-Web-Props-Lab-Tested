import React from "react";

const RecentDonation = (props) => {
    const {name, amount, caption} = props
  return (

    <li>{name} donated ${amount} 

    {caption}</li>

  )
}

export default RecentDonation;