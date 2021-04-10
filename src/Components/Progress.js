import React from "react";
import "./progress.css";

const Progress = (props) => {
  const { total, goal } = props;
  return (
    <div>
      <h2>
        Raised ${total} of ${goal}
      </h2>
      <label for="goal"></label>
      <div className="myProgress">
        <div id="goal" value="441" max="1000">
          44.10%
        </div>
      </div>
    </div>
  );
};

export default Progress;
