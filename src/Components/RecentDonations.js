import React from "react";
import "./RecentDonations.css";

const RecentDonations = (props) => {
  const { donations } = props;

  const donationsList = donations.map((donation) => {
    return (
      <>
        <div className="recent-donations">
          <li key={donation.id}>
            <h5>
              {donation.name} donated ${donation.amount}
            </h5>
            <p>{donation.caption}</p>
          </li>
        </div>
      </>
    );
  });

  return (
    <div className="recent-donations">
      <ul>
        <h4>Recent Donations</h4>
        <br></br>
        {donationsList}
      </ul>
    </div>
  );
};

export default RecentDonations;
