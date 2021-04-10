import React from "react";

const Progress = (props) => {
  const { total, goal } = props;
  return (
    <div>
      <h2>
        Raised ${total} of ${goal}
      </h2>
      <label for="goal"></label>
      <progress id="goal" value="441" max="1000">
        44.10%
      </progress>
    </div>
  );
};

export default Progress;
