import React from "react";



const Progress = (props) => {
  const {sum} = props;
  return (
    <div>
      <h2> Raised ${sum} of $1000 </h2>
    </div>
  )
};

export default Progress;
