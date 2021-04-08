import React from "react";

const Progress = (props) => {
  const {total, goal} = props
  return (
    <h2>Raised ${total} of ${goal}</h2>
  )
};

export default Progress;
