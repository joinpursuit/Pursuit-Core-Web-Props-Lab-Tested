import React from "react";

const Donation = (props) => {
  let { amount, caption, name } = props;

  return (
    <li> 
      <div>
        <h5>{name} donated {amount}</h5>
        {caption}
      </div>
    </li>
  )
};

export default Donation;
