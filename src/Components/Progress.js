import React from "react";
import"../Styles/Progress.css"

const Progress = (props) => {
  const {total, goal} = props;
  let percentage = total / goal * 100
  return (
    <>
    <div>
      <h2>Raised ${total} of ${goal}</h2>
    </div>
    <div className="progress-container">
      <span className="progress-bar" width={total} height="25px"></span>
      {/* <progress id="file" value={percentage} max="100"></progress> */}
    </div>
    </>
  );
};


export default Progress;
