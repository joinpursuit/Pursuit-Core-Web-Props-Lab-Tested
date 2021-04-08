import React from "react";


const Progress = (props) => {
  const {total, goal} = props
  // let count = 0;
  // const total  = donations.map(donation => {
  //   count += donation.amount
  //   return ( total)
  // })
  return (
    <div className="progress-section">
      <h2>Raised ${total} of ${goal}</h2>
      <div className="progress-bar">
      <div className="progress">44.10%</div>
      </div>
    </div>
  );
};

export default Progress;
