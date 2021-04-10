import React from "react";
// import Donations from "./Donations";
import "../Styles/RecentDonations.css";
import Donations from "./Donations";

const donations = [
  {
    amount: 251,
    caption: "do you luv me",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here take a break from work",
    id: 2,
    name: "John",
  },
  {
    amount: 20,
    caption: "lol",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 110,
    caption: "",
    id: 4,
    name: "Emily",
  },
  {
    amount: 30,
    caption: "Go to miami",
    id: 5,
    name: "Sam",
  },
];

class RecentDonations extends React.Component {
  render() {
    return (
      <ul>
        <h6>Recent Donations</h6>
        {donations.map(donation => {
          return (
            <Donations
              name={donation.name}
              amount={donation.amount}
              caption={donation.caption}
              key={donation.id}
            />)
        })}
      </ul>
    );
  }
}

export default RecentDonations;
