import React from "react";



const Progress = ({ total, goal }) => {
  

  return (
    <section>
      <h2>Raised ${total} of ${goal}</h2>
      <label htmlFor="ProgressBar">44.10%
        <progress id="ProgressBar" value="441" max="1000"></progress>
      </label>
    </section>
  );
};

export default Progress;
