import React from "react";

const RecentDonations = (props) => {
  const { donations } = props;
  const ObjIterable = donations.map((access, i) => {
    return (
    <li key={i}>
      <p>{access.name} donated ${access.amount}</p>
      <p>{access.caption}</p>
    </li>
    )
  });

    return (
      <>
      <h3>Recent Donations</h3>
      { ObjIterable }
      </>
      );
  // return null;
};

export default RecentDonations;
