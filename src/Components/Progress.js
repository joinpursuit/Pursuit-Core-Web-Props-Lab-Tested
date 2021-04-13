import React from "react";
import "./Progress.css"

const Progress = (props) => {
  const { total, goal } = props;
  const math = (total / goal) * 100;
  const percentage = math.toFixed(2)
  return (
    <section className="ProgressSec">
      <h2>
        Raised ${total} of <span>${goal}</span>
      </h2>
      <div>
        <div className="progress">
          <p>{percentage}%</p>
        </div>
      </div>
    </section>
  );
};

export default Progress;
