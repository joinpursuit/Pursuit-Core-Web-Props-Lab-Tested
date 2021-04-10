import React from "react";

const RecentDonations = (props) => {
  const listOfDonations = props.donations.map((list) => {
    return (
      <div role="listitem" key={list.id}>
        <h6>
          {list.name} donated ${list.amount}
        </h6>
        <p>{list.caption}</p>
      </div>
    );
  });
  // debugger
  return (
    <div>
      <h6 role="heading">Recent Donations</h6>
      {listOfDonations}
      </div>
    // <div role="heading">
    //   <h6>{name} donated ${amount}</h6>
    //   <p>{caption}</p>
    // </div>
  );
};

export default RecentDonations;
