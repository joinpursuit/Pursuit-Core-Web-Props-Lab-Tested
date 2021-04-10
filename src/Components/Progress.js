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
    <section className="progress bar">
      <h2>Raised ${sum} of {goal}</h2>
    </section>
  );
};

export default Progress;
