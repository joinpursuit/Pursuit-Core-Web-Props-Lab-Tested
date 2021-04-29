import React from 'react';

const Progress = ({total, goal}) => {
  const percentage = ((total / goal) * 100).toFixed(2)
  return(
    <main>
      <h2>Raised ${total} of ${goal}</h2>
      <progress className='progress' id="file" max={goal} value={total}>{percentage}%</progress>
      <p>{percentage}%</p>
    </main>
  );
};

export default Progress;
