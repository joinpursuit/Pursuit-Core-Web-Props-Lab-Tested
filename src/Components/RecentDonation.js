import React from "react";

const RecentDonation = (props) => {
    const {name, amount, caption} = props
  return (
      
    <li><strong>{name}</strong> donated ${amount} 

    {caption}</li>
    
  )
}

export default RecentDonation;