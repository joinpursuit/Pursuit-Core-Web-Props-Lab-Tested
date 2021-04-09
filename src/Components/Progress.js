import React from "react";

const Progress = () => {
  return (
    <section>
      <h1>Raised $441 of $1000</h1>
      <section
        className="progress"
        // role="progressbar"
        // aria-valuenow="441"
        // aria-valuemin="0"
        // aria-valuemax="1000"
        // style="width: 44.10%"
      >
        44.10%
      </section>
      {/* <label for="ProgressBar">44.10%
        <progress id="ProgressBar" value="441" max="1000"></progress>
      </label> */}
    </section>
  );
};

export default Progress;
