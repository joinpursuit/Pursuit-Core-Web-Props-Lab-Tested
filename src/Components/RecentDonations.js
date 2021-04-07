import React from "react";
import "./RecentDonations.css";

const RecentDonations = (props) => {
  const { amount, name, caption } = props;
  return (
    <>
      <ul className="col-4 list-unstyled recent-donations">
       <h5 className='my-4'>Recent Donations</h5>
       <li className="media my-2">
      <p>{name} donated ${amount}</p>
      </li>
      <p>{caption}</p>
      </ul>
    </>
  );
};

export default RecentDonations;
