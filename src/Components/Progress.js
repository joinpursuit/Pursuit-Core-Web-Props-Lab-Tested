import React from "react";

const Progress = (props) => {
  
  const { total, goal } = props
  let percent = (total/goal *100) + "0%"
  const styles = {
    width: percent
  };
  return (
    
    <div>
      <h2>Raised ${total} of ${goal}</h2>
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style={styles} aria-valuenow="25"
          aria-valuemin="0" aria-valuemax="100">{percent}</div>
      </div>

    </div>
  );
};

export default Progress;
