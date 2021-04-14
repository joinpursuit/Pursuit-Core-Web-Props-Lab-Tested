import React from "react";

import TopBar from "./Components/TopBar";

import "./App.css";

import RecentDonations from "./Components/RecentDonations.js";
import DonationForm from "./Components/DonationForm.js";
import Progress from "./Components/Progress.js";



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

const total = donations.reduce((acc, ele) => {
  return (acc += ele.amount);
}, 0);
const goal = 1000;


export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            {/* TODO: Donations */}
            <RecentDonations donations={donations} />
            <div className="col-8">
              {/* TODO: Progress */}
              <Progress goal={goal} total={total} />
              <hr />
              {/* TODO: DonationForm */}
              <DonationForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}
