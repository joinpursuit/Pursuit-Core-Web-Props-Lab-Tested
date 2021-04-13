import React from "react";

const Progress = (props) => {

  let {total, percentage, goal} = props;  

  return(
  <div className='col-8'>
    
    <h2 className='mb-4'>Raised ${total} of <span className='text-muted'>${goal}</span></h2>
    
    <div className="progress">
      
      <div className="progress-bar bg-success" role="progressbar" style={{width:percentage}} aria-valuenow="20"
        aria-valuemin="0" aria-valuemax="100">{percentage}
      </div>
    
    </div>

  </div>
  );
};

export default Progress;
