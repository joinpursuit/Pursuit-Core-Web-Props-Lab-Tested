import React from "react";

const Progress = (props) => {
  return (
    <div>
      <h2>
        Raised ${props.total} of ${props.goal}
      </h2>
    </div>
  );
};

export default Progress;
