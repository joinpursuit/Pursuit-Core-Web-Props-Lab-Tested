import React from "react";
import "./RecentDonations.css"


const RecentDonations = (props) => {
  const {amount, caption, name} = props
  return (
    <div className="RecentDonations">
       <h4>{name} donated ${amount}</h4>
       <p>{caption}</p>
        </div>
  )
};

export default RecentDonations;
