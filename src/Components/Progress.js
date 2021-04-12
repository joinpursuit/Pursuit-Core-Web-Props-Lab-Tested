import React from "react";


const Progress = (props) => {
  const { total, goal } = props
  return (
     <div className="progress">
<h2>Raised ${total} of ${goal}</h2>
<div className="progressbar">
        {/* <Progress completed={44.10} /> */}
      </div>
     </div>
  )
};

export default Progress;
