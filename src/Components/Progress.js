import React from "react";

const Progress = (total) => {

  let {sum, percentage} = total;  

  return(
  <div class='col-8'>
    
    <h2 class='mb-4'>Raised ${sum} of <span class='text-muted'>$1000</span></h2>
    
    <div class="progress">
      
      <div class="progress-bar bg-success" role="progressbar" style={{width:percentage}} aria-valuenow="20"
        aria-valuemin="0" aria-valuemax="100">{percentage}
      </div>
    
    </div>

  </div>
  );
};

export default Progress;
