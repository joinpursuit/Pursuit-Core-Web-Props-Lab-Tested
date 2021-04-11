import React from "react";

const Donation = (props) => {
  const { amount, caption, name } = props;
  return (
    <li className="media my-2">
      <div className="media-body">
        <h5 className="mt-0 mb-1">
          {name} donated ${amount}
        </h5>
        <p>{caption}</p>
      </div>
    </li>
  );
};

export default Donation;
