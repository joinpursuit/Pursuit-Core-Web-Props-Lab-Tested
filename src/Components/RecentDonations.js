import React from "react";

const RecentDonations = (props) => {
  const {amount, caption, id, name} = props;
  return (
    <div>
     <p> {name} donated ${amount} </p>
     <p> {caption} </p>
    </div>
  );
};

export default RecentDonations;
