import React from "react";

const Progress = (props) => {
  const { donations } = props;
  let newTotal = 0;
  let percentage = 0;
  donations.forEach((donation) => {
    newTotal += donation.amount;
    percentage = (newTotal/1000)*100;
  });

  return (
    <div className="col-8">
      {/* <!-- INFO --> */}
      <h2 className="mb-4">
        Raised ${newTotal} of <span className="text-muted">$1000</span>
      </h2>
      <div className="progress progress-striped active">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          styles="width: 44"
          style={{width: percentage + "%"}}
          aria-valuenow="88"
          aria-valuemin="0"
          aria-valuemax="100"
          
        >
          {percentage.toFixed(2)}%
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Progress;
