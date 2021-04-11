import React from "react";

const Progress = (props) => {
  // return null;
  const { total, goal } = props;

  // let total = 0
  // donations.forEach(donation => {
  //   total += donation.amount
  // })

  return (
    <>
      <h2 className="mb-4">
        Raised ${total} of <span className="text-muted">${goal}</span>
      </h2>
    </>
  );
};

export default Progress;
