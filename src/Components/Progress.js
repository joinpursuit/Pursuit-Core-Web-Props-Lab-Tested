import React from "react";

const Progress = (props) => {
  const {total, goal} = props
  let percent = ( (total / goal) * 100 ).toFixed(2)
  return (
    <>
    <h2>Raised ${total} of ${goal}</h2>
    <progress id="file" max={goal} value={total}>{percent}%</progress>
    <p>{percent}%</p>
    </>
  )
};

export default Progress;
