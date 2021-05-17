import React from "react";
import "./Progress.css";

const Progress = (props) => {
  const { total, goal } = props;

  return (
    <>
      <h2>
        Raised ${total} of ${goal}
      </h2>

      <div className="myProgress">
        <div className="progress">44.10%</div>
      </div>
    </>
  );
};

export default Progress;
