import React from "react";


const Progress = (props) => {
  const {total, goal} = props
  return (
    <>
    <div>
    <h2>Raised ${total} of ${goal}</h2>
    </div>
    
    <div className="progress">
      <p></p>
      </div>
    </>
  )
};

export default Progress;
