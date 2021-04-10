import React from "react";

const Progress = (props) => {
  // const {goal, total} = props;
  return (
    // <!-- RIGHT SIDE / INFO & FORM -->
    <div className="col-8">
      {/* <!-- INFO --> */}
      <h2 className="mb-4">
        Raised $123 of <span className="text-muted">$246</span>
      </h2>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          styles="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Progress;
