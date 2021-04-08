import React from "react";

const Progress = (props) => {
  const {total,goal} = props
  return (
    <div>
  <h2>Raised ${total} of <span className="text-muted">${goal}</span></h2>
  </div>
  )
};

export default Progress;
