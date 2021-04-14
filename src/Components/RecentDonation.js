import React from "react";
const RecentDonation = ({ name, caption, amount }) => {
  return (
    <li>
      {name} donated ${amount}
      {caption}
    </li>
  );
};
export default RecentDonation;
// const { name, caption, amount } = props;
