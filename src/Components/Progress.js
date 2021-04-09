import React from "react";

const Progress = () => {
  return (
    <section>
      <h3>Raised $441 of $1000</h3>
      <label for="ProgressBar">44.10%
        <progress id="ProgressBar" value="441" max="1000"></progress>
      </label>
    </section>
  );
};

export default Progress;
