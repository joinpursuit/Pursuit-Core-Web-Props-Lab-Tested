import React from "react";

const Progress = (props) => {
  const {total, goal} = props;
  let  percentage= (total / goal) * 100 
 
  return (
    <>
    <div>
      <h2>Raised ${total} of ${goal}</h2>
    </div>
    <div className="progress-container">
      {/* <progress id="file" value={percentage} max="100">15%</progress> */}
      <div id="myProgress">
        <div id="myBar">{percentage}%</div>
      </div>
    </div>
    </>
  );
};


export default Progress;
