import React from "react";
import "../Components/Progress.css"

const Progress = (props) => {
  const{donations} = props
  const sum = 441;
  // donations.forEach(donation => {
  //   sum += donation.amount
  // });
  const goal = "$1000"
  return (
    <div className="progress-bar">
      
      <header>Raised ${sum} of {goal}</header>
    </div>
  );
};

export default Progress;
