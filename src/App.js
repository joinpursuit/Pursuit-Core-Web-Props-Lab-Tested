import React from "react";

import TopBar from "./Components/TopBar";

import "./App.css";
import RecentDonations from "./Components/RecentDonations";

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

export default class App extends React.Component {
  render() {
    const donationsRecent = donations.map((donation) => {
      return (
        <RecentDonations
          name={donation.name}
          amount={donation.amount}
          caption={donation.caption}
          key={donation.id}
        />
      );
    });
    return (
      <>
        <TopBar />
        <div className="container">
            <h3>Recent Donations</h3>
            {donationsRecent}
            </div>
          <div className="row">
            <div className="col-8">
              {/* TODO: Progress */}
              <hr />
              {/* TODO: DonationForm */}
          </div>
        </div>
      </>
    );
  }
}
