import React from "react";


const Progress = (props) => {
  const {total,goal} = {...props}
  return (
    <section>
      <div>
        <h2>Raised ${total} of <span>${goal}</span></h2>
      </div>

      <div>
        <input type="range"></input>
      </div>
    </section>
  )
};

export default Progress;
