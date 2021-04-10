import React from 'react'



const RecentDonation = (props) => {
  const {amount, caption, name} = props;

  return (
    <>
   
    <li>
      <h3>{name} donated ${amount}</h3>
      <p>{caption}</p>
 </li>
    </>
  );
};

export default RecentDonation;
