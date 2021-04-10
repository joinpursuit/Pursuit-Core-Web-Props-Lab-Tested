import React from "react";

const Progress = (props) => {
  const {total, goal} = props;
  let percentage = total / goal * 100;  
  return (
    <div>
      <h2>Raised ${total} of ${goal}</h2>
      <div className="progress">
        {percentage.toFixed(2)}%
      </div>
    </div>
  );
};


export default Progress;
