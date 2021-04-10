import React from "react";

const Progress = (props) => {
  const goal = 1000
  const {amount, total} = props
  return (
    <div>
      <h1>Raised {total} of {goal}</h1>

    <progress id="moneyRaised" max="1000" min="0" value="44.10">44.10%</progress>
    </div>
  )

};

export default Progress;
