import React from "react";

const OneDonation = (props) => {
  const { donations } = props;
  
  return (
    <li>
     <h4>{donations.name} donated ${donations.amount}</h4> 
      <p>{donations.caption}</p>
    </li>
  );
};

export default OneDonation;
