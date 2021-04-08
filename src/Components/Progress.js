import React from "react";

const Progress = (props) => {
  const {sumAmount, goal} = props
  return (
    <div>
      <h2>Raised ${sumAmount} of <span className='text-muted'>${goal}</span> </h2>
    </div>
  );
};

export default Progress;
