import React from "react";

const Progress = (props) => {
  const { total } = props;

  return (
    <div>
      <h2 className="mb-4">
        Raised ${total} of <span className="text-muted">$246</span>
      </h2>
      <div className="progress">
        <div id="percentage">44.10%</div>
      </div>
    </div>
  );
};

export default Progress;
