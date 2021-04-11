import React from "react";

const Progress = (props) => {
  const { total, goal } = props;
  return (
    <>
      <h2 className="mb-4">
        Raised ${total} of <span className="text-muted">${goal}</span>
      </h2>
    </>
  );
};

export default Progress;
