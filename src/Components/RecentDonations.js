import React from "react";

const RecentDonations = (props) => {
  // return null;

  const {amount, caption, name, id} = props;
  return (
        <li className="media my-2" key={id}>
          <div className="media-body">
            <h5 className="mt-0 mb-1">{name} donated ${amount}</h5>
            <p>{caption}</p>
          </div>
        </li>
  )
};

export default RecentDonations;
