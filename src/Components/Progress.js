import React from "react";
// import RecentDonations from './RecentDonations'


const Progress = (props) => {

  return(
    <div>
      <h2>Raised ${props.total} of ${props.goal}</h2>
    </div>
  )

};

export default Progress;


// It should receive the total money amount as a total prop and the goal as a goal prop. Use an h2 for its heading:
  // Displays how much total money has been raised out of the goal.

// (Bonus) Display a progress bar that is filled up to the appropriate percentage. 
// It should also display the exact percentage in text (44.10%).