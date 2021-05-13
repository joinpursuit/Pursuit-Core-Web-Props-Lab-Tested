import React from "react";
import RecentDonation from "./RecentDonation"

const RecentDonations = ({props}) => {
const { donation } = props;

const donationList = donations.map(props => {
  <RecentDonation name={donation.name} amount={donation.amount} caption={donation.caption} key={id} />
})
  return (
    <div>
      <ul>
        {donationList}
      </ul>
    </div>
  )
};

export default RecentDonations;
