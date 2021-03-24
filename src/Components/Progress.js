import React from "react";

export default function Progress({ goal, total }) {
  const percent = total * 100 / goal;

  return (
    <>
      <h2 className="mb-4">
        Raised ${total} of <span className="text-muted">${goal}</span>
      </h2>
      <div className="progress">
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={percent}
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${percent}%` }}
        >
          {percent.toPrecision(4)}%
        </div>
      </div>
    </>
  );
}