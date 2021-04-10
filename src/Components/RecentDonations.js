import React from "react";
import "./recentDonations.css";

const RecentDonations = (props) => {
  const { donations } = props;
  // debugger
  return (
    <div className="Classes">
      <h4 className="recentDonationsHeading">Recent Donations</h4>
      {donations.map((donation) => {
        debugger;
        return (
          <ul key={donation.id}>
            <li className="nameAndAmount">
              <strong>{donation.name} donated ${donation.amount}</strong>
              <br></br> {donation.caption}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
debugger;

// const RecentDonations = () => {
//   return (
//     <div>
//       <h3>Recent Donations</h3>
//       <h4>{persons.name} donated ${persons.donation}</h4>
//     </div>
//   )
// }

export default RecentDonations;
