import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress.js";
import DonationForm from "./Components/DonationForm.js";
import "./App.css";

const donationGoal = [
  // {
  //   goal:246,
  //   total:123
  // },
  {
    goal:441,
    total:1000
  }
];

const donations = [
  {
    index: 1,
    amount: "$251",
    caption: "do you luv me",
    name: "Jo",
  },
  {
    index: 2,
    amount: "$30",
    caption: "Here take a break from work",
    name: "John",
  },
  {
    index: 3,
    amount: "$20",
    caption: "lol",
    name: "Michelle",
  },
  {
    index: 4,
    amount: "$110",
    caption: "",
    name: "Emily",
  },
  {
    index: 5,
    amount: "$30",
    caption: "Go to miami",
    name: "Sam",
  },
];
// const userDonations = donations.map((donation) => {

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />

        <div className="container">
          <div className="row">
            {/* TODO: Donations */}
            <div className="recent-donations">
            <h5 className="my-4">Recent Donations</h5>
              <ul className="col-4 list-unstyled recent-donations">
                {donations.map((donation) => {
                  // debugger;
                  return (
                    <RecentDonations
                      name={donation.name}
                      amount={donation.amount}
                      caption={donation.caption}
                      key={donation.index}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-8">
            {/* TODO: Progress */}

            <Progress />

            <hr />
            {/* TODO: DonationForm */}
            <DonationForm />
          </div>
        </div>
      </>
    );
  }
}
