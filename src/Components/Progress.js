import React from "react";

const Progress = props => {
  const { total, goal } = props
  const perc = (total/goal*100).toFixed(2)
  const style = { width: `${perc}%` }
  return (
    <>
      <h2 className='mb-4'>Raised ${total} of <span className='text-muted'>${goal}</span></h2>
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={style} aria-valuenow={perc}
          aria-valuemin="0" aria-valuemax="100">{perc}%</div>
      </div>
    </>
  )
};

export default Progress;
