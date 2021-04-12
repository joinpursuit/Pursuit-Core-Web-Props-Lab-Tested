import React from "react";



const Progress = (props) => {

  // const amount = props.amount
  const total = props
  return (
    <h2>Raised ${total} OF</h2>
  )

};

export default Progress;


// It should receive the total money amount as a total prop and the goal as a goal prop. Use an h2 for its heading:

  // Displays how much total money has been raised out of the goal.
  // (Bonus) Display a progress bar that is filled up to the appropriate percentage. It should also display the exact percentage in text (44.10%).